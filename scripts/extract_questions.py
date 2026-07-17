#!/usr/bin/env python3
"""
Script to extract questions from PDF and convert to markdown format.
Requires: pip install PyPDF2 or pdfplumber
"""

import sys
import re
import os

try:
    import pdfplumber
    USE_PDFPLUMBER = True
except ImportError:
    try:
        import PyPDF2
        USE_PDFPLUMBER = False
    except ImportError:
        print("Error: Please install pdfplumber or PyPDF2")
        print("  pip install pdfplumber")
        print("  or")
        print("  pip install PyPDF2")
        sys.exit(1)


def extract_text_pdfplumber(pdf_path):
    """Extract text using pdfplumber (better quality)"""
    text = ""
    with pdfplumber.open(pdf_path) as pdf:
        for page in pdf.pages:
            text += page.extract_text() + "\n"
    return text


def extract_text_pypdf2(pdf_path):
    """Extract text using PyPDF2 (fallback)"""
    text = ""
    with open(pdf_path, 'rb') as file:
        pdf_reader = PyPDF2.PdfReader(file)
        for page in pdf_reader.pages:
            text += page.extract_text() + "\n"
    return text


def extract_text(pdf_path):
    """Extract text from PDF"""
    if USE_PDFPLUMBER:
        return extract_text_pdfplumber(pdf_path)
    else:
        return extract_text_pypdf2(pdf_path)


def parse_questions(text):
    """
    Parse questions from extracted text.
    Handles format: Question: N, Options A-D, Answer: X, Explanation
    """
    questions = []
    skipped_questions = []
    
    # Split text by question markers
    # Pattern: "Question: 1" or "Question:1" (with optional space)
    question_sections = re.split(r'Question:\s*(\d+)', text, flags=re.IGNORECASE)
    
    # Skip the first element (text before first question)
    for i in range(1, len(question_sections), 2):
        if i + 1 >= len(question_sections):
            break
            
        question_num = question_sections[i]
        question_content = question_sections[i + 1]
        
        # Clean up question content - remove page numbers and URLs
        question_content = re.sub(r'www\.\w+\.\w+[^\n]*', '', question_content)
        question_content = re.sub(r'\s+\d+/\d+', '', question_content)
        question_content = re.sub(r'Exam\s+Dumps\s*\d+/\d+', '', question_content, flags=re.IGNORECASE)
        
        # Clean question content first - remove page markers before processing
        question_content = re.sub(r'www\.\w+\.\w+[^\n]*\n', '', question_content)
        question_content = re.sub(r'Exam\s+Dumps\s*\d+/\d+\s*\n', '', question_content, flags=re.IGNORECASE)
        
        # Extract question text (everything before the first option)
        # Options start with A., B., C., D. (can be on same line or next line)
        option_match = re.search(r'\b([A-D])\.\s*\n?', question_content)
        if not option_match:
            # Try alternative pattern where option might be on same line
            option_match = re.search(r'\b([A-D])\.\s+', question_content)
        if not option_match:
            skipped_questions.append((question_num, "No options found"))
            continue
            
        question_text = question_content[:option_match.start()].strip()
        question_text = re.sub(r'\s+', ' ', question_text)
        # Remove any remaining artifacts
        question_text = re.sub(r'\s+www\.\w+\.\w+.*$', '', question_text)
        question_text = re.sub(r'\s+\d+/\d+.*$', '', question_text)
        question_text = re.sub(r'\s+Exam\s+Dumps.*$', '', question_text, flags=re.IGNORECASE)
        question_text = question_text.strip()
        
        # Check for multiple answers indicator
        multiple_answers = bool(re.search(r'\(Choose\s+two\)|\(Choose\s+multiple\)', question_text, re.IGNORECASE))
        
        # Extract options (A., B., C., D.)
        # Look for options that appear before "Answer:"
        answer_pos = question_content.find('Answer:')
        if answer_pos == -1:
            answer_pos = len(question_content)
        
        options_section = question_content[:answer_pos]
        options = []
        
        # Try multiple patterns to extract options
        # Pattern 1: Options on separate lines (most common)
        # Match A. followed by text on the same line, until next option or Answer
        option_pattern = r'\b([A-D])\.\s+([^\n]+?)(?=\s*[A-D]\.|Answer:|$)'
        option_matches = list(re.finditer(option_pattern, options_section, re.MULTILINE | re.DOTALL))
        
        # If that didn't find enough options, try pattern for options that might span lines
        if len(option_matches) < 2:
            # Pattern 2: Each option on its own line (A. text\nB. text\n)
            option_pattern = r'\b([A-D])\.\s+([^\n]+)'
            option_matches = list(re.finditer(option_pattern, options_section, re.MULTILINE))
        
        # If still not enough, try a more permissive pattern
        if len(option_matches) < 2:
            # Pattern 3: Match A. followed by any text until next A-D. or Answer
            option_pattern = r'\b([A-D])\.\s+(.+?)(?=\s*\b[A-D]\.|Answer:|$)'
            option_matches = list(re.finditer(option_pattern, options_section, re.MULTILINE | re.DOTALL))
        
        for match in option_matches:
            option_letter = match.group(1)
            option_text = match.group(2).strip()
            # Clean up whitespace - normalize newlines to spaces but preserve structure
            option_text = re.sub(r'\n+', ' ', option_text)
            option_text = re.sub(r'\s+', ' ', option_text)
            # Remove trailing URLs, page numbers, or artifacts
            option_text = re.sub(r'\s+www\.\w+\.\w+.*$', '', option_text)
            option_text = re.sub(r'\s+\d+/\d+.*$', '', option_text)
            option_text = re.sub(r'\s+Exam\s+Dumps.*$', '', option_text, flags=re.IGNORECASE)
            # Remove any trailing Answer: text
            option_text = re.sub(r'\s+Answer:.*$', '', option_text, flags=re.IGNORECASE)
            if option_text and len(option_text.strip()) > 0:  # Only add if we have actual text
                options.append((option_letter, option_text.strip()))
        
        # Sort options by letter (A, B, C, D)
        options.sort(key=lambda x: x[0])
        option_texts = [opt[1] for opt in options]
        
        # Skip if we don't have at least 2 options
        if len(option_texts) < 2:
            skipped_questions.append((question_num, f"Only {len(option_texts)} option(s) found"))
            continue
        
        # Extract answer
        answer_match = re.search(r'Answer:\s*([A-D,\s]+)', question_content, re.IGNORECASE)
        correct_answers = []
        
        if answer_match:
            answer_text = answer_match.group(1).strip()
            # Split by comma and clean up
            answer_letters = re.findall(r'[A-D]', answer_text.upper())
            # Convert letters to option indices (A=0, B=1, C=2, D=3)
            for letter in answer_letters:
                idx = ord(letter) - ord('A')
                if 0 <= idx < len(option_texts):
                    correct_answers.append(idx)
        
        # If no answer found but we have options, skip this question
        if not correct_answers:
            skipped_questions.append((question_num, "No answer found"))
            continue
        
        # If multiple answers detected but only one answer, check if it's really multiple
        if len(correct_answers) > 1:
            multiple_answers = True
        
        # Extract explanation (everything after "Explanation:" until next question or end)
        explanation_text = ""
        explanation_match = re.search(r'Explanation:\s*(.+?)(?=Question:\s*\d+|$)', question_content, re.IGNORECASE | re.DOTALL)
        if explanation_match:
            explanation_text = explanation_match.group(1).strip()
            # Clean up explanation text
            # Remove page numbers, URLs, and artifacts
            explanation_text = re.sub(r'www\.\w+\.\w+[^\n]*', '', explanation_text)
            explanation_text = re.sub(r'\s+\d+/\d+', '', explanation_text)
            explanation_text = re.sub(r'Exam\s+Dumps\s*\d+/\d+', '', explanation_text, flags=re.IGNORECASE)
            # Normalize whitespace
            explanation_text = re.sub(r'\n+', ' ', explanation_text)
            explanation_text = re.sub(r'\s+', ' ', explanation_text)
            explanation_text = explanation_text.strip()
        
        questions.append({
            'number': int(question_num),
            'text': question_text,
            'options': option_texts,
            'correct_answers': correct_answers,
            'multiple_answers': multiple_answers,
            'explanation': explanation_text
        })
    
    # Report skipped questions
    if skipped_questions:
        print(f"\nWarning: {len(skipped_questions)} question(s) were skipped:")
        for qnum, reason in skipped_questions:
            print(f"  Question {qnum}: {reason}")
    
    return questions


def convert_to_markdown(questions, output_path):
    """Convert parsed questions to markdown format"""
    # Sort questions by number to ensure correct order
    questions_sorted = sorted(questions, key=lambda x: x['number'])
    
    with open(output_path, 'w', encoding='utf-8') as f:
        for q in questions_sorted:
            f.write(f"## Question {q['number']}\n\n")
            f.write(f"{q['text']}\n\n")
            f.write("### Options\n")
            
            for option in q['options']:
                f.write(f"- {option}\n")
            
            f.write("\n### Correct Answers\n")
            # Write answer indices (0-based) for reliable matching
            # Format: "- [index] option_text" to help with both text matching and index-based matching
            for answer_idx in sorted(q['correct_answers']):
                if answer_idx < len(q['options']):
                    # Write both index and text for reliability
                    f.write(f"- [{answer_idx}] {q['options'][answer_idx]}\n")
            
            # Write explanation if available
            if q.get('explanation'):
                f.write("\n### Explanation\n")
                f.write(f"{q['explanation']}\n")
            
            f.write("\n")
    
    print(f"\nExtracted {len(questions_sorted)} questions successfully!")
    print(f"Questions saved to {output_path}")
    
    # Verify order
    question_nums = [q['number'] for q in questions_sorted]
    if question_nums != sorted(question_nums):
        print(f"Warning: Questions may not be in order. First 10: {question_nums[:10]}")
    else:
        print(f"Questions are in correct order (1-{len(questions_sorted)})")


def main():
    if len(sys.argv) < 2:
        print("Usage: python extract_questions.py <pdf_file> [output_file]")
        sys.exit(1)
    
    pdf_path = sys.argv[1]
    output_path = sys.argv[2] if len(sys.argv) > 2 else 'src/questions/extracted_questions.md'
    
    if not os.path.exists(pdf_path):
        print(f"Error: PDF file not found: {pdf_path}")
        sys.exit(1)
    
    print(f"Extracting text from {pdf_path}...")
    text = extract_text(pdf_path)
    
    # Clean up the text
    # Remove page numbers and headers
    text = re.sub(r'www\.\w+\.\w+.*?Exam Dumps \d+/\d+', '', text)
    text = re.sub(r'\n\s*\n\s*\n+', '\n\n', text)  # Normalize multiple newlines
    
    print("Parsing questions...")
    questions = parse_questions(text)
    
    if not questions:
        print("Warning: No questions found. The PDF format may be different.")
        print("Saving raw text for manual processing...")
        raw_path = output_path.replace('.md', '_raw.txt')
        with open(raw_path, 'w', encoding='utf-8') as f:
            f.write(text[:5000])  # Save first 5000 chars for inspection
        print(f"Raw text sample saved to {raw_path}")
        print(f"\nTotal text length: {len(text)} characters")
        pattern = r'Question:\s*\d+'
        question_count = len(re.findall(pattern, text, re.IGNORECASE))
        print(f"Found 'Question:' patterns: {question_count}")
    else:
        convert_to_markdown(questions, output_path)


if __name__ == '__main__':
    main()

# Questions Directory

Place your question markdown files in this directory.

Each file can contain multiple questions. The question loader will automatically parse all markdown files in this directory.

## Example Question Format

```markdown
## Question 1

What is the main purpose of Drupal's theme system?

### Options
- To manage database queries
- To control the presentation layer of a website
- To handle user authentication
- To process form submissions

### Correct Answers
- To control the presentation layer of a website

## Question 2

Which of the following are Drupal theme files? (Multiple Answers)

### Options
- .info.yml
- .theme
- .twig
- .module

### Correct Answers
- .info.yml
- .theme
- .twig
```

## Notes

- Question numbers should be sequential (1, 2, 3, etc.)
- Options start with `### Options` section
- Correct answers start with `### Correct Answers` section
- For multiple answer questions, indicate this in the question text
- The loader will automatically detect if questions allow multiple answers


import { describe, expect, it } from 'vitest'
import { parseMarkdownQuestions } from './parseMarkdownQuestions.js'

const sampleMarkdown = `
### Question 1

**Domain:** Theming Concepts

What is a theme?

### Options
- A module
- A presentation layer
- A database
- A cache bin

### Correct Answers
- [1] A presentation layer

### Explanation
Themes control presentation.

### Question 2

**Domain:** Security

Which two apply? (Choose two)

### Options
- Escape output
- Disable caching
- Use text formats
- Print |raw always

### Correct Answers
- [0] Escape output
- [2] Use text formats

### Explanation
Escape untrusted output and constrain HTML via text formats.
`

describe('parseMarkdownQuestions', () => {
  it('parses options, correct indices, domain, and explanation', () => {
    const questions = parseMarkdownQuestions(sampleMarkdown)
    expect(questions).toHaveLength(2)

    expect(questions[0]).toMatchObject({
      id: 1,
      domain: 'Theming Concepts',
      multipleAnswers: false,
      correctAnswers: [1],
      explanation: 'Themes control presentation.'
    })
    expect(questions[0].options).toHaveLength(4)
    expect(questions[0].question).toContain('What is a theme?')
  })

  it('detects multi-select from Choose two and multiple correct answers', () => {
    const questions = parseMarkdownQuestions(sampleMarkdown)
    expect(questions[1].multipleAnswers).toBe(true)
    expect(questions[1].correctAnswers).toEqual([0, 2])
    expect(questions[1].domain).toBe('Security')
  })
})

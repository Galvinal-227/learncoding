export const chapter = {
  slug: "style-guides",
  title: "Style Guides",
  description: "Membuat dan menggunakan style guides untuk konsistensi dokumentasi.",
  icon: "SiReadthedocs",
  color: "#4CAF50",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["technical-writing-introduction", "technical-writing-documentation"],
  tags: ["technical-writing", "style-guide", "consistency"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Style Guide?

Style guide adalah panduan untuk menulis dokumentasi yang konsisten, termasuk tata bahasa, format, dan tone.

## Komponen Style Guide

### 1. Language & Grammar
\`\`\`
- Use active voice
- Use present tense
- Use second person
- Use simple sentences
- Avoid jargon
\`\`\`

### 2. Tone & Voice
\`\`\`
- Professional yet friendly
- Clear and direct
- Inclusive language
- Consistent tone
\`\`\`

### 3. Formatting
\`\`\`
- Heading hierarchy
- Code blocks
- Lists
- Tables
- Links
- Images
\`\`\`

### 4. Terminology
\`\`\`
- Consistent terms
- Define acronyms
- Use standard names
- Avoid synonyms
\`\`\`

## Contoh Style Guide

### Voice and Tone
\`\`\`markdown
# Voice and Tone Guidelines

## Voice
Our voice is:
- **Professional** - We are experts in our field
- **Helpful** - We solve problems
- **Clear** - We communicate effectively
- **Concise** - We respect reader's time

## Tone
Our tone adapts to the situation:
- **Informative** - For educational content
- **Encouraging** - For tutorials
- **Direct** - For error messages
- **Calm** - For support content

## Do's and Don'ts

### ✅ Do:
- Use "you" to address the reader
- Use active voice
- Use short sentences
- Be specific
- Use examples

### ❌ Don't:
- Use passive voice
- Use overly complex language
- Make assumptions
- Use gendered language
- Be vague
\`\`\`

### Writing Guidelines
\`\`\`markdown
# Writing Guidelines

## Headings

### H1 - Page Title
- One per page
- Descriptive
- 3-8 words

### H2 - Major Sections
- Clear and concise
- Describe content

### H3 - Sub-sections
- More specific
- Hierarchical

## Lists

### Bulleted Lists
- Use for related items
- Parallel structure
- Capitalize first word

### Numbered Lists
- Use for steps
- Sequential order
- Complete sentences

## Code

### Inline Code
- \`code\` for short code snippets
- File names
- Function names
- Variable names

### Code Blocks
- Use for multi-line code
- Specify language
- Include comments
- Keep examples simple
\`\`\`

### Terminology Guide
\`\`\`markdown
# Terminology Guide

## Standard Terms

| Term | Usage |
|------|-------|
| **User** | Person using the product |
| **Admin** | Person managing the system |
| **API** | Application Programming Interface |
| **Server** | Computer providing services |
| **Client** | Computer requesting services |

## Brand Names

| Term | Usage |
|------|-------|
| **MyProduct** | Our product name |
| **Pro** | Premium version |
| **Enterprise** | Business version |

## Technical Terms

| Term | Definition |
|------|------------|
| **Authentication** | Verifying identity |
| **Authorization** | Checking permissions |
| **Endpoint** | API URL |
| **Payload** | Data in request/response |
\`\`\`

### Formatting Guide
\`\`\`markdown
# Formatting Guide

## Text Formatting

\`\`\`
**Bold** - For emphasis
*Italic* - For terms
\`Code\` - For code elements
~~Strikethrough~~ - For deprecated items
\`\`\`

## Links
\`\`\`
[Link Text](https://example.com)
[Internal Link](#section-name)
\`\`\`

## Tables
\`\`\`
| Header 1 | Header 2 |
|----------|----------|
| Cell 1   | Cell 2   |
| Cell 3   | Cell 4   |
\`\`\`

## Images
\`\`\`
![Alt text](image.png)
![Alt text with size](image.png =800x400)
\`\`\`

## Notes and Warnings
\`\`\`
> ℹ️ Note: Important information

> ⚠️ Warning: Be careful!

> ✅ Tip: Helpful suggestion
\`\`\`
\`\`\`

## Style Guide Templates

### Company Style Guide
\`\`\`markdown
# Company Style Guide

## Document
- **Version:** 1.0
- **Last Updated:** 2024-01-01
- **Owner:** Documentation Team

## Overview
This style guide ensures consistency across all documentation.

## Writing Style
- Use US English
- Use Oxford comma
- Use sentence case for headings
- Use present tense

## Voice
- Professional
- Helpful
- Inclusive

## Formatting
- Markdown for docs
- YAML for configs
- JSON for APIs

## Tools
- Markdown editor: VS Code
- Spell check: Grammarly
- Grammar: LanguageTool
\`\`\`

## Best Practices

1. **Keep it simple** - Easy to understand
2. **Be consistent** - Follow your own rules
3. **Update regularly** - Review and revise
4. **Share with team** - Get feedback
5. **Use examples** - Show, don't tell
6. **Make it accessible** - Easy to find
7. **Version control** - Track changes
8. **Automate where possible** - Linters
  `,
  quiz: [
    {
      question: "Apa itu style guide?",
      options: [
        "Panduan desain",
        "Panduan penulisan",
        "Panduan coding",
        "Panduan testing"
      ],
      correctAnswer: 1
    },
    {
      question: "Komponen style guide meliputi?",
      options: [
        "Language & grammar",
        "Tone & voice",
        "Formatting",
        "Semua di atas"
      ],
      correctAnswer: 3
    },
    {
      question: "Tone yang baik untuk dokumentasi adalah?",
      options: [
        "Formal dan kaku",
        "Professional dan helpful",
        "Casual dan santai",
        "Akademik dan kompleks"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete Style Guide",
      code: `<!-- ============================================ -->
<!-- Complete Style Guide Template -->
<!-- ============================================ -->

# Documentation Style Guide

> A comprehensive guide for writing consistent documentation

**Version:** 2.0.0 | **Last Updated:** 2024-01-01 | **Owner:** Documentation Team

---

## 📋 Table of Contents

1. [Overview](#overview)
2. [Writing Style](#writing-style)
3. [Formatting](#formatting)
4. [Structure](#structure)
5. [Terminology](#terminology)
6. [Code Examples](#code-examples)
7. [Visuals](#visuals)
8. [Checklist](#checklist)

---

## 1. Overview

### 1.1 Purpose

This style guide ensures all documentation is:
- ✅ Consistent
- ✅ Clear
- ✅ Professional
- ✅ Helpful

### 1.2 Audience

| Audience | Style |
|----------|-------|
| Developers | Technical, detailed |
| End Users | Simple, step-by-step |
| Admins | System-focused |

### 1.3 Principles

1. **Clarity** - Use simple language
2. **Conciseness** - Be brief but complete
3. **Accuracy** - Always correct
4. **Completeness** - Cover everything

---

## 2. Writing Style

### 2.1 Voice

**Active Voice** ✅

| Do | Don't |
|----|-------|
| Click the button | The button should be clicked |
| The API returns data | Data is returned by the API |
| Configure the settings | The settings are configured |

### 2.2 Tone

**Professional but Friendly** ✅

| Do | Don't |
|----|-------|
| We recommend using... | You should use... |
| Please note that... | Note that... |
| For more information... | See... |

### 2.3 Second Person

**Use "you"** ✅

\`\`\`
✅ You can find the API key in the dashboard.
❌ The API key can be found in the dashboard.
\`\`\`

### 2.4 Inclusive Language

| Instead of | Use |
|------------|-----|
| Manpower | Workforce, Staff |
| Chairman | Chair, Chairperson |
| Master/Slave | Primary/Secondary |
| Blacklist | Blocklist, Denylist |

---

## 3. Formatting

### 3.1 Headings

| Level | Format | Example |
|-------|--------|---------|
| H1 | # Title | # Getting Started |
| H2 | ## Section | ## Installation |
| H3 | ### Subsection | ### Prerequisites |

### 3.2 Text Formatting

| Format | Usage |
|--------|-------|
| **Bold** | Emphasis, key terms |
| *Italic* | New terms, book titles |
| \`Code\` | Code, commands, file names |
| ~~Strikethrough~~ | Deprecated items |

### 3.3 Lists

**Bulleted Lists** - For related items:

\`\`\`
- Feature 1
- Feature 2
- Feature 3
\`\`\`

**Numbered Lists** - For steps:

\`\`\`
1. Install dependencies
2. Configure the app
3. Run the server
\`\`\`

### 3.4 Code Blocks

**Specify Language:**

\`\`\`javascript
// JavaScript example
const greeting = 'Hello';
console.log(greeting);
\`\`\`

**Include Output:**

\`\`\`javascript
// Output: Hello
\`\`\`

### 3.5 Tables

| Column 1 | Column 2 | Column 3 |
|----------|----------|----------|
| Row 1    | Data     | Data     |
| Row 2    | Data     | Data     |

---

## 4. Structure

### 4.1 Document Structure

\`\`\`
1. Title
2. Description
3. Table of Contents
4. Introduction
5. Main Content
6. Conclusion
7. Related Resources
\`\`\`

### 4.2 API Documentation

\`\`\`
## Endpoint Name

### Description
Brief description

### URL
\`/api/endpoint\`

### Method
GET, POST, PUT, DELETE

### Parameters
| Name | Type | Description |
|------|------|-------------|

### Request Example
\`\`\`json
{
    "key": "value"
}
\`\`\`

### Response Example
\`\`\`json
{
    "success": true,
    "data": {}
}
\`\`\`

### Error Codes
| Code | Description |
|------|-------------|
| 400  | Bad Request |
| 404  | Not Found |
\`\`\`

### 4.3 Tutorial Structure

\`\`\`
## Tutorial Title

### Introduction
What you'll learn

### Prerequisites
What you need

### Step 1: ...
Detailed steps

### Step 2: ...
Detailed steps

### Conclusion
Summary and next steps
\`\`\`

---

## 5. Terminology

### 5.1 Standard Terms

| Term | Usage |
|------|-------|
| **User** | End user of the product |
| **Admin** | System administrator |
| **Developer** | Technical user |
| **API** | Application Programming Interface |
| **SDK** | Software Development Kit |

### 5.2 Brand Terms

| Term | Usage |
|------|-------|
| **Product** | Our product name |
| **Platform** | The platform name |
| **Console** | Admin interface |

### 5.3 Technical Terms

| Term | Definition |
|------|------------|
| **Authentication** | Verifying identity |
| **Authorization** | Checking permissions |
| **Endpoint** | API URL endpoint |
| **Payload** | Request/response data |

---

## 6. Code Examples

### 6.1 JavaScript

**Good Example:**
\`\`\`javascript
// Get user by ID
async function getUser(id) {
    try {
        const user = await db.findUser(id);
        return user;
    } catch (error) {
        console.error('Error getting user:', error);
        throw error;
    }
}
\`\`\`

**Bad Example:**
\`\`\`javascript
// get user
async function get(id) {
    const u = await db.get(id);
    return u;
}
\`\`\`

### 6.2 JSON

**Good Example:**
\`\`\`json
{
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
}
\`\`\`

**Bad Example:**
\`\`\`json
{
    "id":1,
    "name":"John",
    "email":"john@example.com"
}
\`\`\`

---

## 7. Visuals

### 7.1 Screenshots

- ✅ Show relevant content
- ✅ Include annotations
- ✅ Use consistent styling
- ✅ Optimize for web

### 7.2 Diagrams

- ✅ Use Mermaid.js
- ✅ Keep it simple
- ✅ Add descriptions
- ✅ Use colors wisely

\`\`\`mermaid
graph TD
    A[Client] --> B[API Gateway]
    B --> C[Service 1]
    B --> D[Service 2]
\`\`\`

### 7.3 Icons

| Icon | Meaning |
|------|---------|
| ℹ️ | Information |
| ⚠️ | Warning |
| ✅ | Tip/Good |
| ❌ | Bad |
| 🚀 | New |
| 🔄 | Updated |

---

## 8. Checklist

### Before Publishing

- [ ] Spell check completed
- [ ] Grammar checked
- [ ] Links verified
- [ ] Code examples tested
- [ ] Images optimized
- [ ] Consistent formatting
- [ ] Clear headings
- [ ] Good examples
- [ ] Updated metadata

### Review Checklist

- [ ] Is the content accurate?
- [ ] Is it easy to understand?
- [ ] Are examples clear?
- [ ] Is the structure logical?
- [ ] Is the tone consistent?
- [ ] Are images helpful?
- [ ] Are links working?
- [ ] Is the code correct?

---

## 📚 Resources

### Tools
- VS Code - Markdown editor
- Grammarly - Grammar check
- Lint - Code formatting
- Mermaid - Diagrams

### References
- [Google Developer Docs](https://developers.google.com/style)
- [Microsoft Docs](https://docs.microsoft.com/en-us/style-guide)
- [Apple Human Interface](https://developer.apple.com/design/human-interface-guidelines)

---

## 📝 Changelog

| Version | Date | Changes |
|---------|------|---------|
| 2.0.0 | 2024-01-01 | Major update |
| 1.2.0 | 2023-06-01 | Added visuals |
| 1.1.0 | 2023-03-01 | Updated examples |
| 1.0.0 | 2023-01-01 | Initial release |

---

*Maintained by the Documentation Team*`,
      language: "markdown"
    }
  ]
};
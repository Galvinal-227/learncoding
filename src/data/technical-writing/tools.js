export const chapter = {
  slug: "tools",
  title: "Tools",
  description: "Tools dan platform untuk menulis dan mempublikasikan dokumentasi.",
  icon: "SiReadthedocs",
  color: "#4CAF50",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["technical-writing-introduction"],
  tags: ["technical-writing", "tools", "platforms"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Tools untuk Technical Writing

Berbagai tools untuk menulis dan mempublikasikan dokumentasi.

## Writing Tools

### 1. Text Editors
| Tool | Keunggulan |
|------|------------|
| **VS Code** | Free, extensions, git integration |
| **Sublime Text** | Fast, lightweight |
| **Typora** | Markdown with preview |
| **Notion** | Collaboration, all-in-one |

### 2. Markdown Editors
\`\`\`markdown
# Markdown Basics
## Headings
- Lists
\`code\`
[Links](https://example.com)
![Images](image.png)
\`\`\`

### 3. Grammar Checkers
- Grammarly
- LanguageTool
- Hemingway Editor
- ProWritingAid

## Documentation Platforms

### 1. ReadTheDocs
\`\`\`yaml
# .readthedocs.yaml
version: 2
build:
  os: ubuntu-22.04
  tools:
    python: "3.11"
mkdocs:
  configuration: mkdocs.yml
\`\`\`

### 2. GitHub Pages
\`\`\`bash
# Deploy to GitHub Pages
npm run build
npm run deploy
\`\`\`

### 3. GitBook
\`\`\`
- Easy to use
- Collaboration
- Built-in search
- Analytics
\`\`\`

### 4. Confluence
\`\`\`
- Enterprise
- Team collaboration
- Integration
- Permissions
\`\`\`

## API Documentation Tools

### 1. Swagger/OpenAPI
\`\`\`yaml
openapi: 3.0.0
info:
  title: API Name
  version: 1.0.0
\`\`\`

### 2. Postman
\`\`\`
- API testing
- Documentation
- Collections
- Mock servers
\`\`\`

### 3. ReadMe
\`\`\`
- Interactive docs
- API explorer
- Analytics
- Custom domains
\`\`\`

## Diagram Tools

### 1. Mermaid.js
\`\`\`mermaid
graph TD
    A --> B
    B --> C
\`\`\`

### 2. Draw.io
\`\`\`
- Free
- Integrations
- Many formats
- Online/offline
\`\`\`

### 3. Lucidchart
\`\`\`
- Professional
- Collaboration
- Templates
- Integrations
\`\`\`

## Collaboration Tools

### 1. GitHub
\`\`\`
- Version control
- Pull requests
- Issues
- Discussions
\`\`\`

### 2. GitLab
\`\`\`
- All-in-one
- CI/CD
- Documentation
- Wiki
\`\`\`

### 3. Slack/Discord
\`\`\`
- Team communication
- Feedback
- Support
\`\`\`

## Comparison Table

| Tool | Type | Price | Best For |
|------|------|-------|----------|
| **ReadTheDocs** | Hosting | Free | Open source |
| **GitBook** | Hosting | Freemium | Team docs |
| **Swagger** | API Docs | Free | API documentation |
| **Mermaid** | Diagrams | Free | Technical diagrams |
| **VS Code** | Editor | Free | Writing code/docs |

## Setup Example

### ReadTheDocs with MkDocs
\`\`\`yaml
# mkdocs.yml
site_name: My Documentation
theme:
  name: material
nav:
  - Home: index.md
  - Getting Started: getting-started.md
  - API Reference: api.md
\`\`\`

### GitHub Pages with Jekyll
\`\`\`yaml
# _config.yml
title: Documentation
theme: minima
plugins:
  - jekyll-feed
\`\`\`

## Best Practices

1. **Choose right tool** - Sesuai kebutuhan
2. **Version control** - Git
3. **Automate build** - CI/CD
4. **Track analytics** - Pengunjung
5. **Get feedback** - User feedback
6. **Keep updated** - Regular updates
7. **Backup regularly** - Data backup
8. **Use templates** - Consistency
  `,
  quiz: [
    {
      question: "Tools untuk diagram di dokumentasi adalah?",
      options: [
        "Mermaid",
        "Word",
        "Excel",
        "PowerPoint"
      ],
      correctAnswer: 0
    },
    {
      question: "Platform untuk dokumentasi open source adalah?",
      options: [
        "ReadTheDocs",
        "Confluence",
        "Notion",
        "WordPress"
      ],
      correctAnswer: 0
    },
    {
      question: "Tools untuk API documentation adalah?",
      options: [
        "Swagger",
        "Word",
        "Excel",
        "PowerPoint"
      ],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Complete Documentation Setup",
      code: `// ============================================
// 1. README.md
// ============================================
# Documentation Setup

This repository contains the documentation setup.

## Tools Used
- MkDocs
- Material Theme
- ReadTheDocs
- Mermaid.js

## Installation

\`\`\`bash
pip install mkdocs mkdocs-material
\`\`\`

## Local Development

\`\`\`bash
# Run local server
mkdocs serve

# Build static files
mkdocs build
\`\`\`

## Deployment

\`\`\`bash
# Deploy to GitHub Pages
mkdocs gh-deploy
\`\`\`

// ============================================
// 2. mkdocs.yml
// ============================================
site_name: Technical Documentation
site_description: Documentation for developers
site_author: Documentation Team

theme:
  name: material
  palette:
    scheme: default
    primary: blue
    accent: indigo
  features:
    - navigation.tabs
    - navigation.sections
    - navigation.top
    - search.suggest
    - search.highlight
  language: en

plugins:
  - search
  - mermaid2
  - git-revision-date

markdown_extensions:
  - pymdownx.highlight
  - pymdownx.superfences
  - pymdownx.tabbed
  - pymdownx.emoji
  - pymdownx.tasklist
  - toc:
      permalink: true

nav:
  - Home: index.md
  - Getting Started:
      - Installation: getting-started/installation.md
      - Configuration: getting-started/configuration.md
      - Quick Start: getting-started/quick-start.md
  - User Guide:
      - Features: user-guide/features.md
      - API Reference: user-guide/api.md
      - Examples: user-guide/examples.md
  - Developer Guide:
      - Contributing: developer-guide/contributing.md
      - Coding Standards: developer-guide/standards.md
      - Testing: developer-guide/testing.md
  - About:
      - Changelog: about/changelog.md
      - License: about/license.md
      - Contact: about/contact.md

extra:
  social:
    - icon: fontawesome/brands/github
      link: https://github.com/your-repo
    - icon: fontawesome/brands/twitter
      link: https://twitter.com/your-org

// ============================================
// 3. docs/index.md
// ============================================
# Welcome to the Documentation

Welcome to our technical documentation. Here you'll find everything you need to get started.

## Quick Start

\`\`\`bash
# Install
npm install

# Run
npm start
\`\`\`

## Features

- ✅ Feature 1
- ✅ Feature 2
- ✅ Feature 3

## Getting Help

- 📚 [Documentation](user-guide/)
- 💬 [Discord](https://discord.gg/example)
- 🐛 [Issues](https://github.com/example/issues)

## Last Updated

{{ git_revision_date }}

// ============================================
// 4. docs/user-guide/api.md
// ============================================
# API Reference

## Authentication

All API requests require an API key.

\`\`\`bash
curl -X GET https://api.example.com/v1/users \\
    -H "X-API-Key: your-api-key"
\`\`\`

## Endpoints

### GET /users

Get all users.

**Parameters:**
| Name | Type | Description |
|------|------|-------------|
| page | integer | Page number |
| limit | integer | Items per page |

**Response:**
\`\`\`json
{
    "data": [],
    "pagination": {
        "page": 1,
        "limit": 10,
        "total": 100
    }
}
\`\`\`

### POST /users

Create a new user.

**Request:**
\`\`\`json
{
    "name": "John Doe",
    "email": "john@example.com"
}
\`\`\`

**Response:**
\`\`\`json
{
    "id": 1,
    "name": "John Doe",
    "email": "john@example.com"
}
\`\`\`

## Error Codes

| Code | Description |
|------|-------------|
| 400 | Bad Request |
| 401 | Unauthorized |
| 404 | Not Found |
| 429 | Too Many Requests |
| 500 | Internal Server Error |

// ============================================
// 5. .readthedocs.yaml
// ============================================
# .readthedocs.yaml
# Read the Docs configuration file

version: 2

build:
  os: ubuntu-22.04
  tools:
    python: "3.11"

mkdocs:
  configuration: mkdocs.yml

python:
  install:
    - requirements: docs/requirements.txt

// ============================================
// 6. docs/requirements.txt
// ============================================
mkdocs==1.5.0
mkdocs-material==9.5.0
mkdocs-mermaid2-plugin==1.0.0
mkdocs-git-revision-date-plugin==0.3.0

// ============================================
// 7. .github/workflows/deploy.yml
// ============================================
name: Deploy Documentation

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Python
        uses: actions/setup-python@v4
        with:
          python-version: '3.11'
      
      - name: Install dependencies
        run: |
          pip install mkdocs mkdocs-material
          pip install mkdocs-mermaid2-plugin
      
      - name: Build site
        run: mkdocs build
      
      - name: Deploy to GitHub Pages
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: \${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./site`,
      language: "yaml"
    }
  ]
};
export const chapter = {
  slug: "ci-integration",
  title: "CI Integration",
  description: "Mengintegrasikan testing dengan Continuous Integration.",
  icon: "SiTestinglibrary",
  color: "#E33332",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["testing-introduction"],
  tags: ["testing", "ci", "github-actions", "gitlab"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu CI?

CI (Continuous Integration) adalah praktik mengintegrasikan code secara otomatis dengan testing.

## GitHub Actions

### Basic Workflow
\`\`\`yaml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm test
      - run: npm run test:coverage
\`\`\`

### Multiple Node Versions
\`\`\`yaml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [16.x, 18.x, 20.x]
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: \${{ matrix.node-version }}
      - run: npm ci
      - run: npm test
\`\`\`

### Coverage Report
\`\`\`yaml
name: CI
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      - run: npm ci
      - run: npm test
      - run: npm run test:coverage
      - name: Upload coverage
        uses: codecov/codecov-action@v3
\`\`\`

## GitLab CI

### Basic Pipeline
\`\`\`yaml
# .gitlab-ci.yml
image: node:18

stages:
  - test
  - build
  - deploy

test:
  stage: test
  script:
    - npm ci
    - npm test
    - npm run test:coverage
  artifacts:
    paths:
      - coverage/

build:
  stage: build
  script:
    - npm ci
    - npm run build
  artifacts:
    paths:
      - dist/

deploy:
  stage: deploy
  script:
    - npm run deploy
  only:
    - main
\`\`\`

## CircleCI

### Config
\`\`\`yaml
# .circleci/config.yml
version: 2.1
jobs:
  test:
    docker:
      - image: cimg/node:18.0
    steps:
      - checkout
      - restore_cache:
          keys:
            - v1-dependencies-{{ checksum "package-lock.json" }}
      - run: npm ci
      - save_cache:
          paths:
            - node_modules
          key: v1-dependencies-{{ checksum "package-lock.json" }}
      - run: npm test
      - run: npm run test:coverage
      - store_artifacts:
          path: coverage
\`\`\`

## Jest in CI

### Package.json
\`\`\`json
{
    "scripts": {
        "test": "jest",
        "test:ci": "jest --ci --coverage",
        "test:watch": "jest --watch"
    }
}
\`\`\`

### Jest Config
\`\`\`javascript
// jest.config.js
module.exports = {
    testEnvironment: 'node',
    coverageDirectory: 'coverage',
    collectCoverageFrom: ['src/**/*.js'],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    },
    testResultsProcessor: 'jest-junit'
};
\`\`\`

## Best Practices

1. **Run tests on every push**
2. **Use CI for PR checks**
3. **Enforce coverage thresholds**
4. **Cache dependencies**
5. **Use matrix builds**
6. **Fail on test failures**
7. **Generate reports**
8. **Use environment variables**
  `,
  quiz: [
    {
      question: "Platform CI yang terintegrasi dengan GitHub adalah?",
      options: ["GitLab CI", "GitHub Actions", "CircleCI", "Jenkins"],
      correctAnswer: 1
    },
    {
      question: "Keyword untuk matrix build di GitHub Actions adalah?",
      options: ["matrix", "strategy", "parallel", "multi"],
      correctAnswer: 1
    },
    {
      question: "Perintah untuk install dependencies di CI adalah?",
      options: ["npm install", "npm ci", "npm i", "npm update"],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete CI Setup",
      code: `// ============================================
// 1. GitHub Actions - Full Workflow
// ============================================
// .github/workflows/ci.yml
name: CI/CD Pipeline

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

env:
  NODE_VERSION: '18'

jobs:
  lint:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: \${{ env.NODE_VERSION }}
      - run: npm ci
      - run: npm run lint

  test:
    runs-on: ubuntu-latest
    needs: lint
    strategy:
      matrix:
        node-version: [16.x, 18.x, 20.x]
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: \${{ matrix.node-version }}
      - name: Cache dependencies
        uses: actions/cache@v3
        with:
          path: ~/.npm
          key: npm-\${{ hashFiles('package-lock.json') }}
      - run: npm ci
      - run: npm run test:ci
      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          token: \${{ secrets.CODECOV_TOKEN }}
          directory: ./coverage

  build:
    runs-on: ubuntu-latest
    needs: test
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: \${{ env.NODE_VERSION }}
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-artifact@v3
        with:
          name: dist
          path: dist/

  e2e:
    runs-on: ubuntu-latest
    needs: build
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: \${{ env.NODE_VERSION }}
      - uses: actions/download-artifact@v3
        with:
          name: dist
          path: dist
      - run: npm ci
      - run: npm run test:e2e

  deploy:
    runs-on: ubuntu-latest
    needs: [build, e2e]
    if: github.ref == 'refs/heads/main'
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: \${{ env.NODE_VERSION }}
      - run: npm ci
      - run: npm run deploy
        env:
          DEPLOY_KEY: \${{ secrets.DEPLOY_KEY }}

// ============================================
// 2. GitLab CI - Full Pipeline
// ============================================
// .gitlab-ci.yml
image: node:18

variables:
  NODE_VERSION: '18'

stages:
  - lint
  - test
  - build
  - e2e
  - deploy

cache:
  paths:
    - node_modules/

lint:
  stage: lint
  script:
    - npm ci
    - npm run lint

test:
  stage: test
  script:
    - npm ci
    - npm run test:ci
  artifacts:
    paths:
      - coverage/
    reports:
      junit:
        - junit.xml

build:
  stage: build
  script:
    - npm ci
    - npm run build
  artifacts:
    paths:
      - dist/

e2e:
  stage: e2e
  script:
    - npm ci
    - npm run test:e2e
  dependencies:
    - build

deploy:
  stage: deploy
  script:
    - npm run deploy
  only:
    - main
  dependencies:
    - build

// ============================================
// 3. CircleCI - Config
// ============================================
// .circleci/config.yml
version: 2.1

orbs:
  node: circleci/node@5.0

jobs:
  lint:
    executor:
      name: node/default
      tag: '18.0'
    steps:
      - checkout
      - node/install-packages:
          pkg-manager: npm
      - run: npm run lint

  test:
    executor:
      name: node/default
      tag: '18.0'
    steps:
      - checkout
      - node/install-packages:
          pkg-manager: npm
      - run: npm test
      - run: npm run test:coverage
      - store_artifacts:
          path: coverage

  build:
    executor:
      name: node/default
      tag: '18.0'
    steps:
      - checkout
      - node/install-packages:
          pkg-manager: npm
      - run: npm run build
      - persist_to_workspace:
          root: .
          paths:
            - dist

  deploy:
    executor:
      name: node/default
      tag: '18.0'
    steps:
      - attach_workspace:
          at: .
      - run: npm run deploy

workflows:
  ci:
    jobs:
      - lint
      - test:
          requires:
            - lint
      - build:
          requires:
            - test
      - deploy:
          requires:
            - build
          filters:
            branches:
              only: main

// ============================================
// 4. Jest Configuration for CI
// ============================================
// jest.config.js
module.exports = {
    testEnvironment: 'node',
    verbose: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageReporters: ['text', 'lcov', 'json', 'html'],
    collectCoverageFrom: [
        'src/**/*.js',
        '!src/**/*.test.js',
        '!src/index.js'
    ],
    coverageThreshold: {
        global: {
            branches: 80,
            functions: 80,
            lines: 80,
            statements: 80
        }
    },
    testResultsProcessor: 'jest-junit',
    reporters: [
        'default',
        ['jest-junit', {
            outputDirectory: './test-results',
            outputName: 'junit.xml'
        }]
    ]
};

// ============================================
// 5. Package.json Scripts
// ============================================
// package.json
{
    "scripts": {
        "lint": "eslint src",
        "test": "jest",
        "test:ci": "jest --ci --coverage --runInBand",
        "test:watch": "jest --watch",
        "test:e2e": "cypress run",
        "test:e2e:open": "cypress open",
        "build": "webpack --mode production",
        "deploy": "npm run build && npm run deploy:prod",
        "deploy:prod": "aws s3 sync dist s3://my-bucket"
    }
}`,
      language: "yaml"
    }
  ]
};
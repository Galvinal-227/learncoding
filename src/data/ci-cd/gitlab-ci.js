export const chapter = {
  slug: "ci-cd-gitlab-ci",
  title: "GitLab CI/CD",
  description: "Pelajari GitLab CI/CD dengan file .gitlab-ci.yml.",
  icon: "SiGitlab",
  color: "#FC6D26",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["ci-cd-introduction"],
  tags: ["ci-cd", "gitlab", "pipeline", "runner"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## GitLab CI/CD

GitLab punya CI/CD built-in tanpa perlu tools tambahan. Konfigurasi di file **.gitlab-ci.yml** di root repo.

## Struktur Dasar

\`\`\`yaml
stages:
  - build
  - test
  - deploy

variables:
  NODE_VERSION: "20"

before_script:
  - npm ci

build-job:
  stage: build
  script:
    - npm run build
  artifacts:
    paths:
      - dist/

test-job:
  stage: test
  script:
    - npm test
  coverage: '/Statements\s*:\s*(\d+\.\d+)%/'

deploy-job:
  stage: deploy
  script:
    - echo "Deploying..."
  only:
    - main
\`\`\`

## Stages & Jobs

\`\`\`yaml
stages:
  - build
  - test
  - deploy

# Job paralel
unit-test:
  stage: test
  script: npm run test:unit

e2e-test:
  stage: test
  script: npm run test:e2e
\`\`\`

## Cache & Artifacts

\`\`\`yaml
cache:
  paths:
    - node_modules/

artifacts:
  paths:
    - dist/
  expire_in: 7 days
\`\`\`

## Environment Variables

\`\`\`yaml
variables:
  DATABASE_URL: $CI_DATABASE_URL

# Protected variables di:
# Settings → CI/CD → Variables
\`\`\`
  `,

  quiz: [
    { question: "File konfigurasi GitLab CI/CD?", options: ["ci.yml", ".gitlab-ci.yml", "gitlab.yml", "pipeline.yml"], correctAnswer: 1 },
    { question: "Stages di GitLab CI untuk?", options: ["Hiasan", "Urutan pipeline (build→test→deploy)", "Branch name", "Commit message"], correctAnswer: 1 }
  ],

  codeExamples: []
};
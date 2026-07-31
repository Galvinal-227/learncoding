export const chapter = {
  slug: "ci-cd-circleci",
  title: "CircleCI",
  description: "Pelajari CircleCI untuk CI/CD cloud-native yang cepat.",
  icon: "SiCircleci",
  color: "#343434",
  difficulty: "Intermediate",
  estimatedReadingTime: 10,
  prerequisites: ["ci-cd-introduction"],
  tags: ["ci-cd", "circleci", "orb", "workflow"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## CircleCI

CircleCI adalah CI/CD platform cloud-native yang fokus pada **kecepatan** dan **kemudahan setup**.

## Konfigurasi (.circleci/config.yml)

\`\`\`yaml
version: 2.1

orbs:
  node: circleci/node@5.0.0

jobs:
  build-and-test:
    docker:
      - image: cimg/node:20.0
    steps:
      - checkout
      - node/install-packages:
          pkg-manager: npm
      - run: npm test
      - run: npm run build

workflows:
  ci-pipeline:
    jobs:
      - build-and-test
\`\`\`

## Orbs (Reusable Config)

\`\`\`yaml
orbs:
  node: circleci/node@5.0.0
  aws-s3: circleci/aws-s3@3.0.0
  slack: circleci/slack@4.0.0

steps:
  - aws-s3/sync:
      from: dist/
      to: s3://my-bucket/
  - slack/notify:
      event: fail
      template: basic_fail_1
\`\`\`

## Parallelism

\`\`\`yaml
jobs:
  test:
    parallelism: 4
    steps:
      - run: npm run test -- --shard=$(circleci node index) --shard-count=4
\`\`\`
  `,

  quiz: [
    { question: "CircleCI config file?", options: ["circle.yml", ".circleci/config.yml", "circleci.yml", "config.circle"], correctAnswer: 1 },
    { question: "Orbs di CircleCI untuk?", options: ["Hiasan", "Reusable config package", "Test", "Deploy only"], correctAnswer: 1 }
  ],

  codeExamples: []
};
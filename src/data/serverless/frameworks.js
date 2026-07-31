export const chapter = {
  slug: "serverless-frameworks",
  title: "Serverless Frameworks",
  description: "Gunakan Serverless Framework, SST, dan Architect untuk manage serverless apps.",
  icon: "SiAwslambda",
  color: "#FF9900",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["serverless-aws-lambda"],
  tags: ["serverless", "framework", "sst", "architect"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Serverless Framework

\`\`\`bash
npm install -g serverless
serverless create --template aws-nodejs
\`\`\`

\`\`\`yaml
# serverless.yml
service: my-api
provider:
  name: aws
  runtime: nodejs20.x
  region: ap-southeast-1
  environment:
    TABLE_NAME: users

functions:
  getUsers:
    handler: handler.getUsers
    events:
      - http:
          path: /users
          method: get
  createUser:
    handler: handler.createUser
    events:
      - http:
          path: /users
          method: post

resources:
  Resources:
    UsersTable:
      Type: AWS::DynamoDB::Table
      Properties:
        TableName: users
        AttributeDefinitions:
          - AttributeName: id
            AttributeType: S
        KeySchema:
          - AttributeName: id
            KeyType: HASH
        BillingMode: PAY_PER_REQUEST
\`\`\`

\`\`\`bash
serverless deploy
serverless invoke -f getUsers
serverless logs -f getUsers
serverless remove
\`\`\`

## SST (Serverless Stack)

\`\`\`bash
npx create-sst@latest my-app
\`\`\`

\`\`\`typescript
// stacks/MyStack.ts
import { Api, Table } from "sst/constructs";

export function MyStack({ stack }) {
    const table = new Table(stack, "Users", {
        fields: { userId: "string" },
        primaryIndex: { partitionKey: "userId" }
    });

    const api = new Api(stack, "Api", {
        routes: {
            "GET /users": "packages/functions/src/list.handler",
            "POST /users": "packages/functions/src/create.handler"
        }
    });

    api.attachPermissions([table]);
}
\`\`\`

## Architect (OpenJS)

\`\`\`bash
npm init @architect ./my-app
\`\`\`

\`\`\`json
// app.arc
@app
my-app

@http
get /users
post /users
\`\`\`

## Comparison

| Framework | Best For |
|-----------|----------|
| **Serverless Framework** | Multi-cloud, mature |
| **SST** | AWS + TypeScript |
| **Architect** | Simple, open source |
| **AWS SAM** | AWS native |
| **AWS CDK** | Infrastructure as Code |
  `,

  quiz: [
    { question: "Serverless Framework?", options: ["Database", "Multi-cloud serverless deployment", "CSS framework", "Testing tool"], correctAnswer: 1 },
    { question: "SST?", options: ["Serverless", "Serverless Stack (AWS + TypeScript)", "Simple Stack", "Serverless Test"], correctAnswer: 1 }
  ],

  codeExamples: []
};
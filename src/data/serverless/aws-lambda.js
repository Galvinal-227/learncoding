export const chapter = {
  slug: "serverless-aws-lambda",
  title: "AWS Lambda",
  description: "Bangun serverless functions dengan AWS Lambda dan API Gateway.",
  icon: "SiAwslambda",
  color: "#FF9900",
  difficulty: "Advanced",
  estimatedReadingTime: 25,
  prerequisites: ["serverless-introduction"],
  tags: ["serverless", "aws", "lambda", "api-gateway"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## AWS Lambda Basics

\`\`\`javascript
// Lambda handler
export const handler = async (event, context) => {
    console.log('Event:', JSON.stringify(event));
    
    return {
        statusCode: 200,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: 'Hello from Lambda!' })
    };
};
\`\`\`

## Event Sources

| Trigger | Use Case |
|---------|----------|
| **API Gateway** | REST API endpoints |
| **S3** | File upload processing |
| **DynamoDB** | Database triggers |
| **SQS/SNS** | Message queue |
| **CloudWatch** | Scheduled tasks (cron) |
| **CloudFront** | Edge functions |

## API Gateway + Lambda

\`\`\`javascript
// GET /users
export const getUsers = async (event) => {
    const users = await db.scan({ TableName: 'users' }).promise();
    return { statusCode: 200, body: JSON.stringify(users.Items) };
};

// POST /users
export const createUser = async (event) => {
    const body = JSON.parse(event.body);
    await db.put({ TableName: 'users', Item: body }).promise();
    return { statusCode: 201, body: JSON.stringify(body) };
};
\`\`\`

## Serverless Framework

\`\`\`yaml
# serverless.yml
service: my-api
provider:
  name: aws
  runtime: nodejs20.x
  region: ap-southeast-1

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
\`\`\`

## Lambda Limits

\`\`\`
✅ Max execution: 15 minutes
✅ Memory: 128MB - 10GB
✅ Cold start: 100ms-1s (Node.js)
✅ Payload: 6MB (sync), 256KB (async)
✅ Concurrent executions: 1000 (default)
\`\`\`
  `,

  quiz: [
    { question: "Lambda handler?", options: ["Express route", "export const handler = async (event) => {}", "React component", "Database query"], correctAnswer: 1 },
    { question: "Lambda timeout max?", options: ["5 seconds", "15 minutes", "1 hour", "Unlimited"], correctAnswer: 1 }
  ],

  codeExamples: []
};
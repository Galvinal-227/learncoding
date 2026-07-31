export const chapter = {
  slug: "ci-cd-jenkins",
  title: "Jenkins",
  description: "Pahami Jenkins - CI/CD server paling populer untuk enterprise.",
  icon: "SiJenkins",
  color: "#D24939",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["ci-cd-introduction"],
  tags: ["ci-cd", "jenkins", "pipeline", "groovy"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Jenkins?

Jenkins adalah **self-hosted automation server** open-source. Paling populer di enterprise karena **sangat customizable** via plugins (1800+ plugins).

## Jenkinsfile (Pipeline as Code)

\`\`\`groovy
pipeline {
    agent any
    
    environment {
        NODE_VERSION = '20'
    }
    
    stages {
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
        
        stage('Install') {
            steps {
                sh 'npm ci'
            }
        }
        
        stage('Test') {
            steps {
                sh 'npm test'
            }
            post {
                success {
                    junit 'test-results.xml'
                }
            }
        }
        
        stage('Build') {
            steps {
                sh 'npm run build'
            }
        }
        
        stage('Deploy') {
            when { branch 'main' }
            steps {
                sh './deploy.sh'
            }
        }
    }
    
    post {
        failure {
            mail to: 'team@example.com',
                 subject: "Pipeline Failed: {env.JOB_NAME}",
                 body: "Check {env.BUILD_URL}"
        }
    }
}
\`\`\`

## Freestyle vs Pipeline

| Freestyle | Pipeline |
|-----------|----------|
| UI-based config | Code-based (Jenkinsfile) |
| Simple project | Complex workflow |
| Sulit version control | ✅ Version control |
| Manual reproduce | ✅ Reproducible |

## Jenkins vs GitHub Actions

| | Jenkins | GitHub Actions |
|---|---------|---------------|
| Hosting | Self-hosted | Cloud (SaaS) |
| Kustomisasi | Sangat tinggi (plugins) | Terbatas |
| Setup | Kompleks | Mudah (YAML) |
| Biaya | Infra sendiri | Free tier generous |
| Cocok | Enterprise | Semua (terutama OSS) |
  `,

  quiz: [
    { question: "Jenkins pipeline as code pakai file?", options: [".jenkins.yml", "Jenkinsfile", "jenkins.groovy", "pipeline.yml"], correctAnswer: 1 },
    { question: "Jenkins vs GitHub Actions?", options: ["Sama", "Jenkins: self-hosted enterprise; Actions: cloud SaaS", "Actions lebih mahal", "Jenkins deprecated"], correctAnswer: 1 }
  ],

  codeExamples: []
};
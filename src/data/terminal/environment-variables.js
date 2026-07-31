export const chapter = {
  slug: "environment-variables",
  title: "Environment Variables",
  description: "Mengelola environment variables untuk konfigurasi aplikasi.",
  icon: "SiTerminal",
  color: "#4D4D4D",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["terminal-introduction"],
  tags: ["terminal", "environment-variables", "config", "bash"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Environment Variables

Environment variables adalah nilai yang mempengaruhi perilaku proses di sistem operasi.

## Melihat Variables

\`\`\`bash
env
printenv
echo $PATH
echo $HOME
echo $USER
printenv PATH
printenv HOME
\`\`\`

## System Variables

### Common Variables
\`\`\`
PATH       # Lokasi executable
HOME       # Home directory
USER       # Current user
SHELL      # Default shell
PWD        # Current directory
OLDPWD     # Previous directory
TERM       # Terminal type
LANG       # Language
EDITOR     # Default editor
HOSTNAME   # System hostname
\`\`\`

### PATH
\`\`\`bash
echo $PATH
export PATH=$PATH:/path/to/add
export PATH=/new/path:$PATH
echo 'export PATH=$PATH:/usr/local/myapp/bin' >> ~/.bashrc
source ~/.bashrc
\`\`\`

## Men-set Variables

### Temporary
\`\`\`bash
export MY_VAR="Hello"
MY_VAR="World"
export VAR1=value1 VAR2=value2
MY_VAR=value command
\`\`\`

### Permanent
\`\`\`bash
sudo nano /etc/environment
# MY_GLOBAL_VAR=value

echo 'export MY_VAR="value"' >> ~/.bashrc
source ~/.bashrc

sudo nano /etc/profile
# export SYSTEM_VAR=value
\`\`\`

## Menghapus Variables

\`\`\`bash
unset MY_VAR
export -n MY_VAR
\`\`\`

## Variable Expansion

\`\`\`bash
echo HOME
echo {HOME}
echo {VAR:-default}
echo {VAR:=default}
echo {VAR:+alternative}
echo {#VAR}
echo {VAR:0:5}
echo {VAR/old/new}
echo {VAR//old/new}
echo {VAR#prefix}
echo {VAR%suffix}
echo {VAR,,}
echo {VAR^^}
\`\`\`

## .env Files

### Format
\`\`\`env
NODE_ENV=production
PORT=3000
DATABASE_URL=postgresql://user:pass@localhost:5432/db
API_KEY=secret-key-123
DEBUG=true
\`\`\`

### Loading .env
\`\`\`bash
source .env
export $(cat .env | xargs)
env $(cat .env | xargs) node app.js
npx dotenv -e .env node app.js
\`\`\`

### Node.js
\`\`\`javascript
require('dotenv').config()
console.log(process.env.PORT)
\`\`\`

## Security Best Practices

1. Never commit .env - Add to .gitignore
2. Use .env.example as template
3. Use different for each environment
4. Encrypt sensitive values
5. Limit access to variables
6. Use secrets management

## Example .env
\`\`\`env
# Server
NODE_ENV=development
PORT=3000
HOST=localhost

# Database
DB_HOST=localhost
DB_PORT=5432
DB_NAME=myapp
DB_USER=postgres
DB_PASSWORD=changeme

# API
API_KEY=your-api-key
API_URL=https://api.example.com

# Auth
JWT_SECRET=your-secret
JWT_EXPIRES_IN=7d

# Email
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-password
\`\`\`

## Best Practices

1. Gunakan uppercase untuk variable names
2. Gunakan consistent naming
3. Set defaults di code
4. Validate environment variables
5. Document semua required variables
6. Separate env files per environment
7. Never hardcode values di code
8. Gunakan secrets management untuk production
  `,
  quiz: [
    {
      question: "Perintah untuk melihat semua environment variables adalah?",
      options: ["ls", "env", "echo", "set"],
      correctAnswer: 1
    },
    {
      question: "Variable untuk home directory adalah?",
      options: ["$HOME", "$PWD", "$USER", "$PATH"],
      correctAnswer: 0
    },
    {
      question: "Cara men-set environment variable adalah?",
      options: ["set VAR=value", "export VAR=value", "var=value", "env VAR=value"],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Environment Variables Examples",
      code: `// 1. BASIC OPERATIONS
env
printenv
echo $PATH
echo $HOME
echo $USER
export MY_VAR="Hello World"
echo $MY_VAR
MY_VAR=test node app.js
unset MY_VAR

// 2. PATH MANAGEMENT
echo $PATH
export PATH=$PATH:/usr/local/myapp/bin
echo 'export PATH=$PATH:/usr/local/myapp/bin' >> ~/.bashrc
source ~/.bashrc
export PATH={PATH//\\/usr\\/local\\/myapp\\/bin:/}
which myapp

// 3. .env FILE
cat > .env << EOF
NODE_ENV=development
PORT=3000
DATABASE_URL=postgresql://localhost:5432/myapp
API_KEY=secret-123
DEBUG=true
EOF

set -a; source .env; set +a
export $(cat .env | xargs)

// 4. NODE.JS WITH .env
npm install dotenv

// index.js
require('dotenv').config()
console.log('NODE_ENV:', process.env.NODE_ENV)
console.log('PORT:', process.env.PORT)

// 5. VALIDATION
function check_env() {
    required_vars=("NODE_ENV" "DATABASE_URL" "API_KEY")
    for var in "{required_vars[@]}"; do
        if [ -z "{!var}" ]; then
            echo "Error: $var not set"
            exit 1
        fi
    done
}
check_env

PORT="{PORT:-3000}"
NODE_ENV="{NODE_ENV:-development}"

// 6. ENVIRONMENT FILES
cat > .env.development << EOF
NODE_ENV=development
DEBUG=true
PORT=3000
EOF

cat > .env.production << EOF
NODE_ENV=production
DEBUG=false
PORT=8080
EOF

if [ "$NODE_ENV" = "production" ]; then
    export $(cat .env.production | xargs)
else
    export $(cat .env.development | xargs)
fi

// 7. DOCKER EXAMPLES
# Dockerfile
ENV NODE_ENV=production
ENV PORT=3000

# docker-compose.yml
environment:
  - NODE_ENV=production
  - PORT=3000
  - DATABASE_URL={DB_URL}
env_file:
  - .env

docker run --env-file .env node:18 node app.js

// 8. CI/CD
# GitHub Actions
env:
  NODE_ENV: production
  API_KEY: {{ secrets.API_KEY }}

# GitLab CI
variables:
  NODE_ENV: production
  API_KEY: $API_KEY

// 9. TEMPLATE FOR PROJECT
cat > .env.example << EOF
NODE_ENV=development
PORT=3000
HOST=localhost
DB_HOST=localhost
DB_PORT=5432
DB_NAME=myapp
DB_USER=postgres
DB_PASSWORD=changeme
API_KEY=your-api-key
API_URL=https://api.example.com
JWT_SECRET=your-secret-here
JWT_EXPIRES_IN=7d
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-password
EOF

echo ".env" >> .gitignore

// 10. USEFUL FUNCTIONS
load_env() {
    if [ -f .env ]; then
        export $(cat .env | grep -v '^#' | xargs)
    fi
}

print_env() {
    env | sort
}

var_exists() {
    [ -z "{!1}" ] && echo "false" || echo "true"
}

load_env
print_env
var_exists "NODE_ENV"`,
      language: "bash"
    }
  ]
};
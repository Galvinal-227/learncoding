export const chapter = {
  slug: "linux-shell-scripting",
  title: "Shell Scripting",
  description: "Tulis bash script untuk otomatisasi tugas.",
  icon: "SiLinux",
  color: "#FCC624",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["linux-commands"],
  tags: ["linux", "bash", "scripting", "automation"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Basic Script

\`\`\`bash
#!/bin/bash
# deploy.sh

set -e  # Exit on error

APP_DIR="/var/www/myapp"
echo "Deploying to $APP_DIR..."

cd $APP_DIR
git pull origin main
npm ci --production
pm2 restart myapp

echo "Deploy complete!"
\`\`\`

\`\`\`bash
chmod +x deploy.sh
./deploy.sh
\`\`\`

## Variables

\`\`\`bash
NAME="Budi"
echo "Hello $NAME"
echo "Path: {HOME}/projects"

# Command substitution
NOW=$(date +%Y-%m-%d)
echo "Today: $NOW"
\`\`\`

## Conditionals

\`\`\`bash
if [ "$NODE_ENV" = "production" ]; then
    echo "Production mode"
else
    echo "Development mode"
fi

# File check
if [ -f "config.json" ]; then
    echo "Config exists"
fi

if [ ! -d "node_modules" ]; then
    npm install
fi
\`\`\`

## Loops

\`\`\`bash
for i in {1..5}; do
    echo "Iteration $i"
done

for file in *.txt; do
    echo "Processing $file"
done

while true; do
    sleep 1
done
\`\`\`

## Functions

\`\`\`bash
function deploy() {
    local app=$1
    echo "Deploying $app..."
    cd /var/www/$app
    git pull
    npm ci
    pm2 restart $app
}

deploy myapp
\`\`\`

## Cron Jobs

\`\`\`bash
# Edit crontab
crontab -e

# Format: minute hour day month day-of-week command
# Backup setiap hari jam 2 pagi
0 2 * * * /home/user/backup.sh

# Cleanup setiap minggu
0 0 * * 0 rm -rf /tmp/*

# List cron jobs
crontab -l
\`\`\`
  `,

  quiz: [
    { question: "Shebang?", options: ["//comment", "#!/bin/bash", "#include", "<!-- -->"], correctAnswer: 1 },
    { question: "Cron: setiap hari jam 2 pagi?", options: ["2 * * * *", "0 2 * * *", "* * 2 * *", "* 2 0 * *"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Server Setup Script",
      language: "bash",
      code: `#!/bin/bash
set -e

echo "=== Server Setup ==="

# Update
sudo apt update && sudo apt upgrade -y

# Install packages
sudo apt install -y git curl nginx

# Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# PM2
npm install -g pm2

# Create app directory
sudo mkdir -p /var/www/myapp
sudo chown -R $USER:$USER /var/www/myapp

echo "=== Setup Complete ==="`
    }
  ]
};
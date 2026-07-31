export const chapter = {
  slug: "scripting",
  title: "Scripting",
  description: "Membuat script bash untuk otomatisasi tugas.",
  icon: "SiTerminal",
  color: "#4D4D4D",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["terminal-introduction", "terminal-basic-commands"],
  tags: ["terminal", "scripting", "bash", "automation"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Bash Script?

Bash script adalah file teks berisi perintah bash yang bisa dijalankan untuk otomatisasi tugas.

## Dasar Script

### Shebang
\`\`\`bash
#!/bin/bash
#!/usr/bin/env bash
\`\`\`

### Hello World
\`\`\`bash
#!/bin/bash
echo "Hello World"
\`\`\`

### Menjalankan Script
\`\`\`bash
chmod +x script.sh
./script.sh
bash script.sh
sh script.sh
\`\`\`

## Variables

\`\`\`bash
#!/bin/bash
name="John"
age=25
echo "My name is $name and I am $age years old"

# Read input
read -p "Enter your name: " name
echo "Hello $name"

# Command substitution
date=$(date)
echo "Today is $date"

# Environment variables
echo "User: $USER"
echo "Home: $HOME"
\`\`\`

## Conditional

### If Statement
\`\`\`bash
#!/bin/bash
if [ condition ]; then
    # code
elif [ condition ]; then
    # code
else
    # code
fi
\`\`\`

### Contoh
\`\`\`bash
#!/bin/bash
read -p "Enter a number: " num

if [ $num -gt 10 ]; then
    echo "Number is greater than 10"
elif [ $num -eq 10 ]; then
    echo "Number is exactly 10"
else
    echo "Number is less than 10"
fi
\`\`\`

### File Tests
\`\`\`bash
#!/bin/bash
file="test.txt"

if [ -f "$file" ]; then
    echo "File exists"
fi

if [ -d "folder" ]; then
    echo "Directory exists"
fi

if [ -x "script.sh" ]; then
    echo "Script is executable"
fi

if [ -r "file.txt" ]; then
    echo "File is readable"
fi
\`\`\`

### String Tests
\`\`\`bash
#!/bin/bash
str1="hello"
str2="hello"

if [ "$str1" = "$str2" ]; then
    echo "Strings are equal"
fi

if [ -z "$var" ]; then
    echo "Variable is empty"
fi

if [ -n "$var" ]; then
    echo "Variable is not empty"
fi
\`\`\`

### Numerical Tests
\`\`\`bash
#!/bin/bash
num1=10
num2=20

if [ $num1 -eq $num2 ]; then echo "Equal"; fi
if [ $num1 -ne $num2 ]; then echo "Not equal"; fi
if [ $num1 -gt $num2 ]; then echo "Greater than"; fi
if [ $num1 -lt $num2 ]; then echo "Less than"; fi
if [ $num1 -ge $num2 ]; then echo "Greater or equal"; fi
if [ $num1 -le $num2 ]; then echo "Less or equal"; fi
\`\`\`

## Loops

### For Loop
\`\`\`bash
#!/bin/bash
# List
for item in apple banana orange; do
    echo "Fruit: $item"
done

# Range
for i in {1..5}; do
    echo "Number: $i"
done

# Files
for file in *.txt; do
    echo "Processing $file"
done

# C-style
for ((i=0; i<10; i++)); do
    echo "i = $i"
done
\`\`\`

### While Loop
\`\`\`bash
#!/bin/bash
count=1
while [ $count -le 5 ]; do
    echo "Count: $count"
    ((count++))
done

# Read file line by line
while read line; do
    echo "Line: $line"
done < file.txt
\`\`\`

## Functions

\`\`\`bash
#!/bin/bash
# Define function
function greet() {
    echo "Hello, $1!"
}

# Call function
greet "John"

# Function with return
function add() {
    result=$(( $1 + $2 ))
    echo $result
}

sum=$(add 5 10)
echo "Sum: $sum"

# Function with global variable
global_var="Hello"
function change() {
    global_var="World"
}
change
echo $global_var
\`\`\`

## Exit Codes

\`\`\`bash
#!/bin/bash
echo "Success"
exit 0

echo "Error"
exit 1

# Check exit code
command
if [ $? -eq 0 ]; then
    echo "Success"
else
    echo "Failed"
fi
\`\`\`

## Contoh Scripts

### Backup Script
\`\`\`bash
#!/bin/bash
# Backup script
source_dir="/path/to/source"
backup_dir="/path/to/backup"
date=$(date +%Y%m%d)
backup_file="$backup_dir/backup_$date.tar.gz"

echo "Creating backup..."
tar -czf $backup_file $source_dir

if [ $? -eq 0 ]; then
    echo "Backup created: $backup_file"
else
    echo "Backup failed!"
    exit 1
fi
\`\`\`

### Deployment Script
\`\`\`bash
#!/bin/bash
# Deployment script
echo "Deploying application..."

# Pull latest code
git pull origin main

# Install dependencies
npm install

# Build application
npm run build

# Restart service
pm2 restart app

echo "Deployment complete!"
\`\`\`

### Log Cleaner
\`\`\`bash
#!/bin/bash
# Clean old logs
log_dir="/var/log/myapp"
days=30

echo "Cleaning logs older than $days days..."
find $log_dir -name "*.log" -mtime +$days -delete

echo "Log cleanup complete!"
\`\`\`

## Best Practices

1. Gunakan shebang #!/bin/bash
2. Beri komentar pada script
3. Gunakan exit codes yang tepat
4. Handle errors
5. Gunakan variables dengan uppercase
6. Test script sebelum dijalankan
7. Gunakan set -e untuk error handling
8. Jangan hardcode path
9. Gunakan functions untuk modularity
10. Validasi input
  `,
  quiz: [
    {
      question: "Shebang untuk bash script adalah?",
      options: ["#!/bin/sh", "#!/bin/bash", "#!/usr/bin/bash", "#!bash"],
      correctAnswer: 1
    },
    {
      question: "Perintah untuk menjalankan script bash adalah?",
      options: ["./script.sh", "bash script.sh", "sh script.sh", "Semua di atas"],
      correctAnswer: 3
    },
    {
      question: "Kondisi untuk cek file exists di bash adalah?",
      options: ["-e", "-f", "-d", "-x"],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete Script Examples",
      code: `// 1. PROJECT SETUP SCRIPT
#!/bin/bash
# setup.sh - Project setup automation

echo "Setting up project..."

# Create directory structure
mkdir -p src/{components,utils,styles}
mkdir -p tests
mkdir -p docs

# Initialize git
git init

# Create files
echo "# Project Name" > README.md
echo "node_modules/" > .gitignore
echo "{}" > package.json

# Install dependencies
npm init -y
npm install express
npm install -D nodemon jest

echo "Setup complete!"

// 2. DEPLOYMENT SCRIPT
#!/bin/bash
# deploy.sh - Deployment automation

set -e  # Exit on error

echo "Starting deployment..."

# Variables
APP_DIR="/var/www/myapp"
BACKUP_DIR="/var/backups"

# Backup current version
echo "Creating backup..."
tar -czf "$BACKUP_DIR/backup_$(date +%Y%m%d_%H%M%S).tar.gz" $APP_DIR

# Pull latest code
echo "Pulling latest code..."
cd $APP_DIR
git pull origin main

# Install dependencies
echo "Installing dependencies..."
npm install --production

# Build application
echo "Building application..."
npm run build

# Restart service
echo "Restarting service..."
pm2 restart myapp

echo "Deployment complete!"

// 3. BACKUP SCRIPT
#!/bin/bash
# backup.sh - Automated backup

SOURCE_DIR="/home/user/projects"
BACKUP_DIR="/backups"
DATE=$(date +%Y%m%d)
BACKUP_FILE="backup_$DATE.tar.gz"
LOG_FILE="/var/log/backup.log"

log_message() {
    echo "$(date): $1" >> $LOG_FILE
}

log_message "Starting backup..."

if [ ! -d "$BACKUP_DIR" ]; then
    mkdir -p $BACKUP_DIR
    log_message "Created backup directory"
fi

tar -czf "$BACKUP_DIR/$BACKUP_FILE" $SOURCE_DIR 2>> $LOG_FILE

if [ $? -eq 0 ]; then
    log_message "Backup successful: $BACKUP_FILE"
    
    # Remove old backups (keep 30 days)
    find $BACKUP_DIR -name "*.tar.gz" -mtime +30 -delete
    log_message "Removed old backups"
else
    log_message "Backup failed!"
    exit 1
fi

log_message "Backup complete"

// 4. LOG CLEANER
#!/bin/bash
# clean-logs.sh - Clean old log files

LOG_DIR="/var/log/myapp"
DAYS_TO_KEEP=30
LOG_FILE="/var/log/cleanup.log"

log() {
    echo "$(date): $1" >> $LOG_FILE
}

log "Starting log cleanup..."

if [ ! -d "$LOG_DIR" ]; then
    log "Error: Log directory $LOG_DIR does not exist"
    exit 1
fi

FILES_REMOVED=$(find $LOG_DIR -name "*.log" -mtime +$DAYS_TO_KEEP -type f)

if [ -z "$FILES_REMOVED" ]; then
    log "No old log files found"
else
    find $LOG_DIR -name "*.log" -mtime +$DAYS_TO_KEEP -type f -delete
    log "Removed old log files:"
    echo "$FILES_REMOVED" >> $LOG_FILE
fi

log "Log cleanup complete"

// 5. DATABASE BACKUP
#!/bin/bash
# db-backup.sh - Database backup

DB_NAME="myapp"
DB_USER="postgres"
BACKUP_DIR="/backups/db"
DATE=$(date +%Y%m%d_%H%M%S)
BACKUP_FILE="$BACKUP_DIR/$DB_NAME_$DATE.sql.gz"

# Create backup directory
mkdir -p $BACKUP_DIR

# Backup database
echo "Starting database backup..."
pg_dump -U $DB_USER $DB_NAME | gzip > $BACKUP_FILE

if [ $? -eq 0 ]; then
    echo "Backup successful: $BACKUP_FILE"
    # Keep last 7 backups
    ls -t $BACKUP_DIR/*.sql.gz | tail -n +8 | xargs -r rm
else
    echo "Backup failed!"
    exit 1
fi

// 6. ENVIRONMENT SETUP
#!/bin/bash
# env-setup.sh - Environment setup

ENV=$1

if [ -z "$ENV" ]; then
    echo "Usage: ./env-setup.sh [dev|staging|prod]"
    exit 1
fi

case $ENV in
    dev)
        echo "Setting up development environment..."
        export NODE_ENV=development
        export DEBUG=true
        ;;
    staging)
        echo "Setting up staging environment..."
        export NODE_ENV=staging
        export DEBUG=false
        ;;
    prod)
        echo "Setting up production environment..."
        export NODE_ENV=production
        export DEBUG=false
        ;;
    *)
        echo "Invalid environment: $ENV"
        exit 1
        ;;
esac

echo "Environment set to: $ENV"
echo "NODE_ENV: $NODE_ENV"`,
      language: "bash"
    }
  ]
};
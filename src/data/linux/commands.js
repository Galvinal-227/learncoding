export const chapter = {
  slug: "linux-commands",
  title: "Basic Commands",
  description: "Kuasai perintah dasar Linux: navigasi, file, text processing.",
  icon: "SiLinux",
  color: "#FCC624",
  difficulty: "Beginner",
  estimatedReadingTime: 25,
  prerequisites: ["linux-introduction"],
  tags: ["linux", "commands", "terminal", "bash"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Navigasi

\`\`\`bash
pwd                     # Current directory
ls                      # List files
ls -la                  # List + hidden + details
cd /path                # Change directory
cd ..                   # Up one level
cd ~                    # Home directory
cd -                    # Previous directory
\`\`\`

## File Operations

\`\`\`bash
# Create
mkdir folder            # Create directory
touch file.txt          # Create empty file
echo "hello" > file.txt # Write to file
echo "world" >> file.txt # Append to file

# Copy & Move
cp source dest          # Copy
cp -r folder dest       # Copy recursively
mv source dest          # Move/rename

# Delete
rm file.txt             # Delete file
rm -r folder            # Delete folder
rm -rf folder           # Force delete (HATI-HATI!)

# Read
cat file.txt            # Print entire file
less file.txt           # Scrollable view
head -n 10 file.txt     # First 10 lines
tail -n 10 file.txt     # Last 10 lines
tail -f log.txt         # Follow live updates
\`\`\`

## File Information

\`\`\`bash
file file.txt           # File type
stat file.txt           # File statistics
wc -l file.txt          # Count lines
du -sh folder           # Disk usage
df -h                   # Free disk space
\`\`\`

## Text Processing

\`\`\`bash
grep "pattern" file     # Search text
grep -r "pattern" .     # Recursive search
grep -v "exclude"       # Exclude pattern
grep -i "case"          # Case insensitive

sed 's/old/new/g' file  # Replace text
awk '{print $1}' file   # Print first column

sort file.txt           # Sort lines
uniq                    # Remove duplicates
sort | uniq -c          # Count occurrences
\`\`\`

## Pipes & Redirection

\`\`\`bash
# Pipe (output → input)
ls | grep ".txt"
cat file.txt | grep "error" | wc -l

# Redirection
command > file.txt      # Overwrite
command >> file.txt     # Append
command 2> errors.txt   # Error output
command &> all.txt      # All output
\`\`\`

## System Info

\`\`\`bash
uname -a                # System info
whoami                  # Current user
hostname                # Host name
date                    # Current date/time
uptime                  # System uptime
free -h                 # Memory usage
top / htop              # Process monitor
df -h                   # Disk usage
\`\`\`

## Shortcuts

\`\`\`bash
Ctrl+C      # Cancel/terminate
Ctrl+Z      # Suspend
Ctrl+D      # Exit/logout
Ctrl+L      # Clear screen
Ctrl+R      # Search history
Tab         # Auto-complete
!!          # Repeat last command
!$          # Last argument
\`\`\`
  `,

  quiz: [
    { question: "ls -la?", options: ["List only", "List + hidden + details", "Delete files", "Create files"], correctAnswer: 1 },
    { question: "grep?", options: ["Create", "Search text", "Delete", "Move"], correctAnswer: 1 },
    { question: "chmod +x?", options: ["Delete", "Make executable", "Read only", "Copy"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Common Command Pipeline",
      language: "bash",
      code: `# Find top 5 largest files
du -sh * | sort -rh | head -5

# Count error occurrences in logs
grep "ERROR" app.log | wc -l

# Find files modified in last 7 days
find . -type f -mtime -7

# Kill process by name
pkill -f "node server.js"

# Check which process uses port 3000
lsof -i :3000`
    }
  ]
};
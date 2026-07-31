export const chapter = {
  slug: "file-system",
  title: "File System",
  description: "Mengelola file dan direktori di terminal.",
  icon: "SiTerminal",
  color: "#4D4D4D",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["terminal-introduction", "terminal-basic-commands"],
  tags: ["terminal", "file-system", "files", "directories"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## File System di Linux

## Struktur Direktori

### Root Directories
\`\`\`
/         # Root directory
├── bin   # Binary executables
├── boot  # Boot files
├── dev   # Device files
├── etc   # Configuration files
├── home  # User home directories
├── lib   # Libraries
├── media # Mount points
├── mnt   # Mount points
├── opt   # Optional software
├── proc  # Process info
├── root  # Root user home
├── sbin  # System binaries
├── tmp   # Temporary files
├── usr   # User programs
└── var   # Variable data
\`\`\`

## File Types

### Types
\`\`\`bash
ls -l
# - Regular file
# d Directory
# l Symbolic link
# c Character device
# b Block device
# s Socket
# p Pipe
\`\`\`

### Hidden Files
\`\`\`bash
.hidden-file
.gitignore
.bashrc
ls -a
ls -la
\`\`\`

## File Operations

### Create Files
\`\`\`bash
touch file.txt
echo "Hello" > file.txt
cat > file.txt
touch file1.txt file2.txt file3.txt
touch -t 202401011200 file.txt
\`\`\`

### View Files
\`\`\`bash
cat file.txt
less file.txt
more file.txt
cat -n file.txt
nl file.txt
head file.txt
head -n 20 file.txt
tail file.txt
tail -n 20 file.txt
tail -f file.txt
file file.txt
stat file.txt
\`\`\`

### Copy Files
\`\`\`bash
cp source.txt dest.txt
cp -i source.txt dest.txt
cp -v source.txt dest.txt
cp -r source/ dest/
cp -a source/ dest/
cp file1.txt file2.txt dest/
\`\`\`

### Move Files
\`\`\`bash
mv old.txt new.txt
mv file.txt folder/
mv *.txt folder/
mv -i file.txt folder/
mv -v file.txt folder/
\`\`\`

### Delete Files
\`\`\`bash
rm file.txt
rm -i file.txt
rm -r folder/
rm -rf folder/
rm *.txt
rm file1.txt file2.txt
trash-put file.txt
\`\`\`

## Directory Operations

### Create Directories
\`\`\`bash
mkdir folder
mkdir -p parent/child
mkdir -m 755 folder
mkdir -v folder
\`\`\`

### List Directories
\`\`\`bash
ls
ls -l
ls -la
ls -lh
ls -lt
ls -lS
ls -d */
ls -l | grep "^d"
ls -R
\`\`\`

## File Metadata

### Permissions
\`\`\`bash
ls -l
chmod 755 file.sh
chmod +x file.sh
chmod 644 file.txt
chown user:group file
chown -R user:group folder/
chgrp group file
\`\`\`

### Timestamps
\`\`\`bash
stat file.txt
ls -l --time-style=full-iso
touch file.txt
touch -t 202401011200 file.txt
touch -d "2024-01-01" file.txt
touch -a file.txt
touch -m file.txt
\`\`\`

## File Content Manipulation

### Search
\`\`\`bash
grep "text" file.txt
grep -i "text" file.txt
grep -r "text" ./
grep -n "text" file.txt
find . -name "*.txt"
find . -type f -size +1M
find . -mtime -7
locate file.txt
updatedb
\`\`\`

### Edit
\`\`\`bash
nano file.txt
# Ctrl+O Save
# Ctrl+X Exit

vim file.txt
# i Insert mode
# Esc Normal mode
# :wq Save and quit
# :q! Quit without save

sed 's/old/new/g' file.txt
sed -i 's/old/new/g' file.txt
awk '{print $1}' file.txt
awk -F',' '{print $1,$3}' file.csv
\`\`\`

## Links

### Hard Links
\`\`\`bash
ln target link_name
ln file.txt hardlink.txt
\`\`\`

### Symbolic Links
\`\`\`bash
ln -s target link_name
ln -s /path/to/file symlink.txt
ls -l
readlink symlink.txt
readlink -f symlink.txt
\`\`\`

## Disk Usage

\`\`\`bash
df -h
df -h /home
du -sh folder/
du -h --max-depth=1
du -sh *
find . -type f -exec ls -lh {} + | sort -rh | head -10
du -sh * | sort -rh | head -10
df -h /
\`\`\`

## Best Practices

1. Hati-hati dengan rm -rf - Tidak bisa undo
2. Gunakan -i untuk konfirmasi
3. Backup file penting sebelum edit
4. Gunakan version control untuk kode
5. Simpan di home untuk file personal
6. Gunakan /tmp untuk file temporary
7. Jangan delete file sistem
8. Perhatikan permissions
  `,
  quiz: [
    {
      question: "Perintah untuk membuat file kosong adalah?",
      options: ["create", "touch", "new", "mkfile"],
      correctAnswer: 1
    },
    {
      question: "Perintah untuk melihat isi file secara real-time adalah?",
      options: ["cat -f", "tail -f", "head -f", "less -f"],
      correctAnswer: 1
    },
    {
      question: "Symbolic link dibuat dengan?",
      options: ["ln", "ln -s", "ln -h", "link"],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "File System Examples",
      code: `// 1. CREATE PROJECT STRUCTURE
mkdir -p ~/projects/my-app
cd ~/projects/my-app
mkdir -p {src,tests,docs,scripts,config}
mkdir -p src/{components,utils,styles,assets}
mkdir -p src/components/{common,features}
mkdir -p docs/{api,guides}
touch README.md package.json .gitignore
touch src/index.js src/components/App.js
touch config/{development,production}.json
echo "# My App" > README.md
echo "console.log('Hello World')" > src/index.js

// 2. COPY AND MOVE
cp src/index.js src/index.backup.js
cp -r src/ backup_src/
mv src/index.backup.js tests/
mv config/development.json config/local.json
mv README.md README-old.md
mv README-old.md README.md

// 3. SEARCH AND FIND
find . -name "*.js"
grep -r "import" src/
find . -type f -size +1M -exec ls -lh {} +
find . -type f -mtime -1
find . -type f -mmin -60

// 4. FILE PERMISSIONS
chmod +x scripts/*.sh
chmod 755 src/
chmod 755 scripts/
chmod 644 *.md
chmod 644 *.js
sudo chown -R $USER:$USER ~/projects

// 5. SYMLINKS
ln -s ../node_modules ./src/node_modules
ln -s config/development.json config.json
ls -la | grep "->"
find . -type l ! -exec test -e {} \\; -print

// 6. DISK USAGE
df -h
df -h ~/projects
du -sh ~/projects
du -sh * | sort -rh | head -10
du -h --max-depth=1 | sort -rh

// 7. BATCH OPERATIONS
for file in *.txt; do mv "$file" "{file%.txt}.md"; done
find . -name "*.log" -type f -delete
find . -name "*.sh" -exec chmod +x {} \\;
find . -name "*.txt" -exec sed -i 's/old/new/g' {} +

// 8. FILE MONITORING
watch -n 1 ls -la
tail -f logs/app.log
inotifywait -m . -e create -e modify

// 9. SYMLINK MANAGEMENT
ln -s /mnt/shared shared
ln -s /usr/local/bin/node node
ln -s /usr/bin/python3 python

// 10. CLEANUP
find . -name "*.log" -mtime +30 -delete
rm -rf node_modules
rm -rf /tmp/*
find . -type d -empty -delete
sudo apt autoclean
sudo apt autoremove
docker system prune -f`,
      language: "bash"
    }
  ]
};
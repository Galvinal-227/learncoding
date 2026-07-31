export const chapter = {
  slug: "basic-commands",
  title: "Basic Commands",
  description: "Perintah dasar terminal yang wajib diketahui setiap developer.",
  icon: "SiTerminal",
  color: "#4D4D4D",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["terminal-introduction"],
  tags: ["terminal", "commands", "basic", "bash"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Perintah Dasar Terminal

## 1. Informasi Sistem

\`\`\`bash
uname -a
lsb_release -a
hostname
whoami
who
date
cal
uptime
free -h
df -h
ps aux
top
htop
\`\`\`

## 2. Manajemen File

\`\`\`bash
ls
ls -l
ls -a
ls -la
ls *.txt

touch file.txt

cat file.txt
less file.txt
head file.txt
tail file.txt

cp source.txt destination.txt
cp -r folder/ backup/

mv old.txt new.txt
mv file.txt folder/

rm file.txt
rm -r folder/
rm -rf folder/

ln -s target link_name
ln target link_name
\`\`\`

## 3. Manajemen Direktori

\`\`\`bash
mkdir folder
mkdir -p parent/child

rmdir folder
rm -r folder

cd folder
cd ..
cd ~
cd /
cd -

pwd
\`\`\`

## 4. Pencarian

\`\`\`bash
find /path -name "file.txt"
find . -name "*.js"
find . -type d
find . -type f

grep "text" file.txt
grep -r "text" .
grep -i "text"
grep -n "text"

history
history | grep "git"

which node
whereis node
\`\`\`

## 5. I/O Redirection

\`\`\`bash
echo "Hello" > file.txt
echo "World" >> file.txt

sort < file.txt

ls -la | grep ".txt"
cat file.txt | wc -l
ps aux | grep node

command 2> error.log
command > output.log 2>&1
\`\`\`

## 6. Permissions

\`\`\`bash
ls -l

chmod 755 file.sh
chmod +x file.sh
chmod 644 file.txt

chown user:group file
chown -R user:group folder/

chgrp group file
\`\`\`

## 7. Proses

\`\`\`bash
ps
ps aux
ps -ef

kill PID
kill -9 PID
killall process_name

command &
jobs
fg %1
bg %1

nice -n 10 command
renice 10 PID
\`\`\`

## 8. Network

\`\`\`bash
ping google.com
ping -c 4 google.com

ifconfig
ip addr
netstat -tuln
ss -tuln

curl https://example.com
wget https://example.com/file.zip

nslookup google.com
dig google.com

traceroute google.com
\`\`\`

## 9. Archive & Compression

\`\`\`bash
tar -cvf archive.tar folder/
tar -xvf archive.tar
tar -czvf archive.tar.gz folder/
tar -xzvf archive.tar.gz

zip -r archive.zip folder/
unzip archive.zip

gzip file.txt
gunzip file.txt.gz
\`\`\`

## Cheat Sheet

| Perintah | Fungsi |
|----------|--------|
| pwd | Print working directory |
| ls | List files |
| cd | Change directory |
| mkdir | Make directory |
| rm | Remove file/dir |
| cp | Copy file/dir |
| mv | Move/rename |
| cat | View file |
| grep | Search in file |
| find | Find files |
| chmod | Change permissions |
| chown | Change owner |
| ps | Process status |
| kill | Kill process |
| ping | Network test |
| curl | HTTP client |
| tar | Archive |
| zip | Compress |
  `,
  quiz: [
    {
      question: "Perintah untuk melihat isi file adalah?",
      options: ["ls", "cat", "pwd", "cd"],
      correctAnswer: 1
    },
    {
      question: "Perintah untuk mencari teks di file adalah?",
      options: ["find", "grep", "search", "locate"],
      correctAnswer: 1
    },
    {
      question: "Perintah untuk mengubah permission adalah?",
      options: ["chmod", "chown", "chgrp", "permission"],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Command Examples",
      code: `// 1. FILE OPERATIONS
mkdir -p project/{src,tests,docs}
mkdir -p project/src/{components,utils,styles}

touch project/src/index.js
touch project/src/components/App.js
touch project/README.md

cp project/src/index.js project/src/index.backup.js
mv project/src/index.backup.js project/tests/

cat project/README.md
head -n 20 project/README.md
tail -n 10 project/README.md

grep -r "import" project/src/

// 2. PERMISSIONS
chmod +x script.sh
chmod 755 script.sh
chmod 644 file.txt

sudo chown user:group file.txt
sudo chown -R user:group project/

// 3. REDIRECTION
ls -la > file-list.txt
echo "Hello World" >> file-list.txt

ls -la | grep ".js" | wc -l
ps aux | grep node | awk '{print $2}'

mkdir backup && cp -r project/ backup/

// 4. PROCESS MANAGEMENT
npm start &
ps aux | grep node
kill -9 PID
top
htop

// 5. NETWORK
ping -c 4 google.com
curl -O https://example.com/file.zip
wget https://example.com/file.zip
netstat -tuln
ss -tuln

// 6. ARCHIVE
tar -czvf project.tar.gz project/
tar -xzvf project.tar.gz
zip -r project.zip project/
unzip project.zip

// 7. SEARCH
find . -name "*.js"
find . -type f -size +1M
find . -name "*.log" -delete
grep -r "TODO" .
grep -r "error" --include="*.log" .

// 8. SYSTEM INFO
uname -a
cat /etc/os-release
df -h
free -h
lscpu
lsblk
lspci

// 9. TEXT MANIPULATION
wc -l file.txt
sort file.txt
sort -n file.txt
uniq file.txt
sort file.txt | uniq
cut -d',' -f1 file.csv
cut -c1-10 file.txt
awk '{print $1}' file.txt
awk -F',' '{print $1,$3}' file.csv

// 10. USEFUL COMBINATIONS
find . -type f -exec ls -lh {} + | sort -rh | head -10
find . -name "*.js" -exec cat {} + | wc -l
find . -name "*.txt" -exec sed -i 's/old/new/g' {} +
tail -f /var/log/syslog
du -sh *
du -h --max-depth=1
sudo lsof -i -P -n | grep LISTEN`,
      language: "bash"
    }
  ]
};
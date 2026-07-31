export const chapter = {
  slug: "permissions",
  title: "Permissions",
  description: "Memahami dan mengelola permission file di Linux/Unix.",
  icon: "SiTerminal",
  color: "#4D4D4D",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["terminal-introduction", "terminal-file-system"],
  tags: ["terminal", "permissions", "chmod", "chown"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Permission di Linux

## Dasar Permission

### User Types
\`\`\`
Owner (u) - User yang memiliki file
Group (g) - Group yang memiliki file
Others (o) - Semua user lain
All (a) - u + g + o
\`\`\`

### Permission Types
\`\`\`
r (read)    - 4
w (write)   - 2
x (execute) - 1
- (no permission) - 0
\`\`\`

### Permission Format
\`\`\`bash
ls -l file.txt
# -rw-r--r-- 1 user group 1234 Jan 1 10:00 file.txt
#
# - = file type
# rw- = owner (read, write)
# r-- = group (read)
# r-- = others (read)
\`\`\`

## Numeric Permissions (Octal)

### Perhitungan
\`\`\`
r = 4
w = 2
x = 1

rwx = 4+2+1 = 7
rw- = 4+2+0 = 6
r-- = 4+0+0 = 4
--- = 0+0+0 = 0
\`\`\`

### Common Permissions
\`\`\`
755 = rwxr-xr-x (dir, executables)
644 = rw-r--r-- (files)
777 = rwxrwxrwx (all access - dangerous)
600 = rw------- (private files)
700 = rwx------ (private dir)
\`\`\`

## chmod (Change Mode)

### Symbolic Mode
\`\`\`bash
chmod u+x file.sh
chmod g+w file.txt
chmod o+r file.txt
chmod a+x file.sh

chmod u-x file.sh
chmod g-w file.txt
chmod o-r file.txt

chmod u=rwx file.sh
chmod g=rx file.txt
chmod o=r file.txt

chmod u+rwx,g+rx,o+r file.sh
\`\`\`

### Numeric Mode
\`\`\`bash
chmod 755 script.sh
chmod 644 file.txt
chmod 700 private.sh
chmod 600 secret.txt

chmod -R 755 folder/
chmod -R 644 folder/*

chmod --reference=file1.txt file2.txt
\`\`\`

## chown (Change Owner)

### Change Owner
\`\`\`bash
chown user file.txt
chown user:group file.txt
chown :group file.txt

chown -R user:group folder/

chown --reference=file1.txt file2.txt

sudo chown user:group file.txt
\`\`\`

## chgrp (Change Group)

\`\`\`bash
chgrp group file.txt
chgrp -R group folder/
chgrp --reference=file1.txt file2.txt
sudo chgrp group file.txt
\`\`\`

## Special Permissions

### SUID (Set User ID)
\`\`\`bash
chmod u+s file
chmod 4755 file
# -rwsr-xr-x
\`\`\`

### SGID (Set Group ID)
\`\`\`bash
chmod g+s file
chmod 2755 file
# -rwxr-sr-x
\`\`\`

### Sticky Bit
\`\`\`bash
chmod +t directory
chmod 1755 directory
# drwxrwxrwt
\`\`\`

## Default Permissions (umask)

\`\`\`bash
umask
umask 0022
umask 0002
# Files: 666 - umask
# Dirs: 777 - umask
# Example umask 0022:
# Files: 666 - 022 = 644 (rw-r--r--)
# Dirs: 777 - 022 = 755 (rwxr-xr-x)
\`\`\`

## ACL (Access Control Lists)

\`\`\`bash
sudo apt install acl
getfacl file.txt
setfacl -m u:user:rwx file.txt
setfacl -m g:group:rx file.txt
setfacl -m u:user:rwx folder/
setfacl -x u:user file.txt
setfacl -b file.txt
setfacl -R -m u:user:rwx folder/
\`\`\`

## Best Practices

### Security
1. Principle of least privilege - Minimal permission
2. Never use 777 - Kecuali benar-benar perlu
3. Use 755 for directories - Executable needed to enter
4. Use 644 for files - Read for all, write for owner
5. Private files use 600/700
6. Use sudo with caution
7. Check permissions regularly

### Common Scenarios
\`\`\`bash
chown -R www-data:www-data /var/www
find /var/www -type d -exec chmod 755 {} \\;
find /var/www -type f -exec chmod 644 {} \\;

chmod +x *.sh
chmod 755 scripts/*

chmod 2775 /shared
chown :developers /shared

chmod 600 ~/.ssh/id_rsa
chmod 644 ~/.ssh/id_rsa.pub
chmod 700 ~/.ssh

chmod 1777 /tmp
\`\`\`

## Troubleshooting

### Permission Denied
\`\`\`bash
ls -l file.txt
whoami
groups
sudo command
lsof file.txt
mount | grep "noexec"
\`\`\`

### Fix Common Issues
\`\`\`bash
sudo chown -R $USER:$USER ~/projects
find ~/projects -type d -exec chmod 755 {} \\;
find ~/projects -type f -exec chmod 644 {} \\;
chmod +x script.sh
chmod 700 ~/.ssh
chmod 600 ~/.ssh/*
chmod 644 ~/.ssh/*.pub
\`\`\`
  `,
  quiz: [
    {
      question: "Permission rwx sama dengan angka?",
      options: ["4", "5", "6", "7"],
      correctAnswer: 3
    },
    {
      question: "Perintah untuk mengubah permission adalah?",
      options: ["chown", "chmod", "chgrp", "perm"],
      correctAnswer: 1
    },
    {
      question: "Permission yang aman untuk file umum adalah?",
      options: ["777", "755", "644", "600"],
      correctAnswer: 2
    }
  ],
  codeExamples: [
    {
      title: "Permissions Examples",
      code: `// 1. UNDERSTAND PERMISSIONS
ls -l
# -rw-r--r-- 1 user group 1234 Jan 1 10:00 file.txt
# d rwx r-x r-x 2 user group 4096 Jan 1 10:00 folder

// 2. CHANGE PERMISSIONS (Symbolic)
chmod u+x script.sh
chmod u-x script.sh
chmod u=rwx script.sh
chmod g+w file.txt
chmod g-w file.txt
chmod g=rw file.txt
chmod o+r file.txt
chmod o-r file.txt
chmod o=r file.txt
chmod a+x script.sh
chmod a-x script.sh
chmod a=rwx script.sh
chmod u+rwx,g+rx,o+r script.sh

// 3. CHANGE PERMISSIONS (Numeric)
chmod 755 script.sh
chmod 644 file.txt
chmod 700 private.sh
chmod 600 secret.txt
chmod 750 shared.sh
chmod 755 folder/
chmod 700 private/
chmod 750 shared/

// 4. RECURSIVE PERMISSIONS
chmod -R 755 folder/
find folder -type d -exec chmod 755 {} \\;
find folder -type f -exec chmod 644 {} \\;
find . -name "*.sh" -exec chmod +x {} \\;

// 5. CHANGE OWNER
sudo chown user file.txt
sudo chown -R user folder/
sudo chown user:group file.txt
sudo chown -R user:group folder/
sudo chgrp group file.txt
sudo chgrp -R group folder/

// 6. SPECIAL PERMISSIONS
chmod u+s file
chmod 4755 file
chmod g+s file
chmod 2755 file
chmod +t directory
chmod 1777 directory
ls -l
# -rwsr-xr-x  (SUID)
# -rwxr-sr-x  (SGID)
# drwxrwxrwt  (Sticky)

// 7. PROJECT SETUP
mkdir -p ~/project/{src,logs,data,scripts}
chmod 755 ~/project
chmod 755 ~/project/{src,scripts}
chmod 750 ~/project/{logs,data}
touch ~/project/README.md
chmod 644 ~/project/README.md
chmod +x ~/project/scripts/*.sh
sudo chgrp -R developers ~/project
chmod -R g+rwx ~/project

// 8. WEB SERVER PERMISSIONS
sudo chown -R www-data:www-data /var/www/html
find /var/www/html -type d -exec chmod 755 {} \\;
find /var/www/html -type f -exec chmod 644 {} \\;
chmod 775 /var/www/html/uploads
chown www-data:www-data /var/www/html/uploads

// 9. SSH PERMISSIONS
mkdir -p ~/.ssh
chmod 700 ~/.ssh
touch ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys
chmod 600 ~/.ssh/id_rsa
chmod 644 ~/.ssh/id_rsa.pub
chmod 644 ~/.ssh/config

// 10. TROUBLESHOOTING
ls -l file.txt
stat file.txt
whoami
groups
id
sudo -l
mount | grep /home
getenforce
sestatus
sudo chown $USER:$USER file.txt
sudo chown -R $USER:$USER folder/
find . -type f -exec chmod 644 {} \\;
find . -type d -exec chmod 755 {} \\;
chmod 755 .
chmod 644 file.txt
chmod 755 script.sh

// 11. UMASK
umask
umask 0022
umask 0002
# Effect: 666 - umask = 644
# Dirs: 777 - umask = 755

// 12. ACL
sudo apt install acl
getfacl file.txt
setfacl -m u:user:rwx file.txt
setfacl -m g:group:rx file.txt
setfacl -m u:user:rwx folder/
setfacl -R -m u:user:rwx folder/
setfacl -x u:user file.txt
setfacl -b file.txt`,
      language: "bash"
    }
  ]
};
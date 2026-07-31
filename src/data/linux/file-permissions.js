export const chapter = {
  slug: "linux-file-permissions",
  title: "File Permissions",
  description: "Pahami dan kelola permissions Linux: chmod, chown, octal notation.",
  icon: "SiLinux",
  color: "#FCC624",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["linux-commands"],
  tags: ["linux", "permissions", "chmod", "chown"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Permission Structure

\`\`\`
-rwxr-xr--  1 user  group  1024 Jan 15 10:00 file.txt
└─┬─┘└─┬─┘└─┬─┘
  │    │    └── Others (o)
  │    └─────── Group (g)
  └──────────── Owner (u)
\`\`\`

| Permission | File | Directory |
|------------|------|-----------|
| **r** (read) | Baca isi | List isi (ls) |
| **w** (write) | Edit file | Buat/hapus file |
| **x** (execute) | Jalankan program | Masuk direktori (cd) |

## chmod (Change Mode)

### Symbolic
\`\`\`bash
chmod u+x file.sh       # Owner +execute
chmod g-w file.txt      # Group -write
chmod o+r file.txt      # Others +read
chmod a+x script.sh     # All +execute
chmod u=rwx,g=rx,o=    # Set explicit
\`\`\`

### Octal (Numeric)
| Octal | Permission | rwx |
|-------|-----------|-----|
| 7 | read+write+execute | rwx |
| 6 | read+write | rw- |
| 5 | read+execute | r-x |
| 4 | read only | r-- |
| 0 | none | --- |

\`\`\`bash
chmod 755 script.sh     # rwxr-xr-x (executable)
chmod 644 file.txt      # rw-r--r-- (readable)
chmod 600 secret.key    # rw------- (private)
chmod 777 public/       # rwxrwxrwx (dANGER!)
\`\`\`

## chown (Change Owner)

\`\`\`bash
chown user file.txt             # Change owner
chown user:group file.txt       # Change owner + group
chown -R user:group /var/www    # Recursive
\`\`\`

## Common Permission Sets

| Octal | Use Case |
|-------|----------|
| 755 | Directories, scripts |
| 644 | Regular files |
| 600 | SSH keys, config secrets |
| 400 | Read-only (deploy keys) |
| 777 | NEVER USE IN PRODUCTION! |
  `,

  quiz: [
    { question: "chmod 755?", options: ["Read only", "rwxr-xr-x (executable)", "No access", "Write only"], correctAnswer: 1 },
    { question: "chmod 600?", options: ["Public", "Owner only read+write (private)", "All access", "Execute only"], correctAnswer: 1 },
    { question: "chown?", options: ["Change permissions", "Change owner/group", "Delete file", "Create file"], correctAnswer: 1 }
  ],

  codeExamples: []
};
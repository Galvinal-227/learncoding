export const chapter = {
  slug: "navigation",
  title: "Navigasi",
  description: "Navigasi di terminal menggunakan command line.",
  icon: "SiTerminal",
  color: "#4D4D4D",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["terminal-introduction", "terminal-basic-commands"],
  tags: ["terminal", "navigation", "paths", "bash"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Navigasi di Terminal

## Paths

### Absolute Path
\`\`\`bash
/home/user/Documents
/var/log
/etc/nginx
C:\\\\Users\\\\User\\\\Documents
D:\\\\Projects
\`\`\`

### Relative Path
\`\`\`bash
./file.txt
../folder
../../folder
./src/index.js
\`\`\`

### Special Directories
\`\`\`bash
.  # Current directory
.. # Parent directory
~  # Home directory
/  # Root directory
-  # Previous directory
\`\`\`

## Perintah Navigasi

### cd (Change Directory)
\`\`\`bash
cd ~
cd
cd /
cd Documents
cd /var/log
cd ..
cd -
cd src/components
\`\`\`

### ls (List)
\`\`\`bash
ls
ls -l
ls -lh
ls -a
ls -la
ls -R
ls -lt
ls -ltr
ls -lS
\`\`\`

### pwd (Print Working Directory)
\`\`\`bash
pwd
pwd -P
\`\`\`

## Tree View

\`\`\`bash
sudo apt install tree
brew install tree

tree
tree -L 2
tree -a
tree -d
tree > structure.txt
\`\`\`

## Tips Navigasi

### Tab Completion
\`\`\`bash
cd Doc<Tab>  # → cd Documents/
cd <Tab><Tab>
\`\`\`

### Quick Navigation
\`\`\`bash
cd ~
cd /
cd -
cd ..
cd ../../
cd ../../../
\`\`\`

### Bookmarks
\`\`\`bash
alias docs='cd ~/Documents'
alias proj='cd ~/Projects'
echo 'alias docs="cd ~/Documents"' >> ~/.bashrc
source ~/.bashrc
\`\`\`

## Contoh Navigasi

\`\`\`bash
~ $ pwd
/home/user

~ $ ls
Documents  Downloads  Projects  Pictures

~ $ cd Projects
~/Projects $ pwd
/home/user/Projects

~/Projects $ ls -la
total 32
drwxr-xr-x  4 user user 4096 Jan 1 10:00 .
drwxr-xr-x 20 user user 4096 Jan 1 09:00 ..
drwxr-xr-x  8 user user 4096 Jan 1 10:00 project-a
drwxr-xr-x  5 user user 4096 Jan 1 10:00 project-b
-rw-r--r--  1 user user  220 Jan 1 10:00 .gitignore

~/Projects $ cd project-a
~/Projects/project-a $ pwd
/home/user/Projects/project-a

~/Projects/project-a $ cd ..
~/Projects $

~/Projects $ cd ../..
~ $ pwd
/home/user

~ $ cd -
~/Projects $
\`\`\`

## Path Shortcuts

### Windows
\`\`\`bash
C:\\\\Users\\\\User\\\\Documents
/c/Users/User/Documents
cd "C:\\\\Users\\\\User\\\\Documents"
cd $HOME\\\\Documents
\`\`\`

### macOS/Linux
\`\`\`bash
/Users/user/Documents
~/Documents
$HOME/Documents
$PWD
$OLDPWD
\`\`\`

## Best Practices

1. Gunakan Tab untuk autocomplete
2. Gunakan relative paths untuk project
3. Buat alias untuk folder sering
4. Gunakan pushd/popd untuk stack
5. Simpan path di environment variables
  `,
  quiz: [
    {
      question: "Simbol untuk home directory di terminal adalah?",
      options: [".", "..", "~", "/"],
      correctAnswer: 2
    },
    {
      question: "Simbol untuk parent directory adalah?",
      options: [".", "..", "~", "/"],
      correctAnswer: 1
    },
    {
      question: "Perintah untuk kembali ke direktori sebelumnya adalah?",
      options: ["cd ..", "cd ~", "cd -", "cd /"],
      correctAnswer: 2
    }
  ],
  codeExamples: [
    {
      title: "Navigation Examples",
      code: `// 1. Basic Navigation
pwd
ls
ls -la
cd /var/log
cd ~
cd Documents
cd ../Projects
cd -
cd /
cd ~

// 2. Navigate to projects
mkdir -p ~/Projects/{web-app,api,data}
cd ~/Projects/web-app
mkdir -p src/{components,utils,styles,tests}
mkdir -p src/components/{common,features}
mkdir -p docs/{api,guides}
tree

// 3. Quick navigation with pushd/popd
pushd ~/Projects/web-app
pushd src/components
pushd common
dirs
popd
popd
popd

// 4. Using find to navigate
cd $(find ~ -name "web-app" -type d | head -1)
find ~/Projects -name "node_modules" -type d

// 5. Custom navigation functions
function goto() {
    if [ -d "$1" ]; then
        cd "$1"
    else
        echo "Directory not found: $1"
    fi
}

function up() {
    local levels={1:-1}
    local path=""
    for ((i=0; i<levels; i++)); do
        path="../$path"
    done
    cd "$path"
}

goto ~/Projects/web-app
up 2

// 6. Find and cd
cd "$(find ~/Projects -name "web-app" -type d -print -quit)"
cd $(find ~/Projects -type d | fzf)

// 7. Project navigation aliases
alias web='cd ~/Projects/web-app'
alias api='cd ~/Projects/api'
alias data='cd ~/Projects/data'

// 8. Tree output
tree -L 3 > structure.txt
tree -d
tree -a
tree -L 2

// 9. Path manipulation
realpath file.txt
readlink -f file.txt
dirname /path/to/file.txt
basename /path/to/file.txt
cd "$(dirname "$0")"

// 10. Useful navigation commands
cd -
!$
cd ~username
cd /
cd /tmp`,
      language: "bash"
    }
  ]
};
export const chapter = {
  slug: "customizing-shell",
  title: "Customizing Shell",
  description: "Mengustomisasi shell untuk meningkatkan produktivitas.",
  icon: "SiTerminal",
  color: "#4D4D4D",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["terminal-introduction", "terminal-basic-commands"],
  tags: ["terminal", "zsh", "oh-my-zsh", "customization"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Customizing Shell

Mengustomisasi shell untuk tampilan dan fungsionalitas yang lebih baik.

## ZSH (Z Shell)

### Install ZSH
\`\`\`bash
# Ubuntu/Debian
sudo apt install zsh

# macOS
brew install zsh

# Windows (WSL)
sudo apt install zsh
\`\`\`

### Change Default Shell
\`\`\`bash
chsh -s $(which zsh)
echo $SHELL
\`\`\`

## Oh My Zsh

### Install
\`\`\`bash
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
\`\`\`

### Plugins
\`\`\`bash
# ~/.zshrc
plugins=(
    git
    node
    npm
    docker
    kubectl
    aws
    zsh-autosuggestions
    zsh-syntax-highlighting
)
\`\`\`

### Themes
\`\`\`bash
# ~/.zshrc
ZSH_THEME="agnoster"
ZSH_THEME="powerlevel10k/powerlevel10k"
ZSH_THEME="robbyrussell"
\`\`\`

### Install Powerlevel10k
\`\`\`bash
git clone --depth=1 https://github.com/romkatv/powerlevel10k.git {ZSH_CUSTOM:-$HOME/.oh-my-zsh/custom}/themes/powerlevel10k
ZSH_THEME="powerlevel10k/powerlevel10k"
\`\`\`

## Aliases

### Common Aliases
\`\`\`bash
# ~/.zshrc or ~/.bashrc
alias ll='ls -la'
alias la='ls -a'
alias l='ls -l'
alias ..='cd ..'
alias ...='cd ../..'
alias grep='grep --color=auto'
alias gs='git status'
alias ga='git add'
alias gc='git commit'
alias gp='git push'
alias gl='git log --oneline'
alias npm='npm --color=always'
alias cls='clear'
alias edit='nano'
\`\`\`

### Git Aliases
\`\`\`bash
alias g='git'
alias gs='git status'
alias ga='git add'
alias gaa='git add .'
alias gc='git commit'
alias gcm='git commit -m'
alias gp='git push'
alias gpl='git pull'
alias gl='git log --oneline'
alias gd='git diff'
alias gco='git checkout'
alias gb='git branch'
alias gm='git merge'
alias gr='git reset'
\`\`\`

## Prompt Customization

### Bash Prompt
\`\`\`bash
# ~/.bashrc
PS1='\\[\\033[01;32m\\]\\u@\\h\\[\\033[00m\\]:\\[\\033[01;34m\\]\\w\\[\\033[00m\\]\\$ '
\`\`\`

### ZSH Prompt
\`\`\`bash
# ~/.zshrc
PROMPT='%F{green}%n@%m%f:%F{blue}%~%f$ '
RPROMPT='%F{red}%*%f'
\`\`\`

## Shell Functions

\`\`\`bash
# ~/.zshrc
function mkcd() {
    mkdir -p "$1" && cd "$1"
}

function extract() {
    if [ -f $1 ]; then
        case $1 in
            *.tar.bz2) tar xjf $1 ;;
            *.tar.gz) tar xzf $1 ;;
            *.bz2) bunzip2 $1 ;;
            *.rar) unrar e $1 ;;
            *.gz) gunzip $1 ;;
            *.tar) tar xf $1 ;;
            *.tbz2) tar xjf $1 ;;
            *.tgz) tar xzf $1 ;;
            *.zip) unzip $1 ;;
            *.Z) uncompress $1 ;;
            *) echo "'$1' cannot be extracted" ;;
        esac
    else
        echo "'$1' is not a valid file"
    fi
}

function find_port() {
    sudo lsof -i :$1
}

function kill_port() {
    sudo kill -9 $(sudo lsof -t -i:$1)
}
\`\`\`

## Useful Plugins

### zsh-autosuggestions
\`\`\`bash
git clone https://github.com/zsh-users/zsh-autosuggestions {ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-autosuggestions
\`\`\`

### zsh-syntax-highlighting
\`\`\`bash
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git {ZSH_CUSTOM:-~/.oh-my-zsh/custom}/plugins/zsh-syntax-highlighting
\`\`\`

### fzf (Fuzzy Finder)
\`\`\`bash
git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf
~/.fzf/install
\`\`\`

## Environment Variables

\`\`\`bash
# ~/.zshrc
export EDITOR=nano
export BROWSER=firefox
export PATH=$HOME/bin:/usr/local/bin:$PATH
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
\`\`\`

## Best Practices

1. Backup config files sebelum diubah
2. Gunakan version control untuk dotfiles
3. Simpan aliases di file terpisah
4. Dokumentasikan customizations
5. Test changes sebelum apply
6. Gunakan themes yang readable
7. Jangan terlalu banyak plugins
8. Keep it simple
  `,
  quiz: [
    {
      question: "Perintah untuk install Oh My Zsh adalah?",
      options: [
        "curl ... ohmyzsh/install.sh",
        "wget ... ohmyzsh/install.sh",
        "git clone ohmyzsh",
        "apt install ohmyzsh"
      ],
      correctAnswer: 0
    },
    {
      question: "File konfigurasi ZSH adalah?",
      options: ["~/.bashrc", "~/.zshrc", "~/.profile", "~/.config"],
      correctAnswer: 1
    },
    {
      question: "Alias untuk git status biasanya?",
      options: ["gst", "gs", "git status", "g"],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete Shell Customization",
      code: `// ============================================
// 1. ~/.zshrc - Complete Configuration
// ============================================
# Path
export PATH=$HOME/bin:/usr/local/bin:$PATH

# Editor
export EDITOR=nano
export VISUAL=nano

# Aliases
alias ll='ls -la'
alias la='ls -a'
alias l='ls -l'
alias ..='cd ..'
alias ...='cd ../..'
alias ....='cd ../../..'

# Git aliases
alias g='git'
alias gs='git status'
alias ga='git add'
alias gaa='git add .'
alias gc='git commit'
alias gcm='git commit -m'
alias gp='git push'
alias gpl='git pull'
alias gl='git log --oneline'
alias gd='git diff'
alias gco='git checkout'
alias gb='git branch'

# NPM aliases
alias ni='npm install'
alias nid='npm install -D'
alias ns='npm start'
alias nt='npm test'
alias nr='npm run'
alias nb='npm run build'

# Docker aliases
alias dps='docker ps'
alias dpsa='docker ps -a'
alias di='docker images'
alias de='docker exec -it'
alias dl='docker logs -f'
alias dstop='docker stop'
alias drm='docker rm'

# Kubectl aliases
alias k='kubectl'
alias kgp='kubectl get pods'
alias kgs='kubectl get services'
alias kgd='kubectl get deployments'
alias kd='kubectl describe'

# Other aliases
alias cls='clear'
alias edit='nano'
alias find_port='sudo lsof -i :'
alias kill_port='sudo kill -9 $(sudo lsof -t -i:'

# Oh My Zsh
export ZSH="$HOME/.oh-my-zsh"
ZSH_THEME="powerlevel10k/powerlevel10k"

plugins=(
    git
    node
    npm
    docker
    kubectl
    aws
    zsh-autosuggestions
    zsh-syntax-highlighting
)

source $ZSH/oh-my-zsh.sh

# Custom functions
mkcd() {
    mkdir -p "$1" && cd "$1"
}

extract() {
    if [ -f $1 ]; then
        case $1 in
            *.tar.bz2) tar xjf $1 ;;
            *.tar.gz) tar xzf $1 ;;
            *.bz2) bunzip2 $1 ;;
            *.rar) unrar e $1 ;;
            *.gz) gunzip $1 ;;
            *.tar) tar xf $1 ;;
            *.tbz2) tar xjf $1 ;;
            *.tgz) tar xzf $1 ;;
            *.zip) unzip $1 ;;
            *) echo "'$1' cannot be extracted" ;;
        esac
    else
        echo "'$1' is not a valid file"
    fi
}

# NVM
export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"

// ============================================
// 2. ~/.gitconfig
// ============================================
[user]
    name = Your Name
    email = your@email.com
[core]
    editor = nano
    autocrlf = input
[alias]
    s = status
    a = add
    aa = add .
    c = commit
    cm = commit -m
    p = push
    pl = pull
    l = log --oneline
    d = diff
    co = checkout
    b = branch
    m = merge
    r = reset
[color]
    ui = auto

// ============================================
// 3. ~/.npmrc
// ============================================
registry=https://registry.npmjs.org/
save-exact=true
audit=true

// ============================================
// 4. ~/.vimrc
// ============================================
set number
set expandtab
set tabstop=2
set shiftwidth=2
set autoindent
set ruler
syntax on

// ============================================
// 5. Useful Functions
// ============================================
# Find and replace in all files
find_replace() {
    find . -type f -name "$2" -exec sed -i '' -e "s/$1/$3/g" {} \\;
}

# Show directory tree
tree() {
    if command -v tree >/dev/null 2>&1; then
        command tree "$@"
    else
        find . -print | sed -e 's;[^/]*/;|____;g;s;____|; |;g'
    fi
}

# Create file with directory
mkfile() {
    mkdir -p "$(dirname "$1")" && touch "$1"
}

# List all IP addresses
myip() {
    curl -s https://api.ipify.org
}

# Weather
weather() {
    curl wttr.in/{1:-Jakarta}
}

// ============================================
// 6. ZSH Theme Customization
// ============================================
# ~/.p10k.zsh - Powerlevel10k configuration
# Generated by running: p10k configure

POWERLEVEL9K_LEFT_PROMPT_ELEMENTS=(
    context
    dir
    vcs
    newline
    prompt_char
)

POWERLEVEL9K_RIGHT_PROMPT_ELEMENTS=(
    status
    command_execution_time
    background_jobs
    time
)

POWERLEVEL9K_CONTEXT_TEMPLATE='%n@%m'
POWERLEVEL9K_DIR_ANCHOR_BOLD=true
POWERLEVEL9K_DIR_ETC_LOCAL_BOLD=true
POWERLEVEL9K_DIR_HOME_BOLD=true`,
      language: "bash"
    }
  ]
};
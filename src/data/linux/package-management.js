export const chapter = {
  slug: "linux-package-management",
  title: "Package Management",
  description: "Install, update, remove software dengan apt, yum, dan snap.",
  icon: "SiLinux",
  color: "#FCC624",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["linux-commands"],
  tags: ["linux", "package", "apt", "install"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Package Managers

| Distro | Package Manager | Format |
|--------|----------------|--------|
| Ubuntu/Debian | **apt** | .deb |
| RHEL/CentOS | **yum** / **dnf** | .rpm |
| Alpine | **apk** | .apk |
| Arch | **pacman** | .pkg.tar.zst |
| Universal | **snap** / **flatpak** | Cross-distro |

## APT (Ubuntu/Debian)

\`\`\`bash
# Update package list
sudo apt update

# Upgrade all packages
sudo apt upgrade -y

# Install
sudo apt install nginx
sudo apt install git curl wget

# Search
apt search nodejs

# Remove
sudo apt remove nginx
sudo apt purge nginx   # Remove + config files

# Cleanup
sudo apt autoremove    # Remove unused deps
sudo apt clean         # Clear cache
\`\`\`

## Repository

\`\`\`bash
# Add repository (Node.js example)
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Add PPA (Ubuntu)
sudo add-apt-repository ppa:deadsnakes/ppa
sudo apt update
sudo apt install python3.12
\`\`\`

## Snap (Universal)

\`\`\`bash
sudo snap install code --classic  # VS Code
sudo snap install postman
sudo snap install spotify
\`\`\`

## Manual Install (.tar.gz)

\`\`\`bash
tar -xzf app.tar.gz
cd app
./configure
make
sudo make install
\`\`\`
  `,

  quiz: [
    { question: "apt: Ubuntu/Debian?", options: ["yum", "apt", "pacman", "apk"], correctAnswer: 1 },
    { question: "sudo apt update?", options: ["Install", "Update package list", "Remove", "Search"], correctAnswer: 1 },
    { question: "apt purge vs remove?", options: ["Sama", "purge: remove + config files", "remove lebih bersih", "purge deprecated"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Setup Server dari Fresh Ubuntu",
      language: "bash",
      code: `# Update system
sudo apt update && sudo apt upgrade -y

# Install essentials
sudo apt install -y git curl wget build-essential

# Install Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Install Nginx
sudo apt install -y nginx
sudo systemctl enable nginx
sudo systemctl start nginx

# Install Docker
curl -fsSL https://get.docker.com | sudo bash
sudo usermod -aG docker $USER

# Install PM2
npm install -g pm2

# Done!
echo "Server ready!"`
    }
  ]
};
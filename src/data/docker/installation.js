export const chapter = {
  slug: "docker-installation",
  title: "Instalasi & Setup",
  description: "Install Docker di Windows, Mac, Linux dan verifikasi instalasi.",
  icon: "SiDocker",
  color: "#2496ED",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["docker-introduction"],
  tags: ["docker", "install", "setup", "docker-desktop"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Install Docker

### Windows
1. Download **Docker Desktop** dari [docker.com](https://www.docker.com/products/docker-desktop)
2. Install → pastikan **WSL 2** enabled
3. Restart
4. Buka terminal: \`docker --version\`

### Mac
1. Download **Docker Desktop for Mac** (Apple Silicon atau Intel)
2. Install ke Applications
3. Buka Docker Desktop
4. Terminal: \`docker --version\`

### Linux (Ubuntu)
\`\`\`bash
# Update packages
sudo apt update

# Install prerequisites
sudo apt install -y ca-certificates curl

# Add Docker's official GPG key
sudo install -m 0755 -d /etc/apt/keyrings
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

# Add repository
echo "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# Install Docker
sudo apt update
sudo apt install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin

# Add user to docker group (no sudo needed)
sudo usermod -aG docker $USER
newgrp docker
\`\`\`

## Verifikasi Instalasi

\`\`\`bash
docker --version
# Docker version 25.0.0

docker run hello-world
# Hello from Docker!

docker ps
# CONTAINER ID   IMAGE   COMMAND   CREATED   STATUS   PORTS   NAMES
\`\`\`

## Docker Desktop vs CLI

| Docker Desktop | Docker CLI |
|---------------|-----------|
| GUI + CLI | CLI only |
| Easy for beginners | Production servers |
| Includes Docker Compose | Install separately |
| Windows/Mac | Linux native |
  `,

  quiz: [
    { question: "Docker Desktop untuk?", options: ["Server", "Windows/Mac (GUI + CLI)", "Linux only", "CI/CD"], correctAnswer: 1 },
    { question: "Perintah cek versi Docker?", options: ["docker version", "docker --version", "docker -v", "Semua benar"], correctAnswer: 3 }
  ],

  codeExamples: []
};
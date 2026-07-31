export const chapter = {
  slug: "linux-introduction",
  title: "Pengenalan Linux",
  description: "Pahami apa itu Linux, distro populer, dan kenapa wajib dipelajari developer.",
  icon: "SiLinux",
  color: "#FCC624",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["linux", "server", "terminal", "os"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Linux?

Linux adalah **kernel operating system open-source** yang menjadi fondasi berbagai OS (distribusi/distro). Dibuat oleh **Linus Torvalds** tahun 1991.

## Kenapa Developer Wajib Belajar Linux?

- 🌐 **Server** - 90%+ server dunia pakai Linux
- ☁️ **Cloud** - AWS, GCP, Azure pakai Linux
- 🐳 **Docker/K8s** - Container based on Linux
- 🔧 **DevOps** - Scripting, automation
- 💻 **Development** - Tools, package managers
- 🆓 **Gratis** - Tidak perlu lisensi
- 🔒 **Security** - Permissions, firewall built-in

## Distro Populer

| Distro | Base | Cocok Untuk |
|--------|------|-------------|
| **Ubuntu** | Debian | Pemula, server, desktop |
| **Debian** | - | Server stabil, production |
| **CentOS/Rocky** | RHEL | Enterprise server |
| **Alpine** | Musl | Docker images (kecil) |
| **Arch** | - | Power users, rolling release |
| **Fedora** | RHEL | Desktop developer |
| **Kali** | Debian | Security testing |

## Akses Linux

### 1. Local (Desktop/Server)
- Install langsung di hardware
- Dual boot dengan Windows
- Virtual Machine (VirtualBox, VMWare)

### 2. Remote (SSH)
\`\`\`bash
ssh user@server-ip
ssh -i key.pem user@server-ip
\`\`\`

### 3. Cloud
- AWS EC2 (Amazon Linux, Ubuntu)
- DigitalOcean Droplets
- Linode, Vultr, UpCloud

### 4. WSL (Windows Subsystem for Linux)
\`\`\`bash
wsl --install -d Ubuntu
\`\`\`

## File System Hierarchy

\`\`\`
/           Root directory
├── /bin    Essential commands (ls, cp, mv)
├── /etc    Configuration files
├── /home   User home directories
├── /var    Variable data (logs, databases)
├── /tmp    Temporary files
├── /usr    User programs
├── /opt    Optional/third-party software
└── /proc   Process & kernel info
\`\`\`
  `,

  quiz: [
    { question: "Linux: siapa pencipta?", options: ["Bill Gates", "Linus Torvalds", "Steve Jobs", "Mark Zuckerberg"], correctAnswer: 1 },
    { question: "Distro untuk pemula?", options: ["Arch", "Ubuntu", "Gentoo", "Slackware"], correctAnswer: 1 },
    { question: "SSH?", options: ["Database", "Secure Shell (remote access)", "Web server", "Firewall"], correctAnswer: 1 }
  ],

  codeExamples: []
};
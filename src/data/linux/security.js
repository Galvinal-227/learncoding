export const chapter = {
  slug: "linux-security",
  title: "Security Basics",
  description: "Amankan server Linux: SSH hardening, firewall, fail2ban, updates.",
  icon: "SiLinux",
  color: "#FCC624",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["linux-networking"],
  tags: ["linux", "security", "firewall", "fail2ban"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## SSH Hardening

\`\`\`bash
# /etc/ssh/sshd_config
PermitRootLogin no          # Jangan izinkan root login
PasswordAuthentication no   # Hanya key-based auth
Port 2222                   # Ganti port default (opsional)
MaxAuthTries 3              # Batasi percobaan

sudo systemctl restart sshd
\`\`\`

## Fail2Ban

\`\`\`bash
sudo apt install -y fail2ban

# Config
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
sudo systemctl enable fail2ban
sudo systemctl start fail2ban

# Check status
sudo fail2ban-client status
sudo fail2ban-client status sshd
\`\`\`

## Automatic Updates

\`\`\`bash
sudo apt install -y unattended-upgrades
sudo dpkg-reconfigure unattended-upgrades
\`\`\`

## Security Checklist

\`\`\`
✅ SSH key-based auth (disable password)
✅ Disable root login
✅ Firewall (UFW) enabled
✅ Fail2ban installed
✅ Automatic security updates
✅ Non-root user for apps
✅ Regular backups
✅ Monitor logs (/var/log/auth.log)
✅ Minimal installed packages
✅ SELinux/AppArmor (enterprise)
\`\`\`
  `,

  quiz: [
    { question: "Fail2Ban?", options: ["Firewall", "Block IP setelah banyak gagal login", "Web server", "Database"], correctAnswer: 1 },
    { question: "PermitRootLogin?", options: ["yes", "no (security best practice)", "maybe", "always"], correctAnswer: 1 }
  ],

  codeExamples: []
};
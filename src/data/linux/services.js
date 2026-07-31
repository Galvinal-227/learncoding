export const chapter = {
  slug: "linux-services",
  title: "Services & Systemd",
  description: "Kelola services dengan systemctl: start, stop, enable, status.",
  icon: "SiLinux",
  color: "#FCC624",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["linux-commands"],
  tags: ["linux", "services", "systemd", "systemctl"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## systemctl (Systemd)

\`\`\`bash
# Status
systemctl status nginx
systemctl is-active nginx
systemctl is-enabled nginx

# Start / Stop / Restart
sudo systemctl start nginx
sudo systemctl stop nginx
sudo systemctl restart nginx
sudo systemctl reload nginx    # Reload config (no downtime)

# Enable / Disable (auto-start on boot)
sudo systemctl enable nginx
sudo systemctl disable nginx

# List services
systemctl list-units --type=service
systemctl list-units --type=service --state=running

# Logs
journalctl -u nginx
journalctl -u nginx -f        # Follow
journalctl -u nginx --since today
\`\`\`

## Create Custom Service

\`\`\`ini
# /etc/systemd/system/myapp.service
[Unit]
Description=My Node.js App
After=network.target

[Service]
Type=simple
User=app
WorkingDirectory=/var/www/myapp
ExecStart=/usr/bin/node server.js
Restart=on-failure
RestartSec=5
Environment=NODE_ENV=production
Environment=PORT=3000

[Install]
WantedBy=multi-user.target
\`\`\`

\`\`\`bash
sudo systemctl daemon-reload
sudo systemctl enable myapp
sudo systemctl start myapp
\`\`\`

## Check Boot Time

\`\`\`bash
systemd-analyze              # Total boot time
systemd-analyze blame        # Service startup times
\`\`\`
  `,

  quiz: [
    { question: "Enable service at boot?", options: ["systemctl start", "systemctl enable", "systemctl boot", "systemctl auto"], correctAnswer: 1 },
    { question: "Service logs?", options: ["cat /var/log", "journalctl -u service", "dmesg", "syslog"], correctAnswer: 1 }
  ],

  codeExamples: []
};
export const chapter = {
  slug: "linux-networking",
  title: "Networking",
  description: "Network commands: IP, DNS, firewall, SSH, troubleshooting.",
  icon: "SiLinux",
  color: "#FCC624",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["linux-commands"],
  tags: ["linux", "networking", "ssh", "firewall"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Network Info

\`\`\`bash
# IP address
ip addr show
ip a

# Routing
ip route show

# DNS
cat /etc/resolv.conf
nslookup google.com
dig google.com

# Ping
ping google.com
ping -c 4 google.com

# Trace route
traceroute google.com

# Download
curl -O https://example.com/file.tar.gz
wget https://example.com/file.tar.gz
\`\`\`

## SSH

\`\`\`bash
# Connect
ssh user@host
ssh -p 2222 user@host          # Custom port
ssh -i key.pem user@host       # Key-based

# Config file (~/.ssh/config)
Host myserver
    HostName 123.456.789.0
    User ubuntu
    Port 22
    IdentityFile ~/.ssh/mykey.pem

# Use config
ssh myserver

# Copy files
scp file.txt user@host:/path/
scp -r folder user@host:/path/
rsync -avz folder/ user@host:/path/
\`\`\`

## Firewall (UFW)

\`\`\`bash
# Enable
sudo ufw enable

# Allow
sudo ufw allow 22      # SSH
sudo ufw allow 80      # HTTP
sudo ufw allow 443     # HTTPS
sudo ufw allow 3000    # Custom app

# Deny
sudo ufw deny 8080

# Status
sudo ufw status
sudo ufw status numbered
\`\`\`

## Port & Connection

\`\`\`bash
# Listening ports
netstat -tlnp
ss -tlnp

# Active connections
netstat -anp

# Test port
nc -zv localhost 3000
telnet localhost 3000
\`\`\`
  `,

  quiz: [
    { question: "SSH default port?", options: ["80", "443", "22", "8080"], correctAnswer: 2 },
    { question: "UFW?", options: ["Web server", "Uncomplicated Firewall", "File manager", "Process manager"], correctAnswer: 1 }
  ],

  codeExamples: []
};
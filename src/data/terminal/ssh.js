export const chapter = {
  slug: "ssh",
  title: "SSH",
  description: "Menggunakan SSH untuk remote server dan manajemen server.",
  icon: "SiTerminal",
  color: "#4D4D4D",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["terminal-introduction", "terminal-basic-commands"],
  tags: ["terminal", "ssh", "remote", "server"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu SSH?

SSH (Secure Shell) adalah protokol untuk mengakses remote server secara aman.

## Basic SSH

### Connect to Server
\`\`\`bash
ssh user@hostname
ssh user@192.168.1.100
ssh -p 2222 user@hostname
ssh user@hostname -i ~/.ssh/key.pem
\`\`\`

### Run Commands
\`\`\`bash
ssh user@hostname "ls -la"
ssh user@hostname "cd /var/log && tail -f syslog"
ssh user@hostname "sudo systemctl restart nginx"
\`\`\`

## SSH Keys

### Generate Keys
\`\`\`bash
ssh-keygen -t rsa -b 4096
ssh-keygen -t ed25519
ssh-keygen -t rsa -b 4096 -C "email@example.com"
\`\`\`

### Copy Public Key
\`\`\`bash
ssh-copy-id user@hostname
cat ~/.ssh/id_rsa.pub | ssh user@hostname "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
\`\`\`

### Key Files
\`\`\`
~/.ssh/id_rsa      # Private key
~/.ssh/id_rsa.pub  # Public key
~/.ssh/authorized_keys  # Allowed keys
~/.ssh/known_hosts  # Known hosts
\`\`\`

## SSH Config

### ~/.ssh/config
\`\`\`
Host myserver
    HostName 192.168.1.100
    User root
    Port 22
    IdentityFile ~/.ssh/id_rsa

Host github
    HostName github.com
    User git
    IdentityFile ~/.ssh/github_key

Host *
    ServerAliveInterval 60
    StrictHostKeyChecking no
\`\`\`

### Using Config
\`\`\`bash
ssh myserver
ssh github
\`\`\`

## File Transfer (SCP)

### Copy Files
\`\`\`bash
scp file.txt user@hostname:/path/
scp -r folder/ user@hostname:/path/
scp user@hostname:/path/file.txt ./
scp -P 2222 file.txt user@hostname:/path/
\`\`\`

### Copy with Key
\`\`\`bash
scp -i ~/.ssh/key.pem file.txt user@hostname:/path/
\`\`\`

## Rsync

### Basic Rsync
\`\`\`bash
rsync -avz folder/ user@hostname:/path/
rsync -avz user@hostname:/path/ folder/
rsync -avz --delete folder/ user@hostname:/path/
\`\`\`

### Rsync Options
\`\`\`
-a  # Archive mode
-v  # Verbose
-z  # Compress
-P  # Show progress
--delete  # Delete extra files
--exclude 'node_modules/'
\`\`\`

## SSH Tunneling

### Port Forwarding
\`\`\`bash
# Local to remote
ssh -L 8080:localhost:80 user@hostname

# Remote to local
ssh -R 8080:localhost:3000 user@hostname

# Dynamic (SOCKS)
ssh -D 1080 user@hostname
\`\`\`

### Database Tunnel
\`\`\`bash
# Tunnel to remote database
ssh -L 5432:localhost:5432 user@db-server

# Now connect to localhost:5432 to access remote DB
psql -h localhost -p 5432 -U user database
\`\`\`

## Security Best Practices

1. Gunakan SSH keys, bukan password
2. Disable root login
3. Change default port (22)
4. Use firewall (iptables/ufw)
5. Keep SSH updated
6. Use fail2ban
7. Limit user access
8. Monitor logs

### SSH Hardening
\`\`\`bash
# /etc/ssh/sshd_config
Port 2222
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
AllowUsers user1 user2
MaxAuthTries 3
ClientAliveInterval 300
ClientAliveCountMax 2
\`\`\`

### Restart SSH
\`\`\`bash
sudo systemctl restart sshd
sudo service ssh restart
\`\`\`

## Troubleshooting

\`\`\`bash
# Verbose mode
ssh -v user@hostname
ssh -vv user@hostname
ssh -vvv user@hostname

# Check connection
ssh -T user@hostname

# Test key
ssh -T git@github.com

# Check known_hosts
ssh-keygen -R hostname
\`\`\`

## Useful Commands

\`\`\`bash
# Copy with compression
tar -czf - folder | ssh user@hostname "tar -xzf -"

# Remote port check
ssh user@hostname "ss -tuln"

# Remote process list
ssh user@hostname "ps aux | grep node"

# Remote disk usage
ssh user@hostname "df -h"

# Remote file search
ssh user@hostname "find /var/log -name *.log"
\`\`\`
  `,
  quiz: [
    {
      question: "Perintah SSH untuk connect ke server adalah?",
      options: ["ssh user@host", "ssh host", "ssh user:host", "ssh -u user host"],
      correctAnswer: 0
    },
    {
      question: "File untuk menyimpan authorized keys adalah?",
      options: ["~/.ssh/id_rsa", "~/.ssh/authorized_keys", "~/.ssh/known_hosts", "~/.ssh/config"],
      correctAnswer: 1
    },
    {
      question: "Perintah untuk copy file via SSH adalah?",
      options: ["ssh-copy", "scp", "rsync", "copy"],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "SSH Examples",
      code: `// 1. BASIC CONNECTION
ssh user@192.168.1.100
ssh -p 2222 user@hostname
ssh -i ~/.ssh/key.pem user@hostname

// 2. RUN REMOTE COMMANDS
ssh user@hostname "ls -la"
ssh user@hostname "cd /var/log && tail -f syslog"
ssh user@hostname "sudo systemctl restart nginx"

// 3. GENERATE SSH KEYS
ssh-keygen -t rsa -b 4096
ssh-keygen -t ed25519
ssh-keygen -t rsa -b 4096 -C "email@example.com"
ssh-copy-id user@hostname

// 4. SSH CONFIG ~/.ssh/config
Host myserver
    HostName 192.168.1.100
    User root
    Port 22
    IdentityFile ~/.ssh/id_rsa

Host github
    HostName github.com
    User git
    IdentityFile ~/.ssh/github_key

Host *
    ServerAliveInterval 60
    StrictHostKeyChecking no

// 5. SCP - COPY FILES
scp file.txt user@hostname:/path/
scp -r folder/ user@hostname:/path/
scp user@hostname:/path/file.txt ./
scp -P 2222 file.txt user@hostname:/path/
scp -i ~/.ssh/key.pem file.txt user@hostname:/path/

// 6. RSYNC
rsync -avz folder/ user@hostname:/path/
rsync -avz user@hostname:/path/ folder/
rsync -avz --delete folder/ user@hostname:/path/
rsync -avz --exclude 'node_modules/' folder/ user@hostname:/path/

// 7. SSH TUNNELING
ssh -L 8080:localhost:80 user@hostname
ssh -R 8080:localhost:3000 user@hostname
ssh -D 1080 user@hostname

# Database tunnel
ssh -L 5432:localhost:5432 user@db-server
psql -h localhost -p 5432 -U user database

// 8. SSH HARDENING (/etc/ssh/sshd_config)
Port 2222
PermitRootLogin no
PasswordAuthentication no
PubkeyAuthentication yes
AllowUsers user1 user2
MaxAuthTries 3
ClientAliveInterval 300
ClientAliveCountMax 2

sudo systemctl restart sshd
sudo service ssh restart

// 9. TROUBLESHOOTING
ssh -v user@hostname
ssh -vv user@hostname
ssh -vvv user@hostname
ssh -T user@hostname
ssh -T git@github.com
ssh-keygen -R hostname

// 10. USEFUL COMMANDS
tar -czf - folder | ssh user@hostname "tar -xzf -"
ssh user@hostname "ss -tuln"
ssh user@hostname "ps aux | grep node"
ssh user@hostname "df -h"
ssh user@hostname "find /var/log -name *.log"`,
      language: "bash"
    }
  ]
};
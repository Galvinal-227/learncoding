export const chapter = {
  slug: "linux-users-groups",
  title: "Users & Groups",
  description: "Manajemen user, group, dan sudo di Linux.",
  icon: "SiLinux",
  color: "#FCC624",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["linux-commands"],
  tags: ["linux", "users", "groups", "sudo"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## User Management

\`\`\`bash
# Create user
sudo useradd -m -s /bin/bash username
sudo passwd username

# Delete user
sudo userdel -r username

# Switch user
su - username

# List users
cat /etc/passwd
who

# Current user
whoami
id
\`\`\`

## Group Management

\`\`\`bash
# Create group
sudo groupadd developers

# Add user to group
sudo usermod -aG developers username
sudo usermod -aG docker username    # Docker access

# Change primary group
sudo usermod -g developers username

# List groups
groups username
cat /etc/group
\`\`\`

## Sudo

\`\`\`bash
# Run as root
sudo command

# Edit sudoers (HATI-HATI!)
sudo visudo

# Allow user to run specific commands without password
username ALL=(ALL) NOPASSWD: /usr/bin/systemctl restart nginx
\`\`\`

## Important Files

\`\`\`
/etc/passwd    User accounts
/etc/shadow    Encrypted passwords
/etc/group     Groups
/etc/sudoers   Sudo permissions
\`\`\`
  `,

  quiz: [
    { question: "Add user to group?", options: ["useradd", "usermod -aG group user", "addgroup", "chown"], correctAnswer: 1 },
    { question: "sudo?", options: ["Login", "Run command as superuser/root", "Logout", "Exit"], correctAnswer: 1 }
  ],

  codeExamples: []
};
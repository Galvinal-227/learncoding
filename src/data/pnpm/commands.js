export const chapter = {
  slug: "pnpm-commands",
  title: "Commands & CLI",
  description: "Kuasai PNPM CLI commands untuk package management sehari-hari.",
  icon: "SiPnpm",
  color: "#F69220",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["pnpm-introduction"],
  tags: ["pnpm", "commands", "cli", "cheatsheet"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Install & Add

\`\`\`bash
# Install from lock file
pnpm install
pnpm install --frozen-lockfile  # CI (error jika lock file changed)
pnpm install --prefer-offline   # Gunakan cache

# Add packages
pnpm add express
pnpm add express@4.18.2        # Specific version
pnpm add express@latest         # Latest
pnpm add -D jest                # Dev dependency
pnpm add -O cls                 # Optional dependency
pnpm add -g nodemon             # Global

# Add from sources
pnpm add github:user/repo
pnpm add git+https://github.com/user/repo.git
pnpm add ./local-package        # Local package
\`\`\`

## Remove & Update

\`\`\`bash
# Remove
pnpm remove express
pnpm remove -D jest

# Update
pnpm update                     # Within semver
pnpm update --latest            # Latest versions
pnpm update express --latest    # Specific package
pnpm update --interactive       # Interactive mode

# Check outdated
pnpm outdated
pnpm outdated --format=json
\`\`\`

## List & Info

\`\`\`bash
# List installed
pnpm list
pnpm list --depth=0
pnpm list --depth=1
pnpm list --prod               # Production only
pnpm list --dev                 # Dev only
pnpm list --global              # Global packages

# Info package
pnpm info express
pnpm info express versions
pnpm info express dependencies
\`\`\`

## Store Management

\`\`\`bash
# Store path
pnpm store path

# Store status (cek usage)
pnpm store status

# Prune (hapus unused)
pnpm store prune

# Verify store integrity
pnpm store verify
\`\`\`

## Scripts & Run

\`\`\`bash
# Run scripts
pnpm run dev
pnpm dev                        # Shortcut
pnpm test                       # Built-in test shortcut
pnpm start                      # Built-in start shortcut

# Pass arguments
pnpm run test -- --watch
pnpm run build -- --mode production

# Run multiple scripts
pnpm run /lint/                 # Run all scripts with "lint"
pnpm run "/test:.*/"            # Regex filter

# Execute command in package context
pnpm exec jest
pnpm dlx create-next-app       # Like npx
\`\`\`

## Audit & Security

\`\`\`bash
# Security audit
pnpm audit
pnpm audit --fix
pnpm audit --audit-level=high
pnpm audit --json

# License check
pnpm licenses list
\`\`\`

## Config

\`\`\`bash
# Get config
pnpm config get store-dir

# Set config
pnpm config set store-dir /custom/path

# List config
pnpm config list
\`\`\`
  `,

  quiz: [
    { question: "pnpm add -D?", options: ["Production", "Dev dependency", "Global", "Optional"], correctAnswer: 1 },
    { question: "pnpm store prune?", options: ["Install", "Remove unused packages from store", "Update", "List"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "PNPM Cheatsheet",
      language: "bash",
      code: `# Install
pnpm install                   # Install all
pnpm add express               # Add dependency
pnpm add -D jest               # Add dev dependency
pnpm add -g pnpm               # Update PNPM globally

# Remove
pnpm remove express

# Update
pnpm update                    # Update all
pnpm update --latest           # Update to latest

# Scripts
pnpm run dev                   # Run script
pnpm test                      # Run tests
pnpm exec jest                 # Run binary

# Monorepo
pnpm --filter @app/web build   # Build specific
pnpm -r build                  # Build all
pnpm --filter "...[main]" build # Changed only

# Maintenance
pnpm store prune               # Clean store
pnpm audit                     # Security check
pnpm outdated                  # Check outdated`
    }
  ]
};
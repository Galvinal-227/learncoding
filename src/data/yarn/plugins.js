export const chapter = {
  slug: "yarn-plugins",
  title: "Yarn Plugins",
  description: "Perluas Yarn dengan plugins: typescript, workspace-tools, interactive-tools.",
  icon: "SiYarn",
  color: "#2C8EBB",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["yarn-workspaces"],
  tags: ["yarn", "plugins", "typescript", "extensions"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Yarn Plugin System

Yarn 2+ (Berry) memiliki **plugin system** untuk memperluas fungsionalitas. Plugins bisa ditulis dalam JavaScript/TypeScript.

## Official Plugins

| Plugin | Fungsi |
|--------|--------|
| **plugin-typescript** | TypeScript support (tsc, tsconfig) |
| **plugin-workspace-tools** | Advanced workspace commands |
| **plugin-interactive-tools** | Interactive upgrade, dedupe |
| **plugin-version** | Version management |
| **plugin-constraints** | Enforce rules across workspaces |

## Install Plugin

\`\`\`bash
# Install plugin
yarn plugin import typescript
yarn plugin import workspace-tools
yarn plugin import interactive-tools
yarn plugin import version

# List installed plugins
yarn plugin list
\`\`\`

## plugin-typescript

\`\`\`bash
yarn plugin import typescript
\`\`\`

\`\`\`bash
# TypeScript commands
yarn tsc                    # Run TypeScript compiler
yarn tsc --build            # Build with tsconfig.json
yarn tsc --watch            # Watch mode
\`\`\`

\`\`\`yaml
# .yarnrc.yml
plugins:
  - path: .yarn/plugins/@yarnpkg/plugin-typescript.cjs
    spec: "@yarnpkg/plugin-typescript"
\`\`\`

## plugin-workspace-tools

\`\`\`bash
yarn plugin import workspace-tools
\`\`\`

\`\`\`bash
# Advanced workspace commands
yarn workspaces foreach run build   # Run in all workspaces
yarn workspaces foreach --parallel run dev
yarn workspaces foreach --include @myapp/* run test
yarn workspaces list --json         # Machine-readable output

# Check workspace dependencies
yarn workspaces focus @myapp/web    # Install only for this workspace
\`\`\`

## plugin-interactive-tools

\`\`\`bash
yarn plugin import interactive-tools
\`\`\`

\`\`\`bash
# Interactive UI
yarn upgrade-interactive      # Select packages to upgrade
yarn dedupe --check           # Check for duplicate packages
yarn dedupe                   # Deduplicate packages
\`\`\`

## plugin-version

\`\`\`bash
yarn plugin import version
\`\`\`

\`\`\`bash
# Version management
yarn version check             # Check which packages need version bump
yarn version apply             # Apply version bumps
yarn version apply --major     # Force major version

# Conventional commits support
yarn version check --conventional
\`\`\`

## Creating Custom Plugin

\`\`\`javascript
// .yarn/plugins/my-plugin.cjs
module.exports = {
    name: 'my-plugin',
    factory: (require) => {
        const { BaseCommand } = require('clipanion');
        
        class HelloCommand extends BaseCommand {
            async execute() {
                console.log('Hello from custom Yarn plugin!');
            }
        }
        
        HelloCommand.addPath('hello');
        
        return {
            commands: [HelloCommand]
        };
    }
};
\`\`\`

\`\`\`bash
# Install custom plugin
yarn plugin import ./.yarn/plugins/my-plugin.cjs

# Run custom command
yarn hello
# → Hello from custom Yarn plugin!
\`\`\`

## Plugin Benefits

\`\`\`
✅ Official TypeScript integration
✅ Workspace management supercharged
✅ Interactive package upgrades
✅ Version bumping automation
✅ Custom CLI commands
✅ Extensible ecosystem
\`\`\`
  `,

  quiz: [
    { question: "yarn plugin import?", options: ["Delete", "Install Yarn plugin", "Remove", "Update"], correctAnswer: 1 },
    { question: "plugin-typescript?", options: ["React", "TypeScript compiler support", "Vue", "Svelte"], correctAnswer: 1 },
    { question: "yarn workspaces foreach?", options: ["One workspace", "Run command in all workspaces", "Delete workspaces", "List only"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Setup Yarn Plugins",
      language: "bash",
      code: `# Install essential plugins
yarn plugin import typescript
yarn plugin import workspace-tools
yarn plugin import interactive-tools

# Use them
yarn tsc
yarn workspaces foreach run build
yarn upgrade-interactive`
    }
  ]
};
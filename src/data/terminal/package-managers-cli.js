export const chapter = {
  slug: "package-managers-cli",
  title: "Package Managers CLI",
  description: "Menggunakan package managers melalui command line: npm, yarn, pnpm.",
  icon: "SiTerminal",
  color: "#4D4D4D",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["terminal-introduction", "terminal-basic-commands"],
  tags: ["terminal", "npm", "yarn", "package-manager"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Package Managers

Package managers untuk mengelola dependencies di project JavaScript/Node.js.

## NPM (Node Package Manager)

### Install
\`\`\`bash
npm install package-name
npm i package-name
npm install -D package-name
npm install --save-dev package-name
npm install -g package-name
npm install
npm i
npm install package-name@1.2.3
npm install package-name --save
npm install package-name -S
npm install package-name --save-dev
npm install package-name -D
\`\`\`

### Uninstall
\`\`\`bash
npm uninstall package-name
npm un package-name
npm uninstall -g package-name
npm uninstall --save package-name
\`\`\`

### Update
\`\`\`bash
npm update
npm update package-name
npm install package-name@latest
npm install -g npm@latest
\`\`\`

### List
\`\`\`bash
npm list
npm ls
npm list --depth=0
npm list -g --depth=0
npm outdated
\`\`\`

### Scripts
\`\`\`bash
npm run
npm run start
npm run build
npm run test
npm run dev
\`\`\`

### Cache
\`\`\`bash
npm cache clean
npm cache verify
npm cache ls
\`\`\`

### Config
\`\`\`bash
npm config list
npm config get registry
npm config set registry https://registry.npmjs.org/
npm config delete key
\`\`\`

## Yarn

### Install
\`\`\`bash
npm install -g yarn

yarn add package-name
yarn add package-name --dev
yarn add -D package-name
yarn global add package-name
yarn install
yarn
\`\`\`

### Uninstall
\`\`\`bash
yarn remove package-name
yarn global remove package-name
\`\`\`

### Update
\`\`\`bash
yarn upgrade
yarn upgrade package-name
yarn upgrade --latest
\`\`\`

### List
\`\`\`bash
yarn list
yarn list --depth=0
yarn outdated
yarn why package-name
\`\`\`

### Scripts
\`\`\`bash
yarn run
yarn start
yarn build
yarn test
\`\`\`

## PNPM

### Install
\`\`\`bash
npm install -g pnpm

pnpm add package-name
pnpm add -D package-name
pnpm add -g package-name
pnpm install
pnpm i
\`\`\`

### Uninstall
\`\`\`bash
pnpm remove package-name
pnpm remove -g package-name
\`\`\`

### Update
\`\`\`bash
pnpm update
pnpm update package-name
pnpm add package-name@latest
\`\`\`

### List
\`\`\`bash
pnpm list
pnpm ls
pnpm list --depth=0
pnpm outdated
\`\`\`

### Scripts
\`\`\`bash
pnpm run
pnpm start
pnpm build
pnpm test
\`\`\`

## Comparison

| Command | npm | yarn | pnpm |
|---------|-----|------|------|
| Install | npm install | yarn install | pnpm install |
| Add | npm install pkg | yarn add pkg | pnpm add pkg |
| Remove | npm uninstall pkg | yarn remove pkg | pnpm remove pkg |
| Update | npm update | yarn upgrade | pnpm update |
| Global | npm install -g | yarn global add | pnpm add -g |
| Script | npm run | yarn run | pnpm run |

## Best Practices

1. Gunakan package-lock.json / yarn.lock / pnpm-lock.yaml
2. Commit lock files
3. Gunakan --save-dev untuk dev dependencies
4. Update dependencies secara berkala
5. Audit vulnerabilities: npm audit
6. Gunakan .npmrc untuk config
7. Gunakan private registry jika perlu
8. Jangan install global packages sembarangan
  `,
  quiz: [
    {
      question: "Perintah untuk install package di npm adalah?",
      options: ["npm add", "npm install", "npm get", "npm pull"],
      correctAnswer: 1
    },
    {
      question: "Yarn equivalent dari npm install adalah?",
      options: ["yarn add", "yarn install", "yarn get", "yarn pull"],
      correctAnswer: 1
    },
    {
      question: "File lock untuk pnpm adalah?",
      options: ["package-lock.json", "yarn.lock", "pnpm-lock.yaml", "lock.json"],
      correctAnswer: 2
    }
  ],
  codeExamples: [
    {
      title: "Package Managers Examples",
      code: `// ============================================
// NPM COMMANDS
// ============================================
npm init -y
npm install express
npm install -D nodemon
npm install -g create-react-app
npm install express@4.18.0
npm install --save-dev jest @types/jest

npm uninstall express
npm uninstall -g create-react-app

npm update
npm update express
npm install express@latest

npm list
npm list --depth=0
npm list -g --depth=0
npm outdated

npm run start
npm run build
npm run test
npm run dev

npm cache clean --force
npm cache verify

npm config list
npm config get registry
npm config set registry https://registry.npmjs.org/

npm audit
npm audit fix
npm audit fix --force

// ============================================
// YARN COMMANDS
// ============================================
npm install -g yarn

yarn init -y
yarn add express
yarn add -D nodemon
yarn global add create-react-app
yarn add express@4.18.0

yarn remove express
yarn global remove create-react-app

yarn upgrade
yarn upgrade express
yarn upgrade --latest

yarn list
yarn list --depth=0
yarn outdated
yarn why express

yarn start
yarn build
yarn test

yarn cache clean

// ============================================
// PNPM COMMANDS
// ============================================
npm install -g pnpm

pnpm init
pnpm add express
pnpm add -D nodemon
pnpm add -g create-react-app
pnpm add express@4.18.0

pnpm remove express
pnpm remove -g create-react-app

pnpm update
pnpm update express
pnpm add express@latest

pnpm list
pnpm list --depth=0
pnpm outdated

pnpm run start
pnpm run build
pnpm run test

// ============================================
// PACKAGE.JSON SCRIPTS
// ============================================
{
    "scripts": {
        "start": "node src/index.js",
        "dev": "nodemon src/index.js",
        "build": "webpack --mode production",
        "test": "jest",
        "test:watch": "jest --watch",
        "lint": "eslint src/**/*.js",
        "format": "prettier --write src/**/*.js",
        "precommit": "npm run lint && npm run test"
    }
}

// ============================================
// .NPMRC CONFIG
// ============================================
registry=https://registry.npmjs.org/
prefix=/usr/local
save-exact=true
audit=true

// ============================================
// PRIVATE REGISTRY
// ============================================
npm config set @myorg:registry https://npm.pkg.github.com
npm install @myorg/package-name

// ============================================
// CI/CD SCRIPTS
// ============================================
# GitHub Actions
- name: Install dependencies
  run: npm ci

- name: Run tests
  run: npm test

- name: Build
  run: npm run build

# GitLab CI
install:
  script:
    - npm ci

test:
  script:
    - npm test

build:
  script:
    - npm run build`,
      language: "bash"
    }
  ]
};
import { chapter as commands } from './commands.js';
import { chapter as file_permissions } from './file-permissions.js';
import { chapter as introduction } from './introduction.js';
import { chapter as networking } from './networking.js';
import { chapter as package_management } from './package-management.js';
import { chapter as processes } from './processes.js';
import { chapter as quiz } from './quiz.js';
import { chapter as security } from './security.js';
import { chapter as services } from './services.js';
import { chapter as shell_scripting } from './shell-scripting.js';
import { chapter as users_groups } from './users-groups.js';

export const category = {
  slug: "linux",
  title: "Linux",
  description: "Pelajari dasar-dasar Linux untuk server administration, deployment, dan DevOps.",
  icon: "SiLinux",
  color: "#FCC624",
  totalChapters: 11,
  difficulty: "Intermediate",
  order: 59,
  isPublished: true,
  chapters: [
    commands,
    file_permissions,
    introduction,
    networking,
    package_management,
    processes,
    quiz,
    security,
    services,
    shell_scripting,
    users_groups
  ]
};

import { chapter as basic_commands } from './basic-commands.js';
import { chapter as customizing_shell } from './customizing-shell.js';
import { chapter as environment_variables } from './environment-variables.js';
import { chapter as file_system } from './file-system.js';
import { chapter as introduction } from './introduction.js';
import { chapter as navigation } from './navigation.js';
import { chapter as package_managers_cli } from './package-managers-cli.js';
import { chapter as permissions } from './permissions.js';
import { chapter as quiz } from './quiz.js';
import { chapter as scripting } from './scripting.js';
import { chapter as ssh } from './ssh.js';

export const category = {
  slug: "terminal",
  title: "Terminal & Command Line",
  description: "Pelajari dasar-dasar terminal dan command line untuk menjadi developer yang produktif.",
  icon: "SiTerminal",
  color: "#4D4D4D",
  totalChapters: 11,
  difficulty: "Beginner to Intermediate",
  order: 16,
  isPublished: true,
  chapters: [
    basic_commands,
    customizing_shell,
    environment_variables,
    file_system,
    introduction,
    navigation,
    package_managers_cli,
    permissions,
    quiz,
    scripting,
    ssh
  ]
};

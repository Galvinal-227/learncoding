import { chapter as debugging } from './debugging.js';
import { chapter as extensions } from './extensions.js';
import { chapter as installation } from './installation.js';
import { chapter as integrated_terminal } from './integrated-terminal.js';
import { chapter as interfaceDesign } from './interface.js';
import { chapter as introduction } from './introduction.js';
import { chapter as keyboard_shortcuts } from './keyboard-shortcuts.js';
import { chapter as live_share } from './live-share.js';
import { chapter as quiz } from './quiz.js';
import { chapter as settings } from './settings.js';
import { chapter as snippets } from './snippets.js';
import { chapter as workspace } from './workspace.js';

export const category = {
  slug: "vscode",
  title: "VS Code",
  description: "Optimasi VS Code untuk produktivitas maksimal sebagai developer.",
  icon: "SiVisualstudiocode",
  color: "#007ACC",
  totalChapters: 12,
  difficulty: "Beginner",
  order: 2,
  isPublished: true,
  chapters: [
    debugging,
    extensions,
    installation,
    integrated_terminal,
    interfaceDesign,
    introduction,
    keyboard_shortcuts,
    live_share,
    quiz,
    settings,
    snippets,
    workspace
  ]
};
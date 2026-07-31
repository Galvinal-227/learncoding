import { chapter as code_blocks } from './code-blocks.js';
import { chapter as extended_syntax } from './extended-syntax.js';
import { chapter as headings } from './headings.js';
import { chapter as introduction } from './introduction.js';
import { chapter as links } from './links.js';
import { chapter as lists } from './lists.js';
import { chapter as mdx } from './mdx.js';
import { chapter as quiz } from './quiz.js';
import { chapter as syntax } from './syntax.js';
import { chapter as tables } from './tables.js';
import { chapter as tools } from './tools.js';

export const category = {
  slug: "markdown",
  title: "Markdown",
  description: "Kuasai Markdown untuk dokumentasi, README, blogging, dan technical writing.",
  icon: "SiMarkdown",
  color: "#000000",
  totalChapters: 12,
  difficulty: "Beginner",
  order: 3,
  isPublished: true,
  chapters: [
    code_blocks,
    extended_syntax,
    headings,
    introduction,
    links,
    lists,
    mdx,
    quiz,
    syntax,
    tables,
    tools
  ]
};

import { chapter as basic_types } from './basic-types.js';
import { chapter as best_practices } from './best-practices.js';
import { chapter as classes } from './classes.js';
import { chapter as declaration_files } from './declaration-files.js';
import { chapter as decorators } from './decorators.js';
import { chapter as enums } from './enums.js';
import { chapter as functions } from './functions.js';
import { chapter as generics } from './generics.js';
import { chapter as installation } from './installation.js';
import { chapter as interfaces } from './interfaces.js';
import { chapter as introduction } from './introduction.js';
import { chapter as modules } from './modules.js';
import { chapter as node_typescript } from './node-typescript.js';
import { chapter as quiz } from './quiz.js';
import { chapter as react_typescript } from './react-typescript.js';
import { chapter as tsconfig } from './tsconfig.js';
import { chapter as type_aliases } from './type-aliases.js';
import { chapter as type_guards } from './type-guards.js';
import { chapter as union_intersection } from './union-intersection.js';

export const category = {
  slug: "typescript",
  title: "TypeScript",
  description: "Pelajari TypeScript dari dasar hingga mahir: type system, OOP, generics, dan integrasi dengan framework.",
  icon: "SiTypescript",
  color: "#3178C6",
  totalChapters: 19,
  difficulty: "Intermediate to Advanced",
  order: 19,
  isPublished: true,
  chapters: [
    basic_types,
    best_practices,
    classes,
    declaration_files,
    decorators,
    enums,
    functions,
    generics,
    installation,
    interfaces,
    introduction,
    modules,
    node_typescript,
    quiz,
    react_typescript,
    tsconfig,
    type_aliases,
    type_guards,
    union_intersection
  ]
};

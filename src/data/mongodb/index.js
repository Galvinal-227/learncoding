import { chapter as aggregation } from './aggregation.js';
import { chapter as atlas } from './atlas.js';
import { chapter as best_practices } from './best-practices.js';
import { chapter as crud } from './crud.js';
import { chapter as indexes } from './indexes.js';
import { chapter as installation } from './installation.js';
import { chapter as introduction } from './introduction.js';
import { chapter as mongoose } from './mongoose.js';
import { chapter as quiz } from './quiz.js';
import { chapter as replication } from './replication.js';
import { chapter as sharding } from './sharding.js';

export const category = {
  slug: "mongodb",
  title: "MongoDB",
  description: "Pelajari MongoDB - database NoSQL untuk aplikasi modern dengan performa tinggi.",
  icon: "SiMongodb",
  color: "#47A248",
  totalChapters: 11,
  difficulty: "Intermediate",
  order: 50,
  isPublished: true,
  chapters: [
    aggregation,
    atlas,
    best_practices,
    crud,
    indexes,
    installation,
    introduction,
    mongoose,
    quiz,
    replication,
    sharding
  ]
};

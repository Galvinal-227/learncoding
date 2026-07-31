import { chapter as api } from './api.js';
import { chapter as introduction } from './introduction.js';
import { chapter as packagers } from './packagers.js';
import { chapter as quiz } from './quiz.js';
import { chapter as transformers } from './transformers.js';
import { chapter as zero_config } from './zero-config.js';

export const category = {
  slug: "parcel",
  title: "Parcel",
  description: "Pelajari Parcel - zero-config bundler untuk aplikasi web yang simpel dan cepat.",
  icon: "SiParcel",
  color: "#E34F26",
  totalChapters: 6,
  difficulty: "Beginner",
  order: 27,
  isPublished: true,
  chapters: [
    api,
    introduction,
    packagers,
    quiz,
    transformers,
    zero_config
  ]
};

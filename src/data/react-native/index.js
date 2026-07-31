import { chapter as core_components } from './core-components.js';
import { chapter as deployment } from './deployment.js';
import { chapter as expo } from './expo.js';
import { chapter as introduction } from './introduction.js';
import { chapter as native_features } from './native-features.js';
import { chapter as navigation } from './navigation.js';
import { chapter as quiz } from './quiz.js';
import { chapter as state_management } from './state-management.js';
import { chapter as styling } from './styling.js';

export const category = {
  slug: "react-native",
  title: "React Native",
  description: "Bangun aplikasi mobile iOS dan Android dengan React Native dan Expo.",
  icon: "SiReact",
  color: "#61DAFB",
  totalChapters: 9,
  difficulty: "Advanced",
  order: 98,
  isPublished: true,
  chapters: [
    core_components,
    deployment,
    expo,
    introduction,
    native_features,
    navigation,
    quiz,
    state_management,
    styling
  ]
};

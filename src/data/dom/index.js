import { chapter as document_object } from './document-object.js';
import { chapter as dom_performance } from './dom-performance.js';
import { chapter as event_bubbling_capturing } from './event-bubbling-capturing.js';
import { chapter as event_delegation } from './event-delegation.js';
import { chapter as events } from './events.js';
import { chapter as forms_events } from './forms-events.js';
import { chapter as introduction } from './introduction.js';
import { chapter as manipulating_elements } from './manipulating-elements.js';
import { chapter as quiz } from './quiz.js';
import { chapter as requestAnimationFrame } from './requestAnimationFrame.js';
import { chapter as selecting_elements } from './selecting-elements.js';
import { chapter as timers } from './timers.js';
import { chapter as traversing } from './traversing.js';

export const category = {
  slug: "dom",
  title: "DOM (Document Object Model)",
  description: "Kuasai DOM untuk memanipulasi halaman web secara dinamis dengan JavaScript.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  totalChapters: 13,
  difficulty: "Intermediate",
  order: 7,
  isPublished: true,
  chapters: [
    document_object,
    dom_performance,
    event_bubbling_capturing,
    event_delegation,
    events,
    forms_events,
    introduction,
    manipulating_elements,
    quiz,
    requestAnimationFrame,
    selecting_elements,
    timers,
    traversing
  ]
};

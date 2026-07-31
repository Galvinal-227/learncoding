import { chapter as abort_controller } from './abort-controller.js';
import { chapter as async_await } from './async-await.js';
import { chapter as async_patterns } from './async-patterns.js';
import { chapter as callbacks } from './callbacks.js';
import { chapter as error_handling_async } from './error-handling-async.js';
import { chapter as fetch_advanced } from './fetch-advanced.js';
import { chapter as introduction } from './introduction.js';
import { chapter as microtasks_macrotasks } from './microtasks-macrotasks.js';
import { chapter as promise_all_race } from './promise-all-race.js';
import { chapter as promises } from './promises.js';
import { chapter as quiz } from './quiz.js';

export const category = {
  slug: "async-javascript",
  title: "Async JavaScript",
  description: "Kuasai pemrograman asynchronous di JavaScript: Callback, Promise, Async/Await, dan Event Loop.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  totalChapters: 11,
  difficulty: "Intermediate",
  order: 8,
  isPublished: true,
  chapters: [
    abort_controller,
    async_await,
    async_patterns,
    callbacks,
    error_handling_async,
    fetch_advanced,
    introduction,
    microtasks_macrotasks,
    promise_all_race,
    promises,
    quiz
  ]
};

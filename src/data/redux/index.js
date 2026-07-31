import { chapter as actions } from './actions.js';
import { chapter as dispatch } from './dispatch.js';
import { chapter as introduction } from './introduction.js';
import { chapter as middleware } from './middleware.js';
import { chapter as quiz } from './quiz.js';
import { chapter as reducers } from './reducers.js';
import { chapter as rtk_query } from './rtk-query.js';
import { chapter as saga } from './saga.js';
import { chapter as selectors } from './selectors.js';
import { chapter as store } from './store.js';
import { chapter as thunk } from './thunk.js';
import { chapter as toolkit } from './toolkit.js';

export const category = {
  slug: "redux",
  title: "redux",
  description: "Deskripsi untuk redux",
  icon: "FiBookOpen",
  color: "#FFFFFF",
  totalChapters: 12,
  difficulty: "intermediate",
  order: 0,
  isPublished: true,
  chapters: [
    actions,
    dispatch,
    introduction,
    middleware,
    quiz,
    reducers,
    rtk_query,
    saga,
    selectors,
    store,
    thunk,
    toolkit
  ]
};

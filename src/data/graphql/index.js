import { chapter as apollo_server } from './apollo-server.js';
import { chapter as best_practices } from './best-practices.js';
import { chapter as client_side } from './client-side.js';
import { chapter as federation } from './federation.js';
import { chapter as introduction } from './introduction.js';
import { chapter as mutations } from './mutations.js';
import { chapter as queries } from './queries.js';
import { chapter as quiz } from './quiz.js';
import { chapter as resolvers } from './resolvers.js';
import { chapter as schema } from './schema.js';
import { chapter as subscriptions } from './subscriptions.js';

export const category = {
  slug: "graphql",
  title: "GraphQL",
  description: "Kuasai GraphQL - query language modern untuk API yang fleksibel dan efisien.",
  icon: "SiGraphql",
  color: "#E10098",
  totalChapters: 11,
  difficulty: "Advanced",
  order: 43,
  isPublished: true,
  chapters: [
    apollo_server,
    best_practices,
    client_side,
    federation,
    introduction,
    mutations,
    queries,
    quiz,
    resolvers,
    schema,
    subscriptions
  ]
};

import { chapter as twofa } from './twofa.js';
import { chapter as introduction } from './introduction.js';
import { chapter as jwt } from './jwt.js';
import { chapter as oauth } from './oauth.js';
import { chapter as openid_connect } from './openid-connect.js';
import { chapter as password_hashing } from './password-hashing.js';
import { chapter as quiz } from './quiz.js';
import { chapter as security_considerations } from './security-considerations.js';
import { chapter as sessions } from './sessions.js';
import { chapter as social_login } from './social-login.js';

export const category = {
  slug: "authentication",
  title: "Authentication",
  description: "Kuasai sistem autentikasi web modern: JWT, OAuth, sessions, dan best practices keamanan.",
  icon: "SiAuth0",
  color: "#EB5424",
  totalChapters: 10,
  difficulty: "Advanced",
  order: 45,
  isPublished: true,
  chapters: [
    twofa,
    introduction,
    jwt,
    oauth,
    openid_connect,
    password_hashing,
    quiz,
    security_considerations,
    sessions,
    social_login
  ]
};

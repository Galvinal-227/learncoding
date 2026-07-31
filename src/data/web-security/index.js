import { chapter as api_security } from './api-security.js';
import { chapter as authentication_security } from './authentication-security.js';
import { chapter as cors } from './cors.js';
import { chapter as csp } from './csp.js';
import { chapter as csrf } from './csrf.js';
import { chapter as introduction } from './introduction.js';
import { chapter as owasp } from './owasp.js';
import { chapter as quiz } from './quiz.js';
import { chapter as security_headers } from './security-headers.js';
import { chapter as security_tools } from './security-tools.js';
import { chapter as sql_injection } from './sql-injection.js';
import { chapter as xss } from './xss.js';

export const category = {
  slug: "web-security",
  title: "Web Security",
  description: "Pelajari keamanan web: OWASP, XSS, CSRF, CSP, CORS, SQL Injection, dan best practices.",
  icon: "SiOwasp",
  color: "#000000",
  totalChapters: 12,
  difficulty: "Advanced",
  order: 64,
  isPublished: true,
  chapters: [
    api_security,
    authentication_security,
    cors,
    csp,
    csrf,
    introduction,
    owasp,
    quiz,
    security_headers,
    security_tools,
    sql_injection,
    xss
  ]
};

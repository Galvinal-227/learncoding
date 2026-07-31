import { chapter as dependency_audit } from './dependency-audit.js';
import { chapter as helmet } from './helmet.js';
import { chapter as https } from './https.js';
import { chapter as introduction } from './introduction.js';
import { chapter as logging_monitoring } from './logging-monitoring.js';
import { chapter as quiz } from './quiz.js';
import { chapter as rate_limiting } from './rate-limiting.js';
import { chapter as secrets_management } from './secrets-management.js';

export const category = {
  slug: "security",
  title: "Web Security",
  description: "Pelajari praktik keamanan web untuk melindungi aplikasi dari berbagai ancaman dan serangan.",
  icon: "SiSecurity",
  color: "#00B4D8",
  totalChapters: 8,
  difficulty: "Intermediate to Advanced",
  order: 7,
  isPublished: true,
  chapters: [
    dependency_audit,
    helmet,
    https,
    introduction,
    logging_monitoring,
    quiz,
    rate_limiting,
    secrets_management
  ]
};

import { chapter as browsers } from './browsers.js';
import { chapter as client_server_model } from './client-server-model.js';
import { chapter as dns } from './dns.js';
import { chapter as domain } from './domain.js';
import { chapter as hosting } from './hosting.js';
import { chapter as how_internet_works } from './how-internet-works.js';
import { chapter as http } from './http.js';
import { chapter as https } from './https.js';
import { chapter as introduction } from './introduction.js';
import { chapter as packets } from './packets.js';
import { chapter as protocols } from './protocols.js';
import { chapter as quiz } from './quiz.js';
import { chapter as security_intro } from './security-intro.js';
import { chapter as tcp_ip } from './tcp-ip.js';
import { chapter as url } from './url.js';
import { chapter as web_standards } from './web-standards.js';

export const category = {
  slug: "internet",
  title: "Internet",
  description: "Pahami cara kerja internet: HTTP, DNS, browser, server, dan protokol yang membuat web berfungsi.",
  icon: "SiInternetexplorer",
  color: "#0076D6",
  totalChapters: 16,
  difficulty: "Beginner",
  order: 0,
  isPublished: true,
  chapters: [
    browsers,
    client_server_model,
    dns,
    domain,
    hosting,
    how_internet_works,
    http,
    https,
    introduction,
    packets,
    protocols,
    quiz,
    security_intro,
    tcp_ip,
    url,
    web_standards
  ]
};

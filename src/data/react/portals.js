export const chapter = {
  slug: "react-portals",
  title: "Portals",
  description: "Render komponen di luar parent DOM tree dengan Portals.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Intermediate",
  estimatedReadingTime: 10,
  prerequisites: ["react-components"],
  tags: ["react", "portals", "modal", "dom"],
  order: 22,
  isPublished: true,
  updatedAt: "2026-07-29",
  content: `
## Basic Portal

\`\`\`jsx
import { createPortal } from 'react-dom';

function Modal({ children, isOpen }) {
    if (!isOpen) return null;
    
    return createPortal(
        <div className="modal-overlay">
            <div className="modal">{children}</div>
        </div>,
        document.getElementById('portal-root')
    );
}
\`\`\`

## HTML Setup

\`\`\`html
<div id="root"></div>
<div id="portal-root"></div> <!-- Portal target -->
\`\`\`

## Use Cases

- ✅ Modal/Dialog
- ✅ Tooltip
- ✅ Dropdown
- ✅ Notification/Toast
\`\`\`
  `,

  quiz: [
    { question: "createPortal?", options: ["In parent DOM", "Render outside parent DOM tree", "Delete", "Hide"], correctAnswer: 1 },
    { question: "Portal use case?", options: ["Button", "Modal, tooltip, dropdown", "Input", "Text"], correctAnswer: 1 }
  ],

  codeExamples: []
};
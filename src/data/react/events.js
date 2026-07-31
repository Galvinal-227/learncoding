export const chapter = {
  slug: "react-events",
  title: "Events",
  description: "Handle user interaction dengan Synthetic Events di React.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["react-jsx"],
  tags: ["react", "events", "onclick", "synthetic"],
  order: 15,
  isPublished: true,
  updatedAt: "2026-07-29",
  content: `
## Synthetic Events

\`\`\`jsx
function handleClick(event) {
    event.preventDefault();
    console.log(event.target);    // Element
    console.log(event.nativeEvent); // Original DOM event
}

<button onClick={handleClick}>Click</button>
\`\`\`

## Common Events

\`\`\`jsx
onClick, onDoubleClick, onMouseEnter, onMouseLeave
onChange (input, select, textarea)
onSubmit (form)
onFocus, onBlur
onKeyDown, onKeyUp, onKeyPress
onScroll, onWheel
\`\`\`

## Passing Arguments

\`\`\`jsx
<button onClick={() => handleDelete(id)}>Delete</button>
<button onClick={(e) => handleClick(e, id)}>Click</button>
\`\`\`
  `,

  quiz: [
    { question: "React event: camelCase?", options: ["onclick", "onClick", "on_click", "OnClick"], correctAnswer: 1 },
    { question: "preventDefault()?", options: ["Stop", "Prevent default browser behavior", "Propagate", "Render"], correctAnswer: 1 }
  ],

  codeExamples: []
};
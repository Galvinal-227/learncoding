export const chapter = {
  slug: "gsap-react-gsap",
  title: "GSAP dengan React",
  description: "Integrasikan GSAP di React: useRef, useEffect, useGSAP hook, dan cleanup.",
  icon: "SiGreensock",
  color: "#88CE02",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["gsap-tweens", "react-introduction"],
  tags: ["gsap", "react", "useref", "usegsap"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Install

\`\`\`bash
npm install gsap
\`\`\`

## Basic Pattern (useRef + useEffect)

\`\`\`jsx
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

function Box() {
    const boxRef = useRef(null);
    
    useEffect(() => {
        gsap.to(boxRef.current, {
            x: 200,
            rotation: 360,
            duration: 2
        });
    }, []);
    
    return <div ref={boxRef} className="box" />;
}
\`\`\`

## Cleanup (PENTING!)

\`\`\`jsx
useEffect(() => {
    const ctx = gsap.context(() => {
        gsap.to('.box', { x: 200 });
        gsap.to('.circle', { scale: 1.5 });
    }, containerRef);
    
    return () => ctx.revert(); // Cleanup!
}, []);
\`\`\`

## useGSAP Hook (Modern)

\`\`\`bash
npm install @gsap/react
\`\`\`

\`\`\`jsx
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Box() {
    const containerRef = useRef(null);
    
    useGSAP(() => {
        gsap.from('.box', { opacity: 0, y: 50, stagger: 0.2 });
    }, { scope: containerRef });
    
    return (
        <div ref={containerRef}>
            <div className="box">Item 1</div>
            <div className="box">Item 2</div>
        </div>
    );
}
\`\`\`

## ScrollTrigger di React

\`\`\`jsx
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Section() {
    const ref = useRef(null);
    
    useGSAP(() => {
        gsap.from('.card', {
            opacity: 0, y: 100,
            scrollTrigger: {
                trigger: ref.current,
                start: 'top 80%',
                toggleActions: 'play none none reverse'
            }
        });
    }, { scope: ref });
    
    return <section ref={ref}><div className="card" /></section>;
}
\`\`\`
  `,

  quiz: [
    { question: "useRef di GSAP React?", options: ["Styling", "Reference ke DOM element untuk dianimasikan", "State", "Props"], correctAnswer: 1 },
    { question: "gsap.context()?", options: ["Debug", "Group animasi + auto cleanup", "Plugin", "CSS"], correctAnswer: 1 }
  ],

  codeExamples: []
};
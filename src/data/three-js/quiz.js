export const chapter = {
  slug: "quiz",
  title: "Quiz Akhir Three.js",
  description: "Uji pemahaman Anda tentang semua konsep Three.js yang telah dipelajari.",
  icon: "SiQuizlet",
  color: "#6B46C1",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: [
    "threejs-introduction",
    "threejs-scene",
    "threejs-geometries",
    "threejs-materials",
    "threejs-lights",
    "threejs-camera",
    "threejs-controls",
    "threejs-animation",
    "threejs-loading-models",
    "threejs-post-processing",
    "threejs-renderer"
  ],
  tags: ["quiz", "threejs", "assessment"],
  order: 12,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
# Quiz Akhir Three.js

Selamat! Anda telah menyelesaikan semua materi tentang Three.js. Sekarang saatnya menguji pemahaman Anda dengan quiz berikut.

## Petunjuk

- Quiz terdiri dari 10 pertanyaan
- Pilih satu jawaban yang paling benar
- Nilai minimal 70% untuk lulus
- Waktu pengerjaan 15 menit

Good luck! 🍀
  `,
  quiz: [
    {
      question: "Apa itu Three.js?",
      options: ["CSS Framework", "Library 3D WebGL", "JavaScript Framework", "Database"],
      correctAnswer: 1
    },
    {
      question: "Komponen untuk wadah objek 3D adalah?",
      options: ["Camera", "Scene", "Renderer", "Light"],
      correctAnswer: 1
    },
    {
      question: "Geometri untuk kubus adalah?",
      options: ["SphereGeometry", "BoxGeometry", "CylinderGeometry", "ConeGeometry"],
      correctAnswer: 1
    },
    {
      question: "Material PBR di Three.js adalah?",
      options: ["MeshBasicMaterial", "MeshStandardMaterial", "MeshPhongMaterial", "MeshLambertMaterial"],
      correctAnswer: 1
    },
    {
      question: "Light yang menerangi dari semua arah adalah?",
      options: ["DirectionalLight", "PointLight", "AmbientLight", "SpotLight"],
      correctAnswer: 2
    },
    {
      question: "Camera yang memiliki FOV adalah?",
      options: ["OrthographicCamera", "PerspectiveCamera", "CubeCamera", "ArrayCamera"],
      correctAnswer: 1
    },
    {
      question: "Control untuk orbit camera adalah?",
      options: ["OrbitControls", "FlyControls", "TransformControls", "DragControls"],
      correctAnswer: 0
    },
    {
      question: "Method untuk delta time di Three.js adalah?",
      options: ["Time.getDelta()", "Clock.getDelta()", "Timer.delta()", "Performance.now()"],
      correctAnswer: 1
    },
    {
      question: "Loader untuk GLTF adalah?",
      options: ["GLTFLoader", "GLBLoader", "ModelLoader", "ThreeLoader"],
      correctAnswer: 0
    },
    {
      question: "Pass untuk bloom effect adalah?",
      options: ["BloomPass", "UnrealBloomPass", "GlowPass", "LightPass"],
      correctAnswer: 1
    }
  ],
  codeExamples: []
};
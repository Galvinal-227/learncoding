export const chapter = {
  slug: "introduction",
  title: "Pengenalan Three.js",
  description: "Memahami Three.js dan konsep dasar 3D di web.",
  icon: "SiThreedotjs",
  color: "#000000",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: [],
  tags: ["threejs", "3d", "webgl", "graphics"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Three.js?

Three.js adalah library JavaScript untuk membuat grafik 3D interaktif di browser menggunakan WebGL.

## Komponen Dasar

### 1. Scene
Wadah untuk semua objek 3D.

### 2. Camera
Menentukan sudut pandang.

### 3. Renderer
Menggambar scene ke layar.

### 4. Objects
Objek 3D (geometri, material).

### 5. Lights
Menerangi scene.

## Instalasi

\`\`\`bash
npm install three
\`\`\`

## Hello World

\`\`\`javascript
import * as THREE from 'three';

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Cube
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

// Animation
function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();
\`\`\`

## Konsep Dasar

### Coordinate System
\`\`
x: horizontal (kiri/kanan)
y: vertikal (atas/bawah)
z: depth (depan/belakang)
\`\`

### Mesh
\`\`\`javascript
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);
\`\`\`

## Best Practices

1. **Use BufferGeometry** untuk performa
2. **Limit draw calls** - Gabungkan objek
3. **Use LOD** untuk objek jauh
4. **Optimize textures** - Resize sesuai
5. **Use instancing** untuk banyak objek
6. **Disable shadows** jika tidak perlu
7. **Use Frustum Culling**
8. **Minimize garbage collection**
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
      question: "Sumbu z di Three.js adalah?",
      options: ["Horizontal", "Vertikal", "Depth", "Diagonal"],
      correctAnswer: 2
    }
  ],
  codeExamples: [
    {
      title: "Basic Three.js Setup",
      code: `// ============================================
// Basic Three.js Setup
// ============================================
import * as THREE from 'three';

// 1. Scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a2e);

// 2. Camera
const camera = new THREE.PerspectiveCamera(
    75, // FOV
    window.innerWidth / window.innerHeight, // Aspect
    0.1, // Near
    1000 // Far
);
camera.position.set(0, 2, 5);
camera.lookAt(0, 0, 0);

// 3. Renderer
const renderer = new THREE.WebGLRenderer({
    antialias: true
});
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

// 4. Objects
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshStandardMaterial({
    color: 0x00ff88,
    roughness: 0.4,
    metalness: 0.6
});
const cube = new THREE.Mesh(geometry, material);
cube.castShadow = true;
scene.add(cube);

// 5. Lights
const light = new THREE.DirectionalLight(0xffffff, 1);
light.position.set(5, 5, 5);
light.castShadow = true;
scene.add(light);

const ambient = new THREE.AmbientLight(0x404040);
scene.add(ambient);

// 6. Helpers
const grid = new THREE.GridHelper(10, 10);
scene.add(grid);

// 7. Resize Handler
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// 8. Animation Loop
function animate() {
    requestAnimationFrame(animate);
    
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    
    renderer.render(scene, camera);
}
animate();`,
      language: "javascript"
    }
  ]
};
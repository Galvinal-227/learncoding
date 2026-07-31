export const chapter = {
  slug: "controls",
  title: "Controls",
  description: "Menggunakan berbagai kontrol interaksi di Three.js.",
  icon: "SiThreedotjs",
  color: "#000000",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["threejs-introduction", "threejs-camera"],
  tags: ["threejs", "controls", "orbit", "interaction"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## OrbitControls

### Basic Usage
\`\`\`javascript
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const controls = new OrbitControls(camera, renderer.domElement);
controls.update();
\`\`\`

### Options
\`\`\`javascript
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.minDistance = 2;
controls.maxDistance = 50;
controls.maxPolarAngle = Math.PI / 2;
controls.minPolarAngle = 0;
controls.enableZoom = true;
controls.zoomSpeed = 1.0;
controls.enableRotate = true;
controls.rotateSpeed = 1.0;
controls.enablePan = true;
controls.panSpeed = 1.0;
controls.target.set(0, 0, 0);
controls.autoRotate = true;
controls.autoRotateSpeed = 2.0;
controls.update();
\`\`\`

### Events
\`\`\`javascript
controls.addEventListener('start', () => {
    console.log('Interaction started');
});

controls.addEventListener('change', () => {
    console.log('Camera changed');
});

controls.addEventListener('end', () => {
    console.log('Interaction ended');
});
\`\`\`

## TransformControls

\`\`\`javascript
import { TransformControls } from 'three/addons/controls/TransformControls.js';

const controls = new TransformControls(camera, renderer.domElement);
controls.attach(object);
controls.setMode('translate'); // translate, rotate, scale
controls.setSize(0.5);
controls.space = 'world';

controls.addEventListener('dragging-changed', (event) => {
    controls.enabled = !event.value;
});
\`\`\`

## DragControls

\`\`\`javascript
import { DragControls } from 'three/addons/controls/DragControls.js';

const controls = new DragControls(objects, camera, renderer.domElement);

controls.addEventListener('dragstart', (event) => {
    event.object.material.emissive.setHex(0xff0000);
});

controls.addEventListener('drag', (event) => {
    // Do something during drag
});

controls.addEventListener('dragend', (event) => {
    event.object.material.emissive.setHex(0x000000);
});
\`\`\`

## PointerLockControls

\`\`\`javascript
import { PointerLockControls } from 'three/addons/controls/PointerLockControls.js';

const controls = new PointerLockControls(camera, renderer.domElement);

// Lock pointer
renderer.domElement.addEventListener('click', () => {
    controls.lock();
});

controls.addEventListener('lock', () => {
    console.log('Locked');
});

controls.addEventListener('unlock', () => {
    console.log('Unlocked');
});

// Movement
function moveForward(distance) {
    controls.moveForward(distance);
}
function moveRight(distance) {
    controls.moveRight(distance);
}
\`\`\`

## FirstPersonControls

\`\`\`javascript
import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';

const controls = new FirstPersonControls(camera, renderer.domElement);
controls.lookSpeed = 0.1;
controls.movementSpeed = 10;
controls.constrainVertical = true;
controls.verticalMax = 1.5;
controls.verticalMin = -1.5;

// Update in animation loop
controls.update(delta);
\`\`\`

## FlyControls

\`\`\`javascript
import { FlyControls } from 'three/addons/controls/FlyControls.js';

const controls = new FlyControls(camera, renderer.domElement);
controls.movementSpeed = 10;
controls.rollSpeed = 0.1;
controls.dragToLook = true;

// Update in animation loop
controls.update(delta);
\`\`\`

## Best Practices

1. **Enable damping** untuk smooth motion
2. **Set limits** untuk movement
3. **Handle events** untuk interactivity
4. **Use appropriate controls** per use case
5. **Disable controls** saat transform
6. **Update controls** di animation loop
7. **Use helpers** untuk debugging
8. **Optimize controls** untuk performa
  `,
  quiz: [
    {
      question: "Control untuk orbit camera adalah?",
      options: ["OrbitControls", "FlyControls", "TransformControls", "DragControls"],
      correctAnswer: 0
    },
    {
      question: "Control untuk drag object adalah?",
      options: ["OrbitControls", "TransformControls", "DragControls", "FlyControls"],
      correctAnswer: 2
    },
    {
      question: "Property untuk enable damping di OrbitControls adalah?",
      options: ["enableDamping", "damping", "smooth", "inertia"],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Complete Controls Examples",
      code: `// ============================================
// Complete Controls Examples
// ============================================
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { TransformControls } from 'three/addons/controls/TransformControls.js';
import { DragControls } from 'three/addons/controls/DragControls.js';

// Setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a2e);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(8, 6, 8);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

// ============================================
// 1. Objects
// ============================================
const colors = [0xff6b6b, 0x4ecdc4, 0xffe66d, 0xa8e6cf, 0xf38181, 0xaa96da];
const objects = [];

for (let i = 0; i < 6; i++) {
    const geo = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    const mat = new THREE.MeshStandardMaterial({
        color: colors[i],
        roughness: 0.3,
        metalness: 0.7
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(i * 1.5 - 3.75, 0.4, 0);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add(mesh);
    objects.push(mesh);
}

// Ground
const groundGeo = new THREE.PlaneGeometry(20, 20);
const groundMat = new THREE.MeshStandardMaterial({
    color: 0x2a2a4a,
    roughness: 0.8
});
const ground = new THREE.Mesh(groundGeo, groundMat);
ground.rotation.x = -Math.PI / 2;
ground.position.y = -0.5;
ground.receiveShadow = true;
scene.add(ground);

// ============================================
// 2. Lights
// ============================================
const ambient = new THREE.AmbientLight(0x404040, 0.5);
scene.add(ambient);

const directional = new THREE.DirectionalLight(0xffffff, 1);
directional.position.set(5, 10, 5);
directional.castShadow = true;
scene.add(directional);

// ============================================
// 3. Orbit Controls
// ============================================
const orbitControls = new OrbitControls(camera, renderer.domElement);
orbitControls.enableDamping = true;
orbitControls.dampingFactor = 0.05;
orbitControls.minDistance = 3;
orbitControls.maxDistance = 20;
orbitControls.maxPolarAngle = Math.PI / 2;
orbitControls.target.set(0, 0.5, 0);
orbitControls.update();

// ============================================
// 4. Transform Controls
// ============================================
const transformControls = new TransformControls(camera, renderer.domElement);
transformControls.setMode('translate');
transformControls.setSize(0.5);
scene.add(transformControls);

// Attach to first object
transformControls.attach(objects[0]);

// Disable orbit when using transform
transformControls.addEventListener('dragging-changed', (event) => {
    orbitControls.enabled = !event.value;
});

// ============================================
// 5. Drag Controls
// ============================================
const dragControls = new DragControls(objects.slice(2), camera, renderer.domElement);

dragControls.addEventListener('dragstart', (event) => {
    event.object.material.emissive.setHex(0xffffff);
    orbitControls.enabled = false;
});

dragControls.addEventListener('dragend', (event) => {
    event.object.material.emissive.setHex(0x000000);
    orbitControls.enabled = true;
});

// ============================================
// 6. UI Controls
// ============================================
const controls = {
    mode: 'translate',
    selected: objects[0]
};

// Mode buttons (simulated)
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case 't':
            transformControls.setMode('translate');
            break;
        case 'r':
            transformControls.setMode('rotate');
            break;
        case 's':
            transformControls.setMode('scale');
            break;
    }
});

// Click to select
const raycaster = new THREE.Raycaster();
const mouse = new THREE.Vector2();

renderer.domElement.addEventListener('click', (event) => {
    mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
    mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
    
    raycaster.setFromCamera(mouse, camera);
    const intersects = raycaster.intersectObjects(objects);
    
    if (intersects.length > 0) {
        const selected = intersects[0].object;
        transformControls.attach(selected);
        controls.selected = selected;
    }
});

// ============================================
// 7. Grid Helper
// ============================================
const grid = new THREE.GridHelper(15, 15);
scene.add(grid);

// ============================================
// 8. Animation Loop
// ============================================
function animate() {
    requestAnimationFrame(animate);
    
    orbitControls.update();
    renderer.render(scene, camera);
}
animate();

// ============================================
// 9. Resize
// ============================================
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

// ============================================
// 10. Info Display
// ============================================
console.log('Controls:');
console.log('Orbit: Click and drag to orbit');
console.log('Transform: T=Translate, R=Rotate, S=Scale');
console.log('Drag: Drag the last 4 objects');
console.log('Select: Click objects to transform');`,
      language: "javascript"
    }
  ]
};
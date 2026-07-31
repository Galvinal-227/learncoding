export const chapter = {
  slug: "camera",
  title: "Camera",
  description: "Mengelola kamera dan sudut pandang di Three.js.",
  icon: "SiThreedotjs",
  color: "#000000",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["threejs-introduction", "threejs-scene"],
  tags: ["threejs", "camera", "perspective", "orthographic"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Jenis Camera

### PerspectiveCamera
\`\`\`javascript
const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
\`\`\`

### OrthographicCamera
\`\`\`javascript
const camera = new THREE.OrthographicCamera(left, right, top, bottom, near, far);
const camera = new THREE.OrthographicCamera(-10, 10, 10, -10, 0.1, 1000);
\`\`\`

### Perspective vs Orthographic
\`\`\`javascript
// Perspective - realistic
const perspective = new THREE.PerspectiveCamera(60, aspect, 0.1, 1000);

// Orthographic - no perspective distortion
const orthographic = new THREE.OrthographicCamera(-10, 10, 10, -10, 0.1, 1000);
\`\`\`

## Camera Properties

### Position
\`\`\`javascript
camera.position.set(0, 5, 10);
camera.position.x = 5;
camera.position.y = 3;
camera.position.z = 8;
\`\`\`

### LookAt
\`\`\`javascript
camera.lookAt(0, 0, 0);
camera.lookAt(new THREE.Vector3(0, 0, 0));
\`\`\`

### Up
\`\`\`javascript
camera.up.set(0, 1, 0);
\`\`\`

## Camera Controls

### OrbitControls
\`\`\`javascript
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.minDistance = 2;
controls.maxDistance = 50;
controls.maxPolarAngle = Math.PI / 2;
controls.target.set(0, 0, 0);
controls.update();
\`\`\`

### FlyControls
\`\`\`javascript
import { FlyControls } from 'three/addons/controls/FlyControls.js';

const controls = new FlyControls(camera, renderer.domElement);
controls.movementSpeed = 10;
controls.rollSpeed = 0.1;
controls.dragToLook = true;
\`\`\`

### FirstPersonControls
\`\`\`javascript
import { FirstPersonControls } from 'three/addons/controls/FirstPersonControls.js';

const controls = new FirstPersonControls(camera, renderer.domElement);
controls.lookSpeed = 0.1;
controls.movementSpeed = 10;
\`\`\`

## Camera Animation

\`\`\`javascript
// Smooth camera movement
function animateCamera(target, duration = 1000) {
    const start = camera.position.clone();
    const end = target.clone();
    const startTime = Date.now();
    
    function update() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        
        camera.position.lerpVectors(start, end, eased);
        camera.lookAt(0, 0, 0);
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    update();
}
\`\`\`

## Multiple Cameras

\`\`\`javascript
// Main camera
const mainCamera = new THREE.PerspectiveCamera(60, aspect, 0.1, 1000);
mainCamera.position.set(0, 5, 10);

// Secondary camera
const miniCamera = new THREE.PerspectiveCamera(60, 0.25, 0.1, 1000);
miniCamera.position.set(10, 5, 10);

// Render with different cameras
renderer.setViewport(0, 0, window.innerWidth, window.innerHeight);
renderer.render(scene, mainCamera);

renderer.setViewport(window.innerWidth - 300, window.innerHeight - 300, 300, 300);
renderer.render(scene, miniCamera);
\`\`\`

## Best Practices

1. **Use OrbitControls** untuk user interaction
2. **Set near/far** dengan tepat
3. **Use lookAt** untuk orientasi
4. **Handle resize** dengan benar
5. **Use damping** untuk smooth controls
6. **Limit distance** jika perlu
7. **Use camera helper** untuk debugging
8. **Optimize camera** untuk performa
  `,
  quiz: [
    {
      question: "Camera yang memiliki FOV adalah?",
      options: ["OrthographicCamera", "PerspectiveCamera", "CubeCamera", "ArrayCamera"],
      correctAnswer: 1
    },
    {
      question: "Control untuk orbit view adalah?",
      options: ["FlyControls", "OrbitControls", "FirstPersonControls", "TrackballControls"],
      correctAnswer: 1
    },
    {
      question: "Method untuk orientasi kamera adalah?",
      options: ["lookAt", "look", "pointAt", "orientAt"],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Complete Camera Examples",
      code: `// ============================================
// Complete Camera Examples
// ============================================
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';

// Setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a2e);

// ============================================
// 1. Multiple Cameras
// ============================================
// Main perspective camera
const mainCamera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);
mainCamera.position.set(8, 6, 8);
mainCamera.lookAt(0, 0, 0);

// Orthographic camera (for mini-map)
const orthoCamera = new THREE.OrthographicCamera(
    -5, 5, 5, -5, 0.1, 1000
);
orthoCamera.position.set(0, 10, 0);
orthoCamera.lookAt(0, 0, 0);

// ============================================
// 2. Renderers
// ============================================
// Main renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

// Overlay renderer
const overlayRenderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
});
overlayRenderer.setSize(window.innerWidth, window.innerHeight);
overlayRenderer.domElement.style.position = 'absolute';
overlayRenderer.domElement.style.top = '0';
overlayRenderer.domElement.style.left = '0';
overlayRenderer.domElement.style.pointerEvents = 'none';
document.body.appendChild(overlayRenderer.domElement);

// ============================================
// 3. Controls
// ============================================
const controls = new OrbitControls(mainCamera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.05;
controls.minDistance = 3;
controls.maxDistance = 30;
controls.maxPolarAngle = Math.PI / 2;
controls.target.set(0, 0.5, 0);
controls.update();

// ============================================
// 4. Scene Objects
// ============================================
// Ground
const groundGeo = new THREE.PlaneGeometry(20, 20);
const groundMat = new THREE.MeshStandardMaterial({
    color: 0x2a2a4a,
    roughness: 0.8,
    metalness: 0.2
});
const ground = new THREE.Mesh(groundGeo, groundMat);
ground.rotation.x = -Math.PI / 2;
ground.position.y = -0.5;
ground.receiveShadow = true;
scene.add(ground);

// Objects
const colors = [0xff6b6b, 0x4ecdc4, 0xffe66d, 0xa8e6cf, 0xf38181];
const objects = [];

for (let i = 0; i < 5; i++) {
    const geo = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    const mat = new THREE.MeshStandardMaterial({
        color: colors[i],
        roughness: 0.3,
        metalness: 0.7
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(i * 1.5 - 3, 0.4, 0);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add(mesh);
    objects.push(mesh);
}

// ============================================
// 5. Lights
// ============================================
const ambient = new THREE.AmbientLight(0x404040, 0.5);
scene.add(ambient);

const directional = new THREE.DirectionalLight(0xffffff, 1);
directional.position.set(5, 10, 5);
directional.castShadow = true;
directional.shadow.mapSize.width = 2048;
directional.shadow.mapSize.height = 2048;
scene.add(directional);

const hemi = new THREE.HemisphereLight(0x87ceeb, 0x3a1c0a, 0.6);
scene.add(hemi);

// ============================================
// 6. Grid Helper
// ============================================
const grid = new THREE.GridHelper(15, 15);
scene.add(grid);

// ============================================
// 7. Camera Info Display (CSS2D)
// ============================================
const labelRenderer = new CSS2DRenderer();
labelRenderer.setSize(window.innerWidth, window.innerHeight);
labelRenderer.domElement.style.position = 'absolute';
labelRenderer.domElement.style.top = '0';
labelRenderer.domElement.style.left = '0';
labelRenderer.domElement.style.pointerEvents = 'none';
document.body.appendChild(labelRenderer.domElement);

// ============================================
// 8. Animation
// ============================================
function animate() {
    requestAnimationFrame(animate);
    
    // Rotate objects
    objects.forEach((obj, i) => {
        obj.rotation.x += 0.01;
        obj.rotation.y += 0.01 + i * 0.005;
    });
    
    controls.update();
    
    // Render main view
    renderer.render(scene, mainCamera);
    
    // Render mini-map (top-right corner)
    const width = 200;
    const height = 200;
    const x = window.innerWidth - width - 20;
    const y = 20;
    
    renderer.setViewport(x, y, width, height);
    renderer.setScissor(x, y, width, height);
    renderer.setScissorTest(true);
    renderer.render(scene, orthoCamera);
    renderer.setScissorTest(false);
    
    // Reset viewport
    renderer.setViewport(0, 0, window.innerWidth, window.innerHeight);
    
    // Overlay
    overlayRenderer.render(scene, mainCamera);
}
animate();

// ============================================
// 9. Resize
// ============================================
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    mainCamera.aspect = width / height;
    mainCamera.updateProjectionMatrix();
    
    renderer.setSize(width, height);
    overlayRenderer.setSize(width, height);
    labelRenderer.setSize(width, height);
});

// ============================================
// 10. Camera Animation Functions
// ============================================
function animateCameraTo(target) {
    const start = mainCamera.position.clone();
    const end = target.clone();
    const startTime = Date.now();
    const duration = 1000;
    
    function update() {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        
        mainCamera.position.lerpVectors(start, end, eased);
        mainCamera.lookAt(0, 0.5, 0);
        
        if (progress < 1) {
            requestAnimationFrame(update);
        }
    }
    update();
}

// Example: Click to move camera
window.addEventListener('click', () => {
    const target = new THREE.Vector3(
        (Math.random() - 0.5) * 10,
        5 + Math.random() * 5,
        (Math.random() - 0.5) * 10
    );
    animateCameraTo(target);
});`,
      language: "javascript"
    }
  ]
};
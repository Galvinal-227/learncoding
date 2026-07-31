export const chapter = {
  slug: "animation",
  title: "Animation",
  description: "Membuat animasi di Three.js menggunakan requestAnimationFrame dan tweening.",
  icon: "SiThreedotjs",
  color: "#000000",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["threejs-introduction", "threejs-scene"],
  tags: ["threejs", "animation", "tween", "keyframe"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Animation Loop

### Basic Loop
\`\`\`javascript
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
\`\`\`

### Delta Time
\`\`\`javascript
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);
    const delta = clock.getDelta();
    const elapsed = clock.getElapsedTime();
    
    // Use delta for smooth animation
    mesh.rotation.y += delta * 0.5;
    
    renderer.render(scene, camera);
}
\`\`\`

## Transform Animation

### Position
\`\`\`javascript
// Sine wave motion
const startPos = new THREE.Vector3(-3, 0, 0);
const endPos = new THREE.Vector3(3, 0, 0);

function animate() {
    const t = (Math.sin(elapsed) + 1) / 2;
    mesh.position.lerpVectors(startPos, endPos, t);
}
\`\`\`

### Rotation
\`\`\`javascript
// Continuous rotation
mesh.rotation.y += 0.01;
mesh.rotation.x = Math.sin(elapsed) * 0.5;

// Smooth rotation to target
function rotateTo(target) {
    const start = mesh.rotation.y;
    const delta = target - start;
    mesh.rotation.y += delta * 0.05;
}
\`\`\`

### Scale
\`\`\`javascript
// Pulse
const scale = 1 + Math.sin(elapsed * 2) * 0.2;
mesh.scale.set(scale, scale, scale);

// Bounce
function bounce() {
    const s = Math.abs(Math.sin(elapsed * 2));
    mesh.scale.y = 1 + s * 0.5;
}
\`\`\`

## Keyframe Animation

\`\`\`javascript
const keyframes = [
    { time: 0, position: new THREE.Vector3(-3, 0, 0) },
    { time: 1, position: new THREE.Vector3(0, 2, 0) },
    { time: 2, position: new THREE.Vector3(3, 0, 0) },
    { time: 3, position: new THREE.Vector3(0, 0, 0) }
];

let animTime = 0;
const duration = 4;

function animateKeyframes() {
    animTime += delta;
    if (animTime > duration) animTime = 0;
    
    // Find keyframes
    const index = keyframes.findIndex(k => k.time > animTime);
    const prev = keyframes[index - 1] || keyframes[keyframes.length - 1];
    const next = keyframes[index] || keyframes[0];
    
    const t = (animTime - prev.time) / (next.time - prev.time);
    mesh.position.lerpVectors(prev.position, next.position, t);
}
\`\`\`

## Animation with TWEEN

\`\`\`javascript
import * as TWEEN from '@tweenjs/tween.js';

// Position animation
new TWEEN.Tween(mesh.position)
    .to({ x: 3, y: 2, z: 0 }, 1000)
    .easing(TWEEN.Easing.Quadratic.InOut)
    .start();

// Rotation animation
new TWEEN.Tween(mesh.rotation)
    .to({ y: Math.PI * 2 }, 2000)
    .easing(TWEEN.Easing.Quadratic.InOut)
    .start();

// Scale animation with callback
new TWEEN.Tween(mesh.scale)
    .to({ x: 2, y: 2, z: 2 }, 1000)
    .delay(500)
    .easing(TWEEN.Easing.Back.Out)
    .onComplete(() => {
        console.log('Animation complete');
    })
    .start();

// Update in animation loop
function animate() {
    requestAnimationFrame(animate);
    TWEEN.update();
    renderer.render(scene, camera);
}
\`\`\`

## Path Animation

\`\`\`javascript
import { CatmullRomCurve3 } from 'three';

const points = [
    new THREE.Vector3(-5, 0, 0),
    new THREE.Vector3(-2, 3, 2),
    new THREE.Vector3(2, 1, -2),
    new THREE.Vector3(5, 2, 0)
];

const curve = new CatmullRomCurve3(points);
let progress = 0;

function animatePath() {
    progress += delta * 0.2;
    if (progress > 1) progress = 0;
    
    const position = curve.getPoint(progress);
    const tangent = curve.getTangent(progress);
    
    mesh.position.copy(position);
    mesh.lookAt(position.clone().add(tangent));
}
\`\`\`

## Animation with GSAP

\`\`\`javascript
import gsap from 'gsap';

// Position animation
gsap.to(mesh.position, {
    x: 3,
    y: 2,
    duration: 1,
    ease: 'power2.inOut'
});

// Rotation animation
gsap.to(mesh.rotation, {
    y: Math.PI * 2,
    duration: 2,
    repeat: -1,
    ease: 'linear'
});

// Scale with timeline
const tl = gsap.timeline();
tl.to(mesh.position, { y: 2, duration: 0.5 })
  .to(mesh.scale, { x: 1.5, y: 1.5, duration: 0.5 })
  .to(mesh.rotation, { y: Math.PI, duration: 1 });
\`\`\`

## Best Practices

1. **Use delta time** untuk smooth animation
2. **Use requestAnimationFrame** untuk loop
3. **Use easing functions** untuk natural animation
4. **Limit animation updates** untuk performa
5. **Use keyframes** untuk complex animation
6. **Use animation libraries** untuk complex needs
7. **Dispose animations** saat tidak digunakan
8. **Use interpolation** untuk smooth transitions
  `,
  quiz: [
    {
      question: "Method untuk delta time di Three.js adalah?",
      options: ["Time.getDelta()", "Clock.getDelta()", "Timer.delta()", "Performance.now()"],
      correctAnswer: 1
    },
    {
      question: "Library tweening yang populer adalah?",
      options: ["TWEEN", "GSAP", "Anime", "Semua di atas"],
      correctAnswer: 3
    },
    {
      question: "Class untuk membuat path curve adalah?",
      options: ["CurvePath", "CatmullRomCurve3", "LineCurve3", "QuadraticBezierCurve3"],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete Animation Examples",
      code: `// ============================================
// Complete Animation Examples
// ============================================
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import * as TWEEN from '@tweenjs/tween.js';

// Setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a2e);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(10, 6, 10);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.target.set(0, 1, 0);

// Lights
const ambient = new THREE.AmbientLight(0x404040, 0.5);
scene.add(ambient);

const directional = new THREE.DirectionalLight(0xffffff, 1);
directional.position.set(5, 10, 5);
directional.castShadow = true;
scene.add(directional);

// ============================================
// 1. Animation Objects
// ============================================
// Sphere 1 - Bounce
const sphere1Mat = new THREE.MeshStandardMaterial({
    color: 0xff6b6b,
    roughness: 0.3,
    metalness: 0.7
});
const sphere1 = new THREE.Mesh(new THREE.SphereGeometry(0.8, 32, 32), sphere1Mat);
sphere1.position.set(-4, 1, -3);
sphere1.castShadow = true;
scene.add(sphere1);

// Sphere 2 - Rotate
const sphere2Mat = new THREE.MeshStandardMaterial({
    color: 0x4ecdc4,
    roughness: 0.2,
    metalness: 0.8
});
const sphere2 = new THREE.Mesh(new THREE.SphereGeometry(0.8, 32, 32), sphere2Mat);
sphere2.position.set(0, 1, -3);
sphere2.castShadow = true;
scene.add(sphere2);

// Sphere 3 - Pulse
const sphere3Mat = new THREE.MeshStandardMaterial({
    color: 0xffe66d,
    roughness: 0.3,
    metalness: 0.7
});
const sphere3 = new THREE.Mesh(new THREE.SphereGeometry(0.8, 32, 32), sphere3Mat);
sphere3.position.set(4, 1, -3);
sphere3.castShadow = true;
scene.add(sphere3);

// Sphere 4 - Path
const sphere4Mat = new THREE.MeshStandardMaterial({
    color: 0xa8e6cf,
    roughness: 0.3,
    metalness: 0.7
});
const sphere4 = new THREE.Mesh(new THREE.SphereGeometry(0.8, 32, 32), sphere4Mat);
sphere4.position.set(-4, 1, 3);
sphere4.castShadow = true;
scene.add(sphere4);

// Sphere 5 - TWEEN
const sphere5Mat = new THREE.MeshStandardMaterial({
    color: 0xf38181,
    roughness: 0.3,
    metalness: 0.7
});
const sphere5 = new THREE.Mesh(new THREE.SphereGeometry(0.8, 32, 32), sphere5Mat);
sphere5.position.set(0, 1, 3);
sphere5.castShadow = true;
scene.add(sphere5);

// Sphere 6 - Keyframe
const sphere6Mat = new THREE.MeshStandardMaterial({
    color: 0xaa96da,
    roughness: 0.3,
    metalness: 0.7
});
const sphere6 = new THREE.Mesh(new THREE.SphereGeometry(0.8, 32, 32), sphere6Mat);
sphere6.position.set(4, 1, 3);
sphere6.castShadow = true;
scene.add(sphere6);

// ============================================
// 2. Ground
// ============================================
const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(20, 20),
    new THREE.MeshStandardMaterial({ color: 0x2a2a4a, roughness: 0.8 })
);
ground.rotation.x = -Math.PI / 2;
ground.position.y = -0.5;
ground.receiveShadow = true;
scene.add(ground);

// Grid
const grid = new THREE.GridHelper(15, 15);
scene.add(grid);

// ============================================
// 3. Path for sphere 4
// ============================================
const points = [];
for (let i = 0; i <= 20; i++) {
    const t = i / 20;
    const angle = t * Math.PI * 2;
    points.push(new THREE.Vector3(
        Math.cos(angle) * 3,
        1 + Math.sin(angle * 2) * 0.5,
        Math.sin(angle) * 3
    ));
}

const curve = new THREE.CatmullRomCurve3(points);

// Visualize path
const pathPoints = curve.getPoints(50);
const pathGeo = new THREE.BufferGeometry().setFromPoints(pathPoints);
const pathMat = new THREE.LineBasicMaterial({ color: 0x4ecdc4, opacity: 0.3, transparent: true });
const pathLine = new THREE.Line(pathGeo, pathMat);
scene.add(pathLine);

// ============================================
// 4. Keyframes for sphere 6
// ============================================
const keyframes = [
    { time: 0, pos: new THREE.Vector3(4, 0.5, 3) },
    { time: 1, pos: new THREE.Vector3(4, 3, 3) },
    { time: 2, pos: new THREE.Vector3(-4, 3, 3) },
    { time: 3, pos: new THREE.Vector3(-4, 0.5, 3) },
    { time: 4, pos: new THREE.Vector3(4, 0.5, 3) }
];
let keyTime = 0;
const keyDuration = 4;

// ============================================
// 5. TWEEN Animations
// ============================================
// Continuous TWEEN animation for sphere 5
function animateSphere5() {
    const y = 1 + Math.random() * 2;
    const x = (Math.random() - 0.5) * 4;
    const z = (Math.random() - 0.5) * 4;
    
    new TWEEN.Tween(sphere5.position)
        .to({ x, y, z }, 1500)
        .easing(TWEEN.Easing.Quadratic.InOut)
        .onComplete(() => {
            setTimeout(animateSphere5, 500);
        })
        .start();
}
animateSphere5();

// ============================================
// 6. Animation Loop
// ============================================
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);
    
    const delta = clock.getDelta();
    const elapsed = clock.getElapsedTime();
    
    // 1. Bounce
    const bounce = Math.abs(Math.sin(elapsed * 2)) * 2 + 0.5;
    sphere1.position.y = bounce;
    
    // 2. Rotate
    sphere2.rotation.x += delta * 0.5;
    sphere2.rotation.y += delta * 1;
    sphere2.position.y = 1 + Math.sin(elapsed * 1.5) * 0.3;
    
    // 3. Pulse
    const pulse = 1 + Math.sin(elapsed * 2) * 0.2;
    sphere3.scale.set(pulse, pulse, pulse);
    
    // 4. Path
    const progress = (elapsed % 4) / 4;
    const pos = curve.getPoint(progress);
    const tangent = curve.getTangent(progress);
    sphere4.position.copy(pos);
    sphere4.lookAt(pos.clone().add(tangent));
    
    // 6. Keyframe
    keyTime += delta;
    if (keyTime > keyDuration) keyTime = 0;
    
    const kfIndex = keyframes.findIndex(k => k.time > keyTime);
    const prevKey = keyframes[kfIndex - 1] || keyframes[keyframes.length - 1];
    const nextKey = keyframes[kfIndex] || keyframes[0];
    const t = (keyTime - prevKey.time) / (nextKey.time - prevKey.time);
    sphere6.position.lerpVectors(prevKey.pos, nextKey.pos, t);
    
    // Update TWEEN
    TWEEN.update();
    
    controls.update();
    renderer.render(scene, camera);
}
animate();

// ============================================
// 7. Resize
// ============================================
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});`,
      language: "javascript"
    }
  ]
};
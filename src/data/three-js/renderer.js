export const chapter = {
  slug: "renderer",
  title: "Renderer",
  description: "Mengelola WebGLRenderer di Three.js untuk performa optimal.",
  icon: "SiThreedotjs",
  color: "#000000",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["threejs-introduction", "threejs-scene"],
  tags: ["threejs", "renderer", "webgl", "performance"],
  order: 11,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## WebGLRenderer

### Basic Setup
\`\`\`javascript
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: false,
    powerPreference: "high-performance",
    stencil: false,
    depth: true,
    logarithmicDepthBuffer: false
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
document.body.appendChild(renderer.domElement);
\`\`\`

### Renderer Properties
\`\`\`javascript
// Background
renderer.setClearColor(0x000000, 1);
renderer.setClearColor(0x1a1a2e);

// Shadows
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// Tone Mapping
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2;

// Output
renderer.outputEncoding = THREE.sRGBEncoding;

// Pixel Ratio
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Size
renderer.setSize(800, 600);
renderer.setViewport(0, 0, 800, 600);
\`\`\`

## Shadow Maps

\`\`\`javascript
// Shadow map types
renderer.shadowMap.type = THREE.PCFSoftShadowMap; // Soft
renderer.shadowMap.type = THREE.PCFShadowMap; // Basic
renderer.shadowMap.type = THREE.VSMShadowMap; // Variance

// Shadow settings
renderer.shadowMap.bias = 0.0001;
renderer.shadowMap.normalBias = 0.02;
\`\`\`

## Render Loop

### Basic
\`\`\`javascript
function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}
animate();
\`\`\`

### With Controls
\`\`\`javascript
function animate() {
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
}
animate();
\`\`\`

### With Delta
\`\`\`javascript
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);
    const delta = clock.getDelta();
    // Update animations
    renderer.render(scene, camera);
}
animate();
\`\`\`

## Multi-Renderer

\`\`\`javascript
// Main renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Overlay renderer (transparent)
const overlay = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
});
overlay.setSize(window.innerWidth, window.innerHeight);
overlay.domElement.style.position = 'absolute';
overlay.domElement.style.top = '0';
overlay.domElement.style.left = '0';
overlay.domElement.style.pointerEvents = 'none';
document.body.appendChild(overlay.domElement);

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    overlay.render(scene, overlayCamera);
}
\`\`\`

## Performance Optimization

\`\`\`javascript
// Limit pixel ratio
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Disable shadows if not needed
renderer.shadowMap.enabled = false;

// Use PowerPreference
const renderer = new THREE.WebGLRenderer({
    powerPreference: "high-performance"
});

// Use renderer stats
console.log('Renderer info:', renderer.info);
console.log('Draw calls:', renderer.info.render.calls);
console.log('Triangles:', renderer.info.render.triangles);
\`\`\`

## Render Targets

\`\`\`javascript
import { WebGLRenderTarget } from 'three';

const target = new WebGLRenderTarget(
    window.innerWidth,
    window.innerHeight,
    {
        minFilter: THREE.LinearFilter,
        magFilter: THREE.LinearFilter,
        format: THREE.RGBAFormat
    }
);

// Render to target
renderer.setRenderTarget(target);
renderer.render(scene, camera);
renderer.setRenderTarget(null);
\`\`\`

## Best Practices

1. **Limit pixel ratio** untuk performa
2. **Use proper shadow map type**
3. **Disable features** yang tidak digunakan
4. **Use PowerPreference** untuk performa
5. **Monitor render stats** untuk debugging
6. **Use render targets** untuk effects
7. **Optimize shadow maps** size
8. **Dispose renderer** when done
  `,
  quiz: [
    {
      question: "Property untuk tone mapping di renderer adalah?",
      options: ["toneMapping", "toneMap", "colorMapping", "tone"],
      correctAnswer: 0
    },
    {
      question: "Shadow map type untuk soft shadows adalah?",
      options: ["PCFShadowMap", "PCFSoftShadowMap", "VSMShadowMap", "BasicShadowMap"],
      correctAnswer: 1
    },
    {
      question: "Method untuk set pixel ratio adalah?",
      options: ["setPixelRatio", "pixelRatio", "setDeviceRatio", "setResolution"],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Complete Renderer Examples",
      code: `// ============================================
// Complete Renderer Examples
// ============================================
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import Stats from 'three/addons/libs/stats.module.js';

// ============================================
// 1. Renderer Setup
// ============================================
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: false,
    powerPreference: "high-performance",
    stencil: false,
    depth: true
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setClearColor(0x1a1a2e, 1);

// Shadow settings
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// Tone mapping
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2;

// Output encoding
renderer.outputEncoding = THREE.sRGBEncoding;

document.body.appendChild(renderer.domElement);

// ============================================
// 2. Stats
// ============================================
const stats = new Stats();
stats.dom.style.position = 'absolute';
stats.dom.style.top = '10px';
stats.dom.style.left = '10px';
document.body.appendChild(stats.dom);

// ============================================
// 3. Scene Setup
// ============================================
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a2e);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(8, 6, 8);
camera.lookAt(0, 0, 0);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.target.set(0, 0.5, 0);

// ============================================
// 4. Objects
// ============================================
const colors = [0xff6b6b, 0x4ecdc4, 0xffe66d, 0xa8e6cf, 0xf38181];

for (let i = 0; i < 5; i++) {
    const geo = new THREE.SphereGeometry(0.6, 32, 32);
    const mat = new THREE.MeshStandardMaterial({
        color: colors[i],
        roughness: 0.3,
        metalness: 0.7
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(i * 1.5 - 3, 0.6, 0);
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    scene.add(mesh);
}

// ============================================
// 5. Lights
// ============================================
const ambient = new THREE.AmbientLight(0x404040, 0.5);
scene.add(ambient);

const directional = new THREE.DirectionalLight(0xffffff, 1.2);
directional.position.set(5, 10, 5);
directional.castShadow = true;
directional.shadow.mapSize.width = 2048;
directional.shadow.mapSize.height = 2048;
scene.add(directional);

// ============================================
// 6. Ground
// ============================================
const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(15, 15),
    new THREE.MeshStandardMaterial({
        color: 0x2a2a4a,
        roughness: 0.8
    })
);
ground.rotation.x = -Math.PI / 2;
ground.position.y = -0.5;
ground.receiveShadow = true;
scene.add(ground);

// ============================================
// 7. Grid
// ============================================
const grid = new THREE.GridHelper(12, 12);
scene.add(grid);

// ============================================
// 8. Animation Loop
// ============================================
function animate() {
    stats.begin();
    
    requestAnimationFrame(animate);
    controls.update();
    renderer.render(scene, camera);
    
    stats.end();
}
animate();

// ============================================
// 9. Resize
// ============================================
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

// ============================================
// 10. Renderer Info
// ============================================
console.log('Renderer Info:');
console.log('WebGL Version:', renderer.capabilities.isWebGL2 ? 'WebGL 2' : 'WebGL 1');
console.log('Max Texture Size:', renderer.capabilities.maxTextureSize);
console.log('Max Anisotropy:', renderer.capabilities.getMaxAnisotropy());

// ============================================
// 11. Performance Toggle
// ============================================
document.addEventListener('keydown', (e) => {
    if (e.key === 's') {
        renderer.shadowMap.enabled = !renderer.shadowMap.enabled;
        console.log('Shadows:', renderer.shadowMap.enabled ? 'ON' : 'OFF');
    }
    if (e.key === 'a') {
        renderer.setPixelRatio(
            renderer.getPixelRatio() === 1 ? 2 : 1
        );
        console.log('Pixel Ratio:', renderer.getPixelRatio());
    }
});

console.log('Controls:');
console.log('S - Toggle Shadows');
console.log('A - Toggle Pixel Ratio');`,
      language: "javascript"
    }
  ]
};
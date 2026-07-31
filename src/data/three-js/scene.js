export const chapter = {
  slug: "scene",
  title: "Scene, Camera, Renderer",
  description: "Mengelola scene, camera, dan renderer di Three.js.",
  icon: "SiThreedotjs",
  color: "#000000",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["threejs-introduction"],
  tags: ["threejs", "scene", "camera", "renderer"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Scene

\`\`\`javascript
const scene = new THREE.Scene();

// Background
scene.background = new THREE.Color(0x000000);
scene.background = new THREE.Color('#1a1a2e');

// Fog
scene.fog = new THREE.Fog(0x000000, 10, 50);
scene.fog = new THREE.FogExp2(0x000000, 0.01);
\`\`\`

## Camera

### PerspectiveCamera
\`\`\`javascript
const camera = new THREE.PerspectiveCamera(
    75, // FOV
    window.innerWidth / window.innerHeight, // Aspect
    0.1, // Near
    1000 // Far
);
camera.position.set(0, 5, 10);
camera.lookAt(0, 0, 0);
\`\`\`

### OrthographicCamera
\`\`\`javascript
const camera = new THREE.OrthographicCamera(
    -10, 10, // Left, Right
    10, -10, // Top, Bottom
    0.1, 1000 // Near, Far
);
\`\`\`

## Renderer

### WebGLRenderer
\`\`\`javascript
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    powerPreference: "high-performance"
});

renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2;
document.body.appendChild(renderer.domElement);
\`\`\`

### Renderer Settings
\`\`\`javascript
// Size
renderer.setSize(800, 600);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// Background
renderer.setClearColor(0x000000, 1);

// Shadows
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// Tone Mapping
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.0;

// Output
renderer.outputEncoding = THREE.sRGBEncoding;
\`\`\`

## Resize Handler

\`\`\`javascript
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    
    renderer.setSize(width, height);
});
\`\`\`

## Multiple Renderers

\`\`\`javascript
// Main renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.getElementById('container').appendChild(renderer.domElement);

// Overlay renderer (with alpha)
const overlayRenderer = new THREE.WebGLRenderer({
    alpha: true,
    antialias: true
});
overlayRenderer.setSize(window.innerWidth, window.innerHeight);
overlayRenderer.domElement.style.position = 'absolute';
overlayRenderer.domElement.style.top = '0';
overlayRenderer.domElement.style.left = '0';
overlayRenderer.domElement.style.pointerEvents = 'none';
document.body.appendChild(overlayRenderer.domElement);
\`\`\`

## Best Practices

1. **Enable antialiasing** untuk smooth edges
2. **Set pixel ratio** sesuai device
3. **Use shadow maps** dengan bijak
4. **Handle resize** dengan benar
5. **Use tone mapping** untuk realistic rendering
6. **Set background** sesuai kebutuhan
7. **Use fog** untuk depth perception
8. **Optimize renderer** untuk performa
  `,
  quiz: [
    {
      question: "Method untuk set background scene adalah?",
      options: ["scene.background", "scene.setBackground", "scene.color", "scene.bg"],
      correctAnswer: 0
    },
    {
      question: "Camera yang menggunakan FOV adalah?",
      options: ["OrthographicCamera", "PerspectiveCamera", "CubeCamera", "ArrayCamera"],
      correctAnswer: 1
    },
    {
      question: "Renderer untuk WebGL adalah?",
      options: ["WebGLRenderer", "CanvasRenderer", "SVGRenderer", "CSSRenderer"],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Complete Scene Setup",
      code: `// ============================================
// Complete Scene Setup
// ============================================
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

class ThreeScene {
    constructor(container) {
        this.container = container;
        this.scene = new THREE.Scene();
        this.setupCamera();
        this.setupRenderer();
        this.setupControls();
        this.setupLights();
        this.setupHelpers();
        this.handleResize();
    }
    
    setupCamera() {
        this.camera = new THREE.PerspectiveCamera(
            60,
            this.container.clientWidth / this.container.clientHeight,
            0.1,
            1000
        );
        this.camera.position.set(5, 5, 10);
        this.camera.lookAt(0, 0, 0);
    }
    
    setupRenderer() {
        this.renderer = new THREE.WebGLRenderer({
            antialias: true,
            alpha: true
        });
        this.renderer.setSize(
            this.container.clientWidth,
            this.container.clientHeight
        );
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.shadowMap.enabled = true;
        this.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
        this.renderer.toneMappingExposure = 1.2;
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.container.appendChild(this.renderer.domElement);
    }
    
    setupControls() {
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.minDistance = 2;
        this.controls.maxDistance = 50;
        this.controls.maxPolarAngle = Math.PI / 2;
        this.controls.target.set(0, 0, 0);
    }
    
    setupLights() {
        // Ambient
        const ambient = new THREE.AmbientLight(0x404040, 0.5);
        this.scene.add(ambient);
        
        // Directional
        const directional = new THREE.DirectionalLight(0xffffff, 1);
        directional.position.set(10, 20, 10);
        directional.castShadow = true;
        directional.shadow.mapSize.width = 2048;
        directional.shadow.mapSize.height = 2048;
        this.scene.add(directional);
        
        // Hemisphere
        const hemi = new THREE.HemisphereLight(0x87ceeb, 0x3a1c0a, 0.6);
        this.scene.add(hemi);
    }
    
    setupHelpers() {
        // Grid
        const grid = new THREE.GridHelper(20, 20);
        this.scene.add(grid);
        
        // Axes
        const axes = new THREE.AxesHelper(5);
        this.scene.add(axes);
    }
    
    handleResize() {
        window.addEventListener('resize', () => {
            const width = this.container.clientWidth;
            const height = this.container.clientHeight;
            
            this.camera.aspect = width / height;
            this.camera.updateProjectionMatrix();
            
            this.renderer.setSize(width, height);
        });
    }
    
    // Add object to scene
    add(object) {
        this.scene.add(object);
    }
    
    // Render loop
    render() {
        requestAnimationFrame(() => this.render());
        this.controls.update();
        this.renderer.render(this.scene, this.camera);
    }
}

// Usage
const container = document.getElementById('canvas-container');
const three = new ThreeScene(container);

// Add cube
const geometry = new THREE.BoxGeometry(2, 2, 2);
const material = new THREE.MeshStandardMaterial({
    color: 0x00ff88,
    roughness: 0.3,
    metalness: 0.7
});
const cube = new THREE.Mesh(geometry, material);
cube.castShadow = true;
cube.receiveShadow = true;
three.add(cube);

// Start render
three.render();`,
      language: "javascript"
    }
  ]
};
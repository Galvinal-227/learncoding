export const chapter = {
  slug: "lights",
  title: "Lights",
  description: "Menggunakan berbagai jenis light di Three.js untuk pencahayaan scene.",
  icon: "SiThreedotjs",
  color: "#000000",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["threejs-introduction", "threejs-scene"],
  tags: ["threejs", "lights", "lighting", "shadows"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Jenis Light

### AmbientLight
\`\`\`javascript
const light = new THREE.AmbientLight(color, intensity);
const light = new THREE.AmbientLight(0x404040, 0.5);
\`\`\`

### DirectionalLight
\`\`\`javascript
const light = new THREE.DirectionalLight(color, intensity);
light.position.set(10, 20, 10);
light.target.position.set(0, 0, 0);
\`\`\`

### PointLight
\`\`\`javascript
const light = new THREE.PointLight(color, intensity, distance, decay);
const light = new THREE.PointLight(0xff0000, 1, 100, 2);
light.position.set(0, 5, 0);
\`\`\`

### SpotLight
\`\`\`javascript
const light = new THREE.SpotLight(color, intensity, distance, angle, penumbra, decay);
const light = new THREE.SpotLight(0xffffff, 1, 100, Math.PI / 4, 0.2, 2);
light.position.set(0, 10, 0);
light.target.position.set(0, 0, 0);
\`\`\`

### HemisphereLight
\`\`\`javascript
const light = new THREE.HemisphereLight(skyColor, groundColor, intensity);
const light = new THREE.HemisphereLight(0x87ceeb, 0x3a1c0a, 0.6);
\`\`\`

## Shadows

\`\`\`javascript
// Enable shadows
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

// Light shadows
const light = new THREE.DirectionalLight(0xffffff, 1);
light.castShadow = true;
light.shadow.mapSize.width = 2048;
light.shadow.mapSize.height = 2048;
light.shadow.camera.near = 0.5;
light.shadow.camera.far = 50;
light.shadow.camera.left = -10;
light.shadow.camera.right = 10;
light.shadow.camera.top = 10;
light.shadow.camera.bottom = -10;

// Object shadows
mesh.castShadow = true;
mesh.receiveShadow = true;

// Shadow helpers
const helper = new THREE.CameraHelper(light.shadow.camera);
scene.add(helper);
\`\`\`

## Light Helpers

\`\`\`javascript
// DirectionalLightHelper
const helper = new THREE.DirectionalLightHelper(light, 1);
scene.add(helper);

// PointLightHelper
const helper = new THREE.PointLightHelper(light, 1);
scene.add(helper);

// SpotLightHelper
const helper = new THREE.SpotLightHelper(light);
scene.add(helper);
\`\`\`

## Multiple Lights

\`\`\`javascript
// Ambient
const ambient = new THREE.AmbientLight(0x404040, 0.5);
scene.add(ambient);

// Main light
const main = new THREE.DirectionalLight(0xffffff, 1);
main.position.set(5, 10, 5);
main.castShadow = true;
scene.add(main);

// Fill light
const fill = new THREE.DirectionalLight(0xff6b6b, 0.3);
fill.position.set(-5, 5, -5);
scene.add(fill);

// Rim light
const rim = new THREE.DirectionalLight(0x4ecdc4, 0.3);
rim.position.set(0, -5, 10);
scene.add(rim);
\`\`\`

## Best Practices

1. **Use multiple lights** untuk realistic scene
2. **Limit shadow casting** lights
3. **Use shadow map size** yang sesuai
4. **Use helper** untuk debugging
5. **Use ambient light** untuk base illumination
6. **Use PCFSoftShadowMap** untuk soft shadows
7. **Optimize shadow camera** frustum
8. **Use light intensity** yang balanced
  `,
  quiz: [
    {
      question: "Light yang menerangi dari semua arah adalah?",
      options: ["DirectionalLight", "PointLight", "AmbientLight", "SpotLight"],
      correctAnswer: 2
    },
    {
      question: "Light untuk spotlight adalah?",
      options: ["DirectionalLight", "PointLight", "SpotLight", "HemisphereLight"],
      correctAnswer: 2
    },
    {
      question: "Property untuk enable shadow adalah?",
      options: ["shadow", "castShadow", "shadow.enabled", "shadowMap"],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete Lights Examples",
      code: `// ============================================
// Complete Lights Examples
// ============================================
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a2e);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(10, 8, 10);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2;
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.target.set(0, 0, 0);

// ============================================
// 1. Objects
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
const objects = [];

// Sphere
const sphereGeo = new THREE.SphereGeometry(1, 32, 32);
const sphereMat = new THREE.MeshStandardMaterial({
    color: 0x4ecdc4,
    roughness: 0.2,
    metalness: 0.8
});
const sphere = new THREE.Mesh(sphereGeo, sphereMat);
sphere.position.set(-3, 1, 0);
sphere.castShadow = true;
sphere.receiveShadow = true;
scene.add(sphere);
objects.push(sphere);

// Box
const boxGeo = new THREE.BoxGeometry(1.5, 1.5, 1.5);
const boxMat = new THREE.MeshStandardMaterial({
    color: 0xff6b6b,
    roughness: 0.4,
    metalness: 0.6
});
const box = new THREE.Mesh(boxGeo, boxMat);
box.position.set(0, 1, 0);
box.castShadow = true;
box.receiveShadow = true;
scene.add(box);
objects.push(box);

// Torus
const torusGeo = new THREE.TorusGeometry(1, 0.4, 16, 100);
const torusMat = new THREE.MeshStandardMaterial({
    color: 0xffe66d,
    roughness: 0.3,
    metalness: 0.7
});
const torus = new THREE.Mesh(torusGeo, torusMat);
torus.position.set(3, 1, 0);
torus.rotation.x = Math.PI / 2;
torus.castShadow = true;
torus.receiveShadow = true;
scene.add(torus);
objects.push(torus);

// ============================================
// 2. Lights
// ============================================

// Ambient Light
const ambient = new THREE.AmbientLight(0x404040, 0.3);
scene.add(ambient);

// Hemisphere Light
const hemi = new THREE.HemisphereLight(0x87ceeb, 0x3a1c0a, 0.4);
scene.add(hemi);

// Directional Light (Main)
const directional = new THREE.DirectionalLight(0xffffff, 1.2);
directional.position.set(5, 10, 5);
directional.castShadow = true;
directional.shadow.mapSize.width = 2048;
directional.shadow.mapSize.height = 2048;
directional.shadow.camera.near = 0.5;
directional.shadow.camera.far = 30;
directional.shadow.camera.left = -10;
directional.shadow.camera.right = 10;
directional.shadow.camera.top = 10;
directional.shadow.camera.bottom = -10;
scene.add(directional);

// Directional Light Helper
const dirHelper = new THREE.DirectionalLightHelper(directional, 2);
scene.add(dirHelper);

// Point Light (Colored)
const point = new THREE.PointLight(0xff6b6b, 0.8, 10);
point.position.set(-4, 3, 3);
scene.add(point);

const pointHelper = new THREE.PointLightHelper(point, 0.5);
scene.add(pointHelper);

// Point Light (Colored)
const point2 = new THREE.PointLight(0x4ecdc4, 0.8, 10);
point2.position.set(4, 3, 3);
scene.add(point2);

const pointHelper2 = new THREE.PointLightHelper(point2, 0.5);
scene.add(pointHelper2);

// Spot Light
const spot = new THREE.SpotLight(0xffe66d, 0.6, 15, Math.PI / 6, 0.3, 2);
spot.position.set(0, 8, 0);
spot.target.position.set(0, 0, 0);
spot.castShadow = true;
scene.add(spot);
scene.add(spot.target);

const spotHelper = new THREE.SpotLightHelper(spot);
scene.add(spotHelper);

// ============================================
// 3. Decorative spheres for lights
// ============================================
const sphereLight = new THREE.Mesh(
    new THREE.SphereGeometry(0.1, 8, 8),
    new THREE.MeshBasicMaterial({ color: 0xff6b6b })
);
sphereLight.position.copy(point.position);
scene.add(sphereLight);

const sphereLight2 = new THREE.Mesh(
    new THREE.SphereGeometry(0.1, 8, 8),
    new THREE.MeshBasicMaterial({ color: 0x4ecdc4 })
);
sphereLight2.position.copy(point2.position);
scene.add(sphereLight2);

// ============================================
// 4. Animation Loop
// ============================================
function animate() {
    requestAnimationFrame(animate);
    
    // Rotate objects
    sphere.rotation.y += 0.01;
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;
    torus.rotation.z += 0.01;
    torus.rotation.x += 0.01;
    
    // Move point lights
    const time = Date.now() * 0.001;
    point.position.x = -4 + Math.sin(time * 0.5) * 2;
    point.position.z = 3 + Math.cos(time * 0.5) * 2;
    sphereLight.position.copy(point.position);
    
    point2.position.x = 4 + Math.sin(time * 0.5 + Math.PI) * 2;
    point2.position.z = 3 + Math.cos(time * 0.5 + Math.PI) * 2;
    sphereLight2.position.copy(point2.position);
    
    controls.update();
    renderer.render(scene, camera);
}
animate();

// Resize
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});`,
      language: "javascript"
    }
  ]
};
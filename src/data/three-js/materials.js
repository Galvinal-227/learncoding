export const chapter = {
  slug: "materials",
  title: "Materials",
  description: "Menggunakan berbagai material di Three.js untuk tampilan objek.",
  icon: "SiThreedotjs",
  color: "#000000",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["threejs-introduction", "threejs-geometries"],
  tags: ["threejs", "materials", "textures", "shading"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Jenis Material

### MeshBasicMaterial
\`\`\`javascript
const material = new THREE.MeshBasicMaterial({
    color: 0xff0000,
    wireframe: false,
    transparent: true,
    opacity: 0.8
});
\`\`\`

### MeshStandardMaterial
\`\`\`javascript
const material = new THREE.MeshStandardMaterial({
    color: 0x00ff88,
    roughness: 0.4,
    metalness: 0.6,
    emissive: 0x000000,
    emissiveIntensity: 0,
    transparent: false,
    opacity: 1,
    side: THREE.FrontSide
});
\`\`\`

### MeshPhongMaterial
\`\`\`javascript
const material = new THREE.MeshPhongMaterial({
    color: 0x00ff88,
    specular: 0x111111,
    shininess: 30,
    emissive: 0x000000
});
\`\`\`

### MeshLambertMaterial
\`\`\`javascript
const material = new THREE.MeshLambertMaterial({
    color: 0x00ff88,
    emissive: 0x000000
});
\`\`\`

### MeshMatcapMaterial
\`\`\`javascript
const material = new THREE.MeshMatcapMaterial({
    matcap: matcapTexture,
    color: 0xffffff
});
\`\`\`

## Textures

\`\`\`javascript
import { TextureLoader } from 'three';

const loader = new TextureLoader();

// Albedo
const colorTexture = loader.load('textures/color.jpg');

// Normal
const normalTexture = loader.load('textures/normal.jpg');

// Roughness
const roughnessTexture = loader.load('textures/roughness.jpg');

// Metalness
const metalnessTexture = loader.load('textures/metalness.jpg');

// Ambient Occlusion
const aoTexture = loader.load('textures/ao.jpg');

// Displacement
const displacementTexture = loader.load('textures/displacement.jpg');

// Material with textures
const material = new THREE.MeshStandardMaterial({
    map: colorTexture,
    normalMap: normalTexture,
    roughnessMap: roughnessTexture,
    metalnessMap: metalnessTexture,
    aoMap: aoTexture,
    displacementMap: displacementTexture,
    displacementScale: 0.1
});
\`\`\`

## Material Properties

### Color
\`\`\`javascript
material.color.set(0xff0000);
material.color.set('#ff0000');
material.color.set('red');
\`\`\`

### Roughness & Metalness
\`\`\`javascript
// Roughness: 0 = smooth, 1 = rough
material.roughness = 0.2;

// Metalness: 0 = non-metal, 1 = metal
material.metalness = 0.8;
\`\`\`

### Emissive
\`\`\`javascript
material.emissive = new THREE.Color(0xff0000);
material.emissiveIntensity = 0.5;
\`\`\`

### Transparency
\`\`\`javascript
material.transparent = true;
material.opacity = 0.5;
\`\`\`

## Environment Map

\`\`\`javascript
import { CubeTextureLoader } from 'three';

const loader = new CubeTextureLoader();
const envMap = loader.load([
    'px.jpg', 'nx.jpg',
    'py.jpg', 'ny.jpg',
    'pz.jpg', 'nz.jpg'
]);

material.envMap = envMap;
material.envMapIntensity = 1;
\`\`\`

## Custom Shaders

### ShaderMaterial
\`\`\`javascript
const material = new THREE.ShaderMaterial({
    vertexShader: \`
        void main() {
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    \`,
    fragmentShader: \`
        void main() {
            gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);
        }
    \`
});
\`\`\`

## Best Practices

1. **Use MeshStandardMaterial** untuk PBR
2. **Optimize textures** - Power of 2 sizes
3. **Use texture compression** (KTX, basis)
4. **Share materials** between meshes
5. **Dispose materials** when done
6. **Use LOD materials** for optimization
7. **Batch geometry** with same material
8. **Use ShaderMaterial** untuk custom effects
  `,
  quiz: [
    {
      question: "Material PBR di Three.js adalah?",
      options: ["MeshBasicMaterial", "MeshStandardMaterial", "MeshPhongMaterial", "MeshLambertMaterial"],
      correctAnswer: 1
    },
    {
      question: "Property untuk kekasaran material adalah?",
      options: ["metalness", "roughness", "shininess", "smoothness"],
      correctAnswer: 1
    },
    {
      question: "Loader untuk texture adalah?",
      options: ["ImageLoader", "TextureLoader", "FileLoader", "DataTextureLoader"],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete Materials Examples",
      code: `// ============================================
// Complete Materials Examples
// ============================================
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';

// Setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a2e);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(10, 5, 10);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2;
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.target.set(0, 0, 0);

// Lights
const ambient = new THREE.AmbientLight(0x404040, 0.5);
scene.add(ambient);

const directional = new THREE.DirectionalLight(0xffffff, 2);
directional.position.set(5, 10, 7);
scene.add(directional);

const hemi = new THREE.HemisphereLight(0x87ceeb, 0x3a1c0a, 0.6);
scene.add(hemi);

// Grid
const grid = new THREE.GridHelper(15, 15);
scene.add(grid);

// ============================================
// 1. Basic Material
// ============================================
const basicMat = new THREE.MeshBasicMaterial({
    color: 0xff6b6b,
    wireframe: false
});
const basicGeo = new THREE.SphereGeometry(0.8, 32, 32);
const basicMesh = new THREE.Mesh(basicGeo, basicMat);
basicMesh.position.set(-5, 0.8, -4);
scene.add(basicMesh);

// ============================================
// 2. Standard Material
// ============================================
const standardMat = new THREE.MeshStandardMaterial({
    color: 0x4ecdc4,
    roughness: 0.2,
    metalness: 0.8,
    emissive: new THREE.Color(0x4ecdc4),
    emissiveIntensity: 0.05
});
const standardGeo = new THREE.SphereGeometry(0.8, 32, 32);
const standardMesh = new THREE.Mesh(standardGeo, standardMat);
standardMesh.position.set(-2.5, 0.8, -4);
scene.add(standardMesh);

// ============================================
// 3. Phong Material
// ============================================
const phongMat = new THREE.MeshPhongMaterial({
    color: 0xffe66d,
    specular: 0xffffff,
    shininess: 100,
    emissive: new THREE.Color(0xffe66d),
    emissiveIntensity: 0.05
});
const phongGeo = new THREE.SphereGeometry(0.8, 32, 32);
const phongMesh = new THREE.Mesh(phongGeo, phongMat);
phongMesh.position.set(0, 0.8, -4);
scene.add(phongMesh);

// ============================================
// 4. Lambert Material
// ============================================
const lambertMat = new THREE.MeshLambertMaterial({
    color: 0xa8e6cf,
    emissive: new THREE.Color(0xa8e6cf),
    emissiveIntensity: 0.05
});
const lambertGeo = new THREE.SphereGeometry(0.8, 32, 32);
const lambertMesh = new THREE.Mesh(lambertGeo, lambertMat);
lambertMesh.position.set(2.5, 0.8, -4);
scene.add(lambertMesh);

// ============================================
// 5. Matcap Material
// ============================================
// Load matcap texture (need to provide actual texture)
// const matcapTexture = new THREE.TextureLoader().load('matcap.jpg');
// const matcapMat = new THREE.MeshMatcapMaterial({
//     matcap: matcapTexture
// });
// const matcapGeo = new THREE.SphereGeometry(0.8, 32, 32);
// const matcapMesh = new THREE.Mesh(matcapGeo, matcapMat);
// matcapMesh.position.set(5, 0.8, -4);
// scene.add(matcapMesh);

// ============================================
// 6. Transparent Material
// ============================================
const transparentMat = new THREE.MeshStandardMaterial({
    color: 0xf38181,
    transparent: true,
    opacity: 0.5,
    roughness: 0.3,
    metalness: 0.2
});
const transparentGeo = new THREE.SphereGeometry(0.8, 32, 32);
const transparentMesh = new THREE.Mesh(transparentGeo, transparentMat);
transparentMesh.position.set(-5, 0.8, 0);
scene.add(transparentMesh);

// ============================================
// 7. Wireframe Material
// ============================================
const wireframeMat = new THREE.MeshStandardMaterial({
    color: 0xaa96da,
    wireframe: true,
    roughness: 0.4,
    metalness: 0.6
});
const wireframeGeo = new THREE.SphereGeometry(0.8, 16, 16);
const wireframeMesh = new THREE.Mesh(wireframeGeo, wireframeMat);
wireframeMesh.position.set(-2.5, 0.8, 0);
scene.add(wireframeMesh);

// ============================================
// 8. Emissive Material
// ============================================
const emissiveMat = new THREE.MeshStandardMaterial({
    color: 0x95e1d3,
    emissive: new THREE.Color(0x95e1d3),
    emissiveIntensity: 0.5,
    roughness: 0.3,
    metalness: 0.2
});
const emissiveGeo = new THREE.SphereGeometry(0.8, 32, 32);
const emissiveMesh = new THREE.Mesh(emissiveGeo, emissiveMat);
emissiveMesh.position.set(0, 0.8, 0);
scene.add(emissiveMesh);

// ============================================
// 9. Roughness & Metalness
// ============================================
// Rough
const roughMat = new THREE.MeshStandardMaterial({
    color: 0xff8b94,
    roughness: 1,
    metalness: 0
});
const roughGeo = new THREE.SphereGeometry(0.8, 32, 32);
const roughMesh = new THREE.Mesh(roughGeo, roughMat);
roughMesh.position.set(2.5, 0.8, 0);
scene.add(roughMesh);

// Metal
const metalMat = new THREE.MeshStandardMaterial({
    color: 0xff8b94,
    roughness: 0.1,
    metalness: 1
});
const metalGeo = new THREE.SphereGeometry(0.8, 32, 32);
const metalMesh = new THREE.Mesh(metalGeo, metalMat);
metalMesh.position.set(5, 0.8, 0);
scene.add(metalMesh);

// ============================================
// 10. Combination
// ============================================
// Objects with different materials on same geometry
const combGeo = new THREE.BoxGeometry(1.5, 1.5, 1.5);
const combMat = [
    new THREE.MeshStandardMaterial({ color: 0xff6b6b }),
    new THREE.MeshStandardMaterial({ color: 0x4ecdc4 }),
    new THREE.MeshStandardMaterial({ color: 0xffe66d }),
    new THREE.MeshStandardMaterial({ color: 0xa8e6cf }),
    new THREE.MeshStandardMaterial({ color: 0xf38181 }),
    new THREE.MeshStandardMaterial({ color: 0xaa96da })
];
const combMesh = new THREE.Mesh(combGeo, combMat);
combMesh.position.set(0, 0.8, 4);
scene.add(combMesh);

// ============================================
// Animation Loop
// ============================================
function animate() {
    requestAnimationFrame(animate);
    
    // Rotate spheres
    basicMesh.rotation.y += 0.01;
    standardMesh.rotation.y += 0.01;
    phongMesh.rotation.y += 0.01;
    lambertMesh.rotation.y += 0.01;
    transparentMesh.rotation.y += 0.01;
    wireframeMesh.rotation.y += 0.01;
    emissiveMesh.rotation.y += 0.01;
    roughMesh.rotation.y += 0.01;
    metalMesh.rotation.y += 0.01;
    combMesh.rotation.x += 0.01;
    combMesh.rotation.y += 0.01;
    
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
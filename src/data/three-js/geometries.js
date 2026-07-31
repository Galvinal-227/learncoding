export const chapter = {
  slug: "geometries",
  title: "Geometries",
  description: "Membuat berbagai bentuk geometri di Three.js.",
  icon: "SiThreedotjs",
  color: "#000000",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["threejs-introduction", "threejs-scene"],
  tags: ["threejs", "geometries", "shapes", "buffer-geometry"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Geometri Dasar

### BoxGeometry
\`\`\`javascript
const geometry = new THREE.BoxGeometry(width, height, depth);
const geometry = new THREE.BoxGeometry(2, 1, 3);
\`\`\`

### SphereGeometry
\`\`\`javascript
const geometry = new THREE.SphereGeometry(radius, widthSegments, heightSegments);
const geometry = new THREE.SphereGeometry(1.5, 32, 32);
\`\`\`

### CylinderGeometry
\`\`\`javascript
const geometry = new THREE.CylinderGeometry(radiusTop, radiusBottom, height, radialSegments);
const geometry = new THREE.CylinderGeometry(1, 1, 2, 32);
\`\`\`

### ConeGeometry
\`\`\`javascript
const geometry = new THREE.ConeGeometry(radius, height, radialSegments);
const geometry = new THREE.ConeGeometry(1, 2, 32);
\`\`\`

### PlaneGeometry
\`\`\`javascript
const geometry = new THREE.PlaneGeometry(width, height);
const geometry = new THREE.PlaneGeometry(5, 5);
\`\`\`

### TorusGeometry
\`\`\`javascript
const geometry = new THREE.TorusGeometry(radius, tube, radialSegments, tubularSegments);
const geometry = new THREE.TorusGeometry(1, 0.4, 16, 100);
\`\`\`

### TorusKnotGeometry
\`\`\`javascript
const geometry = new THREE.TorusKnotGeometry(radius, tube, tubularSegments, radialSegments);
const geometry = new THREE.TorusKnotGeometry(1, 0.3, 100, 16);
\`\`\`

## BufferGeometry Custom

\`\`\`javascript
// Create custom geometry
const geometry = new THREE.BufferGeometry();

// Vertices
const vertices = new Float32Array([
    -1, -1, 0,
     1, -1, 0,
     0,  1, 0
]);

geometry.setAttribute('position', new THREE.BufferAttribute(vertices, 3));

// Normals
const normals = new Float32Array([
    0, 0, 1,
    0, 0, 1,
    0, 0, 1
]);
geometry.setAttribute('normal', new THREE.BufferAttribute(normals, 3));

// UVs
const uvs = new Float32Array([
    0, 0,
    1, 0,
    0.5, 1
]);
geometry.setAttribute('uv', new THREE.BufferAttribute(uvs, 2));

// Indices
geometry.setIndex([0, 1, 2]);
geometry.computeVertexNormals();
\`\`\`

## LatheGeometry

\`\`\`javascript
const points = [];
points.push(new THREE.Vector2(0, -1));
points.push(new THREE.Vector2(0.5, -0.5));
points.push(new THREE.Vector2(0.5, 0));
points.push(new THREE.Vector2(0.3, 0.5));
points.push(new THREE.Vector2(0, 1));

const geometry = new THREE.LatheGeometry(points, 32);
\`\`\`

## ExtrudeGeometry

\`\`\`javascript
const shape = new THREE.Shape();
shape.moveTo(-2, -1);
shape.lineTo(2, -1);
shape.lineTo(2, 1);
shape.lineTo(-2, 1);
shape.lineTo(-2, -1);

const extrudeSettings = {
    steps: 1,
    depth: 0.5,
    bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 0.05
};

const geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
\`\`\`

## ShapeGeometry

\`\`\`javascript
const shape = new THREE.Shape();
shape.moveTo(-1, -1);
shape.lineTo(1, -1);
shape.lineTo(1, 1);
shape.lineTo(-1, 1);
shape.lineTo(-1, -1);

// Add hole
const hole = new THREE.Path();
hole.moveTo(-0.5, -0.5);
hole.lineTo(0.5, -0.5);
hole.lineTo(0.5, 0.5);
hole.lineTo(-0.5, 0.5);
hole.lineTo(-0.5, -0.5);
shape.holes.push(hole);

const geometry = new THREE.ShapeGeometry(shape);
\`\`\`

## Best Practices

1. **Use BufferGeometry** untuk performa
2. **Reuse geometries** untuk multiple meshes
3. **Use geometry.computeVertexNormals()** untuk normals
4. **Optimize vertex count**
5. **Use indexed geometries** untuk shared vertices
6. **Use merge geometries** untuk static objects
7. **Use LOD** untuk complexity
8. **Dispose geometries** saat tidak digunakan
  `,
  quiz: [
    {
      question: "Geometri untuk kubus adalah?",
      options: ["SphereGeometry", "BoxGeometry", "CylinderGeometry", "ConeGeometry"],
      correctAnswer: 1
    },
    {
      question: "Method untuk membuat geometri custom adalah?",
      options: ["Geometry", "BufferGeometry", "ShapeGeometry", "ExtrudeGeometry"],
      correctAnswer: 1
    },
    {
      question: "Geometri untuk donat adalah?",
      options: ["TorusGeometry", "TorusKnotGeometry", "SphereGeometry", "CylinderGeometry"],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Complete Geometries Examples",
      code: `// ============================================
// Complete Geometries Examples
// ============================================
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// Setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a2e);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(8, 6, 10);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;

// Lights
const ambient = new THREE.AmbientLight(0x404040, 0.5);
scene.add(ambient);

const directional = new THREE.DirectionalLight(0xffffff, 1);
directional.position.set(10, 20, 10);
directional.castShadow = true;
scene.add(directional);

const hemi = new THREE.HemisphereLight(0x87ceeb, 0x3a1c0a, 0.6);
scene.add(hemi);

// ============================================
// 1. Basic Geometries
// ============================================
const geometries = [];

// Box
const boxGeo = new THREE.BoxGeometry(1, 1, 1);
const boxMat = new THREE.MeshStandardMaterial({ color: 0xff6b6b });
const box = new THREE.Mesh(boxGeo, boxMat);
box.position.set(-4, 0.5, -3);
scene.add(box);

// Sphere
const sphereGeo = new THREE.SphereGeometry(0.8, 32, 32);
const sphereMat = new THREE.MeshStandardMaterial({ color: 0x4ecdc4 });
const sphere = new THREE.Mesh(sphereGeo, sphereMat);
sphere.position.set(0, 0.8, -3);
scene.add(sphere);

// Cylinder
const cylinderGeo = new THREE.CylinderGeometry(0.6, 0.6, 1.5, 32);
const cylinderMat = new THREE.MeshStandardMaterial({ color: 0xffe66d });
const cylinder = new THREE.Mesh(cylinderGeo, cylinderMat);
cylinder.position.set(4, 0.75, -3);
scene.add(cylinder);

// Cone
const coneGeo = new THREE.ConeGeometry(0.8, 1.5, 32);
const coneMat = new THREE.MeshStandardMaterial({ color: 0xa8e6cf });
const cone = new THREE.Mesh(coneGeo, coneMat);
cone.position.set(-4, 0.75, 3);
scene.add(cone);

// Torus
const torusGeo = new THREE.TorusGeometry(0.8, 0.3, 16, 100);
const torusMat = new THREE.MeshStandardMaterial({ color: 0xf38181 });
const torus = new THREE.Mesh(torusGeo, torusMat);
torus.position.set(0, 0.8, 3);
torus.rotation.x = Math.PI / 2;
scene.add(torus);

// TorusKnot
const knotGeo = new THREE.TorusKnotGeometry(0.7, 0.25, 100, 16);
const knotMat = new THREE.MeshStandardMaterial({ color: 0xaa96da });
const knot = new THREE.Mesh(knotGeo, knotMat);
knot.position.set(4, 0.8, 3);
scene.add(knot);

// ============================================
// 2. Custom Geometry (Triangle)
// ============================================
const triangleGeo = new THREE.BufferGeometry();
const vertices = new Float32Array([
    -1, -1, 0,
    1, -1, 0,
    0, 1, 0
]);
triangleGeo.setAttribute('position', new THREE.BufferAttribute(vertices, 3));
triangleGeo.setIndex([0, 1, 2]);
triangleGeo.computeVertexNormals();

const triangleMat = new THREE.MeshStandardMaterial({
    color: 0x95e1d3,
    side: THREE.DoubleSide
});
const triangle = new THREE.Mesh(triangleGeo, triangleMat);
triangle.position.set(-4, -1, 0);
scene.add(triangle);

// ============================================
// 3. Lathe Geometry (Vase)
// ============================================
const points = [];
points.push(new THREE.Vector2(0, -1.5));
points.push(new THREE.Vector2(0.5, -1));
points.push(new THREE.Vector2(0.6, -0.5));
points.push(new THREE.Vector2(0.4, 0));
points.push(new THREE.Vector2(0.3, 0.5));
points.push(new THREE.Vector2(0.2, 1));
points.push(new THREE.Vector2(0, 1.5));

const latheGeo = new THREE.LatheGeometry(points, 32);
const latheMat = new THREE.MeshStandardMaterial({
    color: 0xff8b94,
    roughness: 0.3,
    metalness: 0.1
});
const lathe = new THREE.Mesh(latheGeo, latheMat);
lathe.position.set(0, -1, 0);
scene.add(lathe);

// ============================================
// 4. Extrude Geometry
// ============================================
const shape = new THREE.Shape();
shape.moveTo(-1, -1);
shape.lineTo(1, -1);
shape.lineTo(1, 1);
shape.lineTo(-1, 1);
shape.lineTo(-1, -1);

const extrudeSettings = {
    steps: 1,
    depth: 0.5,
    bevelEnabled: true,
    bevelThickness: 0.1,
    bevelSize: 0.05
};

const extrudeGeo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
const extrudeMat = new THREE.MeshStandardMaterial({
    color: 0xaa96da,
    roughness: 0.4,
    metalness: 0.2
});
const extrude = new THREE.Mesh(extrudeGeo, extrudeMat);
extrude.position.set(4, -0.5, 0);
scene.add(extrude);

// ============================================
// 5. Helpers
// ============================================
const grid = new THREE.GridHelper(15, 15);
scene.add(grid);

// ============================================
// 6. Animation Loop
// ============================================
function animate() {
    requestAnimationFrame(animate);
    
    // Rotate objects
    box.rotation.x += 0.01;
    box.rotation.y += 0.01;
    
    sphere.rotation.x += 0.01;
    sphere.rotation.y += 0.01;
    
    cylinder.rotation.x += 0.01;
    cylinder.rotation.y += 0.01;
    
    cone.rotation.x += 0.01;
    cone.rotation.y += 0.01;
    
    torus.rotation.z += 0.02;
    torus.rotation.x += 0.01;
    
    knot.rotation.x += 0.02;
    knot.rotation.y += 0.02;
    
    controls.update();
    renderer.render(scene, camera);
}
animate();

// ============================================
// 7. Resize Handler
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
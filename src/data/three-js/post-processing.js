export const chapter = {
  slug: "post-processing",
  title: "Post Processing",
  description: "Menambahkan efek post-processing di Three.js.",
  icon: "SiThreedotjs",
  color: "#000000",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["threejs-introduction", "threejs-scene"],
  tags: ["threejs", "post-processing", "effects", "shader"],
  order: 10,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Post-Processing?

Post-processing adalah efek visual yang diterapkan setelah scene di-render.

## Instalasi

\`\`\`bash
npm install three postprocessing
\`\`\`

## Basic Setup

\`\`\`javascript
import { EffectComposer } from 'postprocessing';
import { RenderPass } from 'postprocessing';
import { UnrealBloomPass } from 'postprocessing';

const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

// Add effects
composer.addPass(new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.5, // strength
    0.4, // radius
    0.85 // threshold
));

// Render with composer
function animate() {
    requestAnimationFrame(animate);
    composer.render();
}
\`\`\`

## Effect Passes

### UnrealBloomPass (Glow)
\`\`\`javascript
import { UnrealBloomPass } from 'postprocessing';

const bloom = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.5,  // strength
    0.4,  // radius
    0.85  // threshold
);
composer.addPass(bloom);
\`\`\`

### FilmPass (Film Grain)
\`\`\`javascript
import { FilmPass } from 'postprocessing';

const film = new FilmPass(
    0.35, // noise intensity
    0.025, // scanline intensity
    648, // scanline count
    false // grayscale
);
composer.addPass(film);
\`\`\`

### DotScreenPass
\`\`\`javascript
import { DotScreenPass } from 'postprocessing';

const dots = new DotScreenPass(
    new THREE.Vector2(0, 0),
    0.5,
    0.8
);
composer.addPass(dots);
\`\`\`

### ShaderPass (Custom)
\`\`\`javascript
import { ShaderPass } from 'postprocessing';

const shader = new ShaderPass({
    uniforms: {
        tDiffuse: { value: null },
        intensity: { value: 1.0 }
    },
    vertexShader: \`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    \`,
    fragmentShader: \`
        uniform sampler2D tDiffuse;
        uniform float intensity;
        varying vec2 vUv;
        void main() {
            vec4 color = texture2D(tDiffuse, vUv);
            gl_FragColor = color * intensity;
        }
    \`
});
composer.addPass(shader);
\`\`\`

## Multiple Effects

\`\`\`javascript
// Render pass
composer.addPass(new RenderPass(scene, camera));

// Bloom
composer.addPass(new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.5, 0.4, 0.85
));

// Film grain
composer.addPass(new FilmPass(0.35, 0.025, 648, false));

// Dot screen
composer.addPass(new DotScreenPass(
    new THREE.Vector2(0, 0),
    0.5, 0.8
));
\`\`\`

## Custom Effects

### RGB Shift
\`\`\`javascript
import { ShaderPass } from 'postprocessing';

const rgbShift = new ShaderPass({
    uniforms: {
        tDiffuse: { value: null },
        amount: { value: 0.005 }
    },
    vertexShader: \`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    \`,
    fragmentShader: \`
        uniform sampler2D tDiffuse;
        uniform float amount;
        varying vec2 vUv;
        void main() {
            vec2 offset = vec2(amount, 0.0);
            float r = texture2D(tDiffuse, vUv + offset).r;
            float g = texture2D(tDiffuse, vUv).g;
            float b = texture2D(tDiffuse, vUv - offset).b;
            gl_FragColor = vec4(r, g, b, 1.0);
        }
    \`
});
composer.addPass(rgbShift);
\`\`\`

## Best Practices

1. **Limit effects** untuk performa
2. **Use Resolution** yang sesuai
3. **Toggle effects** for performance
4. **Use EffectComposer** untuk multiple passes
5. **Optimize shaders** untuk performa
6. **Dispose passes** when done
7. **Use bloom** with moderation
8. **Combine effects** creatively
  `,
  quiz: [
    {
      question: "Pass untuk bloom effect adalah?",
      options: ["BloomPass", "UnrealBloomPass", "GlowPass", "LightPass"],
      correctAnswer: 1
    },
    {
      question: "Class untuk multiple effect passes adalah?",
      options: ["EffectComposer", "PassComposer", "RenderComposer", "ShaderComposer"],
      correctAnswer: 0
    },
    {
      question: "Pass dasar untuk render adalah?",
      options: ["RenderPass", "BasePass", "ScenePass", "DefaultPass"],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Complete Post-Processing Examples",
      code: `// ============================================
// Complete Post-Processing Examples
// ============================================
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { EffectComposer } from 'postprocessing';
import { RenderPass } from 'postprocessing';
import { UnrealBloomPass } from 'postprocessing';
import { FilmPass } from 'postprocessing';
import { DotScreenPass } from 'postprocessing';
import { ShaderPass } from 'postprocessing';

// Setup
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a2e);

const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(8, 4, 8);
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

// ============================================
// 1. Post-Processing Setup
// ============================================
const composer = new EffectComposer(renderer);

// Render pass
composer.addPass(new RenderPass(scene, camera));

// Bloom pass
const bloom = new UnrealBloomPass(
    new THREE.Vector2(window.innerWidth, window.innerHeight),
    0.3,  // strength
    0.2,  // radius
    0.85  // threshold
);
composer.addPass(bloom);

// Film pass
const film = new FilmPass(0.15, 0.05, 648, false);
composer.addPass(film);

// Custom RGB Shift
const rgbShift = new ShaderPass({
    uniforms: {
        tDiffuse: { value: null },
        amount: { value: 0.003 }
    },
    vertexShader: \`
        varying vec2 vUv;
        void main() {
            vUv = uv;
            gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
    \`,
    fragmentShader: \`
        uniform sampler2D tDiffuse;
        uniform float amount;
        varying vec2 vUv;
        
        void main() {
            vec2 offset = vec2(amount, 0.0);
            float r = texture2D(tDiffuse, vUv + offset).r;
            float g = texture2D(tDiffuse, vUv).g;
            float b = texture2D(tDiffuse, vUv - offset).b;
            gl_FragColor = vec4(r, g, b, 1.0);
        }
    \`
});
composer.addPass(rgbShift);

// ============================================
// 2. Scene Objects
// ============================================
// Emissive objects for bloom
const objects = [];
const colors = [0xff6b6b, 0x4ecdc4, 0xffe66d, 0xa8e6cf, 0xf38181, 0xaa96da];

for (let i = 0; i < 6; i++) {
    const geo = new THREE.BoxGeometry(0.8, 0.8, 0.8);
    const mat = new THREE.MeshStandardMaterial({
        color: colors[i],
        emissive: colors[i],
        emissiveIntensity: 0.3,
        roughness: 0.3,
        metalness: 0.7
    });
    const mesh = new THREE.Mesh(geo, mat);
    mesh.position.set(i * 1.5 - 3.75, 0.4, 0);
    scene.add(mesh);
    objects.push(mesh);
}

// ============================================
// 3. Lights
// ============================================
const ambient = new THREE.AmbientLight(0x404040, 0.5);
scene.add(ambient);

const directional = new THREE.DirectionalLight(0xffffff, 1);
directional.position.set(5, 10, 5);
scene.add(directional);

// ============================================
// 4. Ground
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
scene.add(ground);

// ============================================
// 5. Grid
// ============================================
const grid = new THREE.GridHelper(12, 12);
scene.add(grid);

// ============================================
// 6. Animation
// ============================================
function animate() {
    requestAnimationFrame(animate);
    
    // Rotate objects
    objects.forEach((obj, i) => {
        obj.rotation.x += 0.01;
        obj.rotation.y += 0.01 + i * 0.005;
    });
    
    controls.update();
    
    // Render with post-processing
    composer.render();
}
animate();

// ============================================
// 7. Controls for Effects
// ============================================
// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    switch(e.key) {
        case '1':
            bloom.enabled = !bloom.enabled;
            console.log('Bloom:', bloom.enabled ? 'ON' : 'OFF');
            break;
        case '2':
            film.enabled = !film.enabled;
            console.log('Film:', film.enabled ? 'ON' : 'OFF');
            break;
        case '3':
            rgbShift.enabled = !rgbShift.enabled;
            console.log('RGB Shift:', rgbShift.enabled ? 'ON' : 'OFF');
            break;
    }
});

// ============================================
// 8. Resize
// ============================================
window.addEventListener('resize', () => {
    const width = window.innerWidth;
    const height = window.innerHeight;
    
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    
    renderer.setSize(width, height);
    composer.setSize(width, height);
});

// ============================================
// 9. Info Display
// ============================================
console.log('Post-Processing Effects:');
console.log('1 - Toggle Bloom');
console.log('2 - Toggle Film');
console.log('3 - Toggle RGB Shift');`,
      language: "javascript"
    }
  ]
};
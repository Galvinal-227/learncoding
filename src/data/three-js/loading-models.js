export const chapter = {
  slug: "loading-models",
  title: "Loading Models",
  description: "Memuat dan menampilkan model 3D dari berbagai format di Three.js.",
  icon: "SiThreedotjs",
  color: "#000000",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["threejs-introduction", "threejs-scene"],
  tags: ["threejs", "models", "gltf", "loader"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Loader

### GLTFLoader
\`\`\`javascript
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

const loader = new GLTFLoader();
loader.load(
    'model.gltf',
    (gltf) => {
        scene.add(gltf.scene);
    },
    (xhr) => {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    (error) => {
        console.error(error);
    }
);
\`\`\`

### DRACOLoader (compressed)
\`\`\`javascript
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

const draco = new DRACOLoader();
draco.setDecoderPath('/draco/');

loader.setDRACOLoader(draco);
\`\`\`

### FBXLoader
\`\`\`javascript
import { FBXLoader } from 'three/addons/loaders/FBXLoader.js';

const loader = new FBXLoader();
loader.load('model.fbx', (fbx) => {
    scene.add(fbx);
});
\`\`\`

### OBJLoader
\`\`\`javascript
import { OBJLoader } from 'three/addons/loaders/OBJLoader.js';

const loader = new OBJLoader();
loader.load('model.obj', (obj) => {
    scene.add(obj);
});
\`\`\`

## Loading Manager

\`\`\`javascript
import { LoadingManager } from 'three';

const manager = new LoadingManager();

manager.onStart = (url, itemsLoaded, itemsTotal) => {
    console.log('Started loading');
};

manager.onProgress = (url, itemsLoaded, itemsTotal) => {
    console.log(\`Loading: \${itemsLoaded}/\${itemsTotal}\`);
};

manager.onLoad = () => {
    console.log('All loaded!');
};

manager.onError = (url) => {
    console.error('Error loading:', url);
};

const loader = new GLTFLoader(manager);
\`\`\`

## Model Processing

### Scale and Position
\`\`\`javascript
loader.load('model.gltf', (gltf) => {
    const model = gltf.scene;
    model.scale.set(0.1, 0.1, 0.1);
    model.position.set(0, 0, 0);
    model.rotation.y = Math.PI / 2;
    scene.add(model);
});
\`\`\`

### Animations
\`\`\`javascript
loader.load('model.gltf', (gltf) => {
    const model = gltf.scene;
    scene.add(model);
    
    const mixer = new THREE.AnimationMixer(model);
    const clips = gltf.animations;
    
    if (clips.length > 0) {
        const action = mixer.clipAction(clips[0]);
        action.play();
    }
    
    // Update in animation loop
    function animate() {
        requestAnimationFrame(animate);
        mixer.update(delta);
        renderer.render(scene, camera);
    }
    animate();
});
\`\`\`

### Materials
\`\`\`javascript
loader.load('model.gltf', (gltf) => {
    const model = gltf.scene;
    
    model.traverse((child) => {
        if (child.isMesh) {
            child.material = new THREE.MeshStandardMaterial({
                color: 0x00ff88,
                roughness: 0.3,
                metalness: 0.7
            });
        }
    });
    
    scene.add(model);
});
\`\`\`

## Multiple Models

\`\`\`javascript
const models = [];

loader.load('model1.gltf', (gltf) => {
    const model = gltf.scene;
    model.position.set(-3, 0, 0);
    scene.add(model);
    models.push(model);
});

loader.load('model2.gltf', (gltf) => {
    const model = gltf.scene;
    model.position.set(0, 0, 0);
    scene.add(model);
    models.push(model);
});

loader.load('model3.gltf', (gltf) => {
    const model = gltf.scene;
    model.position.set(3, 0, 0);
    scene.add(model);
    models.push(model);
});
\`\`\`

## Best Practices

1. **Use GLTF/GLB** - Format standar
2. **Compress models** with Draco
3. **Use LOD** for performance
4. **Optimize geometry** - Reduce polygons
5. **Optimize textures** - Resize dan compress
6. **Use loading manager** untuk progress
7. **Handle errors** gracefully
8. **Dispose models** when done
  `,
  quiz: [
    {
      question: "Loader untuk GLTF adalah?",
      options: ["GLTFLoader", "GLBLoader", "ModelLoader", "ThreeLoader"],
      correctAnswer: 0
    },
    {
      question: "Manager untuk loading progress adalah?",
      options: ["LoadingManager", "ProgressManager", "LoaderManager", "AssetManager"],
      correctAnswer: 0
    },
    {
      question: "Compression format untuk GLTF adalah?",
      options: ["ZIP", "Draco", "GZIP", "LZMA"],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete Model Loading Example",
      code: `// ============================================
// Complete Model Loading Example
// ============================================
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';
import { LoadingManager } from 'three';

// ============================================
// 1. Setup
// ============================================
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x1a1a2e);

const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
camera.position.set(5, 3, 8);
camera.lookAt(0, 0, 0);

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;
renderer.toneMapping = THREE.ACESFilmicToneMapping;
renderer.toneMappingExposure = 1.2;
document.body.appendChild(renderer.domElement);

const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.target.set(0, 0.5, 0);

// ============================================
// 2. Loading Manager with UI
// ============================================
const loadingDiv = document.createElement('div');
loadingDiv.style.position = 'absolute';
loadingDiv.style.top = '50%';
loadingDiv.style.left = '50%';
loadingDiv.style.transform = 'translate(-50%, -50%)';
loadingDiv.style.color = 'white';
loadingDiv.style.fontSize = '20px';
loadingDiv.style.textAlign = 'center';
loadingDiv.textContent = 'Loading... 0%';
document.body.appendChild(loadingDiv);

const manager = new LoadingManager();

manager.onStart = () => {
    loadingDiv.style.display = 'block';
};

manager.onProgress = (url, itemsLoaded, itemsTotal) => {
    const percent = Math.round((itemsLoaded / itemsTotal) * 100);
    loadingDiv.textContent = \`Loading... \${percent}%\`;
};

manager.onLoad = () => {
    loadingDiv.style.display = 'none';
};

manager.onError = (url) => {
    loadingDiv.textContent = 'Error loading model';
    loadingDiv.style.color = 'red';
};

// ============================================
// 3. Loaders
// ============================================
// GLTF Loader with Draco
const dracoLoader = new DRACOLoader();
dracoLoader.setDecoderPath('https://www.gstatic.com/draco/versioned/decoders/1.4.1/');

const loader = new GLTFLoader(manager);
loader.setDRACOLoader(dracoLoader);

// ============================================
// 4. Lights
// ============================================
const ambient = new THREE.AmbientLight(0x404040, 0.5);
scene.add(ambient);

const directional = new THREE.DirectionalLight(0xffffff, 1.2);
directional.position.set(5, 10, 5);
directional.castShadow = true;
directional.shadow.mapSize.width = 2048;
directional.shadow.mapSize.height = 2048;
scene.add(directional);

const hemi = new THREE.HemisphereLight(0x87ceeb, 0x3a1c0a, 0.6);
scene.add(hemi);

// ============================================
// 5. Ground
// ============================================
const ground = new THREE.Mesh(
    new THREE.PlaneGeometry(10, 10),
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
// 6. Load Model
// ============================================
// Example model URL (replace with actual model)
const modelUrl = 'https://threejs.org/examples/models/gltf/Draco/Flower.gltf';

loader.load(
    modelUrl,
    (gltf) => {
        const model = gltf.scene;
        
        // Scale and position
        model.scale.set(1, 1, 1);
        model.position.set(0, 0, 0);
        model.rotation.y = 0;
        
        // Process materials
        model.traverse((child) => {
            if (child.isMesh) {
                child.castShadow = true;
                child.receiveShadow = true;
            }
        });
        
        scene.add(model);
        
        // Handle animations
        if (gltf.animations.length > 0) {
            const mixer = new THREE.AnimationMixer(model);
            const action = mixer.clipAction(gltf.animations[0]);
            action.play();
            
            // Store for animation loop
            window.mixer = mixer;
        }
        
        console.log('Model loaded successfully');
    },
    (xhr) => {
        // Progress handled by manager
    },
    (error) => {
        console.error('Error loading model:', error);
        loadingDiv.textContent = 'Error loading model';
        loadingDiv.style.color = 'red';
    }
);

// ============================================
// 7. Helpers
// ============================================
const grid = new THREE.GridHelper(10, 10);
scene.add(grid);

const axes = new THREE.AxesHelper(2);
scene.add(axes);

// ============================================
// 8. Animation Loop
// ============================================
const clock = new THREE.Clock();

function animate() {
    requestAnimationFrame(animate);
    
    const delta = clock.getDelta();
    
    // Update animation mixer
    if (window.mixer) {
        window.mixer.update(delta);
    }
    
    controls.update();
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
// 10. Cleanup
// ============================================
window.addEventListener('beforeunload', () => {
    renderer.dispose();
    if (window.mixer) {
        window.mixer.stopAllAction();
    }
});`,
      language: "javascript"
    }
  ]
};
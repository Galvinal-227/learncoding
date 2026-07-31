export const chapter = {
  slug: "firebase-storage",
  title: "Cloud Storage",
  description: "Upload, download, dan kelola file dengan Firebase Cloud Storage.",
  icon: "SiFirebase",
  color: "#DD2C00",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["firebase-introduction"],
  tags: ["firebase", "storage", "upload", "file"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Setup

\`\`\`javascript
import { getStorage, ref, uploadBytesResumable, getDownloadURL, deleteObject } from 'firebase/storage';

const storage = getStorage();
\`\`\`

## Upload File

\`\`\`javascript
async function uploadFile(file, path) {
    const storageRef = ref(storage, path);
    const uploadTask = uploadBytesResumable(storageRef, file);
    
    uploadTask.on('state_changed',
        (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log(\`Upload: \${progress}%\`);
        },
        (error) => console.error(error),
        async () => {
            const url = await getDownloadURL(uploadTask.snapshot.ref);
            console.log('File URL:', url);
        }
    );
}

// Usage
const file = document.getElementById('fileInput').files[0];
uploadFile(file, \`avatars/\${user.uid}.jpg\`);
\`\`\`

## Download URL

\`\`\`javascript
const url = await getDownloadURL(ref(storage, 'avatars/user123.jpg'));
\`\`\`

## Delete File

\`\`\`javascript
await deleteObject(ref(storage, 'avatars/user123.jpg'));
\`\`\`
  `,

  quiz: [
    { question: "uploadBytesResumable untuk?", options: ["Download", "Upload dengan progress", "Delete", "List files"], correctAnswer: 1 },
    { question: "getDownloadURL?", options: ["Upload", "Dapat URL publik file", "Delete", "Rename"], correctAnswer: 1 }
  ],

  codeExamples: []
};
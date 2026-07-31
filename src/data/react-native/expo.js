export const chapter = {
  slug: "react-native-expo",
  title: "Expo Framework",
  description: "Gunakan Expo untuk development React Native yang lebih cepat dan mudah.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Beginner",
  estimatedReadingTime: 20,
  prerequisites: ["react-native-introduction"],
  tags: ["react-native", "expo", "managed", "workflow"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Expo?

Expo adalah **platform** di atas React Native yang menyediakan **managed workflow**: build, deploy, OTA updates, dan akses native features tanpa konfigurasi native.

## Expo Features

| Feature | Deskripsi |
|---------|-----------|
| **Expo Go** | Test app di device tanpa build |
| **EAS Build** | Cloud build untuk App Store/Play Store |
| **EAS Submit** | Submit ke store langsung |
| **EAS Update** | OTA update tanpa app store review |
| **Expo SDK** | 100+ native modules ready |
| **Expo Router** | File-based routing (like Next.js) |

## Project Structure (Expo Router)

\`\`\`
my-app/
├── app/
│   ├── (tabs)/
│   │   ├── index.tsx      # Home tab
│   │   └── settings.tsx   # Settings tab
│   ├── _layout.tsx        # Root layout
│   └── details/[id].tsx   # Dynamic route
├── components/
├── assets/
├── app.json               # Expo config
└── package.json
\`\`\`

## Expo SDK Features

\`\`\`jsx
import { Camera } from 'expo-camera';
import * as Location from 'expo-location';
import * as Notifications from 'expo-notifications';
import { Audio } from 'expo-av';
import * as ImagePicker from 'expo-image-picker';
import * as Haptics from 'expo-haptics';
import * as SecureStore from 'expo-secure-store';
import * as Clipboard from 'expo-clipboard';
\`\`\`

## EAS Build

\`\`\`bash
npm install -g eas-cli
eas login
eas build:configure

# Build
eas build --platform ios
eas build --platform android
eas build --platform all

# Submit
eas submit --platform ios
eas submit --platform android
\`\`\`

## Expo vs Bare: When to Use

| Expo | Bare RN |
|------|---------|
| Most apps | Specific native modules |
| No native experience | Need custom native code |
| Faster development | Full control |
| OTA updates | Manual deployment |
| EAS services | DIY |
  `,

  quiz: [
    { question: "Expo Go?", options: ["Game", "Test RN app without build", "IDE", "Simulator"], correctAnswer: 1 },
    { question: "EAS?", options: ["Editor", "Expo Application Services (build, submit, update)", "Analytics", "Auth"], correctAnswer: 1 }
  ],

  codeExamples: []
};
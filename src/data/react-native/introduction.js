export const chapter = {
  slug: "react-native-introduction",
  title: "Pengenalan React Native",
  description: "Pahami apa itu React Native, arsitekturnya, dan kenapa jadi pilihan mobile development.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Beginner",
  estimatedReadingTime: 10,
  prerequisites: ["react-introduction"],
  tags: ["react-native", "mobile", "ios", "android"],
  order: 1,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu React Native?

React Native adalah **framework open-source** untuk membangun aplikasi mobile **native** menggunakan **JavaScript dan React**. Dibuat oleh Meta (Facebook) tahun 2015.

## Kenapa React Native?

- 📱 **Cross-platform** - Satu kode, iOS + Android
- ⚛️ **React syntax** - Pakai React yang sudah dikenal
- 🔥 **Hot Reload** - Lihat perubahan instant
- 🚀 **Near-native performance** - Bridge to native components
- 📦 **Ecosystem** - Expo, React Navigation, Native modules
- 💰 **Hemat biaya** - 1 team instead of 2 (iOS + Android)

## React Native vs Flutter vs Native

| | React Native | Flutter | Native |
|---|-------------|---------|--------|
| Bahasa | JavaScript | Dart | Swift/Kotlin |
| UI | Native components | Custom render | Native |
| Performance | Good | Very good | Excellent |
| Learning | Low (React devs) | Medium | High |
| Hot Reload | ✅ | ✅ | ❌ |
| Popular | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | ⭐⭐⭐ |
| Made by | Meta | Google | Apple/Google |

## How It Works

\`\`\`
JavaScript Thread ← Bridge → Native Thread
(React code)                   (iOS/Android UI)
\`\`\`

- **JS Thread**: Runs your React code
- **Bridge**: Async communication
- **Native Thread**: Renders actual native UI (UIButton, TextView, etc.)

## Expo vs Bare React Native

| Expo | Bare RN |
|------|---------|
| Managed workflow | Full control |
| No native config | Xcode/Android Studio needed |
| OTA updates | Manual updates |
| 90%+ apps | Complex native modules |
| Recommended for most apps | Specific needs |

## Instalasi

\`\`\`bash
# Expo (recommended)
npx create-expo-app@latest my-app
cd my-app
npx expo start

# Bare React Native
npx react-native init MyApp
\`\`\`

## First Component

\`\`\`jsx
import { View, Text, StyleSheet } from 'react-native';

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello React Native!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
    text: { fontSize: 24, fontWeight: 'bold' }
});
\`\`\`
  `,

  quiz: [
    { question: "React Native: satu kode?", options: ["iOS only", "iOS + Android (cross-platform)", "Android only", "Web only"], correctAnswer: 1 },
    { question: "Expo vs Bare?", options: ["Same", "Expo: managed, easier; Bare: full control", "Bare easier", "Expo deprecated"], correctAnswer: 1 },
    { question: "RN: native components?", options: ["WebView", "Real native UI (UIButton, TextView)", "Canvas", "HTML"], correctAnswer: 1 }
  ],

  codeExamples: [
    {
      title: "Expo Quick Start",
      language: "bash",
      code: `npx create-expo-app@latest MyApp
cd MyApp
npx expo start
# Scan QR code with Expo Go app`
    }
  ]
};
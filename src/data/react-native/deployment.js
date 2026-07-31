export const chapter = {
  slug: "react-native-deployment",
  title: "Deployment",
  description: "Build dan deploy React Native ke App Store dan Google Play Store.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["react-native-native-features"],
  tags: ["react-native", "deployment", "app-store", "play-store"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## EAS Build (Expo)

\`\`\`bash
npm install -g eas-cli
eas login
eas build:configure
\`\`\`

### Android Build
\`\`\`bash
eas build --platform android
# Download .aab file → upload ke Google Play Console
\`\`\`

### iOS Build
\`\`\`bash
eas build --platform ios
# Download .ipa file → upload ke App Store Connect via Transporter
\`\`\`

## App Store Submission Checklist

### Android (Google Play)
\`\`\`
✅ App signed with keystore
✅ Privacy policy URL
✅ App icon (512x512)
✅ Screenshots (min 2)
✅ Feature graphic (1024x500)
✅ Content rating questionnaire
✅ Pricing & distribution
\`\`\`

### iOS (App Store)
\`\`\`
✅ Apple Developer account ($99/tahun)
✅ App ID & Bundle identifier
✅ Distribution certificate
✅ Provisioning profile
✅ App icon (1024x1024)
✅ Screenshots (6.7" + 5.5")
✅ App description & keywords
✅ Privacy policy
✅ App Store Review Guidelines compliance
\`\`\`

## app.json Configuration

\`\`\`json
{
    "expo": {
        "name": "My App",
        "slug": "my-app",
        "version": "1.0.0",
        "orientation": "portrait",
        "icon": "./assets/icon.png",
        "userInterfaceStyle": "automatic",
        "splash": {
            "image": "./assets/splash.png",
            "resizeMode": "contain",
            "backgroundColor": "#ffffff"
        },
        "ios": {
            "supportsTablet": true,
            "bundleIdentifier": "com.mycompany.myapp",
            "buildNumber": "1"
        },
        "android": {
            "adaptiveIcon": {
                "foregroundImage": "./assets/adaptive-icon.png",
                "backgroundColor": "#ffffff"
            },
            "package": "com.mycompany.myapp",
            "versionCode": 1
        },
        "updates": {
            "url": "https://u.expo.dev/your-project-id"
        }
    }
}
\`\`\`

## OTA Updates (EAS Update)

\`\`\`bash
# Push update tanpa app store review!
eas update --branch production --message "Fix critical bug"
\`\`\`

\`\`\`jsx
// App.js - Check for updates
import * as Updates from 'expo-updates';

async function checkForUpdates() {
    try {
        const update = await Updates.checkForUpdateAsync();
        if (update.isAvailable) {
            await Updates.fetchUpdateAsync();
            Updates.reloadAsync(); // Reload with new update
        }
    } catch (error) {
        console.error('Update check failed:', error);
    }
}
\`\`\`

## Production Checklist

\`\`\`
✅ App icon (all sizes)
✅ Splash screen
✅ Permissions configured
✅ API URLs set to production
✅ Error tracking (Sentry)
✅ Analytics (Firebase)
✅ Deep linking
✅ Push notifications configured
✅ App Store metadata ready
✅ Privacy policy published
✅ Test on real devices
✅ Performance optimized
\`\`\`
  `,

  quiz: [
    { question: "EAS Build?", options: ["Local only", "Cloud build service (Expo)", "Simulator", "Emulator only"], correctAnswer: 1 },
    { question: "OTA updates?", options: ["App Store required", "Instant update without review (EAS Update)", "Not possible", "Android only"], correctAnswer: 1 }
  ],

  codeExamples: []
};
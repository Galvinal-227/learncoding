export const chapter = {
  slug: "react-native-native-features",
  title: "Native Features",
  description: "Akses fitur native: kamera, lokasi, notifikasi, dan sensor.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Advanced",
  estimatedReadingTime: 25,
  prerequisites: ["react-native-expo"],
  tags: ["react-native", "native", "camera", "location"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Camera (expo-camera)

\`\`\`bash
npx expo install expo-camera
\`\`\`

\`\`\`jsx
import { CameraView, useCameraPermissions } from 'expo-camera';
import { useState } from 'react';

function CameraScreen() {
    const [permission, requestPermission] = useCameraPermissions();
    
    if (!permission) return <View />;
    if (!permission.granted) {
        return <Button title="Grant Camera Permission" onPress={requestPermission} />;
    }
    
    return (
        <CameraView style={{ flex: 1 }} facing="back">
            {/* Camera preview */}
        </CameraView>
    );
}
\`\`\`

## Location (expo-location)

\`\`\`bash
npx expo install expo-location
\`\`\`

\`\`\`jsx
import * as Location from 'expo-location';

async function getCurrentLocation() {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== 'granted') return;
    
    const location = await Location.getCurrentPositionAsync({});
    console.log(location.coords.latitude, location.coords.longitude);
}
\`\`\`

## Image Picker

\`\`\`bash
npx expo install expo-image-picker
\`\`\`

\`\`\`jsx
import * as ImagePicker from 'expo-image-picker';

async function pickImage() {
    const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1
    });
    
    if (!result.canceled) {
        setImage(result.assets[0].uri);
    }
}
\`\`\`

## Push Notifications

\`\`\`bash
npx expo install expo-notifications expo-device
\`\`\`

\`\`\`jsx
import * as Notifications from 'expo-notifications';

async function registerForPushNotifications() {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    
    if (existingStatus !== 'granted') {
        const { status } = await Notifications.requestPermissionsAsync();
        finalStatus = status;
    }
    
    if (finalStatus === 'granted') {
        const token = await Notifications.getExpoPushTokenAsync();
        console.log('Push token:', token.data);
    }
}

// Handle incoming notifications
Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: true,
        shouldSetBadge: true
    })
});
\`\`\`

## Haptics (Vibration)

\`\`\`bash
npx expo install expo-haptics
\`\`\`

\`\`\`jsx
import * as Haptics from 'expo-haptics';

function handlePress() {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
    // or
    Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
}
\`\`\`

## Secure Storage

\`\`\`bash
npx expo install expo-secure-store
\`\`\`

\`\`\`jsx
import * as SecureStore from 'expo-secure-store';

await SecureStore.setItemAsync('token', 'jwt-secret-token');
const token = await SecureStore.getItemAsync('token');
await SecureStore.deleteItemAsync('token');
\`\`\`

## Audio/Video

\`\`\`bash
npx expo install expo-av
\`\`\`

\`\`\`jsx
import { Audio, Video } from 'expo-av';

// Play sound
const { sound } = await Audio.Sound.createAsync(require('./beep.mp3'));
await sound.playAsync();

// Video player
<Video source={{ uri: 'https://example.com/video.mp4' }} style={{ width: 300, height: 200 }} useNativeControls />
\`\`\`
  `,

  quiz: [
    { question: "expo-camera?", options: ["Web only", "Native camera access", "Simulator", "Gallery"], correctAnswer: 1 },
    { question: "SecureStore?", options: ["AsyncStorage", "Encrypted storage (tokens, secrets)", "Database", "Cache"], correctAnswer: 1 }
  ],

  codeExamples: []
};
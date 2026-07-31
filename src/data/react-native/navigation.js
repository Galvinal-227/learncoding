export const chapter = {
  slug: "react-native-navigation",
  title: "Navigation",
  description: "Implementasi navigasi dengan Expo Router dan React Navigation.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["react-native-core-components"],
  tags: ["react-native", "navigation", "expo-router", "stack"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Expo Router (Recommended)

File-based routing, mirip Next.js App Router:

\`\`\`jsx
// app/_layout.jsx
import { Stack } from 'expo-router';

export default function RootLayout() {
    return <Stack screenOptions={{ headerStyle: { backgroundColor: '#f4511e' } }} />;
}

// app/index.jsx → "/"
import { Link } from 'expo-router';
export default function Home() {
    return <Link href="/details/123">Go to Details</Link>;
}

// app/details/[id].jsx → "/details/:id"
import { useLocalSearchParams } from 'expo-router';
export default function Details() {
    const { id } = useLocalSearchParams();
    return <Text>Details for {id}</Text>;
}
\`\`\`

## Tab Navigation

\`\`\`jsx
// app/(tabs)/_layout.jsx
import { Tabs } from 'expo-router';

export default function TabLayout() {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: ({ color }) => <Icon name="home" color={color} /> }} />
            <Tabs.Screen name="settings" options={{ title: 'Settings' }} />
        </Tabs>
    );
}
\`\`\`

## React Navigation (Alternative)

\`\`\`bash
npm install @react-navigation/native @react-navigation/native-stack
\`\`\`

\`\`\`jsx
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Details" component={DetailsScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
\`\`\`

## Navigation Methods

\`\`\`jsx
import { router } from 'expo-router';

// Navigate
router.push('/details/123');
router.replace('/login');
router.back();

// With params
router.push({ pathname: '/details/[id]', params: { id: '123', title: 'Hello' } });
\`\`\`
  `,

  quiz: [
    { question: "Expo Router: file-based?", options: ["No", "Yes (like Next.js)", "Config only", "Manual"], correctAnswer: 1 },
    { question: "router.push()?", options: ["Back", "Navigate to new screen", "Replace", "Pop"], correctAnswer: 1 }
  ],

  codeExamples: []
};
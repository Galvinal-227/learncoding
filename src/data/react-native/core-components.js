export const chapter = {
  slug: "react-native-core-components",
  title: "Core Components",
  description: "Kenali komponen dasar React Native: View, Text, Image, ScrollView, FlatList.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Beginner",
  estimatedReadingTime: 25,
  prerequisites: ["react-native-expo"],
  tags: ["react-native", "components", "view", "flatlist"],
  order: 3,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Core Components Map

| React Native | Web (HTML) | Deskripsi |
|-------------|-----------|-----------|
| **View** | <div> | Container (Flexbox) |
| **Text** | <p> <span> | Text display |
| **Image** | <img> | Display images |
| **ScrollView** | <div> + overflow | Scrollable container |
| **FlatList** | Virtual list | Large lists (lazy) |
| **TextInput** | <input> | Input field |
| **TouchableOpacity** | <button> | Pressable wrapper |
| **Pressable** | <button> | Modern pressable |
| **Modal** | Dialog | Overlay dialog |
| **ActivityIndicator** | Spinner | Loading spinner |

## View & Text

\`\`\`jsx
import { View, Text, StyleSheet } from 'react-native';

function Welcome() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome!</Text>
            <Text>All text must be inside Text component</Text>
        </View>
    );
}
\`\`\`

## FlatList (Large Data)

\`\`\`jsx
import { FlatList, Text, View } from 'react-native';

const data = Array.from({ length: 1000 }, (_, i) => ({ id: i, title: 'Item ' + i }));

function MyList() {
    return (
        <FlatList
            data={data}
            keyExtractor={item => item.id.toString()}
            renderItem={({ item }) => (
                <View style={{ padding: 16, borderBottomWidth: 1 }}>
                    <Text>{item.title}</Text>
                </View>
            )}
            onEndReached={() => console.log('End reached')}
            onEndReachedThreshold={0.5}
            refreshing={false}
            onRefresh={() => console.log('Refresh')}
            ListEmptyComponent={<Text>No items</Text>}
            ListHeaderComponent={<Text>Header</Text>}
        />
    );
}
\`\`\`

## Image

\`\`\`jsx
// Local
<Image source={require('./assets/logo.png')} style={{ width: 200, height: 200 }} />

// Remote
<Image source={{ uri: 'https://example.com/photo.jpg' }} style={{ width: 200, height: 200 }} />
\`\`\`

## Touchable Components

\`\`\`jsx
import { TouchableOpacity, Pressable, Alert } from 'react-native';

<TouchableOpacity onPress={() => Alert.alert('Pressed!')} style={{ padding: 10, backgroundColor: 'blue' }}>
    <Text style={{ color: 'white' }}>Press Me</Text>
</TouchableOpacity>

<Pressable onPress={() => console.log('pressed')} style={({ pressed }) => [{ opacity: pressed ? 0.5 : 1 }]}>
    <Text>Pressable</Text>
</Pressable>
\`\`\`

## TextInput

\`\`\`jsx
import { TextInput, useState } from 'react';

function Form() {
    const [value, setValue] = useState('');

    return (
        <TextInput
            value={value}
            onChangeText={setValue}
            placeholder="Type here..."
            style={{ borderWidth: 1, padding: 10, borderRadius: 8 }}
            keyboardType="email-address"
            secureTextEntry={false}
            multiline={false}
            maxLength={50}
        />
    );
}
\`\`\`
  `,

  quiz: [
    { question: "RN: View = HTML?", options: ["<span>", "<div>", "<p>", "<img>"], correctAnswer: 1 },
    { question: "FlatList vs ScrollView?", options: ["Same", "FlatList: lazy render (large lists); ScrollView: all at once", "ScrollView lazy", "Both same"], correctAnswer: 1 }
  ],

  codeExamples: []
};
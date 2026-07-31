export const chapter = {
  slug: "react-native-styling",
  title: "Styling & Layout",
  description: "Style di React Native dengan StyleSheet, Flexbox, dan responsive design.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["react-native-core-components"],
  tags: ["react-native", "styling", "flexbox", "stylesheet"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## StyleSheet API

\`\`\`jsx
import { StyleSheet, View, Text } from 'react-native';

function App() {
    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.bold]}>Styled!</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#fff', padding: 20 },
    text: { fontSize: 16, color: '#333' },
    bold: { fontWeight: 'bold' }
});
\`\`\`

## Flexbox (Default in RN!)

\`\`\`jsx
// React Native uses Flexbox by default!
<View style={{ flex: 1 }}>  // Fill screen

// Direction (column is default in RN!)
<View style={{ flexDirection: 'row' }}>  // Horizontal

// Center
<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>

// Flex proportions
<View style={{ flex: 2 }} />  // 2/3 of space
<View style={{ flex: 1 }} />  // 1/3 of space
\`\`\`

## RN vs CSS Flexbox

| RN | CSS |
|----|-----|
| flexDirection: 'column' (default) | flex-direction: row (default) |
| Flexbox is default | display: flex needed |
| No grid | display: grid |
| Percentage strings | calc() |

## Responsive Design

\`\`\`jsx
import { useWindowDimensions } from 'react-native';

function ResponsiveComponent() {
    const { width, height } = useWindowDimensions();
    const isTablet = width > 768;
    
    return (
        <View style={{ flexDirection: isTablet ? 'row' : 'column' }}>
            <Text>Width: {width}</Text>
        </View>
    );
}
\`\`\`

## Platform-Specific Styles

\`\`\`jsx
import { Platform, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    shadow: {
        ...Platform.select({
            ios: {
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.25,
                shadowRadius: 4
            },
            android: {
                elevation: 4
            }
        })
    }
});
\`\`\`
  `,

  quiz: [
    { question: "RN: flexDirection default?", options: ["row", "column", "row-reverse", "none"], correctAnswer: 1 },
    { question: "StyleSheet.create?", options: ["Optional", "Performance optimization (validates styles)", "Required", "Deprecated"], correctAnswer: 1 }
  ],

  codeExamples: []
};
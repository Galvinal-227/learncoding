export const chapter = {
  slug: "zustand-persist",
  title: "Persist State",
  description: "Simpan state secara persistent dengan middleware persist.",
  icon: "SiZustand",
  color: "#F36D38",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["zustand-middleware"],
  tags: ["zustand", "persist", "localStorage", "asyncstorage"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Persist Options

\`\`\`javascript
const useStore = create(
    persist(
        (set) => ({ ... }),
        {
            name: 'app-storage',
            storage: createJSONStorage(() => localStorage),
            
            // Only persist certain fields
            partialize: (state) => ({
                theme: state.theme,
                language: state.language
                // Don't persist: count, user
            }),
            
            // Merge persisted state with initial
            merge: (persisted, current) => ({
                ...current,
                ...persisted
            }),
            
            // Called after rehydration
            onRehydrateStorage: (state) => {
                console.log('Hydration starts');
                return (state, error) => {
                    if (error) console.error('Hydration error:', error);
                    else console.log('Hydration complete');
                };
            }
        }
    )
);
\`\`\`

## Manual Control

\`\`\`javascript
// Manually rehydrate
await useStore.persist.rehydrate();

// Check if hydrated
const hasHydrated = useStore.persist.hasHydrated();

// Clear persisted state
useStore.persist.clearStorage();
\`\`\`

## Version Migration

\`\`\`javascript
const useStore = create(
    persist(
        (set) => ({ ... }),
        {
            name: 'app-storage',
            version: 2,  // Increment version when schema changes
            
            migrate: (persistedState, version) => {
                if (version === 1) {
                    // Migrate from v1 to v2
                    return {
                        ...persistedState,
                        newField: 'default'
                    };
                }
                return persistedState;
            }
        }
    )
);
\`\`\`
  `,

  quiz: [
    { question: "partialize?", options: ["All fields", "Only persist certain fields", "Delete", "Encrypt"], correctAnswer: 1 },
    { question: "migrate?", options: ["Delete", "Transform state on version change", "Encrypt", "Reset"], correctAnswer: 1 }
  ],

  codeExamples: []
};
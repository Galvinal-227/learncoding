export const chapter = {
  slug: "web-storage-storage-quotas",
  title: "Storage Quotas & Limits",
  description: "Pahami batasan storage browser dan cara mengeceknya.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["web-storage-indexed-db"],
  tags: ["web-storage", "quotas", "limits", "storage"],
  order: 7,
  isPublished: true,
  updatedAt: "2026-07-30",

  content: `
## Storage Limits

| API | Limit | Persistent? |
|-----|-------|------------|
| localStorage | 5-10 MB | ✅ (never expires) |
| sessionStorage | 5-10 MB | ❌ (tab session) |
| Cookies | 4 KB per cookie, 50+ total | Configurable |
| IndexedDB | ~50% of disk (global) | ✅ |
| Cache API | ~50% of disk (global) | Manual |

## Check Available Storage

\`\`\`javascript
// Modern API
const estimate = await navigator.storage.estimate();
console.log('Usage:', estimate.usage / 1024 / 1024, 'MB');
console.log('Quota:', estimate.quota / 1024 / 1024, 'MB');
const percentUsed = (estimate.usage / estimate.quota) * 100;
console.log('Used:', percentUsed.toFixed(2) + '%');
\`\`\`

## Request Persistent Storage

\`\`\`javascript
// Prevent browser from auto-clearing data
const isPersisted = await navigator.storage.persist();
console.log('Persistent storage:', isPersisted);

// Check if already persisted
const persisted = await navigator.storage.persisted();
console.log('Already persisted:', persisted);
\`\`\`

## Handle Quota Exceeded

\`\`\`javascript
try {
    localStorage.setItem('key', largeData);
} catch (error) {
    if (error.name === 'QuotaExceededError') {
        console.error('Storage full!');
        // Cleanup old data
        clearOldData();
        // Or notify user
        showStorageFullMessage();
    }
}
\`\`\`

## Storage Eviction

\`\`\`
Browser auto-cleans storage when disk is low:
1. Least recently used origin first
2. "Best effort" (no guarantee)
3. Persistent storage is protected
4. Safari: 7-day cap for script-writable storage
\`\`\`

## Best Practices

\`\`\`
✅ Check quota before large writes
✅ Request persistent storage for critical data
✅ Handle QuotaExceededError gracefully
✅ Clean up old/unused data periodically
✅ Don't store large files (use IndexedDB for >1MB)
✅ Monitor storage usage
\`\`\`
  `,

  quiz: [
    { question: "navigator.storage.estimate()?", options: ["Delete", "Check storage usage and quota", "Clear", "Set"], correctAnswer: 1 },
    { question: "QuotaExceededError?", options: ["Network error", "Storage full error", "Permission error", "Type error"], correctAnswer: 1 }
  ],

  codeExamples: []
};
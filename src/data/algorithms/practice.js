export const chapter = {
  slug: "algorithms-practice",
  title: "Latihan Soal Algoritma",
  description: "Kumpulan soal algoritma untuk latihan interview dan problem solving.",
  icon: "SiThealgorithms",
  color: "#00BCB4",
  difficulty: "Advanced",
  estimatedReadingTime: 30,
  prerequisites: ["algorithms-dynamic-programming"],
  tags: ["algoritma", "latihan", "soal", "interview"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Soal Wajib Coding Interview

### 1. Two Sum (LeetCode #1)
\`\`\`javascript
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) return [map.get(complement), i];
        map.set(nums[i], i);
    }
}
// O(n) time, O(n) space
\`\`\`

### 2. Valid Palindrome
\`\`\`javascript
function isPalindrome(s) {
    s = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let l = 0, r = s.length - 1;
    while (l < r) {
        if (s[l] !== s[r]) return false;
        l++; r--;
    }
    return true;
}
\`\`\`

### 3. Reverse Linked List
\`\`\`javascript
function reverseList(head) {
    let prev = null, curr = head;
    while (curr) {
        [curr.next, prev, curr] = [prev, curr, curr.next];
    }
    return prev;
}
\`\`\`

### 4. Valid Parentheses
\`\`\`javascript
function isValid(s) {
    const stack = [];
    const map = { ')': '(', '}': '{', ']': '[' };
    for (let c of s) {
        if (!map[c]) stack.push(c);
        else if (stack.pop() !== map[c]) return false;
    }
    return stack.length === 0;
}
\`\`\`

## Tips Interview

\`\`\`
1. Klarifikasi pertanyaan dulu (tanya!)
2. Diskusikan approach sebelum coding
3. Tulis pseudocode / jelaskan sambil tulis
4. Test dengan example (edge cases!)
5. Analisis time/space complexity
6. Optimasi jika ada waktu
\`\`\`
  `,

  quiz: [
    { question: "Kompleksitas Two Sum dengan HashMap?", options: ["O(n²)", "O(n log n)", "O(n)", "O(1)"], correctAnswer: 2 },
    { question: "Struktur data untuk Valid Parentheses?", options: ["Queue", "Stack", "Tree", "Array"], correctAnswer: 1 }
  ],

  codeExamples: []
};
export const chapter = {
  slug: "javascript-proxy-reflect",
  title: "Proxy & Reflect",
  description: "Pelajari Proxy untuk intercept operasi object dan Reflect API.",
  icon: "SiJavascript",
  color: "#F7DF1E",
  difficulty: "Advanced",
  estimatedReadingTime: 15,
  prerequisites: ["javascript-objects"],
  tags: ["javascript", "proxy", "reflect", "metaprogramming"],
  order: 31,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Proxy

Proxy membungkus object dan meng-intercept operasi seperti get, set, delete.

\`\`\`javascript
const target = { nama: 'Budi', umur: 25 };

const handler = {
    get(target, prop) {
        console.log(\`Mengakses \${prop}\`);
        return target[prop];
    },
    set(target, prop, value) {
        console.log(\`Mengubah \${prop} = \${value}\`);
        target[prop] = value;
        return true;
    }
};

const proxy = new Proxy(target, handler);
proxy.nama;      // Log: "Mengakses nama" → "Budi"
proxy.umur = 26; // Log: "Mengubah umur = 26"
\`\`\`

## Use Case Proxy

### Validasi
\`\`\`javascript
const handler = {
    set(target, prop, value) {
        if (prop === 'umur' && (value < 0 || value > 150)) {
            throw new Error('Umur tidak valid');
        }
        target[prop] = value;
        return true;
    }
};
\`\`\`

### Default Value
\`\`\`javascript
const handler = {
    get(target, prop) {
        return prop in target ? target[prop] : 'Tidak ditemukan';
    }
};
\`\`\`

### Reactive (Vue 3)
\`\`\`javascript
const handler = {
    set(target, prop, value) {
        target[prop] = value;
        render(); // Update UI
        return true;
    }
};
\`\`\`

## Reflect API

Reflect menyediakan method untuk operasi object:

\`\`\`javascript
Reflect.get(obj, 'nama');
Reflect.set(obj, 'nama', 'Budi');
Reflect.has(obj, 'nama');
Reflect.deleteProperty(obj, 'nama');
Reflect.ownKeys(obj);
\`\`\`
  `,

  quiz: [
    { question: "Apa fungsi Proxy di JavaScript?", options: ["Mengganti object", "Meng-intercept operasi object", "Mempercepat object", "Meng-copy object"], correctAnswer: 1 },
    { question: "Apa hubungan Proxy dan Reflect?", options: ["Tidak berhubungan", "Reflect menyediakan method default untuk Proxy traps", "Sama persis", "Reflect menggantikan Proxy"], correctAnswer: 1 }
  ]
};
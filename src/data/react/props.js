export const chapter = {
  slug: "react-props",
  title: "Props",
  description: "Kirim data ke komponen dengan Props - one-way data flow di React.",
  icon: "SiReact",
  color: "#61DAFB",
  difficulty: "Beginner",
  estimatedReadingTime: 15,
  prerequisites: ["react-components"],
  tags: ["react", "props", "data", "one-way"],
  order: 4,
  isPublished: true,
  updatedAt: "2026-07-29",
  content: `
## Apa Itu Props?

Props (properties) adalah **data yang dikirim dari parent ke child**. Read-only, tidak boleh diubah oleh child.

## Basic Props

\`\`\`jsx
function UserCard({ name, email, age }) {
    return <div><h3>{name}</h3><p>{email}</p><p>{age} tahun</p></div>;
}

<UserCard name="Budi" email="budi@email.com" age={25} />
\`\`\`

## Default Props

\`\`\`jsx
function Button({ text = 'Click', variant = 'primary' }) {
    return <button className={variant}>{text}</button>;
}

<Button /> {/* text="Click", variant="primary" */}
<Button text="Save" variant="success" />
\`\`\`

## Children Props

\`\`\`jsx
function Card({ children, title }) {
    return <div className="card"><h2>{title}</h2>{children}</div>;
}

<Card title="Info">
    <p>Ini konten card</p>
    <button>Action</button>
</Card>
\`\`\`

## Spread Props

\`\`\`jsx
const user = { name: 'Budi', email: 'budi@email.com', age: 25 };
<UserCard {...user} />
\`\`\`

## PropTypes (Optional)

\`\`\`bash
npm install prop-types
\`\`\`

\`\`\`jsx
import PropTypes from 'prop-types';

UserCard.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
};
\`\`\`
  `,

  quiz: [
    { question: "Props: mutable?", options: ["Ya", "Tidak (read-only)", "Tergantung", "Bisa diubah child"], correctAnswer: 1 },
    { question: "children prop?", options: ["String only", "Konten di antara tag pembuka & penutup", "Number", "Boolean"], correctAnswer: 1 }
  ],

  codeExamples: []
};
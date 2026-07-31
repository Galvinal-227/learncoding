export const chapter = {
  slug: "firebase-auth",
  title: "Firebase Authentication",
  description: "Implementasi login/register dengan Firebase Auth: Email, Google, dan social providers.",
  icon: "SiFirebase",
  color: "#DD2C00",
  difficulty: "Intermediate",
  estimatedReadingTime: 25,
  prerequisites: ["firebase-introduction"],
  tags: ["firebase", "auth", "login", "authentication"],
  order: 2,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Setup Auth

\`\`\`javascript
import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth';

const auth = getAuth();
\`\`\`

## Email/Password Register

\`\`\`javascript
async function register(email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        console.log('Registered:', userCredential.user);
    } catch (error) {
        switch (error.code) {
            case 'auth/email-already-in-use': console.error('Email sudah terdaftar'); break;
            case 'auth/weak-password': console.error('Password minimal 6 karakter'); break;
            default: console.error(error.message);
        }
    }
}
\`\`\`

## Email/Password Login

\`\`\`javascript
async function login(email, password) {
    try {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        console.log('Logged in:', userCredential.user);
        return userCredential.user;
    } catch (error) {
        console.error('Login failed:', error.message);
    }
}
\`\`\`

## Google Login

\`\`\`javascript
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const provider = new GoogleAuthProvider();

async function loginWithGoogle() {
    try {
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
        console.log('Google login:', user.displayName);
    } catch (error) {
        console.error(error);
    }
}
\`\`\`

## Auth State Listener

\`\`\`javascript
onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log('User logged in:', user.uid);
        // Redirect ke dashboard
    } else {
        console.log('User logged out');
        // Redirect ke login
    }
});
\`\`\`

## Logout

\`\`\`javascript
import { signOut } from 'firebase/auth';

await signOut(auth);
\`\`\`

## React Integration

\`\`\`jsx
import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';

function useAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        return onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });
    }, []);
    
    return { user, loading };
}
\`\`\`
  `,

  quiz: [
    { question: "onAuthStateChanged untuk?", options: ["Login", "Monitor status auth (login/logout)", "Register", "Logout"], correctAnswer: 1 },
    { question: "Google Auth provider?", options: ["GoogleAuthProvider", "GoogleProvider", "GmailAuth", "OAuthProvider"], correctAnswer: 0 }
  ],

  codeExamples: []
};
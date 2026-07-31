export const chapter = {
  slug: "quiz",
  title: "Quiz Akhir Terminal",
  description: "Uji pemahaman Anda tentang semua konsep terminal yang telah dipelajari.",
  icon: "SiQuizlet",
  color: "#6B46C1",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: [
    "terminal-introduction",
    "terminal-basic-commands",
    "terminal-navigation",
    "terminal-file-system",
    "terminal-permissions",
    "terminal-environment-variables",
    "terminal-package-managers-cli",
    "terminal-scripting",
    "terminal-ssh",
    "terminal-customizing-shell"
  ],
  tags: ["quiz", "terminal", "assessment"],
  order: 11,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
# Quiz Akhir Terminal

Selamat! Anda telah menyelesaikan semua materi tentang Terminal. Sekarang saatnya menguji pemahaman Anda dengan quiz berikut.

## Petunjuk

- Quiz terdiri dari 10 pertanyaan
- Pilih satu jawaban yang paling benar
- Nilai minimal 70% untuk lulus
- Waktu pengerjaan 15 menit

Good luck! 🍀
  `,
  quiz: [
    {
      question: "Perintah untuk melihat direktori saat ini adalah?",
      options: ["ls", "pwd", "cd", "dir"],
      correctAnswer: 1
    },
    {
      question: "Perintah untuk melihat isi file adalah?",
      options: ["ls", "cat", "pwd", "cd"],
      correctAnswer: 1
    },
    {
      question: "Perintah untuk mengubah permission adalah?",
      options: ["chmod", "chown", "chgrp", "permission"],
      correctAnswer: 0
    },
    {
      question: "Permission rwx sama dengan angka?",
      options: ["4", "5", "6", "7"],
      correctAnswer: 3
    },
    {
      question: "Shebang untuk bash script adalah?",
      options: ["#!/bin/sh", "#!/bin/bash", "#!/usr/bin/bash", "#!bash"],
      correctAnswer: 1
    },
    {
      question: "Perintah SSH untuk connect ke server adalah?",
      options: ["ssh user@host", "ssh host", "ssh user:host", "ssh -u user host"],
      correctAnswer: 0
    },
    {
      question: "Variable untuk home directory adalah?",
      options: ["$HOME", "$PWD", "$USER", "$PATH"],
      correctAnswer: 0
    },
    {
      question: "File konfigurasi ZSH adalah?",
      options: ["~/.bashrc", "~/.zshrc", "~/.profile", "~/.config"],
      correctAnswer: 1
    },
    {
      question: "Perintah untuk membuat file kosong adalah?",
      options: ["create", "touch", "new", "mkfile"],
      correctAnswer: 1
    },
    {
      question: "Perintah untuk copy file via SSH adalah?",
      options: ["ssh-copy", "scp", "rsync", "copy"],
      correctAnswer: 1
    }
  ],
  codeExamples: []
};
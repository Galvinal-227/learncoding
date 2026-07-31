export const chapter = {
  slug: "graphql-quiz",
  title: "Quiz Akhir GraphQL",
  description: "Uji pemahamanmu tentang GraphQL.",
  icon: "SiGraphql",
  color: "#E10098",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["graphql-best-practices"],
  tags: ["graphql", "quiz"],
  order: 11,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir GraphQL\n\n15 soal.`,
  quiz: [
    { question: "GraphQL vs REST: endpoint?", options: ["Banyak", "1 endpoint", "Sama", "Tidak ada"], correctAnswer: 1 },
    { question: "Over-fetching?", options: ["Kurang data", "Kebanyakan data", "Error", "Cache"], correctAnswer: 1 },
    { question: "ID! artinya?", options: ["Optional", "Non-nullable", "Array", "Deprecated"], correctAnswer: 1 },
    { question: "Fragments?", options: ["Error", "Reusable field sets", "Variables", "Directives"], correctAnswer: 1 },
    { question: "Mutation vs Query?", options: ["Sama", "Query: read; Mutation: write", "Mutation: read", "Query: write"], correctAnswer: 1 },
    { question: "Resolver args?", options: ["req,res", "parent,args,context,info", "query,mutation", "input,output"], correctAnswer: 1 },
    { question: "DataLoader?", options: ["Cache", "Batch request (N+1 solver)", "Logger", "Validator"], correctAnswer: 1 },
    { question: "Apollo Server start()?", options: ["Opsional", "Wajib (v4)", "Debug", "Production"], correctAnswer: 1 },
    { question: "Subscriptions transport?", options: ["HTTP", "WebSocket", "TCP", "UDP"], correctAnswer: 1 },
    { question: "Federation?", options: ["Single", "Unified graph (multi services)", "REST", "DB"], correctAnswer: 1 },
    { question: "useQuery return?", options: ["data", "{loading,error,data}", "refetch", "mutation"], correctAnswer: 1 },
    { question: "refetchQueries?", options: ["Debug", "Auto-refetch setelah mutation", "Cache", "Error"], correctAnswer: 1 },
    { question: "Cursor pagination?", options: ["Page number", "Cursor-based (first/after)", "Offset", "Limit"], correctAnswer: 1 },
    { question: "Depth limiting?", options: ["Debug", "Cegah query nested (DoS)", "Cache", "Format"], correctAnswer: 1 },
    { question: "GraphQL dibuat?", options: ["Google", "Facebook (Meta)", "Amazon", "Microsoft"], correctAnswer: 1 }
  ]
};
export const chapter = {
  slug: "mysql-quiz",
  title: "Quiz Akhir MySQL",
  description: "Uji pemahamanmu tentang MySQL.",
  icon: "SiMysql",
  color: "#4479A1",
  difficulty: "Intermediate",
  estimatedReadingTime: 20,
  prerequisites: ["mysql-security"],
  tags: ["mysql", "quiz"],
  order: 11,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `## Quiz Akhir MySQL\n\n15 soal.`,
  quiz: [
    { question: "MySQL vs MongoDB?", options: ["Sama", "MySQL: SQL/tables; MongoDB: NoSQL/docs", "MySQL NoSQL", "MongoDB SQL"], correctAnswer: 1 },
    { question: "Default port?", options: ["27017", "5432", "3306", "6379"], correctAnswer: 2 },
    { question: "LIMIT 10 OFFSET 20?", options: ["10 rows", "Skip 20, take 10 (Page 3)", "20 rows", "30 rows"], correctAnswer: 1 },
    { question: "LEFT JOIN?", options: ["Match only", "All left + right match (NULL if no match)", "All right", "Cross product"], correctAnswer: 1 },
    { question: "INNER JOIN?", options: ["All data", "Only matching rows in both tables", "Left all", "Right all"], correctAnswer: 1 },
    { question: "EXPLAIN?", options: ["Delete", "Query execution plan", "Insert", "Update"], correctAnswer: 1 },
    { question: "1NF?", options: ["Index", "Atomic values + unique rows", "JOIN", "Backup"], correctAnswer: 1 },
    { question: "3NF?", options: ["Index", "No transitive dependency", "JOIN", "Backup"], correctAnswer: 1 },
    { question: "ACID: Atomicity?", options: ["Isolation", "All or nothing", "Fast", "Backup"], correctAnswer: 1 },
    { question: "ROLLBACK?", options: ["Save", "Cancel transaction", "Commit", "Start"], correctAnswer: 1 },
    { question: "SQL injection prevention?", options: ["Escape", "Parameterized queries", "Indexes", "Firewall"], correctAnswer: 1 },
    { question: "Backup command?", options: ["mysqlbackup", "mysqldump", "mysqlsave", "mysqlexport"], correctAnswer: 1 },
    { question: "View?", options: ["Table", "Virtual table (saved SELECT)", "Index", "Procedure"], correctAnswer: 1 },
    { question: "Stored Procedure?", options: ["Query", "Pre-compiled SQL logic", "Index", "Backup"], correctAnswer: 1 },
    { question: "HAVING vs WHERE?", options: ["Sama", "HAVING: after GROUP BY; WHERE: before", "WHERE after", "HAVING deprecated"], correctAnswer: 1 }
  ]
};
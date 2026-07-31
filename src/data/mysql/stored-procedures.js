export const chapter = {
  slug: "mysql-stored-procedures",
  title: "Stored Procedures",
  description: "Buat stored procedures dan functions untuk logic di database.",
  icon: "SiMysql",
  color: "#4479A1",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["mysql-sql-basics"],
  tags: ["mysql", "stored-procedures", "functions", "triggers"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Stored Procedure

\`\`\`sql
DELIMITER //

CREATE PROCEDURE GetUsersByRole(IN role_name VARCHAR(50))
BEGIN
    SELECT id, name, email FROM users WHERE role = role_name;
END //

DELIMITER ;

-- Call
CALL GetUsersByRole('admin');
\`\`\`

## With OUT Parameters

\`\`\`sql
CREATE PROCEDURE GetUserCount(OUT total INT)
BEGIN
    SELECT COUNT(*) INTO total FROM users;
END //

-- Call
CALL GetUserCount(@count);
SELECT @count;
\`\`\`

## Function

\`\`\`sql
CREATE FUNCTION CalculateAge(birth_date DATE) RETURNS INT
DETERMINISTIC
BEGIN
    RETURN TIMESTAMPDIFF(YEAR, birth_date, CURDATE());
END //

-- Use
SELECT name, CalculateAge(birth_date) AS age FROM users;
\`\`\`

## Trigger

\`\`\`sql
CREATE TRIGGER before_user_insert
BEFORE INSERT ON users
FOR EACH ROW
BEGIN
    SET NEW.created_at = NOW();
END //

CREATE TRIGGER after_user_delete
AFTER DELETE ON users
FOR EACH ROW
BEGIN
    INSERT INTO audit_log (action, user_id, timestamp)
    VALUES ('DELETE', OLD.id, NOW());
END //
\`\`\`
  `,

  quiz: [
    { question: "Stored Procedure?", options: ["Query", "Pre-compiled SQL logic di database", "Index", "Backup"], correctAnswer: 1 },
    { question: "Trigger?", options: ["Manual", "Auto-execute on INSERT/UPDATE/DELETE", "Index", "Query"], correctAnswer: 1 }
  ],

  codeExamples: []
};
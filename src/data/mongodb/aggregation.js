export const chapter = {
  slug: "mongodb-aggregation",
  title: "Aggregation Pipeline",
  description: "Kuasai Aggregation Pipeline untuk data processing yang powerful.",
  icon: "SiMongodb",
  color: "#47A248",
  difficulty: "Advanced",
  estimatedReadingTime: 25,
  prerequisites: ["mongodb-crud"],
  tags: ["mongodb", "aggregation", "pipeline", "analytics"],
  order: 5,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Apa Itu Aggregation Pipeline?

Pipeline = **serangkaian stages** yang memproses data. Mirip \`Array.map().filter().reduce()\` tapi untuk database.

## Pipeline Structure

\`\`\`javascript
const result = await collection.aggregate([
    { $match: { status: 'active' } },           // Filter
    { $group: { _id: '$category', total: { $sum: 1 } } },  // Group
    { $sort: { total: -1 } },                    // Sort
    { $limit: 5 }                                // Limit
]).toArray();
\`\`\`

## Common Stages

| Stage | Fungsi | SQL Equivalent |
|-------|--------|---------------|
| **$match** | Filter documents | WHERE |
| **$group** | Group by field | GROUP BY |
| **$sort** | Sort results | ORDER BY |
| **$limit** | Limit results | LIMIT |
| **$skip** | Skip results | OFFSET |
| **$project** | Select/transform fields | SELECT |
| **$lookup** | Join collections | JOIN |
| **$unwind** | Deconstruct array | UNNEST |
| **$addFields** | Add new fields | - |
| **$count** | Count documents | COUNT |

## Examples

### Group & Count
\`\`\`javascript
// Count users per city
await users.aggregate([
    { $group: { _id: '$city', count: { $sum: 1 } } },
    { $sort: { count: -1 } }
]).toArray();
// [{ _id: 'Jakarta', count: 150 }, { _id: 'Bandung', count: 80 }]
\`\`\`

### Average & Sum
\`\`\`javascript
await orders.aggregate([
    { $group: {
        _id: '$customerId',
        totalSpent: { $sum: '$amount' },
        avgOrder: { $avg: '$amount' },
        orderCount: { $sum: 1 }
    }}
]).toArray();
\`\`\`

### Lookup (JOIN)
\`\`\`javascript
await orders.aggregate([
    { $lookup: {
        from: 'users',
        localField: 'userId',
        foreignField: '_id',
        as: 'user'
    }},
    { $unwind: '$user' },
    { $project: {
        'orderId': 1,
        'amount': 1,
        'user.name': 1,
        'user.email': 1
    }}
]).toArray();
\`\`\`

### Unwind Array
\`\`\`javascript
// Expand array items jadi documents sendiri
await users.aggregate([
    { $unwind: '$hobbies' },
    { $group: { _id: '$hobbies', count: { $sum: 1 } } }
]).toArray();
// [{ _id: 'coding', count: 3 }, { _id: 'reading', count: 2 }]
\`\`\`

### Faceted Search
\`\`\`javascript
await products.aggregate([
    { $facet: {
        categories: [{ $group: { _id: '$category', count: { $sum: 1 } } }],
        priceRange: [{
            $group: {
                _id: null,
                min: { $min: '$price' },
                max: { $max: '$price' },
                avg: { $avg: '$price' }
            }
        }]
    }}
]).toArray();
\`\`\`
  `,

  quiz: [
    { question: "$match?", options: ["Group", "Filter (WHERE)", "Join", "Sort"], correctAnswer: 1 },
    { question: "$lookup?", options: ["Filter", "JOIN collection", "Group", "Sort"], correctAnswer: 1 },
    { question: "$unwind?", options: ["Group", "Expand array to documents", "Filter", "Join"], correctAnswer: 1 }
  ],

  codeExamples: []
};
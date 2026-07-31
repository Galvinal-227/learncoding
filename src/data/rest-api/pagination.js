export const chapter = {
  slug: "pagination",
  title: "Pagination & Filtering",
  description: "Mengimplementasikan pagination, filtering, dan sorting pada REST API.",
  icon: "SiApachekafka",
  color: "#231F20",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["rest-api-introduction"],
  tags: ["pagination", "filtering", "sorting", "performance"],
  order: 6,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Mengapa Pagination?

1. **Performance** - Mengurangi load data
2. **User Experience** - Loading lebih cepat
3. **Resource Management** - Menghemat bandwidth
4. **Database Performance** - Query lebih efisien

## Metode Pagination

### 1. Offset/Limit (Page-based)

\`\`\`http
GET /api/users?page=2&limit=10
GET /api/users?offset=20&limit=10
\`\`\`

\`\`\`javascript
// Implementation
const page = parseInt(req.query.page) || 1;
const limit = parseInt(req.query.limit) || 10;
const offset = (page - 1) * limit;

const users = await User.find()
    .skip(offset)
    .limit(limit);

const total = await User.countDocuments();

const response = {
    data: users,
    pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
        hasNext: page < Math.ceil(total / limit),
        hasPrevious: page > 1
    }
};
\`\`\`

### 2. Cursor-based

\`\`\`http
GET /api/users?cursor=abc123&limit=10
GET /api/users?after=123456&limit=10
\`\`\`

\`\`\`javascript
// Implementation
const cursor = req.query.cursor;
const limit = parseInt(req.query.limit) || 10;

let query = {};
if (cursor) {
    const decoded = Buffer.from(cursor, 'base64').toString();
    const lastId = JSON.parse(decoded).id;
    query = { _id: { $gt: lastId } };
}

const users = await User.find(query)
    .limit(limit + 1);

const hasNext = users.length > limit;
if (hasNext) {
    users.pop(); // Remove extra item
}

const nextCursor = hasNext ? 
    Buffer.from(JSON.stringify({ id: users[users.length - 1]._id })).toString('base64') :
    null;

const response = {
    data: users,
    pagination: {
        limit,
        hasNext,
        nextCursor
    }
};
\`\`\`

## Filtering

\`\`\`http
GET /api/users?status=active&role=admin&age=25
GET /api/products?minPrice=10&maxPrice=100&category=electronics
\`\`\`

\`\`\`javascript
// Filtering implementation
const buildFilters = (query) => {
    const filters = {};
    
    // Exact match
    if (query.status) filters.status = query.status;
    if (query.role) filters.role = query.role;
    
    // Range
    if (query.minPrice || query.maxPrice) {
        filters.price = {};
        if (query.minPrice) filters.price.$gte = parseFloat(query.minPrice);
        if (query.maxPrice) filters.price.$lte = parseFloat(query.maxPrice);
    }
    
    // Text search
    if (query.search) {
        filters.$or = [
            { name: { $regex: query.search, $options: 'i' } },
            { description: { $regex: query.search, $options: 'i' } }
        ];
    }
    
    return filters;
};
\`\`\`

## Sorting

\`\`\`http
GET /api/users?sort=name:asc
GET /api/users?sort=createdAt:desc
GET /api/users?sort=name:asc,age:desc
\`\`\`

\`\`\`javascript
// Sorting implementation
const buildSort = (sortParam) => {
    if (!sortParam) return { createdAt: -1 };
    
    const sort = {};
    const fields = sortParam.split(',');
    
    fields.forEach(field => {
        const [key, order] = field.split(':');
        sort[key] = order === 'desc' ? -1 : 1;
    });
    
    return sort;
};

const sort = buildSort(req.query.sort);
const users = await User.find(filters)
    .sort(sort)
    .skip(offset)
    .limit(limit);
\`\`\`

## Response Format

\`\`\`json
{
    "data": [...],
    "pagination": {
        "page": 1,
        "limit": 10,
        "total": 100,
        "totalPages": 10,
        "hasNext": true,
        "hasPrevious": false
    },
    "links": {
        "self": "/api/users?page=1&limit=10",
        "next": "/api/users?page=2&limit=10",
        "prev": "/api/users?page=0&limit=10",
        "first": "/api/users?page=0&limit=10",
        "last": "/api/users?page=9&limit=10"
    }
}
\`\`\`

## Best Practices

1. Default limit = 10-20 items
2. Max limit untuk mencegah abuse (100-1000)
3. Gunakan cursor untuk data real-time
4. Index database untuk performa
5. Include total count (tapi hati-hati performa)
6. Sediakan links untuk navigasi
7. Dokumentasikan parameter
  `,
  quiz: [
    {
      question: "Parameter untuk pagination adalah?",
      options: ["page & limit", "start & end", "from & to", "skip & take"],
      correctAnswer: 0
    },
    {
      question: "Keuntungan cursor-based pagination adalah?",
      options: [
        "Lebih mudah",
        "Lebih performa untuk real-time data",
        "Mendukung semua database",
        "Lebih sederhana"
      ],
      correctAnswer: 1
    },
    {
      question: "Sorting desc pada parameter sort=createdAt:desc berarti?",
      options: [
        "Terlama ke terbaru",
        "Terbaru ke terlama",
        "Abjad A-Z",
        "Abjad Z-A"
      ],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete Pagination System",
      code: `// pagination.js - Complete pagination utility
const paginate = async (model, query = {}, options = {}) => {
    const {
        page = 1,
        limit = 10,
        sort = { createdAt: -1 },
        select = '',
        populate = [],
        maxLimit = 100
    } = options;

    // Validate and sanitize
    const sanitizedLimit = Math.min(parseInt(limit), maxLimit);
    const sanitizedPage = Math.max(1, parseInt(page));
    const skip = (sanitizedPage - 1) * sanitizedLimit;

    // Execute queries
    const [data, total] = await Promise.all([
        model.find(query)
            .select(select)
            .sort(sort)
            .skip(skip)
            .limit(sanitizedLimit)
            .populate(populate)
            .lean(),
        model.countDocuments(query)
    ]);

    const totalPages = Math.ceil(total / sanitizedLimit);
    const hasNext = sanitizedPage < totalPages;
    const hasPrevious = sanitizedPage > 1;

    // Build links
    const baseUrl = options.baseUrl || '';
    const links = {
        self: \`\${baseUrl}?page=\${sanitizedPage}&limit=\${sanitizedLimit}\`,
        first: \`\${baseUrl}?page=1&limit=\${sanitizedLimit}\`,
        last: \`\${baseUrl}?page=\${totalPages}&limit=\${sanitizedLimit}\`
    };

    if (hasNext) {
        links.next = \`\${baseUrl}?page=\${sanitizedPage + 1}&limit=\${sanitizedLimit}\`;
    }
    if (hasPrevious) {
        links.prev = \`\${baseUrl}?page=\${sanitizedPage - 1}&limit=\${sanitizedLimit}\`;
    }

    return {
        data,
        pagination: {
            page: sanitizedPage,
            limit: sanitizedLimit,
            total,
            totalPages,
            hasNext,
            hasPrevious
        },
        links
    };
};

// Usage in route
app.get('/api/users', async (req, res) => {
    try {
        // Build filters
        const filters = {};
        if (req.query.status) filters.status = req.query.status;
        if (req.query.search) {
            filters.$or = [
                { name: { $regex: req.query.search, $options: 'i' } },
                { email: { $regex: req.query.search, $options: 'i' } }
            ];
        }

        // Build sort
        const sort = {};
        if (req.query.sort) {
            const [field, order] = req.query.sort.split(':');
            sort[field] = order === 'desc' ? -1 : 1;
        } else {
            sort.createdAt = -1;
        }

        const result = await paginate(User, filters, {
            page: req.query.page,
            limit: req.query.limit,
            sort,
            select: '-password',
            populate: ['roles', 'permissions'],
            baseUrl: \`\${req.protocol}://\${req.get('host')}\${req.path}\`
        });

        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});`,
      language: "javascript"
    }
  ]
};
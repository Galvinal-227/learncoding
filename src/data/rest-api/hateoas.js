export const chapter = {
  slug: "hateoas",
  title: "HATEOAS",
  description: "Implementasi HATEOAS (Hypermedia as the Engine of Application State) dalam REST API.",
  icon: "SiHyper",
  color: "#FF6C37",
  difficulty: "Advanced",
  estimatedReadingTime: 20,
  prerequisites: ["rest-api-introduction", "rest-api-http-methods"],
  tags: ["hateoas", "hypermedia", "rest", "api-design", "links"],
  order: 8,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu HATEOAS?

HATEOAS (Hypermedia as the Engine of Application State) adalah prinsip REST dimana client berinteraksi dengan API melalui hypermedia links yang disediakan oleh server.

## Mengapa HATEOAS?

1. **Discoverability** - Client bisa menemukan actions
2. **Decoupling** - Client tidak perlu hardcode URLs
3. **State Machine** - Server mengontrol state transitions
4. **Self-documenting** - API bisa menjelaskan dirinya sendiri

## HATEOAS Response

### Basic Response
\`\`\`json
{
    "data": {
        "id": 123,
        "name": "John Doe",
        "email": "john@example.com"
    },
    "links": {
        "self": "/api/users/123",
        "update": "/api/users/123",
        "delete": "/api/users/123",
        "orders": "/api/users/123/orders"
    }
}
\`\`\`

### Collection Response
\`\`\`json
{
    "data": [...],
    "links": {
        "self": "/api/users?page=1",
        "next": "/api/users?page=2",
        "prev": "/api/users?page=0",
        "first": "/api/users?page=0",
        "last": "/api/users?page=9"
    }
}
\`\`\`

### Action Links
\`\`\`json
{
    "data": {
        "id": 123,
        "status": "pending"
    },
    "links": {
        "self": "/api/orders/123",
        "approve": {
            "href": "/api/orders/123/approve",
            "method": "POST"
        },
        "cancel": {
            "href": "/api/orders/123/cancel",
            "method": "POST"
        }
    }
}
\`\`\`

## Implementation

### Link Builder Utility
\`\`\`javascript
class LinkBuilder {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    
    self(path) {
        return {
            href: \`\${this.baseUrl}\${path}\`,
            rel: 'self'
        };
    }
    
    link(href, rel, method = 'GET', title = null) {
        const link = { href, rel };
        if (method !== 'GET') link.method = method;
        if (title) link.title = title;
        return link;
    }
    
    collectionLinks(path, page, limit, total) {
        const base = \`\${this.baseUrl}\${path}\`;
        const totalPages = Math.ceil(total / limit);
        
        const links = {
            self: \`\${base}?page=\${page}&limit=\${limit}\`,
            first: \`\${base}?page=1&limit=\${limit}\`,
            last: \`\${base}?page=\${totalPages}&limit=\${limit}\`
        };
        
        if (page < totalPages) {
            links.next = \`\${base}?page=\${page + 1}&limit=\${limit}\`;
        }
        if (page > 1) {
            links.prev = \`\${base}?page=\${page - 1}&limit=\${limit}\`;
        }
        
        return links;
    }
}
\`\`\`

### Resource Response Helper
\`\`\`javascript
class ResourceResponse {
    constructor(data, links = {}) {
        this.data = data;
        this.links = links;
        this._links = links;
    }
    
    addLink(rel, href, method = 'GET', title = null) {
        this.links[rel] = { href, method, title };
        return this;
    }
    
    addSelf(href) {
        return this.addLink('self', href);
    }
    
    toJSON() {
        return {
            data: this.data,
            links: this.links,
            _links: this.links
        };
    }
}
\`\`\`

### Implementation Example
\`\`\`javascript
// User controller with HATEOAS
const getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    const baseUrl = \`\${req.protocol}://\${req.get('host')}\${req.baseUrl}\`;
    
    const response = new ResourceResponse(user)
        .addSelf(\`\${baseUrl}/users/\${user.id}\`)
        .addLink('update', \`\${baseUrl}/users/\${user.id}\`, 'PUT')
        .addLink('delete', \`\${baseUrl}/users/\${user.id}\`, 'DELETE')
        .addLink('orders', \`\${baseUrl}/users/\${user.id}/orders\`, 'GET', 'User Orders');
    
    if (user.status === 'pending') {
        response.addLink('approve', \`\${baseUrl}/users/\${user.id}/approve\`, 'POST');
    }
    
    res.json(response);
};

// Collection with pagination
const getUsers = async (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const offset = (page - 1) * limit;
    
    const [users, total] = await Promise.all([
        User.find().skip(offset).limit(limit),
        User.countDocuments()
    ]);
    
    const baseUrl = \`\${req.protocol}://\${req.get('host')}\${req.path}\`;
    const linkBuilder = new LinkBuilder(baseUrl);
    const links = linkBuilder.collectionLinks('/users', page, limit, total);
    
    // Add action links to each user
    const data = users.map(user => ({
        ...user.toObject(),
        _links: {
            self: \`\${baseUrl}/users/\${user.id}\`,
            update: { href: \`\${baseUrl}/users/\${user.id}\`, method: 'PUT' },
            delete: { href: \`\${baseUrl}/users/\${user.id}\`, method: 'DELETE' }
        }
    }));
    
    res.json({ data, links });
};
\`\`\`

## Link Relations (IANA)

| Rel | Deskripsi |
|-----|-----------|
| self | Resource itu sendiri |
| next | Halaman berikutnya |
| prev | Halaman sebelumnya |
| first | Halaman pertama |
| last | Halaman terakhir |
| collection | Koleksi resource |
| item | Item dalam koleksi |
| up | Parent resource |
| edit | Edit resource |
| delete | Delete resource |
| create | Create resource |

## Best Practices

1. Always include self link
2. Include action links based on state
3. Use meaningful link relations
4. Document all link relations
5. Use standard IANA relations when possible
6. Include method and content-type in links
7. Don't overdo it - balance between discoverability and payload size
  `,
  quiz: [
    {
      question: "Apa kepanjangan HATEOAS?",
      options: [
        "Hypermedia as the Engine of Application State",
        "Hypermedia Application Transfer Engine",
        "HTTP Application Transfer Engine",
        "Hypertext Application Transfer Engine"
      ],
      correctAnswer: 0
    },
    {
      question: "Manfaat HATEOAS adalah?",
      options: [
        "Membuat API lebih cepat",
        "Client bisa discover actions",
        "Mengurangi bandwidth",
        "Lebih aman"
      ],
      correctAnswer: 1
    },
    {
      question: "Link relation 'self' menunjukkan?",
      options: [
        "Resource itu sendiri",
        "Halaman berikutnya",
        "Halaman sebelumnya",
        "Parent resource"
      ],
      correctAnswer: 0
    }
  ],
  codeExamples: [
    {
      title: "Complete HATEOAS Implementation",
      code: `// hateoas.js - Complete HATEOAS library

class HypermediaResponse {
    constructor(data, options = {}) {
        this.data = data;
        this._links = options.links || {};
        this._embedded = options.embedded || {};
        this.meta = options.meta || {};
    }
    
    // Add link
    link(rel, href, method = 'GET', templated = false, title = null) {
        const link = { href };
        if (method !== 'GET') link.method = method;
        if (templated) link.templated = true;
        if (title) link.title = title;
        this._links[rel] = link;
        return this;
    }
    
    // Add embedded resource
    embedded(rel, data) {
        this._embedded[rel] = data;
        return this;
    }
    
    // Add pagination links
    paginate(path, page, limit, total, baseUrl) {
        const totalPages = Math.ceil(total / limit);
        
        this.link('self', \`\${baseUrl}\${path}?page=\${page}&limit=\${limit}\`);
        this.link('first', \`\${baseUrl}\${path}?page=1&limit=\${limit}\`);
        this.link('last', \`\${baseUrl}\${path}?page=\${totalPages}&limit=\${limit}\`);
        
        if (page < totalPages) {
            this.link('next', \`\${baseUrl}\${path}?page=\${page + 1}&limit=\${limit}\`);
        }
        if (page > 1) {
            this.link('prev', \`\${baseUrl}\${path}?page=\${page - 1}&limit=\${limit}\`);
        }
        
        return this;
    }
    
    toJSON() {
        return {
            data: this.data,
            _links: this._links,
            _embedded: this._embedded,
            meta: this.meta
        };
    }
}

// User resource with HATEOAS
const userResource = (user, req) => {
    const baseUrl = \`\${req.protocol}://\${req.get('host')}\`;
    const resource = new HypermediaResponse(user, { meta: { type: 'user' } });
    
    // Self link
    resource.link('self', \`\${baseUrl}/api/users/\${user.id}\`);
    
    // Collection link
    resource.link('collection', \`\${baseUrl}/api/users\`);
    
    // Actions based on state
    if (user.canEdit) {
        resource.link('edit', \`\${baseUrl}/api/users/\${user.id}\`, 'PUT');
    }
    
    if (user.canDelete) {
        resource.link('delete', \`\${baseUrl}/api/users/\${user.id}\`, 'DELETE');
    }
    
    if (user.status === 'active') {
        resource.link('deactivate', \`\${baseUrl}/api/users/\${user.id}/deactivate\`, 'POST');
    } else if (user.status === 'inactive') {
        resource.link('activate', \`\${baseUrl}/api/users/\${user.id}/activate\`, 'POST');
    }
    
    // Related resources
    resource.link('orders', \`\${baseUrl}/api/users/\${user.id}/orders\`, 'GET', false, 'User Orders');
    resource.link('profile', \`\${baseUrl}/api/users/\${user.id}/profile\`, 'GET', false, 'User Profile');
    
    // Add embedded data
    resource.embedded('roles', user.roles);
    resource.embedded('permissions', user.permissions);
    
    return resource;
};

// Collection resource
const collectionResource = (items, req, path, page, limit, total) => {
    const baseUrl = \`\${req.protocol}://\${req.get('host')}\`;
    const resource = new HypermediaResponse(items, { meta: { total, page, limit } });
    
    resource.paginate(path, page, limit, total, baseUrl);
    
    // Add create link
    resource.link('create', \`\${baseUrl}\${path}\`, 'POST');
    
    // Add search link
    resource.link('search', \`\${baseUrl}\${path}?q={query}\`, 'GET', true, 'Search');
    
    return resource;
};

// Usage in Express route
app.get('/api/users/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({
                error: 'User not found',
                _links: {
                    self: \`\${req.protocol}://\${req.get('host')}\${req.path}\`
                }
            });
        }
        
        const response = userResource(user, req);
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/users', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 10;
        const skip = (page - 1) * limit;
        
        const [users, total] = await Promise.all([
            User.find().skip(skip).limit(limit),
            User.countDocuments()
        ]);
        
        // Transform each user with links
        const items = users.map(user => userResource(user, req));
        
        const response = collectionResource(
            items, 
            req, 
            '/api/users', 
            page, 
            limit, 
            total
        );
        
        res.json(response);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});`,
      language: "javascript"
    }
  ]
};
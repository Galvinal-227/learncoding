export const chapter = {
  slug: "express-js-authentication-jwt",
  title: "Authentication dengan JWT",
  description: "Implementasi login, register, dan protected routes dengan JWT + bcrypt.",
  icon: "SiExpress",
  color: "#000000",
  difficulty: "Advanced",
  estimatedReadingTime: 25,
  prerequisites: ["express-js-rest-api-express"],
  tags: ["express", "jwt", "authentication", "bcrypt"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-29",

  content: `
## Packages

\`\`\`bash
npm install jsonwebtoken bcrypt
\`\`\`

## Auth Controller

\`\`\`javascript
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const generateToken = (user) => {
    return jwt.sign(
        { id: user._id, email: user.email, role: user.role },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRES_IN || '7d' }
    );
};

// Register
export const register = async (req, res) => {
    const { name, email, password } = req.body;
    
    // Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(409).json({ error: 'Email already registered' });
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 12);
    
    const user = await User.create({ name, email, password: hashedPassword });
    const token = generateToken(user);
    
    res.status(201).json({ user: { id: user._id, name, email }, token });
};

// Login
export const login = async (req, res) => {
    const { email, password } = req.body;
    
    const user = await User.findOne({ email }).select('+password');
    if (!user) return res.status(401).json({ error: 'Invalid credentials' });
    
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: 'Invalid credentials' });
    
    const token = generateToken(user);
    res.json({ user: { id: user._id, name: user.name, email }, token });
};
\`\`\`

## Auth Middleware

\`\`\`javascript
export const protect = async (req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1];
    
    if (!token) return res.status(401).json({ error: 'Please login' });
    
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
        next();
    } catch (error) {
        return res.status(401).json({ error: 'Invalid token' });
    }
};

export const authorize = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            return res.status(403).json({ error: 'Not authorized' });
        }
        next();
    };
};
\`\`\`

## Routes

\`\`\`javascript
router.post('/register', register);
router.post('/login', login);
router.get('/profile', protect, getProfile);
router.delete('/users/:id', protect, authorize('admin'), deleteUser);
\`\`\`
  `,

  quiz: [
    { question: "bcrypt untuk?", options: ["Encryption", "Password hashing", "JWT signing", "CORS"], correctAnswer: 1 },
    { question: "Header authorization format?", options: ["token <value>", "Bearer <token>", "JWT <token>", "Basic <token>"], correctAnswer: 1 }
  ],

  codeExamples: []
};
export const chapter = {
  slug: "enums",
  title: "Enums",
  description: "Menggunakan enums untuk mendefinisikan konstanta di TypeScript.",
  icon: "SiTypescript",
  color: "#3178C6",
  difficulty: "Intermediate",
  estimatedReadingTime: 15,
  prerequisites: ["typescript-introduction", "typescript-basic-types"],
  tags: ["typescript", "enums", "constants"],
  order: 9,
  isPublished: true,
  updatedAt: "2026-07-30",
  content: `
## Apa itu Enum?

Enum adalah cara untuk mendefinisikan kumpulan konstanta bernama.

## Numeric Enums

\`\`\`typescript
enum Direction {
    Up,     // 0
    Down,   // 1
    Left,   // 2
    Right   // 3
}

// Custom values
enum Status {
    Active = 1,
    Inactive = 0,
    Pending = 2
}

// Auto-increment
enum Colors {
    Red = 1,
    Green,  // 2
    Blue    // 3
}
\`\`\`

## String Enums

\`\`\`typescript
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

enum Status {
    Active = "active",
    Inactive = "inactive",
    Pending = "pending"
}
\`\`\`

## Heterogeneous Enums

\`\`\`typescript
enum Mixed {
    No = 0,
    Yes = "YES"
}
\`\`\`

## Const Enums

\`\`\`typescript
const enum LogLevel {
    Info = "INFO",
    Warn = "WARN",
    Error = "ERROR"
}

// Compiled to inline values
const level = LogLevel.Info; // "INFO"
\`\`\`

## Enum Usage

\`\`\`typescript
enum OrderStatus {
    Pending = "pending",
    Processing = "processing",
    Shipped = "shipped",
    Delivered = "delivered",
    Cancelled = "cancelled"
}

interface Order {
    id: number;
    status: OrderStatus;
}

function updateStatus(order: Order, status: OrderStatus): void {
    order.status = status;
}

const order: Order = {
    id: 1,
    status: OrderStatus.Pending
};

updateStatus(order, OrderStatus.Shipped);
\`\`\`

## Enum with Functions

\`\`\`typescript
enum PaymentMethod {
    CreditCard = "credit_card",
    BankTransfer = "bank_transfer",
    PayPal = "paypal"
}

function getPaymentLabel(method: PaymentMethod): string {
    switch (method) {
        case PaymentMethod.CreditCard:
            return "Credit Card";
        case PaymentMethod.BankTransfer:
            return "Bank Transfer";
        case PaymentMethod.PayPal:
            return "PayPal";
        default:
            return "Unknown";
    }
}
\`\`\`

## Best Practices

1. **Use string enums** untuk readability
2. **Use const enums** untuk performance
3. **Use PascalCase** untuk enum names
4. **Use UPPERCASE** untuk enum values
5. **Use enums** untuk related constants
6. **Use enums** untuk status/state
7. **Avoid heterogeneous enums**
8. **Use union types** as alternative
  `,
  quiz: [
    {
      question: "Keyword untuk mendefinisikan enum adalah?",
      options: ["enum", "type", "interface", "class"],
      correctAnswer: 0
    },
    {
      question: "String enum menggunakan nilai?",
      options: ["Number", "String", "Boolean", "Any"],
      correctAnswer: 1
    },
    {
      question: "Const enum di-compile menjadi?",
      options: ["Object", "Inline values", "Function", "Class"],
      correctAnswer: 1
    }
  ],
  codeExamples: [
    {
      title: "Complete Enum Examples",
      code: `// ============================================
// 1. Numeric Enums
// ============================================
// Default (0, 1, 2, ...)
enum Color {
    Red,
    Green,
    Blue
}

// Custom values
enum Status {
    Active = 1,
    Inactive = 0,
    Pending = 2
}

// Auto-increment from 10
enum Priority {
    Low = 10,
    Medium, // 11
    High,   // 12
    Critical // 13
}

// ============================================
// 2. String Enums
// ============================================
enum Direction {
    Up = "UP",
    Down = "DOWN",
    Left = "LEFT",
    Right = "RIGHT"
}

enum OrderStatus {
    Pending = "PENDING",
    Processing = "PROCESSING",
    Shipped = "SHIPPED",
    Delivered = "DELIVERED",
    Cancelled = "CANCELLED"
}

enum LogLevel {
    Info = "INFO",
    Warn = "WARN",
    Error = "ERROR",
    Debug = "DEBUG"
}

// ============================================
// 3. Heterogeneous Enums (avoid if possible)
// ============================================
enum Mixed {
    No = 0,
    Yes = "YES",
    Maybe = 2
}

// ============================================
// 4. Const Enums
// ============================================
const enum HttpStatus {
    OK = 200,
    Created = 201,
    BadRequest = 400,
    Unauthorized = 401,
    NotFound = 404,
    ServerError = 500
}

// Compiled directly (no object)
const status = HttpStatus.OK; // 200

// ============================================
// 5. Enum with Functions
// ============================================
enum UserRole {
    Admin = "ADMIN",
    User = "USER",
    Guest = "GUEST",
    Moderator = "MODERATOR"
}

function getRolePermissions(role: UserRole): string[] {
    switch (role) {
        case UserRole.Admin:
            return ["read", "write", "delete", "manage_users"];
        case UserRole.Moderator:
            return ["read", "write", "delete"];
        case UserRole.User:
            return ["read", "write"];
        case UserRole.Guest:
            return ["read"];
        default:
            return [];
    }
}

function getRoleLabel(role: UserRole): string {
    const labels: Record<UserRole, string> = {
        [UserRole.Admin]: "Administrator",
        [UserRole.Moderator]: "Moderator",
        [UserRole.User]: "Regular User",
        [UserRole.Guest]: "Guest"
    };
    return labels[role];
}

// ============================================
// 6. Enum with Interfaces
// ============================================
enum PaymentStatus {
    Pending = "pending",
    Paid = "paid",
    Failed = "failed",
    Refunded = "refunded"
}

interface Payment {
    id: number;
    amount: number;
    status: PaymentStatus;
    method: PaymentMethod;
}

enum PaymentMethod {
    CreditCard = "credit_card",
    BankTransfer = "bank_transfer",
    PayPal = "paypal",
    Crypto = "crypto"
}

function processPayment(payment: Payment): boolean {
    if (payment.status === PaymentStatus.Pending) {
        // Process payment...
        return true;
    }
    return false;
}

// ============================================
// 7. Enum with Utility Functions
// ============================================
enum Month {
    January = 1,
    February = 2,
    March = 3,
    April = 4,
    May = 5,
    June = 6,
    July = 7,
    August = 8,
    September = 9,
    October = 10,
    November = 11,
    December = 12
}

function getMonthName(month: Month): string {
    return Month[month];
}

function getMonthDays(month: Month): number {
    const days = {
        [Month.January]: 31,
        [Month.February]: 28,
        [Month.March]: 31,
        [Month.April]: 30,
        [Month.May]: 31,
        [Month.June]: 30,
        [Month.July]: 31,
        [Month.August]: 31,
        [Month.September]: 30,
        [Month.October]: 31,
        [Month.November]: 30,
        [Month.December]: 31
    };
    return days[month];
}

// ============================================
// 8. Enum vs Union Types
// ============================================
// Using enum
enum UserType {
    Admin = "admin",
    User = "user"
}

// Using union type
type UserTypeUnion = "admin" | "user";

// When to use enum:
// - Need reverse mapping
// - Need to iterate over values
// - Need clear grouping

// When to use union:
// - Simple string values
// - Less code
// - Better type inference

// ============================================
// 9. Enum with Generics
// ============================================
function getEnumValues<T extends Record<string, string | number>>(
    enumObj: T
): (string | number)[] {
    return Object.values(enumObj);
}

function getEnumKeys<T extends Record<string, string | number>>(
    enumObj: T
): string[] {
    return Object.keys(enumObj);
}

const values = getEnumValues(Direction);
const keys = getEnumKeys(Direction);

// ============================================
// 10. Real World Example
// ============================================
enum NotificationType {
    Info = "info",
    Success = "success",
    Warning = "warning",
    Error = "error"
}

interface Notification {
    id: number;
    type: NotificationType;
    message: string;
    read: boolean;
    createdAt: Date;
}

class NotificationService {
    private notifications: Notification[] = [];
    
    send(type: NotificationType, message: string): void {
        this.notifications.push({
            id: Date.now(),
            type,
            message,
            read: false,
            createdAt: new Date()
        });
    }
    
    markAsRead(id: number): void {
        const notification = this.notifications.find(n => n.id === id);
        if (notification) {
            notification.read = true;
        }
    }
    
    getUnread(): Notification[] {
        return this.notifications.filter(n => !n.read);
    }
    
    getByType(type: NotificationType): Notification[] {
        return this.notifications.filter(n => n.type === type);
    }
}

const service = new NotificationService();
service.send(NotificationType.Info, "Welcome to the app!");
service.send(NotificationType.Success, "Your account was created!");
service.send(NotificationType.Warning, "Please verify your email.");
service.send(NotificationType.Error, "Something went wrong.");`,
      language: "typescript"
    }
  ]
};
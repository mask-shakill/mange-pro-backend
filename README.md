# ManagePro - Backend

A backend project built with **Express.js**, **PostgreSQL**, **Sequelize ORM** and **TypeScript** for **ManagePro** company management software. This backend handles user authentication, task management, finance tracking, and more.

## Project Setup

### Prerequisites

Before running the project, make sure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **PostgreSQL** (for local Supabase development)
- **Sequelize ORM**

### Getting Started

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/managepro-backend.git
   cd managepro-backend
   ```

# Database Configuration 

- DB_HOST=db.your host
- DB_USER=postgres
- DB_PASSWORD=db password
- DB_NAME=postgres
- DB_PORT=5432

# JWT Configuration

- JWT_SECRET=your_strong_secret_key_here
- JWT_EXPIRES_IN=7d

# Project Folder Structure 
```bash
src/
├── config/
│   ├── database.ts
│   └── supabase.ts
├── controllers/
│   ├── authController.ts
│   ├── taskController.ts
│   ├── financeController.ts
│   └── userController.ts
├── middleware/
│   ├── auth.ts
│   └── errorHandler.ts
├── models/
│   ├── User.ts
│   ├── Task.ts
│   ├── FinancialRecord.ts
│   └── Role.ts
├── routes/
│   ├── authRoutes.ts
│   ├── taskRoutes.ts
│   ├── financeRoutes.ts
│   └── userRoutes.ts
├── services/
│   ├── authService.ts
│   ├── emailService.ts
│   └── storageService.ts
├── types/
│   └── custom.d.ts
├── utils/
│   ├── logger.ts
│   └── helpers.ts
└── server.ts
```

## 📚 API Documentation (Swagger)

We provide interactive API documentation using Swagger UI. This allows you to explore and test all endpoints directly from your browser.

### Access Swagger UI

🔗 [Swagger Documentation](http://your-domain.com/api-docs) (Replace with your actual URL)

### Remember to:
- Replace the placeholder domain with your actual URL
- Ensure your test credentials match what's in your database
- Keep the test user's permissions limited to safe operations

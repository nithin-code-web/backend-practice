# Backend Mastery — 30-Day Practice Repo

A structured, day-by-day backend learning project built with **Node.js**, **Express**, and **MongoDB**.
Each day covers one core concept — implemented from scratch, reviewed, and merged via feature branches.

---

## Tech Stack

- **Runtime**: Node.js (ESM)
- **Framework**: Express v5
- **Database**: MongoDB + Mongoose *(Week 2+)*
- **Config & Validation**: dotenv + Zod
- **Dev Tools**: Nodemon

---

## Project Structure

\\\
src/
├── config/
│   └── env.js              # Zod-validated environment config
├── controllers/
│   └── user.controller.js  # Request handlers
├── middlewares/
│   ├── apiKeyAuth.js        # API key authentication guard
│   ├── errorHandler.js      # Global error handling middleware
│   ├── logger.js            # Request logger (method, URL, status, duration)
│   └── validateBody.js      # Factory middleware for body validation
├── routes/
│   └── user.routes.js       # Express router
├── utils/
│   ├── AppError.js          # Custom error class with statusCode
│   └── asyncHandler.js      # Async wrapper — eliminates try/catch in controllers
├── app.js                   # Express app setup, middleware and route mounting
└── server.js                # Server listener and entry point
\\\

---

## Weekly Progress

### Week 1 — Backend Foundations (Completed)

| Day | Topic | Key Concepts |
|-----|-------|-------------|
| 1 | Node.js + Express Setup | ESM, express.json(), server startup |
| 2 | Project Structure | MVC separation, app.js vs server.js |
| 3 | Environment Variables | dotenv, Zod schema validation, config module |
| 4 | Routing | Route params, query params, static vs dynamic route ordering |
| 5 | Middleware | Logger, API key auth, factory middleware (validateBody) |
| 6 | REST API Design | GET, POST, PUT, PATCH, DELETE — correct status codes |
| 7 | Error Handling | AppError, asyncHandler, global error middleware |

### Week 2 — MongoDB and Mongoose *(in progress)*

| Day | Topic | Key Concepts |
|-----|-------|-------------|
| 8 | MongoDB Atlas Connection | Mongoose setup, async DB connection before server start |
| 9 | Mongoose Schemas & Models | Schema definitions, types, required, unique, timestamps, select |
| 10 | CRUD APIs | `User.find()`, `create()`, `findById()`, `findByIdAndUpdate()`, `findByIdAndDelete()` |

### Week 3 — Authentication and Security
### Week 4 — PostgreSQL and Production

---

## Getting Started

\\\ash
npm install
npm run dev   # development with hot reload
npm start     # production
\\\

Create a \.env\ file:
\\\env
PORT=5000
NODE_ENV=development
API_KEY=your_api_key_here
\\\

---

## API Endpoints

All routes are prefixed with \/api/v1\ and require the \x-api-key\ header.

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /users | Get all users |
| GET | /users/search?name= | Search users by name |
| GET | /users/:id | Get user by ID |
| POST | /users | Create a user (name, email required) |
| PUT | /users/:id | Replace a user (full update) |
| PATCH | /users/:id | Update a user (partial) |
| DELETE | /users/:id | Delete a user |

---

## Key Patterns

- **asyncHandler** — wraps async controllers so errors propagate to the global error handler automatically
- **AppError** — custom error class with statusCode for structured error responses
- **validateBody(fields)** — factory middleware that validates required fields before reaching the controller
- **Feature branch workflow** — each day developed on feat/day-N and merged via PR

---

## Learning Goal

Become confident in backend development by mastering implementation from scratch — one concept per day.

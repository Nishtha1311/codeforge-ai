# 🚀 CodeForge AI

An AI-powered coding interview preparation platform inspired by LeetCode, where users can solve coding problems, receive AI-powered assistance, and track their progress through a personalized dashboard.

## 🌐 Live Demo

Frontend: https://codeforge-ai-git-main-nishtha-vatsa-s-projects.vercel.app

Backend API: https://codeforge-ai-bva1.onrender.com

---

## ✨ Features

### 🔐 Authentication
- User Registration & Login
- JWT Authentication
- Secure HTTP-only Cookie-based Sessions
- Protected Routes

### 💻 Coding Platform
- Solve coding problems in an online code editor
- Monaco Code Editor integration
- Problem descriptions with examples and constraints
- Multiple difficulty levels
- Code submission and evaluation

### 🤖 AI Assistant
- Explain Code
- AI Hints
- Find Bugs
- AI-powered coding assistance using Groq LLM

### 📊 Dashboard
- Problems Solved
- Total Submissions
- Accepted Solutions
- Wrong Answers
- Acceptance Rate

### 📜 Submission History
- View all previous submissions
- Accepted/Wrong Answer status
- Execution statistics

### ⚡ Backend
- RESTful APIs
- MongoDB Database
- Judge0 Code Execution Integration
- Custom Evaluation Engine
- Problem Management
- Submission Tracking

---

## 🛠️ Tech Stack

### Frontend
- React.js
- Vite
- Tailwind CSS
- React Router
- Axios
- Monaco Editor
- Lucide React

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- Judge0 API
- Groq AI API

### Deployment
- Vercel (Frontend)
- Render (Backend)
- MongoDB Atlas

---

## 📂 Folder Structure

```
codeforge-ai
│
├── client
│   ├── components
│   ├── pages
│   ├── services
│   └── context
│
├── server
│   ├── controllers
│   ├── models
│   ├── routes
│   ├── services
│   ├── middleware
│   ├── utils
│   └── seeds
│
└── README.md
```

---

## 🚀 Installation

### Clone Repository

```bash
git clone https://github.com/Nishtha1311/codeforge-ai.git
```

### Install Dependencies

Frontend

```bash
cd client
npm install
```

Backend

```bash
cd server
npm install
```

---

## Environment Variables

### Backend (.env)

```env
PORT=5000

MONGODB_URI=

JWT_SECRET=

CLIENT_URL=http://localhost:5173

GROQ_API_KEY=
```

### Frontend (.env)

```env
VITE_API_URL=http://localhost:5000/api
```

---

## Run Project

Backend

```bash
npm run dev
```

Frontend

```bash
npm run dev
```

---

## Future Improvements

- Multi-language code execution
- Custom contests
- Code execution using sample test cases
- Leaderboard
- User profile
- Discussion forum
- Linked List & Binary Tree evaluator
- Company-wise interview questions

---

## Author

**Nishtha Vatsa**

GitHub:
https://github.com/Nishtha1311

LinkedIn:
https://www.linkedin.com/in/nishtha-vatsa

---

⭐ If you like this project, don't forget to star the repository.

# 💻 DevTinder

> 🚀 A full-stack MERN application that helps developers discover, connect, and network with like-minded developers through an intuitive swipe-based interface.

![React](https://img.shields.io/badge/Frontend-React-61DAFB?logo=react)
![Node.js](https://img.shields.io/badge/Backend-Node.js-339933?logo=node.js)
![Express](https://img.shields.io/badge/Framework-Express-000000?logo=express)
![MongoDB](https://img.shields.io/badge/Database-MongoDB-47A248?logo=mongodb)
![JWT](https://img.shields.io/badge/Auth-JWT-orange)
![License](https://img.shields.io/badge/License-MIT-blue)

---

# 📖 Overview

DevTinder is a modern developer networking platform where users can create professional profiles, discover other developers, send connection requests, and build meaningful professional connections.

The application provides a clean and responsive user interface powered by React and a secure backend built with Node.js, Express, MongoDB, and JWT authentication.

---

# ✨ Features

### 👤 User Authentication

- 🔐 Secure User Registration
- 🔑 Login & Logout
- 🍪 JWT Authentication using HTTP-only Cookies
- 🔒 Protected Routes
- 🔐 Password Hashing using bcrypt

---

### 👨‍💻 Developer Profiles

- Create your developer profile
- Add personal details
- Update profile information
- Upload profile photo
- Mention skills and interests

---

### 🤝 Connection System

- Browse developer profiles
- Send connection requests
- Accept or reject requests
- View sent requests
- View received requests
- Manage existing connections

---

### 📱 User Experience

- Responsive UI
- Clean Navigation
- Real-time Profile Updates
- Modern Design using Tailwind CSS

---

# 🛠 Tech Stack

## Frontend

- ⚛️ React.js
- ⚡ Vite
- 🎨 Tailwind CSS
- 🔄 React Router
- 📡 Axios

## Backend

- 🟢 Node.js
- 🚀 Express.js
- 🔐 JWT Authentication
- bcrypt
- Cookie Parser
- CORS

## Database

- 🍃 MongoDB Atlas
- Mongoose ODM

---

# 📂 Project Structure

```
devTinder
│
├── backend
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── models
│   │   ├── routes
│   │   ├── utils
│   │   └── app.js
│   │
│   ├── package.json
│   └── server.js
│
├── frontend
│   ├── src
│   │   ├── Components
│   │   ├── Pages
│   │   ├── Context
│   │   ├── Hooks
│   │   ├── Utils
│   │   └── App.jsx
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
```

---

# 🚀 Getting Started

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/MetriJainX/devTinder.git
```

```bash
cd devTinder
```

---

## 2️⃣ Install Backend Dependencies

```bash
cd backend
npm install
```

---

## 3️⃣ Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

---

# ⚙️ Environment Variables

Create a `.env` file inside the **backend** directory.

```env
PORT=3000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

# ▶️ Run Backend

```bash
cd backend
npm run dev
```

Runs on:

```
http://localhost:3000
```

---

# ▶️ Run Frontend

```bash
cd frontend
npm run dev
```

Runs on:

```
http://localhost:5173
```

---

# 🔐 Authentication Flow

- User Registration
- Login with Email & Password
- JWT Token Generation
- Secure Cookie Storage
- Protected API Routes
- Automatic Authentication Check

---

# 📡 Sample API Endpoints

### Authentication

```
POST   /api/auth/register
POST   /api/auth/login
POST   /api/auth/logout
GET    /api/auth/profile
PATCH  /api/auth/profile
```

### Connection Requests

```
POST   /api/request/send/:status/:userId
POST   /api/request/review/:status/:requestId
```

### User

```
GET    /api/user/feed
GET    /api/user/connections
GET    /api/user/requests/received
```

---

# 🌟 Highlights

✅ MERN Stack Architecture

✅ RESTful APIs

✅ JWT Authentication

✅ Secure Password Encryption

✅ MongoDB Atlas Integration

✅ Responsive Design

✅ Modular Backend Structure

✅ Clean Component-Based Frontend

---

# 📸 Screenshots

> Add screenshots of:

- 🏠 Home Page
- 🔑 Login Page
- 📝 Signup Page
- 👤 Profile Page
- 💌 Connection Requests
- 🤝 Developer Feed

---

# 🚀 Future Enhancements

- 💬 Real-time Chat
- 🔔 Notifications
- 📹 Video Calling
- 🌍 Advanced Search & Filters
- ⭐ Skill-based Recommendations
- 📱 Progressive Web App (PWA)
- ☁️ Cloud Deployment
- 📊 Profile Analytics

---

# 🤝 Contributing

Contributions are welcome!

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to your branch
5. Open a Pull Request

---

# 👨‍💻 Author

**Metri Jain**

- 💼 GitHub: https://github.com/MetriJainX
- 🌐 MERN Stack Developer

---

## ⭐ If you found this project useful, consider giving it a Star!

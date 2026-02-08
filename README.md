##  ApnazoomCall

ApnazoomCall is a modern web application for real-time video/audio communication built with React, Node.js, and Socket.IO. It supports user authentication, responsive UI with Material UI, and real-time socket events for seamless calling functionality.

## deployed links
🔗 Live Demo — Frontend: https://apnazoomcall-frontend.onrender.com/
🔗 Backend API: https://apnazoomcall-backend.onrender.com/

## 🎯 Features

🔐 Authentication (Register / Login)
📞 Real-time Video & Audio Calls
🗂️ Backend API with Express.js and MongoDB
⚡ Socket.IO communication for low-latency events
🧩 Modular routing and clean project structure
🎨 Responsive UI using Material UI (MUI)

## 🧠 Tech Stack
Layer	Technology
Frontend	React, Vite
Styling	Material UI (MUI)
Backend	Node.js, Express.js
Database	MongoDB
Realtime	Socket.IO
Deployment	Render
Other	bcrypt, JWT Auth, HTTP Status Codes

## 📦 Installation

### Clone the repository:

git clone https://github.com/<your-username>/apnazoomcall.git
cd apnazoomcall

## 📁 Backend Setup
cd backend
npm install

## Run backend:

npm start

## 📁 Frontend Setup
cd frontend
npm install

## Start frontend:

npm start


## This app should open at:

http://localhost:5173

## 📦 Build

### To build the frontend for production:

npm run dist
This bundles optimized static files into the dist/ folder ready for deployment.

## 🛠 Project Structure
/backend
  ├─ /controllers
  ├─ /models
  ├─ /routes
  ├─ middleware.js
  ├─ server.js

## /frontend
  ├─ /src
  │   ├─ /components
  │   ├─ /pages
  │   ├─ /services
  │   ├─ App.jsx
  │   ├─ main.jsx

## 📌 Key Dependencies
### Backend

express
mongoose
socket.io
jsonwebtoken
http-status-codes

### Frontend

react
react-router-dom
socket.io-client
@mui/material


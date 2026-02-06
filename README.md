# yscode

A modern web development agency website built with React and Node.js.

## 🚀 Live Demo

- **Frontend**: [https://yscode.vercel.app](https://yscode.vercel.app)
- **Backend API**: [https://yscode-api.vercel.app](https://yscode-api.vercel.app)

## 📁 Project Structure

```
yscode/
├── frontend/          # React + Vite frontend
│   ├── src/
│   │   ├── components/   # Reusable components
│   │   ├── pages/        # Page components
│   │   └── App.jsx       # Main app with routing
│   └── public/           # Static assets
└── backend/           # Express.js backend
    ├── models/           # MongoDB models
    └── server.js         # Main server file
```

## 🛠️ Tech Stack

### Frontend
- React 18
- Vite
- React Router DOM
- Framer Motion (animations)
- Lucide React (icons)

### Backend
- Node.js
- Express.js
- MongoDB + Mongoose
- Nodemailer

## 🚀 Deployment on Vercel

### Frontend Deployment

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New" → "Project"
3. Import the repository
4. Set the root directory to `frontend`
5. Framework preset will auto-detect Vite
6. Click "Deploy"

### Backend Deployment

1. Create a new project on Vercel
2. Import the same repository
3. Set the root directory to `backend`
4. Add environment variables:
   - `MONGO_URI`: Your MongoDB connection string
   - `MAIL_USER`: Your Gmail address
   - `EMAIL_PASS`: Your Gmail app password
5. Click "Deploy"

### Update Frontend API URL

After deploying the backend, update the API URL in `frontend/src/pages/ContactPage.jsx`:

```javascript
const response = await fetch('https://your-backend-url.vercel.app/api/contact', {
```

## 🔧 Local Development

### Prerequisites
- Node.js 18+
- npm or yarn
- MongoDB Atlas account (or local MongoDB)

### Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

### Backend Setup

```bash
cd backend
npm install
# Create .env file from .env.example and fill in values
npm run dev
```

## 📝 Environment Variables

### Backend (.env)
```
MONGO_URI=mongodb+srv://...
MAIL_USER=your@gmail.com
EMAIL_PASS=your-app-password
PORT=5000
```

## 📄 License

MIT License - feel free to use this project for your own purposes.

---

Built with ❤️ by yscode

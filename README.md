# 📝 MERN Stack Note Taking App

A full-stack note-taking application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring CRUD operations, rate limiting, and a responsive UI.

## ✨ Features

- **Full CRUD Operations** - Create, read, update, and delete notes with titles and descriptions
- **RESTful API** - Well-structured API following REST principles
- **Rate Limiting** - Implemented with Upstash Redis to prevent API abuse
- **Responsive Design** - Works seamlessly across desktop, tablet, and mobile devices
- **MongoDB Integration** - NoSQL database for efficient data storage
- **Modern Tech Stack** - Built with industry-standard technologies

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Tailwind CSS
- Daisy UI
- Axios
- React Router

**Backend:**
- Node.js
- Express.js
- MongoDB
- Mongoose
- Upstash Redis

## 📋 Prerequisites

Before running this project, make sure you have:

- Node.js (v14 or higher)
- MongoDB account or local MongoDB installation
- Upstash Redis account

## ⚙️ Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/mohammadfallah7/mern-think-board.git
cd mern-think-board
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:
```env
MONGO_URI=your_mongodb_connection_string
UPSTASH_REDIS_REST_URL=your_redis_rest_url
UPSTASH_REDIS_REST_TOKEN=your_redis_rest_token
PORT=3001
```

Run the backend server:
```bash
npm run start
```

The backend will run on `http://localhost:3001` (or your configured port)

### 3. Frontend Setup

Open a new terminal window:
```bash
cd frontend
npm install
```

Run the frontend:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173` (Vite default port)

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/notes` | Get all notes |
| GET | `/api/notes/:id` | Get single note |
| POST | `/api/notes` | Create new note |
| PUT | `/api/notes/:id` | Update note |
| DELETE | `/api/notes/:id` | Delete note |

## 🧪 Environment Variables

### Backend

| Variable | Description |
|----------|-------------|
| `MONGO_URI` | MongoDB connection string |
| `UPSTASH_REDIS_REST_URL` | Upstash Redis URL |
| `UPSTASH_REDIS_REST_TOKEN` | Upstash Redis token |
| `PORT` | Port (3001) |

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Mohammad Fallah**
- GitHub: [@mohammadfallah7](https://github.com/mohammadfallah7)
- LinkedIn: [Mohammad Fallah](https://linkedin.com/in/fallahmohammad)

## 🙏 Acknowledgments

- Thanks to the MERN stack community
- Upstash for Redis services
- Liara for database hosting

---

⭐ If you found this project helpful, please give it a star!

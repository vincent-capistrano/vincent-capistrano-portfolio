# Vincent Capistrano — Portfolio Website

A personal portfolio website showcasing projects, skills, and work experience. Built with a **React** frontend and a **FastAPI** backend connected to **MongoDB**.

🌐 **Live site:** [vincent-portfolio-ten.vercel.app](https://vincent-portfolio-ten.vercel.app/)

---

## Features

- Hero section with animated intro
- About, Skills, Experience, and Projects sections
- Contact form backed by a REST API
- Pixel-art-style UI components (PixelCard, PixelButton)
- Responsive layout with TailwindCSS

---

## Tech Stack

| Layer    | Technology                              |
|----------|-----------------------------------------|
| Frontend | React (CRA + CRACO), TailwindCSS, Radix UI |
| Backend  | FastAPI (Python), Motor (async MongoDB) |
| Database | MongoDB                                 |
| Hosting  | Vercel (frontend)                       |

---

## Project Structure

```
vincent-capistrano-portfolio/
├── frontend/
│   ├── src/
│   │   ├── components/        # Hero, About, Skills, Projects, Experience, Contact, etc.
│   │   ├── context/           # React context providers
│   │   ├── hooks/             # Custom hooks
│   │   ├── data/              # Static content data
│   │   └── App.js
│   ├── tailwind.config.js
│   └── package.json
├── backend/
│   ├── server.py              # FastAPI app with MongoDB integration
│   ├── requirements.txt
│   └── .env                   # MONGO_URL, DB_NAME
└── tests/
```

---

## Getting Started

### Prerequisites

- [Node.js 18+](https://nodejs.org/)
- [Python 3.10+](https://www.python.org/)
- A MongoDB instance (local or [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))

### Frontend

```bash
cd frontend
npm install
npm start
```

The app will run at `http://localhost:3000`.

### Backend

```bash
cd backend
pip install -r requirements.txt
```

Create a `.env` file in the `backend/` folder:

```env
MONGO_URL=mongodb://localhost:27017
DB_NAME=portfolio
```

Start the API:

```bash
uvicorn server:app --reload
```

The API will run at `http://localhost:8001`.

---

## Environment Variables

| Variable    | Description                        |
|-------------|------------------------------------|
| `MONGO_URL` | MongoDB connection string          |
| `DB_NAME`   | MongoDB database name              |

---

## Author

[@vincent-capistrano](https://github.com/vincent-capistrano)


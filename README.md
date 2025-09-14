# 📌 Project Management Tool

A **collaborative project management platform** to streamline task tracking, team collaboration, and project monitoring.
Designed for teams to efficiently manage projects with **workspaces, tasks, reporting, and dashboards**.

---

## 🚀 Features

* ✅ **Workspaces** – Organize projects under different workspaces
* ✅ **Projects** – Create and manage projects with metadata
* ✅ **Tasks** – Assign, update status, set due dates, and track progress
* ✅ **Watchers & Assignees** – Collaborate with team members in real time
* ✅ **Daily Progress Reports (DPR)** – Generate & track project reports
* ✅ **Dashboard** – Visualize overall progress, archived tasks, and statistics
* ✅ **Authentication & Authorization** – Secure login & user roles
* ✅ **API Integration** – REST APIs for frontend-backend communication

---

## 🛠️ Tech Stack

* **Frontend:** React, TypeScript, TailwindCSS, ShadCN/UI
* **Backend:** Node.js, Express.js, MongoDB, Mongoose
* **Authentication:** JWT / OAuth2 (configurable)
* **Dev Tools:** Vite, ESLint, Prettier
* **Others:** Docker (optional), REST API

---

## 📂 Project Structure

```
project-management-tool/
│── backend/            # Node.js + Express API
│   │── models/         # Database models (Mongoose)
│   │── routes/         # API routes
│   │── controllers/    # Business logic
│   │── middleware/     # Auth & validation
│   │── server.js       # App entry point
│
│── frontend/           # React + Vite app
│   │── src/components/ # UI components
│   │── src/pages/      # Page views
│   │── src/hooks/      # Custom React hooks
│   │── src/types/      # TypeScript types
│   │── main.tsx        # App entry point
│
│── docs/               # Documentation
│── package.json        # Dependencies
│── README.md           # Project docs
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/project-management-tool.git
cd project-management-tool
```

### 2️⃣ Backend Setup

```bash
cd backend
npm install
npm run dev
```

### 3️⃣ Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

👉 Frontend runs on: [http://localhost:5173](http://localhost:5173)
👉 Backend runs on: [http://localhost:5000](http://localhost:5000)

---

## 📊 API Endpoints

| Method | Endpoint                 | Description              |
| ------ | ------------------------ | ------------------------ |
| POST   | `/api-v1/auth/login`     | User login               |
| POST   | `/api-v1/auth/register`  | User registration        |
| GET    | `/api-v1/workspaces`     | Get all workspaces       |
| GET    | `/api-v1/projects`       | Get all projects         |
| GET    | `/api-v1/tasks/my-tasks` | Get logged-in user tasks |
| GET    | `/api-v1/tasks/archived` | Get archived tasks       |

---

## 🧪 Running Tests

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
```

---

## 🤝 Contributing

1. Fork the repo
2. Create a new branch (`feature/your-feature`)
3. Commit changes (`git commit -m 'Add new feature'`)
4. Push to branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## 📜 License

Distributed under the **MIT License**.
See `LICENSE` for more information.

---

## 🌟 Support

If you find this project useful, consider giving it a ⭐ on https://github.com/superman1408?tab=repositories!

---

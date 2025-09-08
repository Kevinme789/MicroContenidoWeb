import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home/Home";
import LessonsView from "./pages/LessonsView/LessonsView";
import LessonsAdmin from "./pages/LessonsAdmin/LessonsAdmin";
import ThemeToggle from "./components/ThemeToggle/ThemeToggle";
import LessonDetail from "./pages/LessonDetail/LessonDetail";

export default function App() {
  return (
    <Router>
      <nav
        style={{ padding: "10px", background: "#ecf0f1", marginBottom: "20px" }}
      >
        <Link to="/" style={{ marginRight: "10px" }}>
          Home
        </Link>
        <Link to="/admin">Administrar Lecciones</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lessons" element={<LessonsView />} />
        <Route path="/admin" element={<LessonsAdmin />} />
        <Route path="/lesson/:id" element={<LessonDetail />} />
      </Routes>
    </Router>
  );
}

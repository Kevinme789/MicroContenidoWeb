// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import LessonCard from "../../components/LessonCard/LessonCard";
import { getLessons } from "../../services/lessonService";
import "./Home.css";

export default function Home() {
  const [lessons, setLessons] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("Todos");
  const [selectedDifficulty, setSelectedDifficulty] = useState("Todas");
  const [categories, setCategories] = useState([]);

  const motivationalQuotes = [
    "🚀 El mejor momento para aprender a programar fue ayer. El segundo mejor es hoy.",
    "🔥 Cada bug resuelto es un paso más hacia la maestría.",
    "🎯 Pequeños avances diarios construyen grandes programadores.",
    "💡 Tu futuro se escribe con código.",
    "📚 Aprende hoy lo que te dará libertad mañana.",
  ];

  const [quote, setQuote] = useState("");

  useEffect(() => {
    getLessons()
      .then((response) => {
        const data = response.data;
        if (Array.isArray(data)) {
          setLessons(data);
          const uniqueCategories = [
            "Todos",
            ...new Set(data.map((lesson) => lesson.category || "Otros")),
          ];
          setCategories(uniqueCategories);
        }
      })
      .catch((err) => console.error("Error cargando lecciones:", err));

    setQuote(
      motivationalQuotes[Math.floor(Math.random() * motivationalQuotes.length)]
    );
  }, []);

  const filteredLessons = lessons.filter((lesson) => {
    const categoryMatch =
      selectedCategory === "Todos" || lesson.category === selectedCategory;
    const difficultyMatch =
      selectedDifficulty === "Todas" ||
      lesson.difficulty === selectedDifficulty;
    return categoryMatch && difficultyMatch;
  });

  return (
    <div className="home-container">
      {/* Hero */}
      <header className="hero">
        <h1>👋 ¡Bienvenido de nuevo!</h1>
        <p className="quote">{quote}</p>
      </header>

      {/* Stats */}
      <section className="stats">
        <div className="stat">
          <span className="icon">🔥</span>
          <h3>Racha</h3>
          <p>5 días seguidos</p>
        </div>
        <div className="stat">
          <span className="icon">⭐</span>
          <h3>Puntos</h3>
          <p>1240 XP</p>
        </div>
        <div className="stat">
          <span className="icon">🏆</span>
          <h3>Nivel</h3>
          <p>3 - Avanzado</p>
        </div>
      </section>

      {/* Filtros */}
      <section className="filters">
        <div className="categories">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`chip ${selectedCategory === cat ? "active" : ""}`}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="difficulty">
          <select
            value={selectedDifficulty}
            onChange={(e) => setSelectedDifficulty(e.target.value)}
          >
            <option value="Todas">Todas</option>
            <option value="Fácil">Fácil</option>
            <option value="Medio">Medio</option>
            <option value="Difícil">Difícil</option>
          </select>
        </div>
      </section>

      {/* Lecciones */}
      <section className="lessons">
        <h2>
          {selectedCategory === "Todos"
            ? "📚 Todas las Lecciones"
            : `📂 ${selectedCategory}`}
        </h2>
        <div className="lesson-grid">
          {filteredLessons.length > 0 ? (
            filteredLessons.map((lesson) => (
              <LessonCard key={lesson._id} lesson={lesson} />
            ))
          ) : (
            <div className="empty">
              <h3>😕 No hay lecciones</h3>
              <p>Prueba con otra categoría o dificultad.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>🚀 ¡Es hora de aprender más!</h2>
        <p>Completa una nueva lección y sigue creciendo como programador.</p>
        <button>Comenzar ahora</button>
      </section>
    </div>
  );
}

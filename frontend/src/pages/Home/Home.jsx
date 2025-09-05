// src/pages/Home.jsx
import React, { useEffect, useState } from "react";
import LessonCard from "../../components/LessonCard/LessonCard";
import { getLessons } from "../../services/lessonService";
import "./Home.css";

export default function Home() {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    getLessons()
      .then((response) => {
        console.log("Respuesta del backend:", response);
        // Axios devuelve el array de lecciones en response.data
        if (Array.isArray(response.data)) {
          setLessons(response.data);
        } else {
          setLessons([]);
        }
      })
      .catch((err) => {
        console.error("Error cargando lecciones:", err);
        setLessons([]);
      });
  }, []);

  return (
    <div className="home-container">
      {/* Cabecera con saludo */}
      <header className="home-header">
        <h1>¡Bienvenido de nuevo, Programador! 👋</h1>
        <p>Sigue aprendiendo y mantén tu racha diaria 🚀</p>
      </header>

      {/* Sección de gamificación */}
      <section className="stats-section">
        <div className="stat-card">
          <h3>🔥 Racha</h3>
          <p className="stat-value">5 días</p>
        </div>
        <div className="stat-card">
          <h3>⭐ Puntos</h3>
          <p className="stat-value">1240</p>
        </div>
        <div className="stat-card">
          <h3>🏆 Nivel</h3>
          <p className="stat-value">3</p>
        </div>
        <div className="progress-card">
          <h3>Progreso semanal</h3>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "70%" }}></div>
          </div>
          <p>7 de 10 lecciones completadas</p>
        </div>
      </section>

      {/* Sección de lecciones */}
      <section className="lessons-section">
        <h2>Tus Lecciones</h2>
        <div className="lessons-grid">
          {Array.isArray(lessons) && lessons.length > 0 ? (
            lessons.map((lesson) => (
              <LessonCard key={lesson._id} lesson={lesson} />
            ))
          ) : (
            <p className="no-lessons">No hay lecciones disponibles</p>
          )}
        </div>
      </section>
    </div>
  );
}

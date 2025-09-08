import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getLessonById } from "../../services/lessonService";
import "./LessonDetail.css";

export default function LessonDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [lesson, setLesson] = useState(null);

  useEffect(() => {
    getLessonById(id)
      .then((res) => setLesson(res.data))
      .catch((err) => console.error("Error cargando la lección:", err));
  }, [id]);

  if (!lesson) return <p className="loading">Cargando lección...</p>;

  return (
    <div className="lesson-detail">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ⬅ Volver
      </button>

      <h1>{lesson.title}</h1>
      <p className="category">
        📂 {lesson.category} | 🎯 {lesson.difficulty}
      </p>
      <p className="description">{lesson.description}</p>

      {lesson.codeExample && (
        <pre className="code-block">
          <code>{lesson.codeExample}</code>
        </pre>
      )}

      <div className="actions">
        <button className="btn-complete">✅ Marcar como completado</button>
      </div>
    </div>
  );
}

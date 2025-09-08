import React, { useEffect, useState } from "react";
import {
  getLessons,
  createLesson,
  updateLesson,
  deleteLesson,
} from "../../services/lessonService";
import LessonForm from "../../components/LessonForm/LessonForm";
import "./LessonsAdmin.css";

export default function LessonsAdmin() {
  const [lessons, setLessons] = useState([]);
  const [editingLesson, setEditingLesson] = useState(null);

  useEffect(() => {
    fetchLessons();
  }, []);

  const fetchLessons = async () => {
    const { data } = await getLessons();
    setLessons(data);
  };

  // Crear o actualizar según si hay ID
  const handleCreateOrUpdate = async (lessonData) => {
    if (lessonData.id) {
      await updateLesson(lessonData.id, lessonData);
    } else {
      await createLesson(lessonData);
    }
    setEditingLesson(null);
    fetchLessons();
  };

  const handleDelete = async (id) => {
    await deleteLesson(id);
    setEditingLesson(null);
    fetchLessons();
  };

  return (
    <div className="lessons-admin">
      <h2>Administrar Lecciones</h2>

      <div className="lesson-form-container">
        {!editingLesson ? (
          <LessonForm onSubmit={handleCreateOrUpdate} />
        ) : (
          <LessonForm
            initialData={editingLesson}
            onSubmit={handleCreateOrUpdate}
            onDelete={handleDelete}
          />
        )}
      </div>

      <div className="lesson-list">
        {lessons.map((l) => (
          <div key={l._id} className="lesson-item">
            <h3>{l.title}</h3>
            <p>
              <strong>Categoría:</strong> {l.category}
            </p>
            <p>
              <strong>Dificultad:</strong> {l.difficulty}
            </p>
            <p>{l.description}</p>
            {l.codeExample && <pre>{l.codeExample}</pre>}

            <div className="lesson-item-buttons">
              <button className="edit-btn" onClick={() => setEditingLesson(l)}>
                Editar
              </button>
              <button
                className="delete-btn"
                onClick={() => handleDelete(l._id)}
              >
                Eliminar
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

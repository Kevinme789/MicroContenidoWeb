import React, { useEffect, useState } from "react";
import {
  getLessons,
  createLesson,
  deleteLesson,
} from "../../services/lessonService";
import LessonCard from "../../components/LessonCard/LessonCard";
import LessonForm from "../../components/LessonForm/LessonForm";
import "./LessonsAdmin.css";

export default function LessonsAdmin() {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    fetchLessons();
  }, []);

  const fetchLessons = async () => {
    const { data } = await getLessons();
    setLessons(data);
  };

  const handleCreate = async (lesson) => {
    await createLesson(lesson);
    fetchLessons();
  };

  const handleDelete = async (id) => {
    await deleteLesson(id);
    fetchLessons();
  };

  return (
    <div className="lessons-admin">
      <h2>Administrar Lecciones</h2>
      <LessonForm onSubmit={handleCreate} />
      {lessons.map((l) => (
        <LessonCard key={l._id} lesson={l} onDelete={handleDelete} />
      ))}
    </div>
  );
}

import React, { useEffect, useState } from "react";
import { getLessons } from "../../services/lessonService";
import LessonCard from "../../components/LessonCard/LessonCard";
import "./LessonsView.css";

export default function LessonsView() {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    fetchLessons();
  }, []);

  const fetchLessons = async () => {
    const { data } = await getLessons();
    setLessons(data);
  };

  return (
    <div className="lessons-view">
      <h2>Lecciones disponibles</h2>
      {lessons.map((l) => (
        <LessonCard key={l._id} lesson={l} />
      ))}
    </div>
  );
}

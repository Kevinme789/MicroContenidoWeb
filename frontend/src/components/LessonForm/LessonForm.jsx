import React, { useState } from "react";
import "./LessonForm.css";

export default function LessonForm({ onSubmit, initialData }) {
  const [title, setTitle] = useState(initialData?.title || "");
  const [description, setDescription] = useState(
    initialData?.description || ""
  );
  const [difficulty, setDifficulty] = useState(
    initialData?.difficulty || "Fácil"
  );
  const [codeExample, setCodeExample] = useState(
    initialData?.codeExample || ""
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ title, description, difficulty, codeExample });
    setTitle("");
    setDescription("");
    setDifficulty("Fácil");
    setCodeExample("");
  };

  return (
    <form className="lesson-form" onSubmit={handleSubmit}>
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título"
        required
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Descripción"
      />
      <textarea
        value={codeExample}
        onChange={(e) => setCodeExample(e.target.value)}
        placeholder="Ejemplo de código"
      />
      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option value="Fácil">Fácil</option>
        <option value="Medio">Medio</option>
        <option value="Difícil">Difícil</option>
      </select>
      <button type="submit">Guardar</button>
    </form>
  );
}

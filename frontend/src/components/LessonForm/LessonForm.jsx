import React, { useState } from "react";
import "./LessonForm.css";

export default function LessonForm({ onSubmit, onDelete, initialData }) {
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
  const [category, setCategory] = useState(initialData?.category || "Python");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({
      id: initialData?._id, // enviar id si es actualización
      title,
      description,
      difficulty,
      codeExample,
      category,
    });

    if (!initialData) {
      // si es creación, limpiar campos
      setTitle("");
      setDescription("");
      setDifficulty("Fácil");
      setCodeExample("");
      setCategory("Python");
    }
  };

  const handleDelete = () => {
    if (initialData && onDelete) {
      onDelete(initialData._id);
    }
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
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Python">Python</option>
        <option value="Java">Java</option>
        <option value="JavaScript">JavaScript</option>
        <option value="C#">C#</option>
        <option value="Otros">Otros</option>
      </select>
      <select
        value={difficulty}
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option value="Fácil">Fácil</option>
        <option value="Medio">Medio</option>
        <option value="Difícil">Difícil</option>
      </select>

      <div className="lesson-form-buttons">
        <button type="submit">{initialData ? "Actualizar" : "Crear"}</button>
        {initialData && onDelete && (
          <button type="button" className="delete-btn" onClick={handleDelete}>
            Eliminar
          </button>
        )}
      </div>
    </form>
  );
}

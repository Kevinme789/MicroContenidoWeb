// src/components/LessonCard.jsx
import React from "react";
import "./LessonCard.css";

export default function LessonCard({ lesson }) {
  const { title, description, progress = 0 } = lesson;

  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - (progress || 0) / 100);

  return (
    <div className="lesson-card">
      <div className="lesson-card-header">
        <h3>{title}</h3>
      </div>
      <p className="lesson-description">{description}</p>

      <div className="lesson-footer">
        <button className="btn-primary">Comenzar</button>
        <div className="progress-container">
          <svg width="70" height="70" className="progress-ring">
            <circle
              className="progress-ring-bg"
              stroke="#e5e7eb"
              strokeWidth="5"
              fill="transparent"
              r={radius}
              cx="35"
              cy="35"
            />
            <circle
              className="progress-ring-fg"
              stroke="#2563eb"
              strokeWidth="5"
              fill="transparent"
              r={radius}
              cx="35"
              cy="35"
              strokeDasharray={circumference}
              strokeDashoffset={offset}
            />
          </svg>
          <span className="progress-text">{progress || 0}%</span>
        </div>
      </div>
    </div>
  );
}

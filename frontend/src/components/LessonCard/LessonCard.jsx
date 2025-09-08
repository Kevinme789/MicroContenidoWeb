import React from "react";
import { useNavigate } from "react-router-dom";
import "./LessonCard.css";

export default function LessonCard({ lesson }) {
  const { _id, title, description, progress, category, difficulty } = lesson;
  const navigate = useNavigate();

  const radius = 30;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference * (1 - (progress || 0) / 100);

  return (
    <div className="lesson-card">
      <div className="lesson-card-header">
        <h3>{title}</h3>
        <span className="badge">{category || "General"}</span>
      </div>

      <div className="lesson-footer">
        <button
          className="btn-primary"
          onClick={() => navigate(`/lesson/${_id}`)}
        >
          Comenzar
        </button>

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

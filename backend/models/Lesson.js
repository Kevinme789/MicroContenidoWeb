const mongoose = require("mongoose");

const lessonSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  codeExample: String, // ejemplo de código
  difficulty: {
    type: String,
    enum: ["Fácil", "Medio", "Difícil"],
    default: "Fácil",
  },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Lesson", lessonSchema);

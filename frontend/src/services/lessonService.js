import axios from "axios";

const API = "http://localhost:5000/api/lessons";

export const getLessons = () => axios.get(API);
export const createLesson = (lesson) => axios.post(API, lesson);
export const updateLesson = (id, lesson) => axios.put(`${API}/${id}`, lesson);
export const deleteLesson = (id) => axios.delete(`${API}/${id}`);

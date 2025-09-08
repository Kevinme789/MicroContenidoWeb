# MicroContenido

Este proyecto permite **crear, editar, eliminar y listar lecciones** con categorías, dificultad y ejemplo de código. Está desarrollado con **React** para el frontend y un **servicio API REST** (Node.js/Express) para el backend.

---

## Requisitos

- Node.js >= 18
- npm
- MongoDB

---

## Instalación y ejecución local

### 1. Clonar el repositorio

```bash
git clone https://github.com/Kevinme789/MicroContenidoWeb.git
cd microcontenidoweb
```

### 2. Instalar dependencias del backend

```bash
cd backend
npm install
```

### 3. Ejecutar el backend

```bash
npm run dev
```

> La API estará disponible en `http://localhost:5000/api/lessons`.

### 4. Instalar dependencias del frontend

```bash
cd ../frontend
npm install
```

### 5. Configurar la URL de la API

En `frontend/src/services/lessonService.js`:

```javascript
const API = "http://localhost:5000/api/lessons";
```

### 6. Ejecutar el frontend

```bash
npm start
```

> La aplicación abrirá en `http://localhost:3000`.

---

## Estructura del proyecto

```
Microcontenidos/
├── .gitignore
├── backend/
│   ├── config/
│   │   ├── db.js
│   ├── controllers/
│   │   ├── lessonsController.js
│   ├── models/
│   │   ├── Lesson.js
│   ├── package-lock.json
│   ├── package.json
│   ├── routes/
│   │   ├── lessons.js
│   ├── scriptBD.js
│   ├── server.js
├── frontend/
│   ├── package-lock.json
│   ├── package.json
│   ├── public/
│   │   ├── index.html
│   │   ├── manifest.json
│   │   ├── robots.txt
│   ├── README.md
│   ├── src/
│   │   ├── App.jsx
│   │   ├── components/
│   │   │   ├── LessonCard/
│   │   │   │   ├── LessonCard.css
│   │   │   │   ├── LessonCard.jsx
│   │   │   ├── LessonForm/
│   │   │   │   ├── LessonForm.css
│   │   │   │   ├── LessonForm.jsx
│   │   │   ├── ThemeToggle/
│   │   │   │   ├── ThemeToggle.js
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── pages/
│   │   │   ├── Home/
│   │   │   │   ├── Home.css
│   │   │   │   ├── Home.jsx
│   │   │   ├── LessonDetail/
│   │   │   │   ├── LessonDetail.css
│   │   │   │   ├── LessonDetail.jsx
│   │   │   ├── LessonsAdmin/
│   │   │   │   ├── LessonsAdmin.css
│   │   │   │   ├── LessonsAdmin.jsx
│   │   │   ├── LessonsView/
│   │   │   │   ├── LessonsView.css
│   │   │   │   ├── LessonsView.jsx
│   │   ├── services/
│   │   │   ├── lessonService.js
├── README.md

```

---

## Funcionalidades

- Crear nuevas lecciones con título, descripción, categoría, dificultad y ejemplo de código.
- Editar lecciones existentes.
- Eliminar lecciones.
- Listado de lecciones en tarjetas visuales con estilo moderno.

---

## Tecnologías utilizadas

- React.js (Frontend)
- Node.js + Express (Backend API REST)
- MongoDB (Base de datos)
- Axios (Comunicación frontend-backend)
- CSS personalizado para diseño claro y moderno

---

## Notas

- Asegúrate de tener MongoDB corriendo antes de iniciar el backend.
- El frontend debe apuntar a la misma URL de la API definida en `lessonService.js`.
- Puedes modificar los estilos en `LessonsAdmin.css` y `LessonForm.css` para personalizar la apariencia.

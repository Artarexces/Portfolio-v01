# Portfolio Personal

Un portafolio personal de una sola página construido con React + Vite y estilizado con CSS puro.  
Muestra mis habilidades, proyectos y datos de contacto, con modo oscuro/Claro y animaciones suaves.

---

## 🚀 Demo


---

## 📋 Índice


1. [Características](#-características)  
2. [Tecnologías](#-tecnologías)  
3. [Estructura de carpetas (Front)](#-estructura-de-carpetas-front)  
4. [Instalación y uso (Front)](#-instalación-y-uso-front)  
5. [Scripts disponibles (Front)](#-scripts-disponibles-front)  
6. [Servidor (Back-end)](#-servidor-back-end)  
   - [Tecnologías Back-end](#tecnologías-back-end)  
   - [Arquitectura del servidor](#arquitectura-del-servidor)  
   - [Scripts del servidor](#scripts-del-servidor)  
7. [Contribuciones](#-contribuciones)  

---

## ✨ Características

- **Navbar responsiva**  
  - Enlaces que hacen scroll suave a las secciones: Home, Skills, Projects, Contact.  
  - Menú colapsable en pantallas pequeñas.

- **Header animado**  
  - Texto “Hola, soy Martín” con efecto de máquina de escribir alternando “Front-end”, “Back-end”, “Full-stack”.

- **Modo oscuro/Claro**  
  - Tema persistente con `useState` + `useEffect`.  
  - Íconos de luna y sol que cambian al alternar.

- **Sección de Skills**  
  - Listas categorizadas (Frontend, Backend, Herramientas) con íconos Devicon.  
  - “En progreso” para tecnologías en aprendizaje (ej. Ethical Hacking).

- **Galería de Proyectos**  
  - Tarjetas con título, descripción y badges de tecnologías.  
  - Animaciones de hover/desvanecido.  
  - Enlaces a repositorios de GitHub y demos en vivo.

- **Sección de Contacto**  
  - Botón “Copiar email” que guarda tu dirección en el portapapeles.  
  - Íconos sociales (LinkedIn, GitHub, email) con enlaces.

- **Footer sencillo**  
  - Nombre y enlaces a redes sociales.

---

## 🛠️ Tecnologías

**Front-end**  
- React (Vite)  
- JavaScript (ES6+)  
- CSS puro  
- Devicon, FontAwesome  
- Vite, ESLint  

**Back-end**  
- Node.js  
- TypeScript  
- Express  
- MongoDB  
- Mongoose  
- CORS  

---

## 📂 Estructura de carpetas
Portfolio-v01/   
│  
├── src/  
│ ├── assets/   
│ ├── components/  
│ │ ├── Header.jsx  
│ │ ├── Navbar.jsx  
│ │ ├── Skills.jsx  
│ │ ├── Projects.jsx  
│ │ ├── Contact.jsx  
│ │ ├── Footer.jsx  
│ │ └── DarkModeToggle.jsx  
│ ├── styles/   
│ ├── App.jsx  
│ └── main.jsx  
├── index.html  
├── .gitignore  
├── package.json  
├── vite.config.js  
└── README.md  

---

## 📥 Instalación y uso (Front)

1. **Clona el repositorio**  
   ```bash
   git clone https://github.com/Artarexces/Portfolio-v01.git
   cd Portfolio-v01


2. **Instala dependencias**  
   ```bash
   npm install


3. **Ejecuta en desarrollo**  
   ```bash
   npm run dev
   Abre en http://localhost:4000 por defecto.

4. **Genera build de producción**  
   ```bash
   npm run build

---

## 📜 Scripts disponibles

- `npm run dev` – Ejecuta el servidor de desarrollo
- `npm run build` – Crea la versión de producción
- `npm run preview` – Previsualiza el build

---

## 🖥️ Servidor (Back-end)

> ⚠️ **Nota:** El front-end aún está en construcción y pronto se conectará a esta API.

### Tecnologías Back-end

- Node.js  
- TypeScript  
- Express  
- MongoDB  
- Mongoose  
- CORS  

## 📂 Estructura de carpetas

server/  
├── dist/            
├── node_modules/  
├── src/  
│   ├── config/  
│   │   └── mongo.config.ts       
│   ├── model/  
│   │   └── user.model.ts        
│   ├── routes/  
│   │   └── user.routes.ts      
│   └── index.ts     
├── .env  
├── package.json  
├── package-lock.json  
└── tsconfig.json  

---

## Scripts del servidor

- `npm run dev` – Ejecuta el servidor en modo desarrollo (con nodemon)  
- `npm run build` – Compila TypeScript y genera JS en la carpeta `dist/`  
- `npm run start` – Ejecuta el servidor en producción desde `dist/index.js`  

---


## 🤝 Contribuciones

¡Bienvenidas las contribuciones!

1. Haz un fork (https://github.com/Artarexces/Portfolio-v01/fork)  
2. Crea tu branch (`git checkout -b feature/MiFeature`)  
3. Haz commit de tus cambios (`git commit -m 'Agrega mi feature'`)  
4. Sube tu branch (`git push origin feature/MiFeature`)  
5. Abre un Pull Request  

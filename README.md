# FarmaNova - Plataforma de Clasificación Médica con IA

Proyecto completo de FarmaNova que incluye backend en Node.js/Express y frontend en React para la clasificación automática de solicitudes médicas.

## 📋 Descripción

FarmaNova es una plataforma médica que recibe solicitudes de pacientes y las clasifica automáticamente usando IA. Este proyecto implementa la User Story US02 – Clasificar solicitud automáticamente.

## 🏗️ Estructura del Proyecto

```
Hito 1/
├── server.js              # Backend Express (Node.js)
├── frontend/              # Frontend React con Vite
│   ├── src/
│   │   ├── App.jsx       # Componente principal
│   │   ├── App.css       # Estilos del componente
│   │   ├── main.jsx      # Punto de entrada
│   │   └── index.css     # Estilos globales
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
└── README.md
```

## 🚀 Instalación y Ejecución

### Prerrequisitos

- Node.js (v14 o superior)
- npm

### Backend

1. Instala las dependencias (si no están instaladas):
```bash
cd "Hito 1"
npm install express cors
```

2. Inicia el servidor:
```bash
node server.js
```

El backend estará disponible en: `http://localhost:4000`

### Frontend

1. Navega al directorio del frontend:
```bash
cd "Hito 1/frontend"
```

2. Instala las dependencias (si no están instaladas):
```bash
npm install
```

3. Inicia el servidor de desarrollo:
```bash
npm run dev
```

El frontend estará disponible en: `http://localhost:5173`

## 🔌 API Endpoints

### POST /api/classify

Clasifica una solicitud médica.

**Request:**
```json
{
  "descripcion": "Descripción de los síntomas del paciente"
}
```

**Response:**
```json
{
  "especialidad": "Medicina General",
  "urgencia": "Media",
  "confianza": 0.87,
  "mensaje": "Solicitud analizada: ..."
}
```

## 📦 Tecnologías Utilizadas

### Backend
- Node.js
- Express
- CORS

### Frontend
- React
- Vite
- Axios
- CSS3

## 🧪 Pruebas

1. Asegúrate de que el backend esté corriendo en el puerto 4000
2. Inicia el frontend en el puerto 5173
3. Abre `http://localhost:5173` en tu navegador
4. Ingresa una descripción médica y haz clic en "Clasificar solicitud"
5. Verifica que los resultados se muestren correctamente

## 📝 Características

- ✅ Backend REST API con Express
- ✅ Frontend React con Vite
- ✅ Clasificación automática de solicitudes médicas
- ✅ Interfaz de usuario moderna y responsiva
- ✅ Manejo de errores y estados de carga
- ✅ CORS configurado para comunicación entre frontend y backend

## 📄 Licencia

Este proyecto es parte de un trabajo académico.

## 👥 Autor

Proyecto desarrollado para el curso de IA para negocios digitales.


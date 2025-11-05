# FarmaNova - Frontend React

Frontend en React para la plataforma FarmaNova que permite clasificar solicitudes médicas automáticamente usando IA.

## 🚀 Características

- ✅ Interfaz de usuario moderna y responsiva
- ✅ Formulario para ingresar descripción de síntomas
- ✅ Integración con el backend mediante axios
- ✅ Manejo de estados de carga y errores
- ✅ Visualización clara de resultados (especialidad, urgencia, confianza, mensaje)

## 📋 Requisitos Previos

- Node.js (v14 o superior)
- npm o yarn
- Backend de FarmaNova corriendo en `http://localhost:4000`

## 🛠️ Instalación

Las dependencias ya están instaladas. Si necesitas reinstalarlas:

```bash
npm install
```

## ▶️ Ejecución

Para iniciar el servidor de desarrollo:

```bash
npm run dev
```

El frontend estará disponible en: `http://localhost:5173`

## 📦 Scripts Disponibles

- `npm run dev` - Inicia el servidor de desarrollo (puerto 5173)
- `npm run build` - Construye la aplicación para producción
- `npm run preview` - Previsualiza la versión de producción

## 🔗 Integración con el Backend

El frontend se conecta al endpoint:
- **POST** `http://localhost:4000/api/classify`

### Request Body:
```json
{
  "descripcion": "Descripción de los síntomas del paciente"
}
```

### Response:
```json
{
  "especialidad": "Medicina General",
  "urgencia": "Media",
  "confianza": 0.87,
  "mensaje": "Solicitud analizada: ..."
}
```

## 📝 Uso

1. Asegúrate de que el backend esté corriendo en el puerto 4000
2. Inicia el frontend con `npm run dev`
3. Abre `http://localhost:5173` en tu navegador
4. Ingresa una descripción de síntomas en el campo de texto
5. Haz clic en "Clasificar solicitud"
6. Visualiza los resultados de la clasificación

## 🎨 Características de la UI

- Diseño moderno con gradientes y sombras
- Indicadores visuales de urgencia (Alta, Media, Baja)
- Estado de carga durante la petición
- Manejo de errores con mensajes claros
- Diseño responsivo para móviles y tablets

## 📁 Estructura del Proyecto

```
frontend/
├── src/
│   ├── App.jsx          # Componente principal
│   ├── App.css          # Estilos del componente
│   ├── main.jsx         # Punto de entrada
│   └── index.css        # Estilos globales
├── index.html           # HTML principal
├── vite.config.js       # Configuración de Vite
└── package.json         # Dependencias y scripts
```

## 🐛 Solución de Problemas

**Error: "Error al conectar con el servidor"**
- Verifica que el backend esté corriendo en `http://localhost:4000`
- Revisa que el endpoint `/api/classify` esté disponible

**El frontend no carga**
- Asegúrate de estar en el directorio `frontend`
- Ejecuta `npm install` si hay problemas con las dependencias
- Verifica que el puerto 5173 no esté en uso


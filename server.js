const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 4000;

// Middleware
app.use(cors());
app.use(express.json());

// Este endpoint simula la clasificación automática de solicitudes médicas
app.post("/api/classify", (req, res) => {
  const { descripcion } = req.body;
  const resultado = {
    especialidad: "Medicina General",
    urgencia: "Media",
    confianza: 0.87,
    mensaje: `Solicitud analizada: ${descripcion}`,
  };
  res.json(resultado);
});

// Inicia el servidor
app.listen(PORT, () => {
  console.log("🚀 API FarmaNova corriendo en puerto 4000");
});
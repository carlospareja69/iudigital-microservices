const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// Middlewares globales
app.use(cors()); // Permite solicitudes externas
app.use(express.json()); // Permite recibir JSON
app.use(morgan('dev')); // Muestra logs de peticiones

//rutas
const projectRoutes = require('./modules/project/project.routes');
app.use('/projects', projectRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'API IUDigital funcionando correctamente 🚀' });
});

module.exports = app;
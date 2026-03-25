const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const app = express();

// Middlewares globales
app.use(cors()); // Permite solicitudes externas
app.use(express.json()); // Permite recibir JSON
app.use(morgan('dev')); // Muestra logs de peticiones

//rutas
const clientRoutes = require('./modules/client/client.routes');
app.use('/clients', clientRoutes);

const universityRoutes = require('./modules/university/university.routes');
app.use('/universities', universityRoutes);

const projectTypeRoutes = require('./modules/projectType/projectType.routes');
app.use('/project-types', projectTypeRoutes);

const stageRoutes = require('./modules/stage/stage.routes');
app.use('/stages', stageRoutes);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'API IUDigital funcionando correctamente 🚀' });
});

module.exports = app;
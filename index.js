const express = require('express');
const swaggerUi = require('swagger-ui-express');

const swaggerSpec = require('./docs/swagger');
const productosRoutes = require('./routes/productosRoutes');

const app = express();

app.use(express.json());

app.set('json spaces', 2);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(productosRoutes);

app.get('/', (req, res) => {
  res.json({
    mensaje: 'API funcionando correctamente'
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor corriendo en puerto ${PORT}`);
});
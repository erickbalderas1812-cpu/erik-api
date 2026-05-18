const swaggerUi = require('swagger-ui-express');

const swaggerSpec = require('./docs/swagger');

const express = require('express');

const app = express();

const productosRoutes = require('./routes/productosRoutes');

app.set('json spaces', 2);

app.use(express.json());

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

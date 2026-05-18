const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API Productos',
      version: '1.0.0',
      description: 'Documentación de mi API'
    },
    servers: [
      {
        url: 'https://erik-api.onrender.com'
      }
    ]
  },
  apis: ['./routes/*.js']
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;


const swaggerJSDoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Products API',
      version: '1.0.0',
      description: 'API documentation for Products API'
    },
    servers: [
      { url: 'http://localhost:3030' }
    ]
  },
  apis: ['./routers/productsRouter.js'], // Path to your router files with Swagger comments
};

const swaggerSpec = swaggerJSDoc(options);

module.exports = swaggerSpec;
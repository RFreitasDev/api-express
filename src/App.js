const express = require('express');
const produtosRoutes = require('./routers/productsRouter.js');
const swagger = require('swagger-ui-express');
const swaggerDocument = require('./config/swagger.js');

const app = express();
const PORT = 3030;

app.use(express.json());
app.use('/api/products', produtosRoutes);

app.use('/api-docs', swagger.serve, swagger.setup(swaggerDocument));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
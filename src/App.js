const express = require('express');
const produtosRoutes = require('./routers/productsRouter.js');

const app = express();
const PORT = 3030;

app.use(express.json());
app.use('/api/products', produtosRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`)
})
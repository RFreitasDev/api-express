const productsModel = require('../models/productsModel');

// List all products
const getProducts = (req, res) => {
    res.json(productsModel.getAll());
};

// Get a single product by ID
const getProductById = (req, res) => {
    const id = parseInt(req.params.id);
    const product = productsModel.getById(id);
    if (!product) return res.status(404).json({ message: 'Product not found' });
    res.json(product);
};

// Create a new product
const createProduct = (req, res) => {
    const { name, price } = req.body;
    const newProduct = productsModel.create({ name, price });
    res.status(201).json(newProduct);
};

// Update a product
const updateProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const { name, price } = req.body;
    const updated = productsModel.update(id, { name, price });
    if (!updated) return res.status(404).json({ message: 'Product not found' });
    res.json(updated);
};

// Delete a product
const deleteProduct = (req, res) => {
    const id = parseInt(req.params.id);
    const deleted = productsModel.remove(id);
    if (!deleted) return res.status(404).json({ message: 'Product not found' });
    res.status(204).send();
};

module.exports = {
    getProducts,
    getProductById,
    createProduct,
    updateProduct,
    deleteProduct
};
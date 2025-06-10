// Simple in-memory products model

let products = [];

const getAll = () => products;

const getById = (id) => products.find(p => p.id === id);

const create = (product) => {
    const newProduct = { id: products.length + 1, ...product };
    products.push(newProduct);
    return newProduct;
};

const update = (id, data) => {
    const product = products.find(p => p.id === id);
    if (!product) return null;
    Object.assign(product, data);
    return product;
};

const remove = (id) => {
    const index = products.findIndex(p => p.id === id);
    if (index === -1) return null;
    return products.splice(index, 1)[0];
};

module.exports = {
    getAll,
    getById,
    create,
    update,
    remove
};
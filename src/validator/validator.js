const joi = require('joi');

const productSchema = joi.object({
    name: joi.string().min(3).max(50).required(),
    price: joi.number().positive().required(),
});

const validateProduct = (req, res, next) => {
    const { error } = productSchema.validate(req.body);
    
    if (error) {
        return res.status(400).json({ message: error.details[0].message });
    }
    
    next();
}

module.exports = {
    validateProduct
};
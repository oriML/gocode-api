const productModel = require('../models/product')

const getProducts = async (req, res) => {
    let products = [];
    try {
        products = await productModel.find();
        
    } catch (error) {
        res.status(404);
    }

    return res.send(products);
}

const getProduct = async (req, res) => {
    res.send('Hi from products! 😁')
}

const createProduct = async (req, res) => {
    try {
        const product = { ...req.body };

        const dbModel = new productModel(product);

        const model = await dbModel.save();

        res.json(model);
    } catch (error) {
        console.log(error)
        res.status(500).send();
    }
    res.status(500).send();
}

const updateProduct = async (req, res) => {
    res.send('Hi from products! 😁')
}

const deleteProduct = async (req, res) => {
    res.send('Hi from products! 😁')
}

module.exports = {
    getProducts,
    getProduct,
    createProduct,
    updateProduct,
    deleteProduct,
}
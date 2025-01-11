const mongoose = require('mongoose')
const items = require('../models/productModel')

// Fetch All Data
const getAllProducts = async (req, res) => {
    const product = await items.find({})
    res.status(200).json(product)
}

// Fetch single Data
const getSingleProduct = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: 'Invalid Product ID'})
    }

    const product = await items.findById(id)
    if(!product){
        return res.status(405).json({message: `The HTTP method is not allowed for this resource`})
    }
    res.status(200).json(product)
}

// Create
const createProduct = async (req, res) => {
    const {
        productName,
        productDescription,
        productBrand,
        productCategory,
        productPrice,
        productImage
    } = req.body

    let emptyFields = [
        productName,
        productDescription,
        productBrand,
        productCategory,
        productPrice,
        productImage
    ]
    if(emptyFields.some(field => !field)) {
        return res.status(400).json({error: 'Please fill up this empty Fields', emptyFields})
    }

    try {
        // const product = await items.create({
        //     productName,
        //     productDescription,
        //     productBrand,
        //     productCategory,
        //     productPrice,
        //     productImage
        // })
        const product = await items.create({ ...req.body })
        res.status(200).json(product)

    } catch(err) {
        res.status(500).json({error: `server error: ${err.message}` })
    }
}

const deleteProduct = async (req, res) => {
    const { id } = req.params

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: `No Product Found!!!`})
    }

    const product = await items.findOneAndDelete({ _id: id})
    if(!product){
        return res.status(405).json({error: 'The HTTP method is not allowed for this resource'})
    }
}

const updateProduct = async (req, res) => {
    const { id } = req.body

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: `No Product Found!!!`})
    }

    const product = await items.findOneAndUpdate({ _id: id }, {
        ...req.body
    })
}

module.exports = {
    getAllProducts,
    getSingleProduct,
    createProduct,
    deleteProduct,
    updateProduct
}
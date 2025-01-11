const express = require('express')

const router = express.Router()

const {
    getAllProducts,
    getSingleProduct,
    createProduct,
    deleteProduct,
    updateProduct
} = require('../controller/productController')

router.get('/', getAllProducts)

router.get('/:id', getSingleProduct)

router.post('/', createProduct)

router.delete('/:id', deleteProduct)

router.patch('/:id', updateProduct)      

module.exports = router
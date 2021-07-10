const express =require ('express');
const router = express.Router()
const {addProduct, editProduct, updateProduct, deleteProduct} = require ('../controllers/productControllers')

const Product = require('../models/products')

//Vista para Agregar producto
router.get('/agregarProducto', (req, res) => {
    res.render('add-product');
})

router.post('/new-product', addProduct) 

router.get('/agregarProducto', (req, res) => {
    res.render('add-product');
})

//Update
router.get('/edit/:id', editProduct);
router.put('/edit/:id', updateProduct);

//Delete
router.delete('/delete/:id', deleteProduct)

module.exports = router;
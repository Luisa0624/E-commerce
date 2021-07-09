const express =require ('express');
const { title } = require('process');
const router = express.Router()

const Product = require('../models/products')

router.get('/catalogo', (req, res) => {
    res.render('catalog');
})

//Agregar producto
router.get('/agregarProducto', (req, res) => {
    res.render('add-product');
})
router.post('/new-product', async (req, res) =>{
    const {nombre_producto, categoria, descripcion, precio, foto, descuento} = req.body;
    const errors = []
    if(!nombre_producto){
        errors.push({text: 'Por favor ingresar el nombre del producto'})
    } 
    if(!categoria){
        errors.push({text: 'Por favor ingresar la categoria del producto'})
    }
    if(!precio){
        errors.push({text: 'Por favor ingresar el precio del producto'})
    }
    if(!foto){
        errors.push({text: 'Por favor ingresar la foto del producto'})
    }
    if (errors.length>0){
        res.render('./add-product', {
            errors, 
            nombre_producto,
            categoria,
            precio,
            foto
        })
    } else{
        const newProduct = new Product({nombre_producto, categoria, descripcion, precio, foto, descuento})
        await newProduct.save();
        res.redirect('/')
    }
   
})

router.get('/verProducto', (req, res) => {
    res.render('product');
})

router.get('/historial', (req, res) => {
    res.render('history');
})
module.exports = router;
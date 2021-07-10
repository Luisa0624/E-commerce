const express =require ('express');
const router = express.Router()
const {allProduct} = require ('../controllers/productControllers')

const Product = require('../models/products')

//listar productos
router.get('/catalogo', allProduct);


 //listar productos por categoria
router.get('/xcategoria', async (req, res) => {
    const productos = await Product.find({categoria: 'Tecnologia'});
    //res.render('catalog', {productos});
    res.send({productos});
    console.log({productos})
 })

 //listar productos que tienen promocion
router.get('/xdescuento', async (req, res) => {
    const descuento = await Product.find({promocion: 'Si'});
    //res.render('catalog', {productos});
    res.send({descuento});
    console.log({descuento})
 })

 module.exports = router;
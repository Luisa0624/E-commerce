const express =require ('express');
const router = express.Router()
const {allProduct, ProductSale, ProductTech, ProductDep, ProductHome} = require ('../controllers/productControllers')


//listar productos
router.get('/catalogo', allProduct);

router.get('/promociones', ProductSale)

router.get('/tecnologia', ProductTech)

router.get('/deporte', ProductDep)

router.get('/hogar', ProductHome)


 module.exports = router;
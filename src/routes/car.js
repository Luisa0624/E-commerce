const express =require ('express')
const router = express.Router()

router.get('/carrito', (req, res) => {
    res.render('car');
})


module.exports = router;
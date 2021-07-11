const express =require ('express')
const router = express.Router()
const passport = require ('passport')
const {addUser} = require ('../controllers/userController')

//vista de login
router.get('/', (req, res) => {
    res.render('login');
})
//Autenticacion
router.post('/', passport.authenticate('local', {
    successRedirect:'/catalogo',
    failureRedirect:'/',
    failureFlash:true
}))

module.exports = router;
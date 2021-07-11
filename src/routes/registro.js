const express =require ('express')
const router = express.Router()
const passport = require ('passport')
const {addUser} = require ('../controllers/userController')

//vista de registro
router.get('/registrarse', (req, res) => {
    res.render('register');
})
//registro
router.post('/new-user', addUser) 

module.exports = router;
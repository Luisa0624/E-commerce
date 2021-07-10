const User = require('../models/usuario')

let addUser = async (req, res) =>{
    const {nombre_usuario, email, telefono, direccion, password} = req.body;
    const emailUser = await User.findOne({email: email});
    const errors = []
    if(!nombre_usuario){
        errors.push({text: 'Por favor ingresar el nombre del producto'})
    } 
    if(!email){
        errors.push({text: 'Por favor ingresar la categoria del producto'})
    }
    if(!telefono){
        errors.push({text: 'Por favor ingresar el precio del producto'})
    }
    if(!direccion){
        errors.push({text: 'Por favor ingresar la categoria del producto'})
    }
    if(!password){
        errors.push({text: 'Por favor ingresar el precio del producto'})
    }
    if(password.length < 8){
        errors.push({text: 'La contraseña debe tener mas de 8 caracteres'})
    }
    if(emailUser){
        errors.push({text: 'EL email ya esta registrado'})
    }
    if (errors.length>0){
        res.render('./register', {
            errors, 
            nombre_usuario,
            email,
            telefono,
            direccion,
            password
        })
    } else{
        const newUser = new User({nombre_usuario, email, telefono, direccion, password})
        newUser.password = await newUser.encryptPassword(password);
        await newUser.save();
        res.redirect('/')
    }
   
}

module.exports={addUser}
const mongoose = require('mongoose')
const {Schema} = mongoose;
const bcrypt = require ('bcryptjs')

const userSchema = new Schema ({
    nombre_usuario: {type:String, required: true},
    email: {type:String, required: true},
    telefono: {type:String, required: true},
    direccion: {type:String, required: true},
    password: {type:String, required: true}

});

userSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  };
  userSchema.methods.matchPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
module.exports = mongoose.model('User', userSchema)
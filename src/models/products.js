const mongoose = require('mongoose')
const {Schema} = mongoose;

const productSchema = new Schema ({
    nombre_producto: {type:String, required: true},
    categoria: {type:String, required: true},
    descripcion: {type:String, required: true},
    precio: {type:String, required: true},
    foto: {type:String, required: true},
    descuento: {type:String}

});

module.exports = mongoose.model('Product', productSchema)
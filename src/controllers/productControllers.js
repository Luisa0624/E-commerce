const Product = require('../models/products')
const {Router} = require('express');
const router = Router();

let addProduct = async (req, res) =>{
    const {nombre_producto, categoria, descripcion, promocion, precio, foto, descuento} = req.body;
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
    if(!promocion){
        errors.push({text: 'Por favor ingresar si tiene o no promocion'})
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
        const newProduct = new Product({nombre_producto, categoria, descripcion, promocion, precio, foto, descuento})
        await newProduct.save();
        res.redirect('/catalogo')
    }
   
}

const allProduct = async (req, res) => {
    await Product.find().then((documentos) => {
      console.log(documentos._id)
      const productos = {
        Productos: documentos.map((documento) => {
          return {
              id: documento.id,
              nombre_producto: documento.nombre_producto,
              foto: documento.foto,
              descripcion: documento.descripcion,
              precio: documento.precio,
              
          };
        }),
      };
      res.render("catalog", {
        productos: productos.Productos,
      });
    });
  };

  const editProduct = async(req,res) =>{
    const productos = await Product.findById(req.params.id).lean()
    console.log(productos)
    res.render('edit-product', {productos:productos});
}

const updateProduct = async(req,res)=>{
  const {nombre_producto, categoria, descripcion, promocion, precio, foto, descuento} = req.body;
  await Product.findByIdAndUpdate(req.params.id,{nombre_producto, categoria, descripcion, promocion, precio, foto, descuento})
  res.redirect("/catalogo");
}

//Delete
const deleteProduct = async(req,res)=>{
  await Product.findByIdAndDelete(req.params.id)
  res.redirect("/catalogo");
}
module.exports={addProduct, allProduct, editProduct, updateProduct, deleteProduct}
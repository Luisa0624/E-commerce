let makeFakeProduct =(info)=>{
    const character ={
        nombre_producto:info.nombre_producto,
        categoria:info.categoria,
        descripcion:info.descripcion,
        promocion:info.promocion,
        precio:info.precio,
        foto:info.foto,
        descuento:info.descuento
    }
    return character
}

module.exports ={makeFakeProduct}
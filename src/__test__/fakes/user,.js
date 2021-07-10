let makeFakeUser =(info)=>{
    const character ={
        nombre_usuario: info.nombre_usuario,
        email: info.email,
        telefono: info.telefono,
        direccion: info.direccion,
        password:info.password
    }
    return character
}

module.exports ={makeFakeUser}
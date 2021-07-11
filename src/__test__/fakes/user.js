let makeFakeUser =(info)=>{
    const user ={
        nombre_usuario: info.nombreUsuario,
        email: info.email,
        telefono: info.telefono,
        direccion: info.direccion,
        password:info.password
    }
    return user
}

module.exports ={makeFakeUser}
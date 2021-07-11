const axios = require('axios')
const {makeFakeUser} = require('./fakes/user')
const {makeFakeProduct} = require('./fakes/products')
const mongoose = require('mongoose');
const User = require('../models/usuario')
const Product = require('../models/products')
const time = 10000
const db = 'mongodb://localhost/tienda-db-app'


describe('ecommerce API',()=>{
    
    beforeAll(()=>{
        axios.defaults.baseURL = "http://localhost:4000/ecommerce/"
        axios.defaults.headers.common['Content-Type'] = 'application/json'
        axios.defaults.validateStatus = function (status) {
            // Throw only if the status code is greater than or equal to 500
            return status < 500
          }
    },time)

    afterAll(async ()=>{
        await mongoose.connect(db,{ useNewUrlParser: true,
            useUnifiedTopology: true ,
            useCreateIndex: true })
         await  mongoose.connection.dropCollection('users')
         await  mongoose.connection.dropCollection('products')
    },time)

        describe('Usuario',()=>{
            it('registro usuario', async()=>{
                const response = await axios.post('',
                   
                   makeFakeUser({
                    nombre_usuario: 'luisa',
                    email: "luisamariagilgarcia24@gmail.com",
                    telefono: "3184225830",
                    direccion: "mz 1 cs 5",
                    password:"123456789"   
                    })
                  )
                  expect(response.status).toBe(200)
                  const {nombre_usuario, email, telefono, direccion, password} = response.data
                  expect(nombre_usuario).toBe('luisa')
                  expect(email).toBe('luisamariagilgarcia24@gmail.com')
                  expect(telefono).toBe("3184225830")
                  expect(direccion).toBe("mz 1 cs 5")
                  expect(password).toBe("123456789")
            },time)
    
            it('ingreso usuario',async () => {
              const response = await axios.post('ingreso',
                   makeFakeUser({
                   email:"luisamariagilgarcia24@gmail.com",
                   password: "123456789"})
                  )
    
                  const {password, email} = response.data
                  expect(email).toBe("luisamariagilgarcia24@gmail.com")
                  expect(password).toBe("123456789")
            },time)
        })
    
    
    
})

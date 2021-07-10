const axios = require('axios')
const {makeFakeUser} = require('./fakes/user')
const {makeFakeProduct} = require('./fakes/products')
const mongoose = require('mongoose');
const User = require('../models/usuario')
const Product = require('../models/products')
const time = 100000
const db = 'mongodb://localhost/tienda-db-app'


describe('ecommerce API',()=>{
    
    beforeAll(async ()=>{
        await mongoose.connect(db,{ useNewUrlParser: true,
            useUnifiedTopology: true  })

            try {
                await mongoose.connection.dropCollection('users')
            } catch (error) {
                await mongoose.connection.createCollection('users')
            }
            try {
                await mongoose.connection.dropCollection('products')
            } catch (error) {
                await mongoose.connection.createCollection('products')
            }
        }, time)

        afterAll(async () => {
            await mongoose.connection.dropCollection('users')
        await mongoose.connection.dropCollection('products')
        }, time)

        
    
    
})

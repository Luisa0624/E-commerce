const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/tienda-db-app', {
    useCreateIndex:true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology:true,
})

.then(db => console.log('DB conectada'))
.catch(err => console.log(err));
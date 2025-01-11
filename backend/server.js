require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/productRoutes')
// middleware
const app = express()
app.use(express.json())

app.use('/api/product', productRoute) 

mongoose.connect(process.env.MONGO_URI)
    .then(() => {   
        app.listen(process.env.PORT, () => {
            console.log ('server running on port and DB', process.env.PORT)
        })

    }) .catch((err) => {
        console.log(err)
    })
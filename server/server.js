const express = require('express')
const app = express()

const productRoutes = require('./routes/products')

app.get("/", (req, res) => {
    res.send('Welcome to the API')
})

app.use('/products', productRoutes)

app.listen(5000, () => {
    console.log("server started on port 5000")
})
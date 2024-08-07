require('dotenv').config()

const express = require('express')
const app = express()
const session = require('express-session')
const mongoose = require('mongoose')
const secret = process.env.SECRET

const productRoutes = require('./routes/products')
const authRoutes = require('./routes/auth')
const cartRoutes = require('./routes/cart')

app.use(express.json())

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader(
        'Access-Control-Allow-Methods',
        'OPTIONS, GET, POST, PUT, PATCH, DELETE'
    )
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next()
})

app.use(session({
    secret,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false }
}))

app.get("/", (req, res) => {
    res.send('Welcome to the API')
})

app.use('/products', productRoutes)
app.use('/auth', authRoutes)
app.use('/cart', cartRoutes)

const databaseConnection = process.env.DATABASE_URL
const PORT = process.env.PORT || 5000

mongoose
    .connect(
        databaseConnection
    )
    .then(res => {
        app.listen(PORT, '0.0.0.0', () => console.log(`server started on port ${PORT}`))
    })
    .catch(err => console.log(err))

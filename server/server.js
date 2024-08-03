const express = require('express')
const app = express()

app.get("/", (req, res, next) => {
    res.json({ message: "hello"})
})

app.listen(5000, () => {
    console.log("server started on port 5000")
})
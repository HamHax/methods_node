const express = require('express')
const bodyParser = require('body-parser')
const orderRoutes = require('./routers/order.Routers')
const app = express()

app.use(bodyParser.json());
app.use(express.json());

app.use('/orders',orderRoutes)


app.listen(8000)

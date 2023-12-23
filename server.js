const express = require('express')
const bodyParser = require('body-parser')
const orderRoutes = require('./routers/order.Routers')
const app = express()
// let data = require ("./data.json"); 

app.use(bodyParser.json());
app.use(express.json());

app.use('/',orderRoutes)


app.listen(8000)

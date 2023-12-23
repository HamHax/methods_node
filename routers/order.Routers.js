const express = require('express')
const fs = require('fs')
const orderRoutes = express.Router()
orderRoutes.get('',(req,res)=>{
    const readData = JSON.parse(fs.readFileSync('./Datas/data.json','utf-8'))
    console.log(req.method);
    console.log(req.url);
    console.log(req.body);
    res.json(readData)
})

module.exports = orderRoutes
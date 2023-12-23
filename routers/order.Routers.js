const express = require('express')

const orderRoutes = express.Router()
orderRoutes.get('/user',(req,res)=>{
    console.log(req.method);
    res.json({
        status:1,
        method:req.method
    })
})

module.exports = orderRoutes
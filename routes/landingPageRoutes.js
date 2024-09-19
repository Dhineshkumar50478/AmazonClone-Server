const express=require('express')
const { getProduct, getSlideData } = require('../controllers/landingPageProductControllers')
const landingPageRouter=express.Router()

landingPageRouter.get('/product',getProduct)
landingPageRouter.get('/slide',getSlideData)

module.exports=landingPageRouter
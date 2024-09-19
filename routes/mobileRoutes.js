const express=require('express')
const { getMobileData } = require('../controllers/mobileController')
const mobileRouter=express.Router()

mobileRouter.get('/',getMobileData)

module.exports=mobileRouter;
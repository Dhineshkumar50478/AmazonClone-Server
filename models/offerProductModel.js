const mongoose=require('mongoose')

const offerProductSchema=mongoose.Schema({
  productOffer:String,
  product:Array,
  option:String
},{
  Collection:"landingpageproducts"
})

const offerProductModel=mongoose.model("landingpageproducts",offerProductSchema)
module.exports=offerProductModel;
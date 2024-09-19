const mongoose=require('mongoose')

const slideSchema=mongoose.Schema({
  slideUrl:String
},{
  Collection:"landingpageslides"
})

const slideModel=mongoose.model("landingpageslides",slideSchema)
module.exports=slideModel;
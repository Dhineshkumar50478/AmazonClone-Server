const offerProductModel = require("../models/offerProductModel");
const slideModel = require("../models/slideModel");

exports.getProduct=async(req,res)=>{
  try{
    const productData=await offerProductModel.find()
    res.status(200).json(productData)
  }catch(err){
    console.log(err.message);
  }
}


exports.getSlideData=async(req,res)=>{
  try{
    const slideData=await slideModel.find()
    res.status(200).json(slideData)
  }catch(err){
    console.log(err.message);
  }
}

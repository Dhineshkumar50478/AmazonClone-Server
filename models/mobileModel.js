const mongoose = require("mongoose");

const mobileSchema = mongoose.Schema(
  {
    category: String,
    description: String,
    buyercount: String,
    price: Number,
    baseprice: Number,
    discount: Number,
    mobileImgUrl:[{
      ImgUrl: String,
      reviewUrl: String,
      specificationUrl: String,
      backViewUrl: String,
      horizontalViewUrl: String,
      verticalViewUrl: String,
    }],
    specification: {
      brand: String,
      os: String,
      processor: String,
      screensize: String,
      Storage: Array,
      color: Array,
    },
    deliverytype: String,
    service: String,
    sellerrating: Number,
    offers: Array,
  },
  {
    Collection: "mobiledetails",
  }
);

const mobileModel = mongoose.model("mobiledetails", mobileSchema);
module.exports = mobileModel;

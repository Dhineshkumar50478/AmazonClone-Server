const express=require('express');
const mongoose =require('mongoose');
const port=process.env.port||3000;
const dotenv=require('dotenv')
const cors=require('cors');
const landingPageRouter = require('./routes/landingPageRoutes');
const mobileRouter = require('./routes/mobileRoutes');
dotenv.config()

mongoose.connect(process.env.CONNECTION_STRING).then(()=>{
  console.log("Connected to DB");
})

const app=express();
app.use(express.json())
app.use(cors({
  origin:"http://localhost:3001",
  credentials:true
}))

app.use('/landing',landingPageRouter)
app.use('/mobile',mobileRouter)


app.listen(port,()=>{
  console.log(`Server is running on ${port}`);
})
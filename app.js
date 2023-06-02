const express = require('express');
const mongoose= require('mongoose');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

dotenv.config();  

const mongoURI = process.env.MONGO_URI;

const app = express();
app.use(express.json());  

app.use(bodyParser.json());


const uri=mongoURI;
mongoose.set('strictQuery', false);
mongoose.connect(uri,
    {
        useNewUrlParser:true, 
        useUnifiedTopology:true, 
    })
.then(()=>{
    console.log("mongoose connected");
})
.catch((err)=>{
    console.log(err);
})

 
const registerRoutes=require('./apis/register');
const contactlist=require('./apis/list');
app.use('/auth',registerRoutes) 
app.use('/contact',contactlist)

app.use((req,res,next)=>{
 const err=new Error("Not Found")
 err.status=404

})



// express error 
app.use(()=>{
res.status(err.status||500)
res.send({
    status:err.status || 500,
    message:'Not found'
})
})

module.exports=app;
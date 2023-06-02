const express=require("express");

const route= express.Router();

const List=require('../models/List.model');

route.post('/createlist',async(req,res)=>{
 
try{
    const product=new List({
        Name: req.body.Name,
      Number:  req.body.Number,
      userId: req.body.user_id
    })
     const result=await product.save();
      res.send(result);
    }
catch(err){
    console.log(err.message);
}

})

// get contact details 
route.post('/getlist',async(req,res)=>{
 
try{
       const result=await List.find({ userId: req.body.user_id });
      res.status(200).json(result);
    }
catch(err){
    console.log(err.message);
}

})

// update particular item
route.post('/updateitem',async(req,res)=>{
 
    try{
           const result=await List.updateOne({ userId: req.user_id },
            {
                Name: req.body.Name,
                Number:  req.body.Number,
            });
          res.status(200).send({
            code:200,
            status:"successfully updated item",
          });
        }
          catch (error)
          {
              res.status(404).send({
                error: error.message
                      })
            }
     
    
    })
  
// update complete list item
route.post('/updatelist',async(req,res)=>{
 
    try{
        const idArray = req.body.itemid;
   const filter ={ _id: { $in: idArray } };
        const result=await List.deleteMany(filter);
        console.log(req.body.itemid)
           res.status(200).send({
            code:200,
            status:"successfully updated item",
            result,
          });
        }
          catch (error)
          {
              res.status(500).json({
                error: error.message
                      })
            }
     
    
    })    
module.exports=route;
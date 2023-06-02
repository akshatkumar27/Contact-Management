const http=require('http');
const app=require('./app');
const express=require('express');
const run=express();
const port =process.env.PORT || 3000;

const server = http.createServer(app);
  run.use((req,res)=>{
    res.send("Welcome to Xeno Server");
  })
server.listen(port,() => {
    console.log('Server running on port'+port);
  });
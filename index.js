const http=require('http');
const app=require('./app');
 
const port =process.env.PORT || 3000;

const server = http.createServer(app);
console.log(process.env.PORT);
server.listen(port,() => {
    console.log('Server running on port 3000');
  });
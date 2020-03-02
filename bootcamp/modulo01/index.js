const express = require('express');
const server = express();

server.use(express.json());

const users = ['Gustavo','Isabella','Mavis'];

server.use((req,res,next)=>{
  console.time('REQUEST');
  console.log(`Method: ${req.method}; URL: ${req.url}`);
  // return next();
  next();
  console.timeEnd('REQUEST');
});
function checkParamName(req,res,next){
  if(!req.body.name){
    return res.status(400).json({'error':'User name is required'});
  }
  return next();
}
function checkUserExists(req,res,next){
  const user = users[req.params.index];
  if(!user){
    return res.status(400).json({'error':'User does not exist'});
  }
  req.user = user;
  return next();
}

server.get('/users',(req,res)=>{
  return res.json(users);
});

server.get('/users/:index',checkUserExists,(req,res)=>{
  const {user} = req;
  return res.json(user);
});

server.post('/users',checkParamName,(req,res)=>{
  const {name} = req.body;
  
  users.push(name);

  return res.json(users);
});

server.put('/users/:index',checkUserExists,checkParamName,(req,res)=>{
  const {index} = req.params;
  const {name} = req.body;
  users[index] = name;
  return res.json(users);
});

server.delete('/users/:index',checkUserExists,(req,res)=>{
  const {index} = req.params;
  users.splice(index,1)
  return res.json(users);
});

server.listen(3000);
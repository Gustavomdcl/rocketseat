const express = require('express');
const server = express();

server.get('/users/:id',(req,res)=>{ // http://localhost:3000/users/1/?nome=Gustavo
  const {nome} = req.query;
  const {id} = req.params;
  return res.json({'message':`Hello ${nome} - id (${id})`});
});

server.listen(3000);
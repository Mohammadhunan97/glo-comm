const express = require('express');
const app = express();
const port = process.env.PORT || 3001;
const c = console.log;
const fruits = require('./fruits.json');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get("/fruits",function(req,res){
	res.send(fruits);
})


app.listen(port,function(err){
	err?c("error: ", err):c("listening on port", port)
})




const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000

var app = express();


  app.use(express.static(path.join(__dirname, 'public')));

 
  app.get('/',function(req, res){
      res.send("hello world");
  });
  
  app.listen(PORT, () => console.log(`Listening on ${ PORT }`));

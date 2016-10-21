'use strict';

const express = require('express');
var routes=require('./app/routes/index.js');
var mongo=require('mongodb').MongoClient;

var app=express();

mongo.connect('mongodb://lebaochi:lebaochi1809@ds061506.mlab.com:61506/clementinejs',function(err,db){
  if(err) throw new Error('Database failed to connect!');
  else{
    console.log('MongoDB successfully connected on port 27017.');
  }

var port=process.env.PORT||3000;

app.use('/public',express.static(process.cwd()+'/public'));
app.use('/controllers',express.static(process.cwd()+'/app/controllers'));

routes(app,db);

app.listen(port,function(){
  console.log("App running at port :"+port+' ......');
})

});

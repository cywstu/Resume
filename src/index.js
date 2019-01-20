var swig = require("swig");
//import express package and save it in the express variable
var express = require("express");
//create a new instance of express and save it in a variable called app
var app = express();

//save the port globally
var port = 8080;

app.use(express.static("public"));

//we need now to define routes for our web server
//first any requests that comes to the root serve this function
//note that this is an asynchronous code
//note that a call back function has been passed which receives two variables
//req which contains client request information
//res which is the response we will send to the client
app.get("/", function(req, res) {
  //our response will be just a string Hello World

  var template = swig.compileFile("public/html/index.html");
  var output = template({});
  res.send(output);
  //res.send("Hello world! \n Starting with express!");
});

//now run the server  at port 8080
app.listen(port);

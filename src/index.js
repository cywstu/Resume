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

  var lang = req.query.lang;
  if ((lang = "cn")) {
    //send cn cv
    res.send("cn cv");
  } else {
    var template = swig.compileFile("public/html/index.html");
    var output = template({});
    res.send(output);
  }
  //res.send("Hello world! \n Starting with express!");
});

app.get("/contactme", function(req, res) {
  var template = swig.compileFile("public/html/contactme.html");
  var output = template({});
  res.send(output);
});

app.get("/test", function(req, res) {
  console.log(req.query.var1);
  console.log(req.query.var2);
  console.log(req.query.var3);
  console.log(req.query.array);
  res.send(200);
});

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));
app.post("/process_contact_submission", function(req, res) {
  var data = {
    txtName: req.body.txtName,
    txtEmail: req.body.txtEmail
  };

  console.log("response");
  res.end(JSON.stringify(data));
});

//now run the server  at port 8080
app.listen(port);

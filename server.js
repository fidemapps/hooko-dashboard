var fs = require("fs");
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var errorHandler = require('errorhandler');
var methodOverride = require('method-override');
var hostname = process.env.HOSTNAME || 'localhost';
var port = parseInt(process.env.PORT, 10) || 4567;
var hookoServerUrl = process.env.HOOKO_URL || 'http://localhost:3000';

app.use(methodOverride());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname + '/server'));
app.use(errorHandler({
  dumpExceptions: true,
  showStack: true
}));

var configFile = 'angular.module(\'hooko.config\', []).constant(\'hookoUrl\', \'' + hookoServerUrl + '\');';

fs.writeFile("./server/modules/config.js", configFile, function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log("The config file was saved!");
  }
});

console.log("Simple static server listening at http://" + hostname + ":" + port);
app.listen(port, hostname);


import express from "express";

var root = express.Router();

root.get('/', function(req, res, next) {
  var message = {"message":"Welcome to Fudcon REST API"};
  res.json(message);
});

export {root}

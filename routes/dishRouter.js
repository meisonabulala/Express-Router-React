const express = require('express');

const dishRouter = express.Router();
dishRouter.route('/')
.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text.plain');
  next();
})
.get((req, res, next) => {
  res.end('Send you all the dishes !');
})
.put((req, res, next) => {
  res.statusCode = 403;
  res.end(`PUT method is not supported`);
})
.post((req, res, next) => {
  res.end(`Creating ${req.body.name} with the information : ${req.body.description}`);
})
.delete((req, res, next) => {
  res.end(`Deleting all dishes`);
});

dishRouter.route('/:dishId')
.get((req, res, next) => {
  res.end(`Sending you dish : ${req.params.dishId}!`);
})
.post((req, res, next) => {
  res.statusCode = 403;
  res.end(`POST method is not supported`);
})
.put((req, res, next) => {
  res.write(`Update the dishes ${req.params.dishId}`)
  res.end(`Updating ${req.body.name} with the information : ${req.body.description}`);
})
.delete((req, res, next) => {
  res.end(`Deleting dish : ${req.params.dishId}`);
});

module.exports = dishRouter;

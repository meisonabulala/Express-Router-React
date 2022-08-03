const express = require('express');
const bodyParser = require('body-parser');

const promotionRouter = express.Router();


promotionRouter.route('/')
.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Comtent-Type', 'text.plain');
  next();
})
.get((req, res, next) => {
  res.end('We will send you the promotion !');
})
.put((req, res, next) => {
  res.end('PUT method is not supported !');
})
.post((req, res, next) => {
  res.end(`Creating ${req.body.name} , its description : ${req.body.description}`);
})
.delete((req, res, next) => {
  res.end('Delete all promotion !');
})

promotionRouter.route('/:promotionId')
.all((req, res, next) => {
  res.statusCode = 200;
  res.setHeader('Comtent-Type', 'text.plain');
  next();
})
.get((req, res, next) => {
  res.end('We will send you the promotion !');
})
.post((req, res, next) => {
  res.end('POST method is not supported !');
})
.put((req, res, next) => {
  res.write(`Sending you promotion ${req.params.promotionId}`);
  res.end(`Updating ${req.body.name} , its description : ${req.body.description}`);
})
.delete((req, res, next) => {
  res.end('Delete all promotion !');
})

module.exports = promotionRouter;
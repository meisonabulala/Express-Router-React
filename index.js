const express = require('express');
const http = require('http');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const dishRouter = require('./routes/dishRouter');
const promotion = require('./routes/promotion');

const port = 3000;
const hostname = "localhost";

const app = express();

//in the developer mode
//morgan will return more and important message to the developer
app.use(morgan('dev'));

//this tell the application to find static html files in /public
app.use(express.static(__dirname + '/public'));

//Parse the request body into JSON format
app.use(bodyParser.json());

app.use('/dishes', dishRouter);
app.use('/promotion', promotion);

app.use((require, response, next) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text.html");
  response.end("<html><body><h1>This is an Express Server</h1></body></html>");
});

const Server = http.createServer(app);
Server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
})
const express = require('express'),
http = require('http');

const hostname = 'localhost';
const port = 3000;

const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));


const productsRouter = require('./express-routers/productsRouter');

app.use('/products', productsRouter);


app.use((req, res, next) => {
  console.log(req.headers);
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>');

});


const server = http.createServer(app);
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
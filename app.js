const express = require('express');
const BodyParser = require('body-parser');

const product = require('../routes/product.route');
//Import routes for the product :w
//
app.use('/products' , product);
const app = express();

let port = 1234;

app.listen(port, () => {
  console.log('Server is running on port' + port)
});

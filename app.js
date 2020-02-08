const express = require('express');
const BodyParser = require('body-parser');

//Import routes for the product :w
const product = require('./routes/product.route');
//Import routes for the product :w
//

const app = express();
app.use('/products' , product);


let port = 1234;

app.listen(port, () => {
  console.log('Server is running on port' + port)
});

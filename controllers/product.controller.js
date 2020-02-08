const Product = require('../models/product.model.js');

//Simple version , without validateion or sanitation
exports.test = function (req, res) {
  res.send('hail heisenberg...!!!');
};

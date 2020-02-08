const express = require('express');
const router = express.Router();

// Require the controller WHICH WE DOD NOT CREATE YET!!!
const product_controller = require('../controllers/product.controller');

// a simple test url to check that all of our files are commmunication correctly 
router.get('/test', product_controller.test);


module.exports = router;

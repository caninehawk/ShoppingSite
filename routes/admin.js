const express = require('express');
const productsController = require('../controllers/productsController');
const router = express.Router();

router.get('/add-product', productsController.getForm);
router.post('/add-product', productsController.postProducts);

module.exports = router;

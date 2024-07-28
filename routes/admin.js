const express = require('express');
const adminController = require('../controllers/adminController');
const router = express.Router();

router.get('/add-product', adminController.getAdmin);
router.post('/add-product', adminController.postAdmin);

module.exports = router;

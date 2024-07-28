const productData = require('../data/productData');

exports.getAdmin = (req, res) => {
  res.render('admin', { pageTitle: 'Admin' });
};

exports.postAdmin = (req, res) => {
  const product = req.body;
  productData.addProduct(product);
  res.redirect('/');
};

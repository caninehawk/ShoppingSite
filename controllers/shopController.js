const productData = require('../data/productData');

exports.getShop = (req, res) => {
  const products = productData.getProducts();
  res.render('shop', { pageTitle: 'Shop', products: products });
};

const Product = require('../models/product');

exports.getForm = (req, res) => {
  res.render('admin', { pageTitle: 'Admin' });
};

exports.postProducts = (req, res) => {
  const { title, description, image, price, category } = req.body;
  const product = new Product(title, description, image, price, category);
  product.save(() => {
    res.redirect('/');
  });
};


exports.getProducts = (req, res) => {
  Product.fetchAll(products => {
    res.render('shop', { pageTitle: 'Shop', products: products });
  });
};

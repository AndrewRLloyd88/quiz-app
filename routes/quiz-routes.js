const express = require('express');
const router = express.Router();
//we will replace this later
const { getCats, getCatById } = require('../db/cat-queries');

// const { getProductById, getProducts } = require('../db/product-queries');
// add middleware
router.use((req, res, next) => {
  // if (!req.session.user_id) {
  //   return res.redirect('/login');
  // }
  console.log('product middleware called');
  next();
});
// GET /products/
router.get('/', (req, res) => {
  getCatById(req.params.id)
  .then((cat) => {
    res.render('index', {cat});
  });
});
//   getProducts()
//     .then((products) => {
//       res.json({ products }); // AJAX client-side rendering
//       // res.render('products', {products}); // server-side rendering multi-page
//     });
// });
// GET /products/:id/
// router.get('/:id', (req, res) => {
//   getProductById(req.params.id)
//     .then((product) => {
//       res.json({ product });
//     })
// });
module.exports = router;

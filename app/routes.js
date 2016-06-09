module.exports = function(match) {
  match('', 'home#index');
  match('/product-watch','product-watch-page#index');
  match('/product-jewellery','product-jewellery-page#index');
};

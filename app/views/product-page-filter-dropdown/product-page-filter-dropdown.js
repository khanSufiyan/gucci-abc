var BaseView = require('../base');

module.exports = BaseView.extend({
  className: 'product-page-filter-dropdown',

  initialize: function(){

  },
  postRender: function(){
  var $categoryDropdownBtn = this.$("#porduct-category-dropdown-button");
  var $materialDropdownBtn = this.$("#product-material-dropdown-button");

  $categoryDropdownBtn.click(function(){
    $categoryDropdownBtn.toggleClass('border');
  });

  $materialDropdownBtn.click(function(){
    $materialDropdownBtn.toggleClass('border');
  });

 }
});
module.exports.id = 'product-page-filter-dropdown/product-page-filter-dropdown';

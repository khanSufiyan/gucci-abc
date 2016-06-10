var BaseView = require('../base');

module.exports = BaseView.extend({
  className: 'product-page-filter-dropdown',

  initialize: function(){

  },
  postRender: function(){
  var $categorydropDown = this.$("#porduct-category-dropdown");
  var $materialdropDown = this.$("#product-material-dropdown");

   $categorydropDown.click(function(){
    $("#porduct-category-dropdown-button").toggleClass('border');
		});

   $materialdropDown.click(function(){
   $("#product-material-dropdown-button").toggleClass('border');
		});

 }
});
module.exports.id = 'product-page-filter-dropdown/product-page-filter-dropdown';

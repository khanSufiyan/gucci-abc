module.exports = function(Handlebars) {

var templates = {};

templates["gucci-banner/gucci-banner"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return " <div class=\"gucci_logo_banner\"></div>";
  });

templates["home/index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "\n\n\n\n<div class=\"row\">\n	<div class=\"col-xs-12 col-sm-12\">\n		"
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "gucci-banner/gucci-banner", options) : helperMissing.call(depth0, "view", "gucci-banner/gucci-banner", options)))
    + "\n	</div>\n</div>\n\n\n	<div class=\"row \">\n		<div class=\"col-xs-12 col-sm-12\">\n			"
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "product-page-banner/product-page-banner", options) : helperMissing.call(depth0, "view", "product-page-banner/product-page-banner", options)))
    + "\n		</div>\n	</div>\n\n	<div class=\"row product-options\">\n\n		<div class=\"col-xs-6 col-sm-6\">\n			"
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "product-page-collection-dropdown/product-page-collection-dropdown", options) : helperMissing.call(depth0, "view", "product-page-collection-dropdown/product-page-collection-dropdown", options)))
    + "\n		</div>\n\n		<div class=\"col-xs-6 col-sm-6\">\n			"
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "product-page-filter-dropdown/product-page-filter-dropdown", options) : helperMissing.call(depth0, "view", "product-page-filter-dropdown/product-page-filter-dropdown", options)))
    + "\n		</div>\n\n	</div>\n\n	<div class=\"row product-list\">\n		<div class=\"col-xs-12 col-sm-12\">\n			"
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "product-page-product-list/product-page-product-list", options) : helperMissing.call(depth0, "view", "product-page-product-list/product-page-product-list", options)))
    + "\n		</div>\n	</div>\n\n\n\n";
  return buffer;
  });

templates["jewelleries/jewelleries"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"jewelleries row\">\n   <div class=\"jewellery-one col-xs-4 col-sm-4\" align=\"left\">\n    <figure>\n       <img class=\"visible-xs\" src=\"/images/jewellery_xs.jpg\">\n       <img class=\"visible-sm\" src=\"/images/jewellery_sm.jpg\">\n       <img class=\"visible-md\" src=\"/images/jewellery_md.jpg\">\n       <img class=\"visible-lg\" src=\"/images/jewellery_lg.jpg\">\n    </figure>\n  </div>\n\n  <div class=\"jewellery-two col-xs-4 col-sm-4\" align=\"center\">\n    <figure>\n       <img class=\"visible-xs\" src=\"/images/jewellery_two_xs.jpg\">\n       <img class=\"visible-sm\" src=\"/images/jewellery_two_sm.jpg\">\n       <img class=\"visible-md\" src=\"/images/jewellery_two_md.jpg\">\n       <img class=\"visible-lg\" src=\"/images/jewellery_two_lg.jpg\">\n    </figure>\n  </div>\n\n  <div class=\"jewellery-three col-xs-4 col-sm-4\" align=\"right\">\n    <figure>\n       <img class=\"visible-xs\" src=\"/images/jewellery_three_xs.jpg\">\n       <img class=\"visible-sm\" src=\"/images/jewellery_three_sm.jpg\">\n       <img class=\"visible-md\" src=\"/images/jewellery_three_md.jpg\">\n       <img class=\"visible-lg\" src=\"/images/jewellery_three_lg.jpg\">\n    </figure>\n  </div>\n</div>";
  });

templates["jewellery-banner/jewellery-banner"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return " <div class=\"jewellery-banner\">\n    <img src=\"/images/jewellery_banner.jpg\">\n </div>";
  });

templates["product-jewellery-page/index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"container\">\n	<div class=\"row\">\n	  <div class=\"col-xs-12 col-sm-12\">\n			"
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "gucci-banner/gucci-banner", options) : helperMissing.call(depth0, "view", "gucci-banner/gucci-banner", options)))
    + "\n		</div>\n	 </div>\n	<div class=\"row\">\n	 	<div class=\"col-xs-12 col-sm-12\">\n		 "
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "jewellery-banner/jewellery-banner", options) : helperMissing.call(depth0, "view", "jewellery-banner/jewellery-banner", options)))
    + "\n		</div>\n	</div>\n	<div class=\"row\">\n	 	<div class=\"col-xs-12 col-sm-12\">\n		 "
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "jewelleries/jewelleries", options) : helperMissing.call(depth0, "view", "jewelleries/jewelleries", options)))
    + "\n		</div>\n	</div>\n</div>\n\n";
  return buffer;
  });

templates["product-page-banner/product-page-banner"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return " <div class=\"product-page-banner\">\n    <img src=\"/images/banner_j_guccifloral_pg.png\">\n </div>";
  });

templates["product-page-collection-dropdown/product-page-collection-dropdown"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return " <div class=\"product-page-collection-dropdown\">\n\n  <div id=\"porduct-collection-dropdown\" class=\"dropdown\">\n			<button class=\"dropdown-toggle\" type=\"button\" id=\"product-collection-dropdown-button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n		  browse by collection\n				<span class=\"caret\"></span>\n			</button>\n			<ul class=\"dropdown-menu\" aria-labelledby=\"product-collection-dropdown-button\">\n				 <li>Yellow Gold</li>\n					<li>Pink Gold</li>\n					<li>White Gold</li>\n					<li>Sliver</li>\n			</ul>\n		</div>\n </div>\n";
  });

templates["product-page-filter-dropdown/product-page-filter-dropdown"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"product-page-filter-dropdown  row\">\n\n<div class=\"col-xs-6 col-sm-6 filter-title\" align=\"right\">Filter by :</div>\n\n<div class=\"filter-dropdown col-xs-6 col-sm-6\">\n  <div class=\"row\">\n		<div class=\"porduct-category col-xs-6 col-sm-6 nopadding\" align=\"right\">\n			<div id=\"porduct-category-dropdown\" class=\"dropdown\">\n			<button class=\"dropdown-toggle\" type=\"button\" id=\"porduct-category-dropdown-button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n				Category\n				<span class=\"caret\"></span>\n			</button>\n			<ul class=\"dropdown-menu\" aria-labelledby=\"porduct-category-dropdown-button\">\n				<li>Yellow Gold<input class=\"pull-right\" type=\"checkbox\"/></li>\n				<li>Pink Gold<input class=\"pull-right\" type=\"checkbox\"/></li>\n				<li>White Gold<input class=\"pull-right\" type=\"checkbox\"/></li>\n				<li>Sliver<input class=\"pull-right\" type=\"checkbox\"/></li>\n			</ul>\n			</div>\n		</div>\n		<div class=\"product-material col-xs-6 col-sm-6  nopadding\" align=\"left\">\n			<div id=\"product-material-dropdown\" class=\"dropdown\">\n			<button class=\"dropdown-toggle\" type=\"button\" id=\"product-material-dropdown-button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"true\">\n				Matarial\n				<span class=\"caret\"></span>\n			</button>\n			<ul class=\"dropdown-menu \" aria-labelledby=\"priduct-material-dropdown-button\">\n				<li>Yellow Gold<input class=\"pull-right\" type=\"checkbox\"/></li>\n				<li>Pink Gold<input class=\"pull-right\" type=\"checkbox\"/></li>\n				<li>White Gold<input class=\"pull-right\" type=\"checkbox\"/></li>\n				<li>Sliver<input class=\"pull-right\" type=\"checkbox\"/></li>\n			</ul>\n			</div>\n	  </div>\n	 </div>\n </div>\n</div>\n";
  });

templates["product-page-product-list/product-page-product-list"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"row\">\n <div class=\"product-page-product-list col-sm-3 col-xs-3\">\n\n     <img src=\"/images/jewellery_three_xs.jpg\">\n		 <div class=\"product-title\">gucci flora</div>\n		 <div class=\"product-discription\">black PVD stain less steel case,black matte dial,black rubber strap</div>\n		 <button> SHOP THIS <span> > </span> </i></button>\n </div>\n\n <div class=\"product-page-product-list col-sm-3 col-xs-3\">\n\n     <img src=\"/images/jewellery_three_xs.jpg\">\n		 <div class=\"product-title\">gucci flora</div>\n		 <div class=\"product-discription\">black PVD stain less steel case,black matte dial,black rubber strap</div>\n		 <button>SHOP THIS<span> > </span></button>\n </div>\n\n <div class=\"product-page-product-list col-sm-3 col-xs-3\">\n\n     <img src=\"/images/jewellery_three_xs.jpg\">\n		 <div class=\"product-title\">gucci flora</div>\n		 <div class=\"product-discription\">black PVD stain less steel case,black matte dial,black rubber strap</div>\n		 <button>SHOP THIS<span> > </span></button>\n </div>\n\n <div class=\"product-page-product-list col-sm-3 col-xs-3\">\n\n     <img src=\"/images/jewellery_three_xs.jpg\">\n		 <div class=\"product-title\">gucci flora</div>\n		 <div class=\"product-discription\">black PVD stain less steel case,black matte dial,black rubber strap</div>\n		 <button>SHOP THIS<span> > </span></button>\n </div>\n\n</div>";
  });

templates["product-watch-page/index"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", helper, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<div class=\"container\">\n	<div class=\"row\">\n	  <div class=\"col-xs-12 col-sm-12\">\n			"
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "gucci-banner/gucci-banner", options) : helperMissing.call(depth0, "view", "gucci-banner/gucci-banner", options)))
    + "\n		</div>\n	 </div>\n	<div class=\"row\">\n	 	<div class=\"col-xs-12 col-sm-12\">\n		 "
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "watch-banner/watch-banner", options) : helperMissing.call(depth0, "view", "watch-banner/watch-banner", options)))
    + "\n		</div>\n	</div>\n	<div class=\"row\">\n	 	<div class=\"col-xs-12 col-sm-12\">\n		 "
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "watches/watches", options) : helperMissing.call(depth0, "view", "watches/watches", options)))
    + "\n		</div>\n	</div>\n</div>";
  return buffer;
  });

templates["products/products"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"products row\">\n  <div class=\"product-watch col-xs-6 col-sm-6\" align=\"left\">\n  <a href=\"/product-watch\">\n    <figure>\n       <img class=\"visible-xs\" src=\"/images/watch_xs.jpg\">\n       <img class=\"visible-sm\" src=\"/images/watch_sm.jpg\">\n       <img class=\"visible-md\" src=\"/images/watch_md.jpg\">\n       <img class=\"visible-lg\" src=\"/images/watch_lg.jpg\">\n    </figure>\n    </a>\n  </div>\n  <div class=\"product-jewellery col-xs-6 col-sm-6\" align=\"right\">\n  <a href=\"/product-jewellery\">\n    <figure>\n       <img class=\"visible-xs\" src=\"/images/jewellery_xs.jpg\">\n       <img class=\"visible-sm\" src=\"/images/jewellery_sm.jpg\">\n       <img class=\"visible-md\" src=\"/images/jewellery_md.jpg\">\n       <img class=\"visible-lg\" src=\"/images/jewellery_lg.jpg\">\n    </figure>\n   </a>\n  </div>\n</div>";
  });

templates["test_view"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", escapeExpression=this.escapeExpression;


  buffer += "<h3>Test View</h3>\n"
    + escapeExpression(helpers.log.call(depth0, (depth0 && depth0.data), {hash:{},data:data}));
  return buffer;
  });

templates["video-banner/video-banner"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div>\n  <div class=\"video-banner\" id=\"video-banner\">\n    <figure>\n\n      <img class=\"visible-xs\" src=\"/images/VideoEditorialSmall_469*546.jpg\">\n      <img class=\"visible-sm\" src=\"/images/VideoEditorialMedium_1936*1092.jpg\">\n      <img class=\"visible-md\" src=\"/images/VideoEditorialSmall_938*1092.jpg\">\n      <img class=\"visible-lg\" src=\"/images/VideoEditorialStandard_1200*677.jpg\">\n\n      <a class=\"video-button\" id=\"video-button\">\n        <i class=\"glyphicon glyphicon-play\"></i>\n      </a>\n    </figure>\n  </div>\n  <div class=\"vedio-div\" id=\"vedio-div\">\n    <div class=\"vedio-close\" align=\"right\">\n      <button id=\"vedio-close-button\">Close <span>X</span></button>\n    </div>\n    <div class=\"video-wrapper\">\n      <video id=\"my-video\" class=\" custom-skin video-js \" controls preload=\"auto\"\n      poster=\"gucci_video_poster.jpg\" data-setup='{}'>\n        <source src=\"/videos/gucci.mp4\" type='video/mp4'>\n        <source src=\"MY_VIDEO.webm\" type='video/webm'>\n        <p class=\"vjs-no-js\">\n        To view this video please enable JavaScript, and consider upgrading to a web browser that\n        <a href=\"http://videojs.com/html5-video-support/\" target=\"_blank\">supports HTML5 video</a>\n        </p>\n      </video>\n    </div>\n  </div>\n</div>\n\n";
  });

templates["watch-banner/watch-banner"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return " <div class=\"watch-banner\">\n    <img src=\"/images/watch_banner.jpg\">\n </div>";
  });

templates["watches/watches"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"watches row\">\n  <div class=\"watch-one col-xs-4 col-sm-4\" align=\"left\">\n    <figure>\n       <img class=\"visible-xs\" src=\"/images/watch_xs.jpg\">\n       <img class=\"visible-sm\" src=\"/images/watch_sm.jpg\">\n       <img class=\"visible-md\" src=\"/images/watch_md.jpg\">\n       <img class=\"visible-lg\" src=\"/images/watch_lg.jpg\">\n    </figure>\n  </div>\n\n  <div class=\"watch-two col-xs-4 col-sm-4\" align=\"center\">\n    <figure>\n       <img class=\"visible-xs\" src=\"/images/watch_two_xs.jpg\">\n       <img class=\"visible-sm\" src=\"/images/watch_two_sm.jpg\">\n       <img class=\"visible-md\" src=\"/images/watch_two_md.jpg\">\n       <img class=\"visible-lg\" src=\"/images/watch_two_lg.jpg\">\n    </figure>\n  </div>\n\n  <div class=\"watch-three col-xs-4 col-sm-4\" align=\"right\">\n    <figure>\n       <img class=\"visible-xs\" src=\"/images/watch_three_xs.jpg\">\n       <img class=\"visible-sm\" src=\"/images/watch_three_sm.jpg\">\n       <img class=\"visible-md\" src=\"/images/watch_three_md.jpg\">\n       <img class=\"visible-lg\" src=\"/images/watch_three_lg.jpg\">\n    </figure>\n  </div>\n</div>";
  });

return templates;

};
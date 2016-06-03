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


  buffer += "\n\n\n\n\n\n <div class=\"container\">\n	<div class=\"row\">\n	  <div class=\"col-xs-12 col-sm-12\">\n			"
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "gucci-banner/gucci-banner", options) : helperMissing.call(depth0, "view", "gucci-banner/gucci-banner", options)))
    + "\n		</div>\n	 </div>\n\n	 <div class=\"row\">\n	 	<div class=\"col-xs-12 col-sm-12\">\n		 "
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "jewellery-banner/jewellery-banner", options) : helperMissing.call(depth0, "view", "jewellery-banner/jewellery-banner", options)))
    + "\n		</div>\n	</div>\n\n	<div class=\"row\">\n	 	<div class=\"col-xs-6 col-sm-6\">\n		 "
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "jewellery-banner/jewellery-banner", options) : helperMissing.call(depth0, "view", "jewellery-banner/jewellery-banner", options)))
    + "\n		</div>\n\n	 	<div class=\"col-xs-6 col-sm-6\">\n		 "
    + escapeExpression((helper = helpers.view || (depth0 && depth0.view),options={hash:{},data:data},helper ? helper.call(depth0, "jewelleries/jewelleries", options) : helperMissing.call(depth0, "view", "jewelleries/jewelleries", options)))
    + "\n		</div>\n	</div>\n</div>\n\n";
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

templates["products/products"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"products row\">\n  <div class=\"product-watch col-xs-6 col-sm-6\" align=\"left\">\n    <figure>\n       <img class=\"visible-xs\" src=\"/images/watch_xs.jpg\">\n       <img class=\"visible-sm\" src=\"/images/watch_sm.jpg\">\n       <img class=\"visible-md\" src=\"/images/watch_md.jpg\">\n       <img class=\"visible-lg\" src=\"/images/watch_lg.jpg\">\n    </figure>\n  </div>\n  <div class=\"product-jewellery col-xs-6 col-sm-6\" align=\"right\">\n    <figure>\n       <img class=\"visible-xs\" src=\"/images/jewellery_xs.jpg\">\n       <img class=\"visible-sm\" src=\"/images/jewellery_sm.jpg\">\n       <img class=\"visible-md\" src=\"/images/jewellery_md.jpg\">\n       <img class=\"visible-lg\" src=\"/images/jewellery_lg.jpg\">\n    </figure>\n  </div>\n</div>";
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
  var buffer = "";


  buffer += "<div>\n\n  <div class=\"video-banner\">\n    <figure>\n\n       <img class=\"visible-xs\" src=\"/images/VideoEditorialSmall_469*546.jpg\">\n       <img class=\"visible-sm\" src=\"/images/VideoEditorialMedium_1936*1092.jpg\">\n       <img class=\"visible-md\" src=\"/images/VideoEditorialSmall_938*1092.jpg\">\n       <img class=\"visible-lg\" src=\"/images/VideoEditorialStandard_1200*677.jpg\">\n\n       <a class=\"video-button\">\n        <i class=\"glyphicon glyphicon-play\"></i>\n      </a>\n    </figure>\n  \n  </div>\n </div>";
  return buffer;
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
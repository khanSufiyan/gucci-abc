var BaseView = require('../base');

module.exports = BaseView.extend({
  className: 'video-banner',

  initialize: function(){

  },
  postRender: function(){

 var player = videojs('my-video', {
   aspectRatio:"16:9",
    controlBar: {
        children: {
           PlayToggle:true,
           currentTimeDisplay: true,
           timeDivider: true,
           durationDisplay: true,
           progressControl: true,
           volumeMenuButton: {
                vertical: true,
                inline: false,
                volumeBar: {
                    vertical: true
                },
                volumeLevel: false
            },
            fullscreenToggle: true
        }
    }
 });

var $videoBanner = this.$("#video-banner");
var $videoDiv = this.$("#vedio-div");


this.$("#video-button").click(function(){
  $videoBanner.hide();
  $videoDiv.show();
  $("#my-video video").get(0).play();
});

this.$("#vedio-close-button").click(function(){
  $videoBanner.show();
  $videoDiv.hide();
  $("#my-video video").get(0).pause();
});

}

});
module.exports.id = 'video-banner/video-banner';

var BaseView = require('../base');

module.exports = BaseView.extend({
  className: 'video-banner',

  initialize: function(){

  },
  postRender: function(){
  	var player = videojs('my-video', {
               fluid:true,
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

  $("#video-button").click(function(){
    $("#video-banner").hide();
     $("#vedio-div").show();
     $("#my-video video").get(0).play();
});
  $("#vedio-close-button").click(function(){
    $("#video-banner").show();
     $("#vedio-div").hide();
    $("#my-video video").get(0).pause();
});

  }

});
module.exports.id = 'video-banner/video-banner';

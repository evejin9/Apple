let tag = document.createElement('script');

      tag.src = "https://www.youtube.com/iframe_api";
      let firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

      let player;
      function onYouTubeIframeAPIReady() {
        player = new YT.Player('player', {
          videoId: 'vYfZSp4xhp8',
          playerVars : {
            autoplay: true,
            loop:true,
            playlist: 'vYfZSp4xhp8',
          },
        events: {
          onReady: function (event) {
            event.target.mute();
          }
        }
        });
      }
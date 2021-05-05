(function () {
  var video = document.querySelector("#player");

  if (Hls.isSupported()) {
    var hls = new Hls();
    hls.loadSource(
      "https://fresh-play.ccsupport.cn/live/appdcct21/playlist.m3u8"
    );
    hls.attachMedia(video);
    hls.on(Hls.Events.MANIFEST_PARSED, function () {
      video.play();
    });
  }

  plyr.setup(video);
})();

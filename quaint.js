type="text/javascript"
const sound = new Audio();
audio.src = "./MLG.mp3";






pic.addEventListener('mouseover', function() {
    [].forEach.call(audios, function(audio) {
      // do whatever
      sound.play();
    });
    }, false);
    
    pic.addEventListener('mouseleave', function() {
      sound.pause();
      sound.currentTime = 0;
    }, false);
    
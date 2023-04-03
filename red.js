let i = -1;


    function red_reboot() {
        if (i != -1)
            i = -1;
        else i = 0;
   
        let c;
        requestAnimationFrame(c = () => {
            if (i == -1) {
                document.body.style.backgroundColor = ""
                return;
            }
   
            i++;
            document.body.style.backgroundColor = (i & 1) ? "#f00" : ""
   
            requestAnimationFrame(c);
        });


       
  var music = new Audio('red_reboot.mp3');
  music.play();


  }
   
function warning(){
    alert("//RED REBOOT : VIRUS DECTECTED IN THE BOOT SECTOR");

}
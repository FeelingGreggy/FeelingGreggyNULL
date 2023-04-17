function chaosReborn() {
    var body = document.body;
    body.style.backgroundColor = "black";
    const elements = document.querySelectorAll('*');
for (let i = 0; i < elements.length; i++) {
  elements[i].style.color = "limegreen";
}

document.getElementById("trackingDiv").style.backgroundColor = "black";
document.getElementById("shippingCon").style.backgroundColor = "black";
document.getElementById("terms").style.backgroundColor = "black";

var music = new Audio('MLG.mp3');
music.play();




  }
  
  
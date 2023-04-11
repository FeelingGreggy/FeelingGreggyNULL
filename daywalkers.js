
//Auto muti pop ups
setInterval(() => {
    showPopup();
    setTimeout(showPopup, 100);
}, 2_000);




//setTimeout(showPopup, 4_000);
//setTimeout(showPopup, 7_000);

let popup; // global variable for state management
function showPopup() { // call twice to remove popup
    // if the popup already exists, remove it
    if (popup) {
        popup.parentNode.removeChild(popup);
        popup = undefined;
        return;
    }

    // create image popup
    popup = document.createElement("img");
    popup.src = "Daywalker.jpg";
    var boom = new Audio('VineBoom.mp3');
    boom.play();
    Object.assign(popup.style, {
        zIndex: 10000,
        position: "fixed",
        top: "0px",
        left: "0px",
        width: "100vh",
    });

    document.body.appendChild(popup);

}


// This is a comment

function createRainbowEffect(elementId) {
    var rainbowColors = [
        'red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet', 'lime'
    ];

    const TARGET = document.getElementById("tippyTop");
    const target2 = document.getElementById("onItNull");

    var text = TARGET.innerText;
    var text2 = target2.innerText;

    let rainbowText = '';
    let rainbowText2 = '';

    for (var i = 0; i < text.length; i++) {
        var color = rainbowColors[i % rainbowColors.length];
        rainbowText += '<span style="color:' + color + '">' + text[i] + '</span>';
    }

    for (var i = 0; i < text2.length; i++) {
        var color = rainbowColors[i % rainbowColors.length];
        rainbowText2 += '<span style="color:' + color + '">' + text2[i] + '</span>';
    }

    TARGET.innerHTML = rainbowText;
    target2.innerHTML = rainbowText2;
}

// EVOKE THE RAINBOW, KIDDO!!!!

createRainbowEffect('rainbowText');


function todd_onEnter() {
    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if (user  === "tptodd" && pass === "circles") {
        document.location = "TPTODD.html";
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }
    else if (user  === "gregmiller" && pass === "missingdoor") {
        document.location = "BIG-GM.html";
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }
    else if (user === "admin" && pass === "kasumi"){
        document.location = "admin.html";
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }
    else if (user === "lightwav" && pass === "gasstation"){
        document.location = "lightwav.html";
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }
    else if (user === "klark" && pass === "arttable"){
        document.location = "klark.html";
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }
    else {
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
        alert("LOGIN FAILURE");
    }
}




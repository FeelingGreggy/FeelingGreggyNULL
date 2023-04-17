function address_onEnter(e) {
    const val = document.getElementById("address").value;
    if (val[val.length - 1] == "\n") {
        alert("ADDRESS CONFIRMED.");
        document.getElementById("address").value = "";
    }
}

function socialSec_onEnter(e) {
    const val = document.getElementById("socialSec").value;
    if (val[val.length - 1] == "\n") {
        alert("Social Security CONFIRMED.");
        document.getElementById("socialSec").value = "";
    }
}

function name_onEnter(e) {
    const val = document.getElementById("nombre").value;
    if (val  === "IAMTHOU") {
        document.location = "admin.html";
        document.getElementById("nombre").value = "";

    }
    else if (val[val.length - 1] == "\n") {
        alert("NAME CONFIRMED.");
        document.getElementById("nombre").value = "";
    }
}


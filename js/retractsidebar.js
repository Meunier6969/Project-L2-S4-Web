let sideBar = document.getElementById("side-bar-left");
let iconsColumn = document.getElementById("side-bar-icons");
let arrowColumn = document.getElementById("side-bar-arrow");
let arrow = document.querySelector("#side-bar-retractationarrow img");

// Opened by default
let retracted = false;
// iconsColumn.style.borderRight = "0pt solid";

function toggleSideBar() {
    // if (retracted) openSideBar();
    // else retractSideBar();
    document.getElementById("side-bar").classList.toggle("side-bar-closed")
    retracted = !retracted;
}

function lowerMain() {
    document.getElementById("categories").style.marginTop = "4em";
}

function upperMain() {
    document.getElementById("categories").style.marginTop = "1em";
}

function headerBottom() {}

function headerSide() {}

function verifyIfRectractation() {
    if (window.innerWidth < 1565) {
        document.getElementById("side-bar-retractationarrow").style.display = "none";
        document.getElementById("side-bar").classList.add("side-bar-closed");
    } else if (window.innerWidth > 1565) {
        document.getElementById("side-bar-retractationarrow").style.display = "flex";
        if(!retracted){
            document.getElementById("side-bar").classList.remove("side-bar-closed");
        }
    }

    if (window.innerWidth < 1300) {
        lowerMain();
    } else if (window.innerWidth > 1300) {
        upperMain();
    }
    if (window.innerWidth < 983) {
    } else if (window.innerWidth > 983) {
    }
}

window.addEventListener("load", verifyIfRectractation);
window.addEventListener("resize", verifyIfRectractation);

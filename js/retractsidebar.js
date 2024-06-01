let sideBar = document.getElementById("side-bar-left");
let iconsColumn = document.getElementById("side-bar-icons");
let arrowColumn = document.getElementById("side-bar-arrow");
let arrow = document.querySelector("#side-bar-retractationarrow img");

// Opened by default
let retracted = false;
iconsColumn.style.borderRight = "0pt solid";

function retract() {

    if (retracted) {
        // Opening the side bar
        sideBar.style.display = "flex";
        arrowColumn.style.backgroundColor = "coral";
        arrow.style.transform = "scaleX(1)";
        
        arrowColumn.style.borderRight = "3pt solid";
        iconsColumn.style.borderRight = "0pt solid";
        
        retracted = false;
        
    } else {
        // Closing the side bar
        sideBar.style.display = "none";
        arrowColumn.style.backgroundColor = "rgba(0,0,0,0)";
        arrow.style.transform = "scaleX(-1)";
        
        arrowColumn.style.borderRight = "0pt solid";
        iconsColumn.style.borderRight = "3pt solid";

        retracted = true;
    }

}
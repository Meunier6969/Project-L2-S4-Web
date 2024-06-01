let retracted = false;

function retract() {
    let sideBar = document.getElementById("side-bar-left");
    let arrowColumn = document.getElementById("side-bar-arrow");

    if (retracted) {
        sideBar.style.display = "flex";
        arrowColumn.style.backgroundColor = "coral";
        retracted = false;
        
    } else {
        sideBar.style.display = "none";
        arrowColumn.style.backgroundColor = "rgba(0,0,0,0)";
        retracted = true;
    }
}
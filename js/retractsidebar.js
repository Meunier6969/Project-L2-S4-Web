let retracted = false;

function retract() {
    let sideBar = document.getElementById("side-bar-left");
    let arrowColumn = document.getElementById("side-bar-arrow");
    let arrow = document.querySelector("#side-bar-retractationarrow img");

    if (retracted) {
        // Opening the side bar
        sideBar.style.display = "flex";
        arrowColumn.style.backgroundColor = "coral";
        arrow.style.transform = "scaleX(1)";
        
        retracted = false;
        
    } else {
        // Closing the side bar
        sideBar.style.display = "none";
        arrowColumn.style.backgroundColor = "rgba(0,0,0,0)";
        
        arrow.style.transform = "scaleX(-1)";
        retracted = true;
    }

}
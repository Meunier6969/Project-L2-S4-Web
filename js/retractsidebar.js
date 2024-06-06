let sideBar = document.getElementById("side-bar-left");
let iconsColumn = document.getElementById("side-bar-icons");
let arrowColumn = document.getElementById("side-bar-arrow");
let arrow = document.querySelector("#side-bar-retractationarrow img");

// Opened by default
let retracted = false;
iconsColumn.style.borderRight = "0pt solid";

function toggleSideBar() {
    if (retracted) 
        openSideBar();
    else 
        retractSideBar();
}

function retractSideBar() {
    sideBar.style.display = "none";
    arrowColumn.style.backgroundColor = "rgba(0,0,0,0)";
    arrow.style.transform = "scaleX(-1)";
    
    arrowColumn.style.borderRight = "0pt solid";
    iconsColumn.style.borderRight = "3pt solid var(--grey)";
    iconsColumn.style.marginLeft = "1em";
    iconsColumn.style.paddingRight = "1em";
    iconsColumn.style.marginRight = "0.5em";

    retracted = true;
}

function openSideBar() {
    sideBar.style.display = "flex";
    // arrowColumn.style.backgroundColor = "coral";
    arrow.style.transform = "scaleX(1)";

    arrowColumn.style.borderRight = "3pt solid var(--grey)";
    iconsColumn.style.borderRight = "0pt solid";
    iconsColumn.style.marginLeft = "2.5em";
    iconsColumn.style.paddingRight = "0.7em";
    iconsColumn.style.marginRight = "0em";

    retracted = false;
}

function verifyIfRectractation() {
    if(window.innerWidth < 1565){
        retractSideBar();
    }
    else if (window.innerWidth > 1565) {
        openSideBar();
    }
    if(window.innerWidth < 500){
            
    }
}

window.addEventListener('resize', verifyIfRectractation);
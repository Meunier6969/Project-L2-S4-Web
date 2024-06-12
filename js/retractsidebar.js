let sideBar = document.getElementById("side-bar-left");
let iconsColumn = document.getElementById("side-bar-icons");
let arrowColumn = document.getElementById("side-bar-arrow");
let arrow = document.querySelector("#side-bar-retractationarrow img");

const sidebaronside = `
		<div id="side-bar-logo-title">
			<img src="../img/Penser_Logo.svg" alt="">
		</div>

		<div id="side-bar-icons">
			<div id="side-bar-icons-logo"></div>
			<div id="side-bar-icons-tabs">
				<a id="side-bar-icons-home" href="home.html">
					<img src="../img/home.svg" alt="Home icon">
				</a>
				<a id="side-bar-icons-search" href="404.html">
					<img src="../img/Search.svg" alt="Search incon">
				</a>
				<a id="side-bar-icons-achievement" href="404.html">
					<img src="../img/Achievements.svg" alt="Achievement icon">
				</a>
				<a id="side-bar-icons-zapper" href="404.html">
					<img src="../img/Zapper.svg" alt="Zapper icon">
				</a>
			</div>
			<div id="side-bar-icons-pied">
				<a href="profile.html" id="side-bar-icons-profile">
					<img src="../img/no_img_profile.svg" alt="Profile icon">
				</a>
				<a id="side-bar-icons-parameters" href="404.html">
					<img src="../img/parameters.svg" alt="Profile icon">
				</a>
			</div>
		</div>

		<div id="side-bar-left">
			<div id="side-bar-logo"></div>
			<div id="side-bar-tabs">
				<a id="side-bar-tabs-home" href="home.html">
					<span class="side-bar-text">Home</span>
				</a>
				<a id="side-bar-tabs-search" href="404.html">
					<span class="side-bar-text">Search</span>
				</a>
				<a id="side-bar-tabs-achievement" href="404.html">
					<span class="side-bar-text">Achievements</span>
				</a>
				<a id="side-bar-tabs-zapper" href="404.html">
					<span class="side-bar-text">Zapper</span>
				</a>
			</div>
			<div id="side-bar-pied">
				<a id="side-bar-pied-profile" href="profile.html">
						<span class="side-bar-text">Profile</span>
				</a>
				<a id="side-bar-pied-parameters" href="404.html">
					<span class="side-bar-text">Parameters</span>
				</a>
			</div>
		</div>

		<div id="side-bar-arrow">
			<div id="side-bar-retractationarrow" onclick="toggleSideBar()">
				<img src="../img/header_arrow.svg" alt="Retract arrow icon">
			</div>
		</div>
`;

const sidebaronbottom = `
<div id="bottom-bar-logo-title">
			<img src="../img/Penser_Logo.svg" alt="">
		</div>

		<div id="bottom-bar-icons">
			<div id="bottom-bar-icons-tabs">
				<div id="bottom-bar-icons-home">
					<img src="../img/home.svg" alt="Home icon">
				</div>
				<div id="bottom-bar-icons-search">
					<img src="../img/Search.svg" alt="Search incon">
				</div>
				<div id="bottom-bar-icons-achievement">
					<img src="../img/Achievements.svg" alt="Achievement icon">
				</div>
				<div id="bottom-bar-icons-zapper">
					<img src="../img/Zapper.svg" alt="Zapper icon">
				</div>
				<div id="bottom-bar-icons-profile">
					<img src="../img/no_img_profile.svg" alt="Profile icon">
				</div>
			</div>
		</div>
`;

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

function headerBottom() {
	let headerside = document.querySelector("#side-bar")
	let headerbottom = document.querySelector("#bottom-bar")

	if (headerside !== null) headerside.remove();
	if (headerbottom !== null) return;

	let newsidebar = document.createElement("header")
	newsidebar.id = "bottom-bar"
	newsidebar.innerHTML = sidebaronbottom
	document.querySelector("body").append(newsidebar)
}

function headerSide() {
	let headerside = document.querySelector("#side-bar")
	let headerbottom = document.querySelector("#bottom-bar")

	if (headerbottom !== null) headerbottom.remove();
	if (headerside !== null) return;

	let newsidebar = document.createElement("header")
	newsidebar.id = "side-bar"
	newsidebar.innerHTML = sidebaronside
	document.querySelector("body").append(newsidebar)
}

function verifyIfRectractation() {
	// Verify where the bar should go
	if (window.innerWidth < 983) {
		headerBottom();
		return;
	} else if (window.innerWidth > 983) {
		headerSide();
	}

	// Toggle if the bar can be retracted
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
}

window.addEventListener("load", verifyIfRectractation);
window.addEventListener("resize", verifyIfRectractation);

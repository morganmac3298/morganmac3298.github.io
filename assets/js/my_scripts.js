---
---
/* Sets all checkboxes to unchecked */
var colorized = false;

/* Color changing switch */
function switchBW() {
	//Check if the website is BW v NEON then switch classes
	if (colorized == false){
		var elements = document.getElementsByClassName("BW");
		while (elements.length > 0){
			elements[0].classList.toggle("NEON");
			elements[0].classList.toggle("BW");
		}
		var color_button = document.getElementById("color_button");
		color_button.textContent = "Greyscale";
		colorized = true;
	}
	else {
		var elements = document.getElementsByClassName("NEON");
		while (elements.length > 0){
			elements[0].classList.toggle("BW");
			elements[0].classList.toggle("NEON");
		}
		var color_button = document.getElementById("color_button");
		color_button.textContent = "Pastel";
		colorized = false;
	}
}


/* Lock to full-screen */
function lock() {
	screen.orientation.lock('landscape');
	console.log("Changed orientation to landscape");	
}

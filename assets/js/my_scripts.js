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
		// Change button words
		var color_button = document.getElementById("color_button");
		color_button.textContent = "Greyscale";
		// Change icon img srcs to different color
		var linked_in = document.getElementById("linked");
		linked_in.src = "assets/img/in_pink.png";
		var email_icon = document.getElementById("email");
		email_icon.src = "assets/img/email_icon_pink.png";
		// Set colorized switch to true
		colorized = true;
	}
	else {
		var elements = document.getElementsByClassName("NEON");
		while (elements.length > 0){
			elements[0].classList.toggle("BW");
			elements[0].classList.toggle("NEON");
		}
		// Change button words
		var color_button = document.getElementById("color_button");
		color_button.textContent = "Pastel";
		// Change icon img srcs to different color
		var linked_in = document.getElementById("linked");
		linked_in.src = "assets/img/in_grey.png";
		var email_icon = document.getElementById("email");
		email_icon.src = "assets/img/email_icon_grey.png";
		// Set colorized switch to false
		colorized = false;
	}
}


/* Lock to full-screen */
function lock() {
	screen.orientation.lock('landscape');
	console.log("Changed orientation to landscape");	
}

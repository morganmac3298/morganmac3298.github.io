/* Sets all checkboxes to unchecked */
//var checkboxes = document.getElementsByTagName('input');
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
		colorized = true;
	}
	else {
		var elements = document.getElementsByClassName("NEON");
		while (elements.length > 0){
			elements[0].classList.toggle("BW");
			elements[0].classList.toggle("NEON");
		}
		colorized = false;
	}
}

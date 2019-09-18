/* Sets all checkboxes to unchecked */
var checkboxes = document.getElementsByTagName('input');

for (var i=0; i<checkboxes.length; i++)  {
  if (checkboxes[i].type == 'checkbox')   {
    checkboxes[i].checked = false;
  }
}

/* Color changing switch */
function switchBW() {
	var checkBox = document.getElementById("bwToggler");

	if (checkBox.checked){
		var elements = document.getElementsByClassName("BW");
		while (elements.length > 0){
			elements[0].classList.toggle("NEON");
			elements[0].classList.toggle("BW");
		}
	}
	else {
		var elements = document.getElementsByClassName("NEON");
		while (elements.length > 0){
			elements[0].classList.toggle("BW");
			elements[0].classList.toggle("NEON");
		}
	}
}
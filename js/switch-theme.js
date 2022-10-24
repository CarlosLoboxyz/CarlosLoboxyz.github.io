// Get the theme toggle input

// If the current local storage item can be found
const currentTheme = localStorage.getItem("theme");

// Function that will switch the theme based on the if the theme toggle is checked or not
function switchTheme() {
  	if (document.documentElement.getAttribute("data-theme") === "dark") {
    	document.documentElement.setAttribute("data-theme", "light");
    	// Set the user's theme preference to dark
    	localStorage.setItem("theme", "light");
  	} else {
    	document.documentElement.setAttribute("data-theme", "dark");
    	// Set the user's theme preference to light
    	localStorage.setItem("theme", "dark");
  	}
	// Get all the animate elements & add an animation.
	[...document.getElementsByClassName('animate')].forEach((element) => {
		element.style.transition = "0.4s";
	});
}


// Get the current theme from local storage
if (currentTheme) {
  // Set the body data-theme attribute to match the local storage item
  document.documentElement.setAttribute("data-theme", currentTheme);
}

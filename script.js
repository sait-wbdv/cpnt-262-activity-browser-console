// DOM Manipulation
// getElementByID method
document.getElementById("buggy-image").src = "dog.jpg"
// console.log(document.getElementById("buggy-image"));

// getElementsByClassName
let textElements = document.getElementsByClassName('text-style');

textElements[0].textContent = "Welcome to our animal Collection";

textElements[1].textContent = " Details include images and names of animals";

// querySelector
let textElementsByQuerySelector = document.querySelectorAll('.text-style')

textElementsByQuerySelector[0].textContent = "Welcome to our animal List";

textElementsByQuerySelector[1].textContent = " Include images and names of animals";

// Create Elements
const bodyElement = document.getElementById("text-class");

const parahraphElement = document.createElement('p');
parahraphElement.textContent = "Testing Paragraph 1"

bodyElement.appendChild(parahraphElement);


// Browser Console
document.getElementById("buggy-button").addEventListener("click", function () {
    console.log("Button Clicked!");
})

var lastName = "Elo";
const COLOURS = ["white", "red", "blue"];
COLOURS = ["white", "red", "green"];
let colourWhite = COLOURS[0];
colourWhite = "#fff";



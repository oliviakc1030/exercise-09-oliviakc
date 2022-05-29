/* My first program (in JavaScript) */

//Log out a message to show you've got JavaScript running
console.log("Script running! is good"); //prints

//Define a variable `myName` and log it out
let myName = "Olivia KC"
console.log(myName)

//Define a function `getVowelCount()`
function getVowelCount(aString) {
    let lowerCaseString = aString.toLowerCase();
    let modifiedString = lowerCaseString.replaceAll("a","").
        replaceAll("e","").
        replaceAll("i","").
        replaceAll("o","").
        replaceAll("u","").
        replaceAll("y","");
    let numVowelName = (lowerCaseString.length - modifiedString.length);
    return numVowelName
}

//Define a variable `numVowelsInName` and log it out
let numVowelIsInName = getVowelCount(myName);
console.log(numVowelIsInName);

//Create a variable `h1Elememt` that refers to the `<h1>` element in the DOM.
let h1Element = $('h1') //refers to all 

//Then change the text of that element
h1Element.text("Interactive Pet Viewer")

//Create a variable `footerElement` that refers to the `<footer>`, then
let footerElement = $('footer')

//change the HTML content of that element
footerElement.html("<small>All images from <a href='https://unsplash.com/'>unsplash.com</a></small>")

//Change the CSS `display` property of the `#cats` element
let display = $('#cats')
display.css("display","none")

//Add the `active` class to the `#btnShowDogs` element

let button = $('#btnShowDogs')
button.addClass("active")

//Add an event listener to the buttons to respond to click events.
  

//The listener's function will toggle the `#dogs` and `#cats` divs,

//and toggle which button has the `active` class

//Change the `cursor` CSS property of the images


//Add the `data-bs-toggle` and `data-bs-target` attributes to the images

//Ad an event listener to the modal for `show.bs.modal` events.
//The listener's function will replace the modal's image `src` and
//`alt` attributes with the values from the clicked image.
// Get the div we want to change color as a variable object we can manipulate
const square = document.querySelector(".color-square");

// Get the original color for the div
const originalColor = square.style.backgroundColor;

// Used with a timer in function below to distinguish between a single click and a double click
let numClicks = 0;

// Change the color when hovering over the div
function hover(element, color){
    element.addEventListener('mouseenter', e => element.style.background = color)
    element.addEventListener('mouseleave', e => element.style.background = originalColor)
  }

hover(square, "lightblue")


// Change the color of the div when the mouse button is pushed down over it
function buttonDown(element, colorDown) {
    element.addEventListener("mousedown", e => element.style.background = colorDown);
}

buttonDown(square, "red")


// Change the color of the div depending if there is a single click or a double click
function clicks(element, colorOne, colorTwo) {
    element.addEventListener("click", () => {
        numClicks ++;
        if (numClicks == 1) {

            // this timer function helps determine if there was one click or two
            setTimeout(function(){
                if(numClicks == 1) {
                    element.style.background = colorOne;
                } else {
                    element.style.background = colorTwo;
                }
                numClicks = 0;
            }, 300);
        }
    })

}

clicks(square, "yellow", "green")


// Change the color of the div if the scroll wheel on the mouse is used anywhere in the window.
function scroll(element, color) {
    window.addEventListener("scroll", e => element.style.background = color)
}

scroll(square, "orange");


// Get the buttons and number element
const decrementButton = document.getElementById("decrementButton");
const incrementButton = document.getElementById("incrementButton");
const numberElement = document.getElementById("number");

let number = 0;

// Add event listeners to the buttons
decrementButton.addEventListener("click", () => {
  if (number === 0) {
    alert("Cannot decrement further!");
  } else {
    number--;
    numberElement.textContent = number;
  }
});

incrementButton.addEventListener("click", () => {
  number++;
  numberElement.textContent = number;
});

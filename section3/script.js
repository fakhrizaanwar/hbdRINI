// Set the initial counter value here
let count = 12684929638;  // Adjust this number to set the initial counter value
const counterElement = document.getElementById("counter");
const bigMessagesContainer = document.getElementById("bigMessages");

// Set the initial counter value in the HTML
counterElement.innerHTML = count + " lefts";  // Adding "lefts" to the display

document.getElementById("celebrateButton").addEventListener("click", function() {
  if (count > 0) {
    // Decrease the counter
    count--;
    counterElement.innerHTML = count + " lefts";  // Update the counter with "lefts"

    // Append a big message with fade-in effect
    const message = document.createElement("div");
    message.classList.add("big-message");
    message.innerHTML = "Happy Birthday, Rini ❤️";  // Updated message with love emoticon
    bigMessagesContainer.appendChild(message);
  } else {
    // If counter is 0, you can display a message
    alert("Happy Birthday Rini! All done for now!");
  }
});

// Skip button functionality
document.getElementById("skipButton").addEventListener("click", function() {
  window.location.href = "../section4/index.html"; // Redirect to section4
});

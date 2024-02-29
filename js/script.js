let displayValue = '0'; // Initialize displayValue to '0'

function appendToDisplay(value) {
  if (displayValue === '0') {
    displayValue = ''; // If displayValue is '0', clear it before appending new value
  }
  displayValue += value; // Append the clicked value to the display
  updateDisplay(); // Update the display
}

function clearDisplay() {
  displayValue = '0'; // Reset the displayValue to '0'
  updateDisplay(); // Update the display
}

function calculateResult() {
  try {
    const result = eval(displayValue); // Evaluate the expression
    displayValue = result.toString(); // Convert result to string
    updateDisplay(); // Update the display
  } catch (error) {
    displayValue = 'Error'; // Display error message if an error occurs
    updateDisplay(); // Update the display
  }
}

function updateDisplay() {
  const display = document.getElementById('display'); // Get the display element
  display.textContent = displayValue; // Set the display value
}

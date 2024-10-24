// Get the display element where numbers will show up
const display = document.getElementById('display');

// Function to clear the display (AC button)
function clearDisplay() {
    display.textContent = '0'; // Reset the display to 0
}

// Function to delete the last character (DE button)
function deleteLast() {
    if (display.textContent.length === 1) {
        display.textContent = '0'; // If only 1 character left, reset to 0
    } else {
        display.textContent = display.textContent.slice(0, -1); // Remove the last character
    }
}

// Function to add numbers and symbols to the display
function appendToDisplay(value) {
    if (display.textContent === '0' && value !== '.') {
        display.textContent = value; // Replace the 0 with the new value
    } else {
        display.textContent += value; // Add the new value to the end
    }
}

// Function to calculate the result when = button is clicked
function calculateResult() {
    try {
        let result = display.textContent.replace('×', '*').replace('÷', '/'); // Replace symbols for JS
        display.textContent = eval(result); // Calculate and show result
    } catch (error) {
        display.textContent = 'Error'; // If something goes wrong, show Error
    }
}

// Get the theme toggle button
const themeToggleButton = document.getElementById('theme-switch');
// Get the sun and moon icons
const sunIcon = document.getElementById('sun-icon');
const moonIcon = document.getElementById('moon-icon');

// Add event listener to the button to toggle theme
themeToggleButton.addEventListener('click', function () {
    // Toggle the 'light-theme' class on the body
    document.body.classList.toggle('light-theme');

    // Check if the light theme is active
    if (document.body.classList.contains('light-theme')) {
        // Switch to light theme (show sun icon, hide moon icon)
        sunIcon.style.display = 'inline';
        moonIcon.style.display = 'none';
    } else {
        // Switch to dark theme (show moon icon, hide sun icon)
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline';
    }
});


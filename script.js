//your JS code here. If required.
// script.js
const toggleButton = document.getElementById('toggle-button');
const body = document.body;

// Check for saved 'darkMode' in localStorage
const darkMode = localStorage.getItem('darkMode');
if (darkMode === 'enabled') {
  body.classList.add('dark-mode');
}

toggleButton.onclick = function() {
  body.classList.toggle('dark-mode');
  // Save the current preference to localStorage
  if (body.classList.contains('dark-mode')) {
    localStorage.setItem('darkMode', 'enabled');
  } else {
    localStorage.setItem('darkMode', 'disabled');
  }
};

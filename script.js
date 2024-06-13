// Select the dark mode toggle switch
const darkModeToggle = document.getElementById("dark-mode-toggle");

// Select the body element
const body = document.getElementById("body");

// Check the user's preferred color scheme and set the initial mode accordingly
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  body.classList.add(currentTheme);
}

// Function to toggle between light and dark mode
function toggleDarkMode() {
  if (body.classList.contains("dark-mode")) {
    body.classList.remove("dark-mode");
    localStorage.setItem("theme", "light-mode");
  } else {
    body.classList.add("dark-mode");
    localStorage.setItem("theme", "dark-mode");
  }
}

// Event listener for the dark mode toggle switch
darkModeToggle.addEventListener("change", toggleDarkMode);

let input = document.getElementById("nameInput");
let saveBtn = document.getElementById("saveBtn");
let removeBtn = document.getElementById("removeBtn");
let toggleDark = document.getElementById("toggleDark");
let clearAll = document.getElementById("clearAll");
let display = document.getElementById("displayName");

// Load saved name when page loads
window.addEventListener("DOMContentLoaded", function () {
  let savedName = localStorage.getItem("userName");

  if (savedName) {
    display.textContent = "Saved Name: " + JSON.parse(savedName);
  }

  let darkMode = localStorage.getItem("darkMode");

  if (darkMode === "true") {
    document.body.classList.add("dark-mode");
  }
});

// Save Name
saveBtn.addEventListener("click", function () {
  let nameValue = input.value;

  localStorage.setItem("userName", JSON.stringify(nameValue));

  display.textContent = "Saved Name: " + nameValue;

  input.value = "";
});

// Remove Name
removeBtn.addEventListener("click", function () {
  localStorage.removeItem("userName");

  display.textContent = "";
});

// Toggle Dark Mode
toggleDark.addEventListener("click", function () {
  document.body.classList.toggle("dark-mode");

  let isDark = document.body.classList.contains("dark-mode");

  localStorage.setItem("darkMode", JSON.stringify(isDark));
});

// Clear All Data
clearAll.addEventListener("click", function () {
  localStorage.clear();

  display.textContent = "";

  document.body.classList.remove("dark-mode");
});

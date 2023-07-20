const darkModeKey = "darkModeEnabled";
const checkbox = document.querySelector(".toggle-checkbox");
const toggleThumb = document.querySelector(".toggle-thumb");

const darkModeEnabled = localStorage.getItem(darkModeKey) === "true";

const checkboxChecked = localStorage.getItem("checkboxChecked") === "true";

if (darkModeEnabled) {
  document.body.classList.add("nightMode", "disable-transition");
}

checkbox.checked = checkboxChecked;

const toggleDarkMode = () => {
  document.body.classList.toggle("nightMode");
  localStorage.setItem(
    darkModeKey,
    document.body.classList.contains("nightMode")
  );
  localStorage.setItem("checkboxChecked", checkbox.checked);
};

checkbox.addEventListener("click", () => {
  checkbox.classList.add("toggled-once");
  toggleDarkMode();
});

toggleThumb.addEventListener("click", () => {
  toggleThumb.classList.add("toggled-once");
  toggleDarkMode();
});

if (checkbox.classList.contains("toggled-once") && darkModeEnabled) {
  checkbox.checked = true;
  toggleThumb.classList.add("toggled-once");
} else {
  if (checkbox.checked) {
    toggleThumb.style.transform = "translateX(22px)";
  } else {
    toggleThumb.style.transform = "translateX(0)";
  }
}
document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.remove("disable-transition");
});

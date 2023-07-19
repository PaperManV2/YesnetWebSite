function toggleNightMode() {
  const body = document.body;
  body.classList.toggle("night-mode");

  const nightModeLabel = document.getElementById("nightModeLabel");
  nightModeLabel.classList.toggle("night-mode");
}

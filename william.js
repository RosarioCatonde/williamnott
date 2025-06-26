const toggleBtn = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");

function setTheme(mode) {
  document.body.classList.toggle("light-mode", mode === "light");
  themeIcon.className = mode === "light" ? "fas fa-sun" : "fas fa-moon";
  localStorage.setItem("theme", mode);
}

toggleBtn.addEventListener("click", () => {
  const isLight = document.body.classList.contains("light-mode");
  setTheme(isLight ? "dark" : "light");
});

window.onload = () => {
  const savedTheme = localStorage.getItem("theme") || "dark";
  setTheme(savedTheme);
};
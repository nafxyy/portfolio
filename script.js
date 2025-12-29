// simple animation on scroll
const sections = document.querySelectorAll(".section");

window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.style.opacity = 1;
      sec.style.transform = "translateY(0)";
    }
  });
});

function toggleExp(element) {
  const content = element.nextElementSibling;
  const isOpen = content.style.display === "block";

  document.querySelectorAll(".experience-content").forEach(item => {
    item.style.display = "none";
  });

  content.style.display = isOpen ? "none" : "block";
}

const themeBtn = document.getElementById("themeToggle");

function setTheme(mode) {
  if (mode === "light") {
    document.body.classList.add("light-mode");
    themeBtn.textContent = "☀️";
  } else {
    document.body.classList.remove("light-mode");
    themeBtn.textContent = "🌙";
  }
}

// Toggle click
themeBtn.addEventListener("click", () => {
  const isLight = document.body.classList.contains("light-mode");
  const newTheme = isLight ? "dark" : "light";
  setTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});

// Load theme on refresh
window.onload = () => {
  const savedTheme = localStorage.getItem("theme") || "dark";
  setTheme(savedTheme);
};




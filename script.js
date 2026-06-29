/* =========================
   DARK / LIGHT THEME TOGGLE
========================= */

const themeBtn = document.getElementById("themeBtn");

// check saved theme (optional improvement)
const savedTheme = localStorage.getItem("theme");

if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);

  if (savedTheme === "dark") {
    themeBtn.textContent = "☀️";
  }
}

themeBtn.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");

  if (currentTheme === "dark") {
    document.documentElement.removeAttribute("data-theme");
    localStorage.setItem("theme", "light");
    themeBtn.textContent = "🌙";
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
    themeBtn.textContent = "☀️";
  }
});

/* =========================
   SMOOTH SCROLL (optional UX boost)
========================= */

document.querySelectorAll("a[href^='#']").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});

const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

const menuBtn = document.getElementById("menuBtn");
const mobileNav = document.getElementById("mobileNav");

if (menuBtn && mobileNav) {
  menuBtn.addEventListener("click", () => {
    const isOpen = mobileNav.style.display === "block";
    mobileNav.style.display = isOpen ? "none" : "block";
  });

  // Close menu when a link is clicked
  mobileNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => (mobileNav.style.display = "none"));
  });
}

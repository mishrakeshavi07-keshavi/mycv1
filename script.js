/* ==========================================================================
   RIYA KAPOOR — DIGITAL MARKETING CV
   Minimal static behaviour: mobile menu toggle, skill bar widths, footer year
   (No scroll animations, transitions, or hover effects)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  initMobileNav();
  setSkillBarWidths();
  initCurrentYear();
});

/* Mobile hamburger menu */
function initMobileNav() {
  const toggleBtn = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (!toggleBtn || !navLinks) return;

  toggleBtn.addEventListener("click", () => {
    navLinks.classList.toggle("is-open");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navLinks.classList.remove("is-open");
    });
  });
}

/* Set skill bar fill widths directly from data-value (no animation) */
function setSkillBarWidths() {
  document.querySelectorAll(".skill-bar-fill").forEach((bar) => {
    const value = bar.getAttribute("data-value") || "0";
    bar.style.width = `${value}%`;
  });
}

/* Footer year */
function initCurrentYear() {
  document.querySelectorAll("[data-year]").forEach((el) => {
    el.textContent = new Date().getFullYear();
  });
}
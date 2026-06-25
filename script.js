
// Scroll spy + nav shrink
const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-links a");
const nav = document.getElementById("mainNav");

window.addEventListener("scroll", () => {
  // Active link
  let current = "";
  sections.forEach(s => {
    if (window.scrollY >= s.offsetTop - 140) current = s.id;
  });
  navLinks.forEach(a => {
    a.classList.toggle("active-link", a.getAttribute("href") === "#" + current);
  });
  // Nav shrink
  nav.classList.toggle("scrolled", window.scrollY > 50);
});

// Intersection Observer for scroll animations
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".skill-card, .ach-card, .t-content, .detail-card, .gallery-item").forEach(el => {
  el.style.opacity = "0";
  el.style.transform = "translateY(20px)";
  el.style.transition = "opacity 0.5s ease, transform 0.5s ease";
  observer.observe(el);
});

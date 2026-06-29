document.body.classList.add("loading");

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    if (loader) loader.classList.add("hidden");
    document.body.classList.remove("loading");
  }, 1700);
});

const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".nav");

if (menuBtn && nav) {
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}

const fadeItems = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

fadeItems.forEach((item) => observer.observe(item));

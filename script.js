const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}

const fadeItems = document.querySelectorAll(".fade-up");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

fadeItems.forEach((item) => observer.observe(item));

const form = document.querySelector(".pickup-form");

if (form) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    alert("Pickup request received! Next we will connect this form to your real booking system.");
  });
}

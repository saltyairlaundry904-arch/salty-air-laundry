document.body.classList.add("loading");

window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  setTimeout(() => {
    if (loader) loader.classList.add("hidden");
    document.body.classList.remove("loading");
  }, 900);
});

const menuButton = document.querySelector(".menu-button");
const nav = document.querySelector(".nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => nav.classList.toggle("open"));
  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => nav.classList.remove("open"));
  });
}

const fadeItems = document.querySelectorAll(".fade");
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

fadeItems.forEach((item) => observer.observe(item));

const soundToggle = document.getElementById("soundToggle");
const oceanAudio = document.getElementById("oceanAudio");

if (soundToggle && oceanAudio) {
  let playing = false;
  soundToggle.addEventListener("click", async () => {
    try {
      if (!playing) {
        oceanAudio.volume = 0;
        await oceanAudio.play();
        playing = true;
        soundToggle.textContent = "🌊 Amelia Island Ambience — On";
        let volume = 0;
        const fadeIn = setInterval(() => {
          volume += 0.05;
          oceanAudio.volume = Math.min(volume, 0.55);
          if (volume >= 0.55) clearInterval(fadeIn);
        }, 90);
      } else {
        let volume = oceanAudio.volume;
        const fadeOut = setInterval(() => {
          volume -= 0.05;
          oceanAudio.volume = Math.max(volume, 0);
          if (volume <= 0) {
            oceanAudio.pause();
            oceanAudio.currentTime = 0;
            clearInterval(fadeOut);
          }
        }, 70);
        playing = false;
        soundToggle.textContent = "🌊 Hear the Ocean";
      }
    } catch (error) {
      soundToggle.textContent = "🌊 Sound unavailable";
    }
  });
}

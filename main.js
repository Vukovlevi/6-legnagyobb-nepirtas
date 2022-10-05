const navToggleBtn = document.querySelector(".nav-toggle");
const navEl = document.querySelector("nav");

navToggleBtn.addEventListener("click", () => {
  navEl.classList.toggle("custom-visible");
});

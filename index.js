// Menu Mobile Hamburguer
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.querySelector("nav");

mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
  mobileMenu.classList.toggle("is-active");

  // Animação visual do menu hambúrguer mudando para um "X"
  const bars = document.querySelectorAll(".bar");
  if (mobileMenu.classList.contains("is-active")) {
    bars[0].style.transform = "rotate(-45deg) translate(-5px, 6px)";
    bars[1].style.opacity = "0";
    bars[2].style.transform = "rotate(45deg) translate(-5px, -6px)";
  } else {
    bars[0].style.transform = "none";
    bars[1].style.opacity = "1";
    bars[2].style.transform = "none";
  }
});

// Fechar menu ao clicar em algum link (Mobile)
document.querySelectorAll("nav a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    mobileMenu.classList.remove("is-active");
    document
      .querySelectorAll(".bar")
      .forEach((bar) => (bar.style.transform = "none"));
    document.querySelectorAll(".bar")[1].style.opacity = "1";
  });
});

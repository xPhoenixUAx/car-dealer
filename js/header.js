// Функція для ініціалізації мобільного меню
export function initializeMobileMenu() {
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navMenu = document.querySelector(".nav-menu");

  if (!mobileMenuBtn || !navMenu) {
    console.error("One or more elements not found in the DOM.");
    return;
  }

  mobileMenuBtn.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    mobileMenuBtn.classList.toggle("active");
  });
}

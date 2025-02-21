import { initializeMobileMenu } from "./js/header.js";
import { initializeFilter } from "./js/catalog.js";
import { initializeServiceCards } from "./js/services.js";
import { initializeAboutPageAnimations } from "./js/about.js";
import { initializeContactForm } from "./js/contact.js";
import { smoothScrollFooterLinks, parallaxFooterWave } from "./js/footer.js";
import { initCookieConsent } from "./js/cookie.js";
// Виклик функції після завантаження DOM
document.addEventListener("DOMContentLoaded", () => {
  // Викликаємо ініціалізацію мобільного меню після завантаження частин
  setTimeout(() => {
    initializeMobileMenu();
    initializeFilter();
    initializeServiceCards();
    initializeAboutPageAnimations();
    initializeContactForm();
    smoothScrollFooterLinks();
    parallaxFooterWave();
    initCookieConsent();
  }, 200); // Затримка на 200мс для гарантії завантаження HTML
});

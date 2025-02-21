// Функція для ініціалізації анімації та ефекту на мишу
export function initializeServiceCards() {
  const serviceCards = document.querySelectorAll(".service-card");

  // Встановлення порядку анімації
  serviceCards.forEach((card, index) => {
    card.style.setProperty("--animation-order", index);
  });

  // Налаштування Intersection Observer
  const observerOptions = {
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("animate");
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  // Спостереження за кожною картою
  serviceCards.forEach((card) => {
    observer.observe(card);
  });

  // Додавання ефекту на мишу
  serviceCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      card.style.setProperty("--mouse-x", `${x}px`);
      card.style.setProperty("--mouse-y", `${y}px`);
    });
  });
}

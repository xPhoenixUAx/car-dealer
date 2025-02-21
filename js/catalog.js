// filter.js
export function initializeFilter() {
  const filterButtons = document.querySelectorAll(".filter-btn");
  const carCards = document.querySelectorAll(".car-card");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");

      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      carCards.forEach((card) => {
        card.style.display = "none";
        card.style.animation = "none";
      });

      if (filter === "all") {
        carCards.forEach((card) => {
          card.style.display = "block";
          setTimeout(() => {
            card.style.animation = "fadeIn 0.5s ease forwards";
          }, 10);
        });
      } else {
        const filteredCards = document.querySelectorAll(
          `.car-card[data-category="${filter}"]`
        );
        filteredCards.forEach((card) => {
          card.style.display = "block";
          setTimeout(() => {
            card.style.animation = "fadeIn 0.5s ease forwards";
          }, 10);
        });
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const loadPartial = (id, file) => {
    fetch(file)
      .then((response) => response.text())
      .then((data) => (document.getElementById(id).innerHTML = data))
      .catch((error) => console.error(`Error loading ${file}:`, error));
  };

  loadPartial("header", "./partials/header.html"); // Завантаження header.html
  loadPartial("hero", "./partials/hero.html"); // Завантаження hero.html (за потребою)
  loadPartial("catalog", "./partials/catalog.html");
  loadPartial("services", "./partials/services.html"); // Завантаження services.html (за потребою)
  loadPartial("about", "./partials/about.html"); // Завантаження about.html (за потребою)
  loadPartial("contact", "./partials/contact.html");
  loadPartial("footer", "./partials/footer.html"); // Завантаження footer.html (за потребою)
});

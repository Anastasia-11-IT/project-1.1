// ===== ТЕМНА ТЕМА =====
const themeButton = document.getElementById("theme-toggle");

themeButton.addEventListener("click", function () {
    document.body.classList.toggle("dark-theme");
});


// ===== ПОШУК =====
const searchInput = document.getElementById("search-input");
const cards = document.querySelectorAll(".card");

searchInput.addEventListener("input", function () {

    const searchText = searchInput.value.toLowerCase();

    cards.forEach(function (card) {

        const cardText = card.textContent.toLowerCase();

        if (cardText.includes(searchText)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

});


// ===== МОДАЛЬНЕ ВІКНО =====
const modal = document.getElementById("modal");
const openButtons = document.querySelectorAll(".open-modal");
const closeButton = document.getElementById("close-modal");

// Відкрити
openButtons.forEach(function (button) {
    button.addEventListener("click", function () {
        modal.style.display = "flex";
    });
});

// Закрити
closeButton.addEventListener("click", function () {
    modal.style.display = "none";
});

// Закриття при кліку поза вікном
window.addEventListener("click", function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

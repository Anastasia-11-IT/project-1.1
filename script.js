// Знаходимо поле пошуку по id
const searchInput = document.getElementById("search-input");

// Знаходимо всі картки
const cards = document.querySelectorAll(".card");

// Перевірка (щоб не було помилки, якщо елемент не знайдений)
if (searchInput) {

    // Слухаємо введення тексту
    searchInput.addEventListener("input", function () {

        // Отримуємо текст користувача
        const searchText = searchInput.value.toLowerCase();

        // Перебираємо всі картки
        cards.forEach(function (card) {

            // Отримуємо текст картки
            const cardText = card.textContent.toLowerCase();

            // Порівнюємо
            if (cardText.includes(searchText)) {
                card.style.display = "block"; // показати
            } else {
                card.style.display = "none"; // сховати
            }

        });

    });

}

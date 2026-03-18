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

modal.style.display = "none";   // гарантує що модалка закрита при запуску

const openButtons = document.querySelectorAll(".open-modal");
const closeButton = document.getElementById("close-modal");
const modalText = document.getElementById("modal-text");

openButtons.forEach(function(button){

    button.addEventListener("click", function(){

        const trip = button.dataset.trip;

        if(trip === "paris"){
            modalText.textContent = "Париж — місто романтики, Ейфелевої вежі та неймовірної французької кухні. Ідеальна подорож для закоханих.";
        }

        if(trip === "bali"){
            modalText.textContent = "Балі — тропічний рай з пляжами, джунглями та неймовірними заходами сонця. Чудове місце для відпочинку.";
        }

        if(trip === "tokyo"){
            modalText.textContent = "Токіо — місто майбутнього, де сучасні технології поєднуються з традиційною японською культурою.";
        }

        modal.style.display = "flex";

    });

});

// Закрити
closeButton.addEventListener("click", function(){
    modal.style.display = "none";
});

// Закриття при кліку поза вікном
window.addEventListener("click", function(event){
    if(event.target === modal){
        modal.style.display = "none";
    }
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

// Автоматичне завантаження картинок

document.getElementById("paris-img").src =
"https://images.unsplash.com/photo-1502602898657-3e91760cbb34";

document.getElementById("bali-img").src =
"https://images.unsplash.com/photo-1507525428034-b723cf961d3e";

document.getElementById("tokyo-img").src =
"https://images.unsplash.com/photo-1549692520-acc6669e2f0c";

// ===== БРОНЮВАННЯ =====

const bookingModal = document.getElementById("booking-modal");
const bookButtons = document.querySelectorAll(".book-btn");
const closeBooking = document.getElementById("close-booking");
const tripInput = document.getElementById("trip");

// Відкрити форму
bookButtons.forEach(button => {
    button.addEventListener("click", () => {
        bookingModal.style.display = "flex";
        tripInput.value = button.dataset.trip;
    });
});

// Закрити
closeBooking.addEventListener("click", () => {
    bookingModal.style.display = "none";
});

// Сабміт форми
document.getElementById("booking-form").addEventListener("submit", function(e){
    e.preventDefault();

    alert("✅ Бронювання успішне! Ми з вами зв'яжемося.");

    bookingModal.style.display = "none";
});


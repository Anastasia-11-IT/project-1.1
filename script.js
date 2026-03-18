document.addEventListener("DOMContentLoaded", function() {

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
            card.style.display = cardText.includes(searchText) ? "block" : "none";
        });
    });


    // ===== МОДАЛЬНЕ ВІКНО =====
    const modal = document.getElementById("modal");
    const openButtons = document.querySelectorAll(".open-modal");
    const closeButton = document.getElementById("close-modal");
    const modalText = document.getElementById("modal-text");

    openButtons.forEach(button => {
        button.addEventListener("click", () => {
            const trip = button.dataset.trip;

            if(trip === "paris"){
                modalText.textContent = "Париж — місто романтики...";
            }

            if(trip === "bali"){
                modalText.textContent = "Балі — тропічний рай...";
            }

            if(trip === "tokyo"){
                modalText.textContent = "Токіо — місто майбутнього...";
            }

            modal.style.display = "flex";
        });
    });

    closeButton.addEventListener("click", () => modal.style.display = "none");

    window.addEventListener("click", (e) => {
        if(e.target === modal){
            modal.style.display = "none";
        }
    });


    // ===== КАРТИНКИ =====
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

    bookButtons.forEach(button => {
        button.addEventListener("click", () => {
            bookingModal.style.display = "flex";
            tripInput.value = button.dataset.trip;
        });
    });

    closeBooking.addEventListener("click", () => {
        bookingModal.style.display = "none";
    });

    document.getElementById("booking-form").addEventListener("submit", function(e){
        e.preventDefault();
        alert("✅ Бронювання успішне!");
        bookingModal.style.display = "none";
    });

});

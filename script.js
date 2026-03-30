document.addEventListener("DOMContentLoaded", function() {

    // ===== ТЕМНА ТЕМА =====
    const themeButton = document.getElementById("theme-toggle");

    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-theme");
    });


// ===== ПОШУК МІСТ З ІНТЕРНЕТУ =====

const searchInput = document.getElementById("search-input");
const resultsDiv = document.getElementById("results");

if (searchInput) {

searchInput.addEventListener("keypress", function(e) {

    if (e.key === "Enter") {

        const city = searchInput.value;

        fetch(`https://uk.wikipedia.org/api/rest_v1/page/summary/${city}`)
        .then(res => res.json())
        .then(data => {

            resultsDiv.innerHTML = "";

            if (!data.extract) {
                resultsDiv.innerHTML = "<p>Нічого не знайдено 😢</p>";
                return;
            }

            const card = document.createElement("div");
            card.className = "card";

            card.innerHTML = `
                <h3>${city}</h3>
                <p>${data.extract.substring(0, 150)}...</p>
                <a href="trip.html?city=${city}">Деталі</a>
            `;

            resultsDiv.appendChild(card);
        });

    }

});

}


// ===== СТОРІНКА ТУРУ =====

const params = new URLSearchParams(window.location.search);
const city = params.get("city");

if (city && document.getElementById("title")) {

fetch(`https://uk.wikipedia.org/api/rest_v1/page/summary/${city}`)
.then(res => res.json())
.then(data => {

    document.getElementById("title").textContent = city;
    document.getElementById("description").textContent = data.extract;

});

}
// ===== ПОПУЛЯРНІ ТУРИ =====

const tours = [
    {
        city: "Париж",
        text: "Романтична подорож у Францію 🇫🇷"
    },
    {
        city: "Балі",
        text: "Тропічний рай та океан 🌴"
    },
    {
        city: "Токіо",
        text: "Майбутнє та традиції Японії 🇯🇵"
    },
    {
        city: "Нью-Йорк",
        text: "Місто, яке ніколи не спить 🇺🇸"
    }
];

const popularDiv = document.getElementById("popular-tours");

if (popularDiv) {

    tours.forEach(tour => {

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <h3>${tour.city}</h3>
            <p>${tour.text}</p>
            <a href="trip.html?city=${tour.city}">Деталі</a>
        `;

        popularDiv.appendChild(card);
    });

}

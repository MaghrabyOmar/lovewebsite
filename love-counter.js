const startDate = new Date("2025-12-25T00:00:00");
const officialDate = new Date("2026-01-04T00:00:00");

function updateCounter() {

    const now = new Date();

    const diff = now - startDate;

    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    const display = `
💖 ${days} Days
⏳ ${hours} Hours
⏰ ${minutes} Minutes
✨ ${seconds} Seconds
    `;

    const counter = document.getElementById("counter");

    if (counter) {
        counter.innerText = display;
    }
}

setInterval(updateCounter, 1000);
updateCounter();
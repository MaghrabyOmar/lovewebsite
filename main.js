// ======================================
// Wait Until The Page Is Loaded
// ======================================

document.addEventListener("DOMContentLoaded", () => {

    revealElements();

    createFloatingHearts();

    mouseHearts();

    smoothButtons();

});


// ======================================
// Reveal Animation On Scroll
// ======================================

function revealElements() {

    const cards = document.querySelectorAll(
        ".card, .gallery-card, .little-message, .hero-content"
    );

    const observer = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    }, {
        threshold: 0.2
    });

    cards.forEach((card) => {

        card.classList.add("hidden");

        observer.observe(card);

    });

}


// ======================================
// Floating Hearts
// ======================================

function createFloatingHearts() {

    setInterval(() => {

        const heart = document.createElement("span");

        heart.innerHTML = ["💖", "💕", "💗", "💞", "❤️"][Math.floor(Math.random() * 5)];

        heart.className = "floating-heart";

        heart.style.left = Math.random() * window.innerWidth + "px";

        heart.style.fontSize = (20 + Math.random() * 20) + "px";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.remove();

        }, 6000);

    }, 700);

}


// ======================================
// Hearts Behind Mouse
// ======================================

function mouseHearts() {

    document.addEventListener("mousemove", (e) => {

        if (Math.random() > 0.65) {

            const heart = document.createElement("span");

            heart.innerHTML = "💖";

            heart.className = "mouse-heart";

            heart.style.left = e.pageX + "px";

            heart.style.top = e.pageY + "px";

            document.body.appendChild(heart);

            setTimeout(() => {

                heart.remove();

            }, 1000);

        }

    });

}


// ======================================
// Button Click Animation
// ======================================

function smoothButtons() {

    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {

        button.addEventListener("click", () => {

            button.style.transform = "scale(.95)";

            setTimeout(() => {

                button.style.transform = "";

            }, 150);

        });

    });

}
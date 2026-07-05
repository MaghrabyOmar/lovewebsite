/* ==========================================
        SCROLL REVEAL ANIMATION
========================================== */

const hiddenElements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

hiddenElements.forEach((el) => observer.observe(el));

/* ==========================================
        FLOATING HEARTS
========================================== */

function createHeart() {

    const heart = document.createElement("div");

    heart.innerHTML = "💖";

    heart.className = "floating-heart";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.fontSize = (20 + Math.random() * 25) + "px";

    document.body.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 7000);

}

setInterval(createHeart, 900);

/* ==========================================
        IMAGE TILT EFFECT
========================================== */

const cards = document.querySelectorAll(".memory-card,.gallery-card");

cards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect = card.getBoundingClientRect();

        const x = e.clientX - rect.left;

        const y = e.clientY - rect.top;

        const rotateX = (y / rect.height - 0.5) * -10;

        const rotateY = (x / rect.width - 0.5) * 10;

        card.style.transform =
            `perspective(700px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});

/* ==========================================
        BUTTON EFFECT
========================================== */

const button = document.querySelector(".next-button");

if (button) {

    button.addEventListener("click", () => {

        for (let i = 0; i < 40; i++) {

            const confetti = document.createElement("div");

            confetti.innerHTML = ["🎉","💖","✨","🎂","🌸"][Math.floor(Math.random()*5)];

            confetti.style.position = "fixed";

            confetti.style.left = Math.random() * window.innerWidth + "px";

            confetti.style.top = "-30px";

            confetti.style.fontSize = (18 + Math.random()*20) + "px";

            confetti.style.transition = "3s linear";

            confetti.style.zIndex = "9999";

            document.body.appendChild(confetti);

            setTimeout(() => {

                confetti.style.top = window.innerHeight + "px";

                confetti.style.transform =
                `rotate(${Math.random()*720}deg)`;

            },20);

            setTimeout(()=>{

                confetti.remove();

            },3000);

        }

    });

}

/* ==========================================
        HERO TITLE GLOW
========================================== */

const title = document.querySelector(".birthday-content h1");

let glow = true;

setInterval(() => {

    if (!title) return;

    if (glow) {

        title.style.textShadow =
        "0 0 20px hotpink,0 0 35px pink";

    } else {

        title.style.textShadow =
        "0 0 5px hotpink";

    }

    glow = !glow;

},1000);

/* ==========================================
        SMOOTH PAGE START
========================================== */

window.addEventListener("load",()=>{

    document.body.style.opacity="0";

    document.body.style.transition="1s";

    setTimeout(()=>{

        document.body.style.opacity="1";

    },100);

});
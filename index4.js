const music = document.getElementById("bg-music");

window.addEventListener("load", () => {
    music.play().catch(() => {
        console.log("Autoplay blocked");
    });
});

/* SCROLL ANIMATION */
const elements = document.querySelectorAll(".hidden");

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

elements.forEach(el=>observer.observe(el));

/* FLOATING HEARTS */
function createHeart(){
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (15 + Math.random()*25) + "px";

    document.body.appendChild(heart);

    setTimeout(()=>{
        heart.remove();
    },6000);
}

setInterval(createHeart,400);
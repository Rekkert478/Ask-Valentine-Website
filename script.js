const yesContainer = document.getElementById("yes-container");
const noContainer = document.getElementById("no-container");
const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");

let noClickCount = 0;
let scale = 0.0;

yesButton?.addEventListener("click", () => {
	window.location.href = "yes.html";
});

noButton?.addEventListener("mouseover", () => {
    const min = 200;
    const max = 200;
    noClickCount++;
    scale += 0.5;

    if(noClickCount > 3) {
        yesButton.style.transform = `scale(${scale})`;
    }

    if(noClickCount >= 4) {
        yesButton.classList.add("pulse");
    }

    const distance = Math.random() * (max - min) + min;
    const angle = Math.random() * Math.PI * 2;

    const moveX = Math.cos(angle) * distance;
    const moveY = Math.sin(angle) * distance;

    noButton.style.transition = "transform 0.3s ease";
    noButton.style.transform = `translate(${moveX}px, ${moveY}px)`;
});

noButton?.addEventListener("click", (e) => {
	e.preventDefault();
	moveNoButton();
});

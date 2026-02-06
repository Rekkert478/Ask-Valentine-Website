const yesContainer = document.getElementById("yes-container");
const noContainer = document.getElementById("no-container");
const yesButton = document.getElementById("yes-btn");
const noButton = document.getElementById("no-btn");

yesButton?.addEventListener("click", () => {
	window.location.href = "yes.html";
});

function moveNoButton() {
	// Erst wenn wir bewegen, auf fixed umschalten
	if (noContainer.style.position !== "fixed") {
		noContainer.style.position = "fixed";
	}
	
	const yesBtnRect = yesButton.getBoundingClientRect();
	const yesCenterX = yesBtnRect.left + yesBtnRect.width / 2;
	const yesCenterY = yesBtnRect.top + yesBtnRect.height / 2;
	const radius = 150;
	
	const angle = Math.random() * Math.PI * 2;
	const distance = Math.random() * radius + 80;
	
	const randomX = Math.max(10, Math.min(window.innerWidth * 0.9 - 60, yesCenterX + Math.cos(angle) * distance - 60));
	const randomY = Math.max(10, Math.min(window.innerHeight * 0.9 - 30, yesCenterY + Math.sin(angle) * distance - 30));
	
	noContainer.style.left = randomX + "px";
	noContainer.style.top = randomY + "px";
	noContainer.style.transition = "all 0.3s ease";
}

noButton?.addEventListener("mouseover", () => {
	moveNoButton();
});

noButton?.addEventListener("click", (e) => {
	e.preventDefault();
	moveNoButton();
});

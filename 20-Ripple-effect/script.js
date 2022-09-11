const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
	button.addEventListener("click", function (e) {
		const x = e.clientX;
		const y = e.clientY;

		const buttonTop = e.target.offsetTop;
		const buttonLeft = e.target.offsetLeft;

		const xInside = x - buttonLeft;
		const yInside = y - buttonTop;

		const rippleEffectCircle = createRippleEffectCircle(xInside, yInside);

		this.appendChild(rippleEffectCircle);

		setTimeout(() => rippleEffectCircle.remove(), 500);
	});
});

function createRippleEffectCircle(x, y) {
	const circle = document.createElement("span");
	circle.classList.add("circle");
	circle.setAttribute("aria-hidden", true);

	circle.style.top = y + "px";
	circle.style.left = x + "px";

	return circle;
}

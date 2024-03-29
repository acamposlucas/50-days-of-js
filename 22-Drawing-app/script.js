const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const sizeValue = document.getElementById("sizeValue");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");
const ctx = canvas.getContext("2d");

let size = 10;
let isMousePressed = false;
let color = colorEl;
let x;
let y;

canvas.addEventListener("mousedown", (e) => {
	isMousePressed = true;
	x = e.offsetX;
	y = e.offsetY;
});

canvas.addEventListener("mouseup", (e) => {
	isMousePressed = false;
	x = undefined;
	y = undefined;
});

canvas.addEventListener("mousemove", (e) => {
	if (isMousePressed) {
		const x2 = e.offsetX;
		const y2 = e.offsetY;

		drawCircle(x2, y2);
		drawLine(x, y, x2, y2);

		x = x2;
		y = y2;
	}
});

function drawCircle(x, y) {
	ctx.beginPath();
	ctx.arc(x, y, size, 0, Math.PI * 2);
	ctx.fillStyle = color;
	ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
	ctx.beginPath();
	ctx.moveTo(x1, y1);
	ctx.lineTo(x2, y2);
	ctx.strokeStyle = color;
	ctx.lineWidth = size * 2;
	ctx.stroke();
}

function updateSizeOnScreen() {
	sizeValue.innerText = size;
}

sizeEl.addEventListener("input", (e) => {
	size = e.target.value;
	updateSizeOnScreen();
});

color.addEventListener("change", (e) => (color = e.target.value));

clearEl.addEventListener("click", () =>
	ctx.clearRect(0, 0, canvas.width, canvas.height)
);

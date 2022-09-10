const hourEl = document.querySelector(".hour");
const minutesEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const timeEl = document.querySelector(".time");
const dateEl = document.querySelector(".date");
const toggleEl = document.querySelector(".toggle");

// StackOverflow
const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

toggleEl.addEventListener("click", (e) => {
	const html = document.querySelector("html");

	if (html.classList.contains("dark")) {
		html.classList.remove("dark");
		e.target.innerHTML = "Dark mode";
	} else {
		html.classList.add("dark");
		e.target.innerHTML = "Light mode";
	}
});

function setTime() {
	const time = new Date();
	const hours = time.getHours();
	const hoursForClock = hours % 12;
	const minutes = time.getMinutes();
	const seconds = time.getSeconds();

	hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
		hoursForClock,
		0,
		11,
		0,
		360
	)}deg)`;
	minutesEl.style.transform = `translate(-50%, -100%) rotate(${scale(
		minutes,
		0,
		59,
		0,
		360
	)}deg)`;
	secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
		seconds,
		0,
		59,
		0,
		360
	)}deg)`;

	timeEl.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : minutes}`;
	dateEl.innerHTML = `${new Intl.DateTimeFormat("pt-br", {
		dateStyle: "long",
	}).format(time)}`;
}

setTime();

setInterval(setTime, 1000);

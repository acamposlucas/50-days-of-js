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

function digitalClock(time) {
	timeEl.innerHTML = `${time.getHours()}:${
		time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()
	}`;
	dateEl.innerHTML = `${new Intl.DateTimeFormat("pt-br", {
		dateStyle: "long",
	}).format(time)}`;
}

function analogClock(time) {
	const hours = time.getHours() % 12;

	const hourNeedleRotation = scale(hours, 0, 12, 0, 360);
	const minutesNeedleRotation = scale(time.getMinutes(), 0, 59, 0, 360);
	const secondsNeedleRotation = scale(time.getSeconds(), 0, 59, 0, 360);

	hourEl.style.transform = `translate(-50%, -100%) rotate(${hourNeedleRotation}deg)`;
	minutesEl.style.transform = `translate(-50%, -100%) rotate(${minutesNeedleRotation}deg)`;
	secondEl.style.transform = `translate(-50%, -100%) rotate(${secondsNeedleRotation}deg)`;
}

function setTime() {
	const time = new Date();

	analogClock(time);
	digitalClock(time);
}

setTime();

setInterval(setTime, 1000);

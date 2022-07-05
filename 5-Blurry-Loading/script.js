const bg = document.querySelector(".bg");
const loadingText = document.querySelector(".loading-text");

let load = 0;

let int = setInterval(blurring, 30);

function blurring() {
  load++;

  load > 99 ? clearInterval(int) : null;

  loadingText.innerText = `${load}%`;
  loadingText.style.opacity = scale(load, 0, 100, 1, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

/*
@params:
  num: initial number
  in_min: starting number
  in_max: ending number
  out_min: output initial number
  out_max: output ending number
*/

function scale(num, in_min, in_max, out_min, out_max) {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
}

const key = document.getElementById("key");
const keyCode = document.getElementById("keyCode");

window.addEventListener("keydown", (e) => {
  console.log(e);

  key.innerText = e.key === " " ? `${e.code}` : `${e.key}`;
  keyCode.innerText = `${e.keyCode}`;
});

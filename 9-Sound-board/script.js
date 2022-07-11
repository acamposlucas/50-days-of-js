const buttons = document.querySelectorAll(".btn");
const sounds = document.querySelectorAll("audio");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    stopAudio();
    const audioName = button.innerText;
    sounds.forEach((sound) => (audioName === sound.id ? sound.play() : null));
  });
});

function stopAudio() {
  sounds.forEach((sound) => {
    const audio = document.getElementById(`${sound.id}`);

    audio.pause();
    audio.currentTime = 0;
  });
}

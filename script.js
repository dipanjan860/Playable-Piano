const pianoKeys = document.querySelectorAll(".piano-keys .key"),
  volumeSlider = document.querySelector(".volume-slider input"),
  keysCheck = document.querySelector(".keys-checkbox input");

let allKeys = [];
let audio = new Audio("tunes/a.wav"); // default audio "a"

const playTune = (key) => {
  audio.src = `tunes/${key}.wav`;
  audio.play();
  // console.log(allKeys);

  const clickedKey = document.querySelector(`[data-key="${key}"]`);
  clickedKey.classList.add("active");
  setTimeout(() => {
    clickedKey.classList.remove("active");
  }, 150);
};

pianoKeys.forEach((key) => {
  // console.log(key);
  // console.log(key.dataset.key);
  allKeys.push(key.dataset.key);
  key.addEventListener("click", () => playTune(key.dataset.key));
});

const pressedKey = (e) => {
  // console.log(e);
  if (allKeys.includes(e.key)) playTune(e.key);
};

const handleVolume = (e) => {
  audio.volume = e.target.value;
};

const hideKeys = () => {
  pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

document.addEventListener("keydown", pressedKey);
volumeSlider.addEventListener("input", handleVolume);
keysCheck.addEventListener("click", hideKeys);

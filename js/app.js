let currentMusic = 0;

const music = document.querySelector("#audio");
const seekBar = document.querySelector(".music-name");
const artistName = document.querySelector(".artist-name");
const disk = document.querySelector(".disk");
const currentTime = document.querySelector(".current-time");
const musicDuration = document.querySelector(".song-duration");
const playBtn = document.querySelector(".play-btn");
const forwardBtn = document.querySelector(".forward-btn");
const backwardBtn = document.querySelector(".backward-btn");

playBtn.addEventListener("click", () => {
  playBtn.classList.toggle("pause");
  disk.classList.toggle("play")
});

// setup music
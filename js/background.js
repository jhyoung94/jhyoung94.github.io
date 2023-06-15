const imagesCnt = 4;
const imageNum = Math.floor(Math.random() * imagesCnt);
const image = String(imageNum).padStart(2, "0");
const imgUrl = `img/${image}.jpg`;
const wallpaper = document.querySelector("#wallpaper img");
wallpaper.src = `${imgUrl}`;
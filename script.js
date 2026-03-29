const yesBtn = document.getElementById("yesBtn");
const maybeBtn = document.getElementById("maybeBtn");
const yesGifContainer = document.getElementById("yesGifContainer");
const maybeGifContainer = document.getElementById("maybeGifContainer");

yesBtn.addEventListener("click", () => {
  yesGifContainer.style.display = "block";
  yesBtn.style.display = "none";
  maybeBtn.style.display = "none";
});

maybeBtn.addEventListener("click", () => {
  maybeGifContainer.style.display = "block";
  yesBtn.style.display = "none";
  maybeBtn.style.display = "none";
});
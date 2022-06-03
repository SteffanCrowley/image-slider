const buttons = document.querySelectorAll("button");

const img = [];
let time = 5000;
let i = 1;

img[1] = "./Pictures/pizza2.jpg";
img[2] = "./Pictures/pizza3.jpg";
img[3] = "./Pictures/pizza4.webp";
img[4] = "./Pictures/pizza5.jpg";

function changeImg() {
  document.slide.src = img[i];

  if (i < img.length - 1) {
    i++;
  } else {
    i = 1;
  }
  setTimeout("changeImg()", time);
}

window.onload = changeImg();

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const offset = e.target.innerHTML === "NEXT" ? 1 : -1;
  });
});

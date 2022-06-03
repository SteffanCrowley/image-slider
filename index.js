const buttons = document.querySelectorAll("button");

const img = [];
let time = 5000;
let i = 1;

img[1] = "./Pictures/pizza2.jpg";
img[2] = "./Pictures/pizza3.jpg";
img[3] = "./Pictures/pizza4.webp";
img[4] = "./Pictures/pizza5.jpg";

function changeImg(direction) {
  console.log("test");

  if (direction == "NEXT") {
    if (i < img.length - 1) {
      i++;
    } else {
      i = 1;
    }
  } else if (direction == "PREV") {
    if (i > 1) {
      i--;
    } else {
      i = 4;
    }
  }
  document.slide.src = img[i];
  console.log(direction);
  console.log(i);
  setTimeout("changeImg('NEXT')", time);
}

window.onload = changeImg("NEXT");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    const offset = e.target.innerHTML;
    changeImg(offset);
    setTimeout("changeImg('NEXT')", time);
  });
});

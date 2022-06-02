const left = document.querySelector(".left");
const img1 = document.querySelector("#img1");
const img2 = document.querySelector("#img2");
const img3 = document.querySelector("#img3");
const img4 = document.querySelector("#img4");

left.addEventListener("click", (e) => {
  for (let i = 1; i < 3; i++) {
    document.querySelector(`#img${i}`).classList.toggle("active");
    console.log("test");
  }
});

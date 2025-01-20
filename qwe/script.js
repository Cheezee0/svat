let box = document.querySelector(".box");
width = box.offsetWidth;
height = box.offsetHeight;
let cInp = document.getElementById("c-inp");
count = Math.floor((width * height) / (20 * 20));
console.log(count);
console.log(width, height);
for (let i = 1; 1 < count; i++) {
  box.insertAdjacentHTML("afterbegin", `<div class="pix"></div>`);
}
let pixMass = document.querySelector(".pix");
let isDraw = false;
box.addEventListener("mousedown", () => {
  isDraw = true;
});
box.addEventListener("mouseup", () => {
  isDraw = false;
});
pixMass.forEach((pix) => {
  pix.addEventListener("mousemove", () => {
    if (isDraw) {
      pix.style.background = cInp.value;
    }
  });
});

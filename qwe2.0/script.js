let box = document.querySelector(".box");
let width = box.offsetWidth;
let height = box.offsetHeight;
let cInp = document.getElementById("c-inp");
let count = Math.floor((width * height) / (20 * 20));
console.log(count);
console.log(width, height);

// Создаем пиксели
for (let i = 0; i < count; i++) {
  box.insertAdjacentHTML("afterbegin", `<div class="pix"></div>`);
}

// Получаем все элементы с классом "pix"
let pixMass = document.querySelectorAll(".pix");
let isDraw = false;

box.addEventListener("mousedown", () => {
  isDraw = true;
});
box.addEventListener("mouseup", () => {
  isDraw = false;
});

// Добавляем обработчик событий для каждого пикселя
pixMass.forEach((pix) => {
  pix.addEventListener("mousemove", () => {
    if (isDraw) {
      pix.style.background = cInp.value;
    }
  });
});

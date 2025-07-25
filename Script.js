const text = document.querySelector("#text");
const count = document.querySelector("#counter");
const leftCounter = document.querySelector("#leftCounter");

let maxCounter = 20;
let currentCount = 0;
text.addEventListener("input", () => {
  currentCount = text.value.split("").filter((item) => item != " ").length;
  maxCounter -= Number(currentCount);
  leftCounter.textContent = maxCounter - currentCount;
  count.textContent = currentCount;
});

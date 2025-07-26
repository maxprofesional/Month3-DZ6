const text = document.querySelector("#text");
const count = document.querySelector("#counter");
const leftCounter = document.querySelector("#leftCounter");

const maxCounter = 20;
let currentCount = 0;
count.textContent = currentCount;
leftCounter.textContent = maxCounter;

text.addEventListener("input", () => {
  currentCount = text.value.split("").filter((item) => item != " ").length;

  if (currentCount > maxCounter) {
    let result = "";
    let nonSpaceCount = 0;
    for (let item of text.value) {
      if (item !== " ") {
        if (nonSpaceCount >= maxCounter) {
          break;
        }
        nonSpaceCount++;
      }
      result += item;
    }
    text.value = result;
  }
  currentCount = text.value.split("").filter((item) => item != " ").length;
  leftCounter.textContent = maxCounter - currentCount;
  count.textContent = currentCount;
});

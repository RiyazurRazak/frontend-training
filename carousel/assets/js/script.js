const leftIconElement = document.getElementById("left-icon");
const rightIconElement = document.getElementById("right-icon");
const silderElement = document.querySelector(".slider");
const colorPickers = document.querySelectorAll(".picker");
let counter = 0;

rightIconElement.addEventListener("click", () => {
  counter += 100;
  if (counter > 300) counter = 0;
  leftIconElement.style.left = `${counter + 1}vw`;
  rightIconElement.style.right = `-${counter}vw`;
  document.body.tran;
  document.body.style.transform = `translateX(-${counter}vw)`;
});

leftIconElement.addEventListener("click", () => {
  counter -= 100;
  if (counter === -100) counter = 300;
  leftIconElement.style.left = `${counter + 1}vw`;
  rightIconElement.style.right = `-${counter}vw`;
  document.body.tran;
  document.body.style.transform = `translateX(-${counter}vw)`;
});

colorPickers.forEach((picker) =>
  picker.addEventListener("change", (e) => {
    e.target.parentNode.style.backgroundColor = e.target.value;
  })
);

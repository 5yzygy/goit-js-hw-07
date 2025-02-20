function getRandomHexColor()
{
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}

let div = document.querySelector("#controls");
let input = div.querySelector("input");
let createButton = div.querySelector("[data-create]");
let destroyButton = div.querySelector("[data-destroy]");
let boxes = document.querySelector("#boxes");

const createBoxes = (inputVal) =>
{
    for (let i = 0; i < inputVal; i++)
    {
        const box = document.createElement("div");

        box.style.width = "30px";
        box.style.height = "30px";
        box.style.backgroundColor = getRandomHexColor();
        boxes.appendChild(box);
    }
};

createButton.addEventListener("click", () =>
{
    let inputVal = parseInt(input.value);

    if (input.value.trim() === "" || isNaN(inputVal) || inputVal < 1 || inputVal > 100)
    {
      alert("Lütfen 1-100 arasında bir sayı girin");
    }
    
    else
    {
        createBoxes(inputVal);
        inputVal = "";
    }
});

destroyButton.addEventListener("click", () => boxes.innerHTML = "");
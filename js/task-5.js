let button = document.querySelector(".change-color");

button.addEventListener("click", () =>
{
    const colourSpan = document.querySelector(".color");
    
    function getRandomHexColor()
    {
      return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
    }
  
    document.body.style.backgroundColor = getRandomHexColor();
    colourSpan.textContent = getRandomHexColor();
});


const input = document.querySelector("#name-input");
input.addEventListener("input", () =>
{
    const outputSpan = document.querySelector("#name-output");
    if (input.value.trim() === "")
    {
        outputSpan.textContent = "Anonymous";
    }
    
    else
    {
        outputSpan.textContent = input.value;
    }
});
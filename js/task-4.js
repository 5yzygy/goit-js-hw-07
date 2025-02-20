const form = document.querySelector(".login-form");

form.addEventListener("submit", (event) =>
{
    event.preventDefault();

    const inputs = form.elements;
    const forms = {};

    for (let input of inputs)
    {
        if (input.name && input.value.trim() === "")
        {
            alert("All form fields must be filled in.");
            return;
        }
        
        else if (input.name)
        {
            forms[input.name] = input.value.trim();
        }
    }
    
    console.log(forms);
    form.reset();
});

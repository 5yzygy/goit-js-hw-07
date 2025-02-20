categories = document.querySelectorAll(".item");
// console.log(categories);

console.log(`Number of Categories : ${categories.length}`);

categories.forEach(elem =>
{
    const categoryTypes = elem.querySelector("h2");
    console.log(`Category: ${categoryTypes.textContent}`);

    const sublist = elem.querySelectorAll("ul");
    sublist.forEach(sub =>
    {
        const sublistElems = sub.querySelectorAll("li");
        // console.log(`Sublist: ${sublistElems}`);
        console.log(`Elements: ${sublistElems.length}`);
    });
});
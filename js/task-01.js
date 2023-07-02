const categoriesReference = document.querySelector("ul#categories");
const categoryItems = categoriesReference?.querySelectorAll("li.item");
console.log(`Number of categories: ${categoryItems.length}`);
categoryItems.forEach(item => {
    const category = item.querySelector("h2").textContent;
    const elementsCount = item.querySelectorAll("li").length;
    console.log(`Category: ${category}/nElements: ${elementsCount}`)
})

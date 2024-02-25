`use strict`;
const categories = document.querySelector("#categories");
// console.dir(categories);
const allCategories = categories.childElementCount;
console.log(`Number of categories: ${allCategories}`);

const categoriesTitles = document.querySelectorAll(".item");
// console.dir(categoriesTitles);
categoriesTitles.forEach(function (category) {
  const title = category.querySelector("h2").textContent;
  console.log(`Category: ${title}`);
  const count = category.querySelectorAll("li").length;
  console.log(`Elements: ${count}`);
});

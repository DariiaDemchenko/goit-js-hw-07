'use strict';

const categoriesTitles = document.querySelectorAll('.item');
console.log(`Number of categories: ${categoriesTitles.length}`);

categoriesTitles.forEach(function (category) {
  const title = category.querySelector('h2').textContent;
  console.log(`Category: ${title}`);
  const count = category.querySelectorAll('li').length;
  console.log(`Elements: ${count}`);
});

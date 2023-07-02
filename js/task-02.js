const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingredientsNames = document.querySelector('ul#ingredients');
const getLiNames = (ingredient) => `<li class="item">${ingredient}</li>`
const getListNames = (ingredientsList) => ingredientsList.map(it => getLiNames(it)).join('')
ingredientsNames.insertAdjacentHTML('afterbegin', getListNames(ingredients));

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const ingridientsNames = document.querySelector('ul#ingridients');
const getLiNames = (ingridient) => `<li class="item">${ingridient}</li>`
const getListNames = (ingridientsList) => ingridientsList.map(it => getLiNames(it)).join('')
ingridientsNames.insertAdjacentHTML('afterbegin', getListNames(ingredients));

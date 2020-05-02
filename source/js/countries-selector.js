var countriesSelectorItem = document.querySelector('.countries-selector__item:nth-child(3)');
var countriesSelectorButton = countriesSelectorItem.querySelector('.countries-selector__button');

countriesSelectorButton.addEventListener('click', function () {
  countriesSelectorItem.classList.toggle('countries-selector__item--opened');
})

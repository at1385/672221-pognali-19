var pageMain = document.querySelector('.page-main');
var countriesFilter = pageMain.querySelector('.countries-filter');
var countriesFilterContainer = countriesFilter.querySelector('.countries-filter__container');
var countriesFilterToggle = countriesFilterContainer.querySelector('.countries-filter__filter-toggle');
var countriesFilterButton = countriesFilterContainer.querySelector('.countries-filter__button');

pageMain.classList.toggle('page-main--js');
countriesFilter.classList.toggle('countries-filter--closed');
countriesFilterContainer.classList.toggle('countries-filter__container--closed');

countriesFilterToggle.addEventListener('click', function () {
  countriesFilter.classList.toggle('countries-filter--closed');
  countriesFilterContainer.classList.toggle('countries-filter__container--closed');
});

countriesFilterButton.addEventListener('click', function () {
  countriesFilter.classList.toggle('countries-filter--closed');
  countriesFilterContainer.classList.toggle('countries-filter__container--closed');
});

window.addEventListener('keydown', function (evt) {
  if (!countriesFilterContainer.classList.contains('countries-filter__container--closed') && evt.keyCode === 27) {
    countriesFilter.classList.add('countries-filter--closed');
    countriesFilterContainer.classList.add('countries-filter__container--closed');
  }
});

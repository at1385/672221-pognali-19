var companionsFinder = document.querySelector('.companions-finder');
var companionsFinderFilters = companionsFinder.querySelectorAll('.companions-finder__filter-item');
var companionsFinderToggles = companionsFinder.querySelectorAll('.companions-finder__filter-dropdown-button');

for (var i = 0; i < companionsFinderFilters.length; i++) {
  companionsFinderFilters[i].classList.toggle('companions-finder__filter-item--closed');
}

var onCompanionsFinderToggleClick = function (toggle, filter) {
  toggle.addEventListener('click', function () {
    filter.classList.toggle('companions-finder__filter-item--closed');
  });
};

for (var j = 0; j < companionsFinderToggles.length; j++) {
  onCompanionsFinderToggleClick(companionsFinderToggles[j], companionsFinderFilters[j]);
}

var pageHeader = document.querySelector('.page-header');
var menu = pageHeader.querySelector('.menu');
var menuToggle = menu.querySelector('.menu__toggle');

pageHeader.classList.toggle('page-header--js');
menu.classList.toggle('menu--closed');

menuToggle.addEventListener('click', function () {
  menu.classList.toggle('menu--closed');
});

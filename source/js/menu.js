var pageHeader = document.querySelector('.page-header');
var menu = pageHeader.querySelector('.menu');
var menuToggle = menu.querySelector('.menu__toggle');

pageHeader.classList.toggle('page-header--js');
menu.classList.toggle('menu--closed');

menuToggle.addEventListener('click', function () {
  menu.classList.toggle('menu--closed');
});

var showScrollMenu = function () {
  if (!menu.classList.contains('menu--closed')) {
    menu.classList.add('menu--closed');
  }
  if (document.documentElement.clientWidth > 1439) {
    pageHeader.classList.add('page-header--scroll');
  }
  menu.style.zIndex = 99;
  menu.classList.add('menu--scroll');
}

var hideScrollMenu = function () {
  pageHeader.classList.remove('page-header--scroll');
  menu.style.zIndex = 101;
  menu.classList.remove('menu--scroll');
}

window.addEventListener('scroll', function () {
  if (menu.classList.contains('menu--inner-page') && document.documentElement.clientWidth <= 767 && window.pageYOffset > 67 && menu.classList.contains('menu--closed')) {
    showScrollMenu();
  } else if (document.documentElement.clientWidth <= 767 && window.pageYOffset > 540) {
    showScrollMenu();
  } else if (document.documentElement.clientWidth <= 767 && window.pageYOffset > 458) {
    showScrollMenu();
  } else if (document.documentElement.clientWidth > 767 && document.documentElement.clientWidth <= 1439 && window.pageYOffset > 850) {
    showScrollMenu();
  } else if (document.documentElement.clientWidth > 767 && document.documentElement.clientWidth <= 1439 && window.pageYOffset > 132 && menu.classList.contains('menu--closed')) {
    showScrollMenu();
  } else if (document.documentElement.clientWidth > 1439 && window.pageYOffset > 99) {
    showScrollMenu();
  } else {
    hideScrollMenu();
  }
});

window.addEventListener('keydown', function (evt) {
  if (!menu.classList.contains('menu--closed') && evt.key === 'Escape') {
    menu.classList.add('menu--closed');
  }
});

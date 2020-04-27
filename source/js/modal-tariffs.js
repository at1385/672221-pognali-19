var tariffsLink = document.querySelector('.add-profile__tariffs-link');
var tariffsModal = document.querySelector('.modal-tariffs');
var tariffsCloseButton = tariffsModal.querySelector('.modal-tariffs__close');

tariffsLink.addEventListener('click', function (evt) {
  evt.preventDefault();
  tariffsModal.classList.toggle('modal-tariffs--opened');
});

tariffsCloseButton.addEventListener('click', function () {
  tariffsModal.classList.remove('modal-tariffs--opened');
});

window.addEventListener('keydown', function (evt) {
  if (tariffsModal.classList.contains("modal-tariffs--opened") && evt.key === 'Escape') {
    tariffsModal.classList.remove('modal-tariffs--opened');
  }
});

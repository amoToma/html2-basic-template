/* в этот файл добавляет скрипты*/
const navMain = document.querySelector('.navigation');
const navBurger = document.querySelector('.burger');

navBurger.addEventListener('click',
  function () {
  if (navMain.classList.contains('navigation--closed')) {
    navMain.classList.remove('navigation--closed');
    navMain.classList.add('navigation--opened');
  } else {
    navMain.classList.add('navigation--closed');
    navMain.classList.remove('navigation--opened');
  }

  if (navBurger.classList.contains('burger--closed')) {
    navBurger.classList.remove('burger--closed');
    navBurger.classList.add('burger--opened');
  } else {
    navBurger.classList.add('burger--closed');
    navBurger.classList.remove('burger--opened');
  }
});

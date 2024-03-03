const navMain = document.querySelector('.navigation');
const navBurger = document.querySelector('.burger');

const onBurgerClick = () => {
  navBurger.classList.toggle('burger--opened');
  navBurger.classList.toggle('burger--closed');
  navMain.classList.toggle('navigation--opened');
  navMain.classList.toggle('navigation--closed');
};

const toggleNavigationMenu = () => {
  navBurger.addEventListener('click', onBurgerClick);
};

export { toggleNavigationMenu };

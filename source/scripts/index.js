import { toggleNavigationMenu } from './menu';
import { showSlide, showActiveSlide } from './slider';
import './range.js';

toggleNavigationMenu();
showSlide(0);
showActiveSlide(0);

window.onload = function () {
  document.getElementById('card').className += ' loaded';
};

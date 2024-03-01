const slider = document.querySelector('.slider-hero__list');
const prevButton = document.querySelector('.slider-hero__button-previous');
const nextButton = document.querySelector('.slider-hero__button-next');
const slides = Array.from(slider.querySelectorAll('.slider-hero__item'));
const slideCount = slides.length;
const sliderBattons = Array.from(document.querySelectorAll('.slider-pagination__link'));

let slideIndex = 0;

const showSlide = (num) => {
  slideIndex = num;
  slides.forEach((slide, index) => {
    if (index === slideIndex) {
      slide.style.display = 'block';

    } else {
      slide.style.display = 'none';

    }
  });
};

function showActiveSlide(index) {
  sliderBattons.forEach((item) => item.classList.remove('slider-pagination__link--curent'));
  sliderBattons[index].classList.add('slider-pagination__link--curent');
}

function onNextButtonClick() {
  if (slideIndex < slideCount - 1) {
    slideIndex++;
  }
  showSlide(slideIndex);
  showActiveSlide(slideIndex);
}

function onPrevButtonClick() {
  if (slideIndex > 0) {
    slideIndex--;
  }
  showSlide(slideIndex);
  showActiveSlide(slideIndex);
}

showSlide(0);
showActiveSlide(0);

nextButton.addEventListener('click', onNextButtonClick);
prevButton.addEventListener('click', onPrevButtonClick);

sliderBattons.forEach((button, index) => {
  button.addEventListener('click', () => {
    slideIndex = index;
    showSlide(slideIndex);
    showActiveSlide(slideIndex);
  });
});

export {showSlide, showActiveSlide};

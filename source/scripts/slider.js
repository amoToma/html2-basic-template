const slider = document.querySelector('.slider-hero__list');
const prevButton = document.querySelector('.slider-hero__button-previous');
const nextButton = document.querySelector('.slider-hero__button-next');
const slides = Array.from(slider.querySelectorAll('.slider-hero__item'));
const slideCount = slides.length;
const sliderBattons = Array.from(document.querySelectorAll('.slider-pagination__button'));

let slideIndex = 0;

const disaibleButton = (index) => {
  if (index === slideCount - 1) {
    nextButton.disabled = true;
  } else {
    nextButton.disabled = false;
  }

  if (index === 0) {
    prevButton.disabled = true;
  } else {
    prevButton.disabled = false;
  }
};

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

const showActiveSlide = (index) => {
  sliderBattons.forEach((item) => item.classList.remove('slider-pagination__button--curent'));
  sliderBattons[index].classList.add('slider-pagination__button--curent');
};

const onNextButtonClick = () => {
  if (slideIndex < slideCount - 1) {
    slideIndex++;
  }
  showSlide(slideIndex);
  showActiveSlide(slideIndex);
  disaibleButton(slideIndex);
};

const onPrevButtonClick = () => {
  if (slideIndex > 0) {
    slideIndex--;
  }
  showSlide(slideIndex);
  showActiveSlide(slideIndex);
  disaibleButton(slideIndex);
};

nextButton.addEventListener('click', onNextButtonClick);
prevButton.addEventListener('click', onPrevButtonClick);

sliderBattons.forEach((button, index) => {
  button.addEventListener('click', () => {
    slideIndex = index;
    showSlide(slideIndex);
    showActiveSlide(slideIndex);
    disaibleButton(slideIndex);
  });
});

export {showSlide, showActiveSlide};

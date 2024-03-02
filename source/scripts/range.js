const sliderRange = document.querySelector('.range__slider-container');
const inputMin = document.querySelector('.range__input--min-price');
const inputMax = document.querySelector('.range__input--max-price');
const inputs = [inputMin, inputMax];

if (sliderRange) {
  noUiSlider.create(sliderRange, {
    range: {
      min: 0,
      max: 1000,
    },
    start: [0, 900],
    step: 1,
    connect: true,
  });
}

sliderRange.noUiSlider.on('update', (values, handle) => {
  inputs[handle].value = Math.round(values[handle]);
});

const setRangeSlider = (index, value) => {
  const arr = [null, null];
  arr[index] = value;

  sliderRange.noUiSlider.set(arr);
};

inputs.forEach((input, index) => {
  input.addEventListener('change', (evt) => {
    setRangeSlider(index, evt.currentTarget.value);
  });
});

const sliderImages = document.querySelector(".slider-images");
const prevButton = document.querySelector(".prev-button");
const nextButton = document.querySelector(".next-button");
const imageWidth = sliderImages.querySelector("img").clientWidth;
const numImages = sliderImages.querySelectorAll("img").length;
let offset = 0;

prevButton.disabled = true;

nextButton.addEventListener('click', function() {
  offset += imageWidth;
  if (offset >= (numImages - 1) * imageWidth) {
    nextButton.disabled = true;
    offset = (numImages - 1) * imageWidth;
  }
  sliderImages.style.left = -offset + 'px';
  prevButton.disabled = false;
});

prevButton.addEventListener('click', function() {
  offset -= imageWidth;
  if (offset <= 0) {
    prevButton.disabled = true;
    offset = 0;
  }
  sliderImages.style.left = -offset + 'px';
  nextButton.disabled = false;
});



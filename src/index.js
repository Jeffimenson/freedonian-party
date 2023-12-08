import './style.css';

const body = document.querySelector('body');
const prevBut = body.querySelector('#prev');
const nextBut = body.querySelector('#next');
const slider = body.querySelector('.slider');

const maxSlide = 200;
const minSlide = 0;

let currentSlide = 0;
nextBut.addEventListener('click', () => {
  if (currentSlide < maxSlide) {
    currentSlide += 100;
    slider.setAttribute('style', `right: ${currentSlide}%;`);
  }
});

prevBut.addEventListener('click', () => {
  if (currentSlide > minSlide) {
    currentSlide -= 100;
    slider.setAttribute('style', `right: ${currentSlide}%;`);
  }
});

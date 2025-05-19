
const sliderContainer = document.querySelector('.profile__slider__container');

let isDown = false;
let startX;
let scrollLeft;
if (sliderContainer) {
  sliderContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    sliderContainer.classList.add('active');
    startX = e.pageX - sliderContainer.offsetLeft;
    scrollLeft = sliderContainer.scrollLeft;
  });
  
  sliderContainer.addEventListener('mouseleave', () => {
    isDown = false;
    sliderContainer.classList.remove('active');
  });
  
  sliderContainer.addEventListener('mouseup', () => {
    isDown = false;
    sliderContainer.classList.remove('active');
  });
  
  sliderContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - sliderContainer.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderContainer.scrollLeft = scrollLeft - walk;
  });
}

const container = document.querySelector('.profile__slider__container');
const firstCard = document.querySelector('.profile__slide');
if (container){
  container.addEventListener('scroll', () => {
    const scroll = container.scrollLeft;
  
    if (scroll <= 90) {
      firstCard.style.opacity = 1 - scroll / 150;
    } else {
      firstCard.style.opacity = 0.9;
    }
  });
  container.addEventListener('wheel', (e) => {
    // если зажата клавиша Ctrl — не скроллим
    if (e.ctrlKey) return;
  
    e.preventDefault(); // отключаем вертикальный скролл страницы
    container.scrollLeft += e.deltaY; // скроллим по горизонтали
  });
}



const Btn = document.querySelector('.conditions');
const conditionsList = document.querySelector('.conditions__list');
Btn.addEventListener('click', () => {
  if (conditionsList.classList.contains('active')) {
    conditionsList.classList.remove('active');
    Btn.classList.remove('active');
  } else {
    conditionsList.classList.add('active');
    Btn.classList.add('active');
  }
});

  window.addEventListener('DOMContentLoaded', () => {
    // или до конкретной активной карточки
    if (container) {
      const activeSlide = container.querySelector('.profile__slide.active');
    if (activeSlide) {
      const offset = activeSlide.offsetLeft - 120; // небольшой отступ слева
      container.scrollLeft = offset;
    }}
  });

import Swiper from 'swiper/bundle';
const newsSlideWrapper = document.querySelector('#news-swiper .swiper-wrapper');
const newsSlide = document.querySelectorAll('#news-swiper .swiper-slide').length;
const innerWidth = window.innerWidth;

console.log(innerWidth);

const spaceBetween = 0;
let slidesPerView = 3;
if (innerWidth < 992) slidesPerView = 2;
if (innerWidth < 768) slidesPerView = 1;
let newsWidth = (newsSlide * 100 / slidesPerView);
newsWidth = newsWidth + '%';
newsSlideWrapper.style.width = newsWidth;
console.log(newsWidth);

const swiper = new Swiper('.swiper-container', {
  slidesPerView: slidesPerView,
  //slidesPerGroup: 3,
  spaceBetween: spaceBetween,
  //centeredSlides: true,
  //loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // autoplay: {
  //   delay: 2500,
  //   disableOnInteraction: false,
  // },
});
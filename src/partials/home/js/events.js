// import Swiper JS
//import Swiper from 'swiper';
// import Swiper styles
//import 'swiper/swiper-bundle.css';

// import Swiper bundle with all modules installed
import Swiper from 'swiper/bundle';

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 3,
  spaceBetween: 15,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});

console.log('swiper');
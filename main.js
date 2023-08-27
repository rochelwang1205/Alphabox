import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    breakpoints:{
      768:{
        slidesPerView: 2,
      },
      992:{
        slidesPerView: 3,
      }
    }
    
  });
import './assets/scss/all.scss';
import 'bootstrap/dist/js/bootstrap.min.js';
//介紹
const swiperIntro = new Swiper('.swiperIntro', {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 5000,
  },
   breakpoints: {
     768: {
       autoplay: {
         enabled: true,
       }
     }
   },
 navigation: {
   nextEl: '.swiper-button-next',
   prevEl: '.swiper-button-prev',
 },
});
//使用分享
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
    },
    scrollbar: {
      el: '.swiper-scrollbar',
      dragSize:554,
    },   
  });

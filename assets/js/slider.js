var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 1,
  grabCursor: true,
  loop: true,
  keyboard: {
    enable: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  mousewheel: {
    sensitivity: 1,
  },
  autoplay: {
    delay: 9000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 1,
      spaceBetween: 40,
    },
  },
});
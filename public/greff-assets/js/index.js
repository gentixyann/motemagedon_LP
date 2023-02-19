const contentWrapper = document.getElementById("swiper-wrapper");
const contentLength = contentWrapper.children.length;
const options = {
  slidesPerView: (contentLength < 3? contentLength : 3),
  loop: false, 
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  },
}

const mySwiper = new Swiper ('.swiper', options);
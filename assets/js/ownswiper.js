var swiper = new Swiper(".swiper-container.two", {
  pagination: ".swiper-pagination",
  paginationClickable: true,
  effect: "coverflow",
  loop: true,
  autoplay: {
    delay: 2000,
  },
  centeredSlides: true,
  slidesPerView: "auto",
  coverflow: {
    rotate: 0,
    stretch: 100,
    depth: 150,
    modifier: 1,
    slideShadows: false,
  },
});

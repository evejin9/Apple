new Swiper('.today_color .swiper', {
  direction: 'vertical',
  loop: true,
  autoplay: true,
})

new Swiper('.apple_tv_contents .swiper', {
  direction: 'horizontal',
  loop: true,
  autoplay: {
    delay: 5000
  },
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,

  pagination: {
    el: '.apple_tv_contents .swiper-pagination',
    clickable: true
  },
  navigation: {
    nextEl: '.apple_tv_contents .swiper-button-next',
    prevEl: '.apple_tv_contents .swiper-button-prev',
  },
})
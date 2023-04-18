const headerEl = document.querySelector('header');
const menuEl = document.querySelector('header .menu');
const searchMenuEl = document.querySelector('header .search-menu');
const shopMenuEl = document.querySelector('header .shop-menu');
const clickSearch = document.querySelector('header .item__name.search');
const clickShop = document.querySelector('header .item__name.shop');

// a태그에 포커스 됐을 때 효과주고, 블러 됐을 때 효과 주는 것으로 바꿔보기

clickSearch.addEventListener('focus', function () {
  headerEl.style.backgroundColor = '#161617';
  headerEl.style.transition = '.4s .4s';
})
clickSearch.addEventListener('blur', function () {
  headerEl.style.backgroundColor = 'rgba(22, 22, 23, .8)';
  headerEl.style.transition = '';
} );

clickShop.addEventListener('focus', function () {
  headerEl.style.backgroundColor = '#161617';
  headerEl.style.transition = '.4s .4s';
})
clickShop.addEventListener('blur', function () {
  headerEl.style.backgroundColor = 'rgba(22, 22, 23, .8)';
  headerEl.style.transition = '';
} );


// item__name을 눌렀을 때 실행
// item__name을 누르면 헤더의 배경색을 #161617 으로 바꾸기

// menuEl.addEventListener('mouseover', function () {
//   headerEl.style.backgroundColor = '#161617';
//   headerEl.style.transition = '.4s .4s';
  
// });
// menuEl.addEventListener('mouseout', function () {
//   headerEl.style.backgroundColor = 'rgba(22, 22, 23, .8)';
//   headerEl.style.transition = '';
// });

// searchMenuEl.addEventListener('click', function () {
//   headerEl.style.backgroundColor = '#161617';
//   headerEl.style.transition = '.4s .4s';
// });
// searchMenuEl.addEventListener('mousedown', function () {
//     headerEl.style.backgroundColor = 'rgba(22, 22, 23, .8)'
//     headerEl.style.transition = '';
//   });
  
//   shopMenuEl.addEventListener('click', function () {
//     headerEl.style.backgroundColor = '#161617';
//     headerEl.style.transition = '.4s .4s';
//   });
//   shopMenuEl.addEventListener('mousedown', function () {
//     headerEl.style.backgroundColor = 'rgba(22, 22, 23, .8)'
//     headerEl.style.transition = '';
//   });

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
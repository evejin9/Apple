const headerEl = document.querySelector('header');
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

// 배지 스크롤 효과 
const badgeEl =  document.querySelector('header .badge');

window.addEventListener('scroll', function () {
  if (window.scrollY > 500) {
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'
    })
  } else {
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
  });
  }
});

// 오늘의 컬러는? 슬라이드
new Swiper('.today_color .swiper', {
  direction: 'vertical',
  loop: true,
  autoplay: true,
})

// 애플 TV 슬라이드
const appleTvSlide = new Swiper('.apple_tv_contents .swiper', {
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
});

// 애플 슬라이드 하단 버튼과 문구 애니메이션 효과
appleTvSlide.on('slideChange', function () {
  // console.log(this.slides[this.activeIndex]);
  // const bottomEl = this.querySelectorAll('.into-bottom');
  const prevEl = this.slides[this.activeIndex - 1].querySelector('.into-bottom');
  prevEl.classList.remove('animate__fadeInUp');
  const activeEl = this.slides[this.activeIndex].querySelector('.into-bottom');
  activeEl.classList.add('animate__fadeInUp');
  console.log(activeEl);
  
});

// 플로팅 요소 애니메이션
gsap.to('.float1', 1.5, {
  deley: 0.5,
  y: 25,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
})
gsap.to('.float2', 2, {
  deley: 1,
  y: 15,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
})
gsap.to('.float3', 1, {
  deley: 1.5,
  y: 20,
  repeat: -1,
  yoyo: true,
  ease: Power1.easeInOut
})

// gsap.to('.front2', 1.5, {
//   deley: 1.5,
//   y: 10,
//   repeat: -1,
//   yoyo: true,
//   ease: Power1.easeInOut
// })


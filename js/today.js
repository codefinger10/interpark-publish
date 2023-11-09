window.addEventListener("load", function () {
  console.log("도서상품코딩");
  // 외부 데이터를 불러들인다
  const xhr = new XMLHttpRequest();
  // 2.html 태그를 백틱을 이용해서 만든다.
  const htmltodaybookTag = ``;
  // 3.swiper 태그에 백틱을 배치한다.
  const todaybookSlide = `.today-slideposi-wrap`;
  // 4.swiper을 작동시킨다.
  const swiperTodaybook = new Swiper(".today-slideposi-wrap", {
    slidesPerView: 5,
    spaceBetween: 27,
    navigation: {
      nextEl: ".today-slideposi .slide-next-bt",
      prevEl: ".today-slideposi .slide-prev-bt",
    },

    slidesPerGroup: 5,
  });
});

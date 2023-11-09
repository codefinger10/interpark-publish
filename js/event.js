window.addEventListener("load", function () {
  console.log("이벤트상품코딩");
  // 외부 데이터를 불러들인다
  const xhr = new XMLHttpRequest();
  // 2.html 태그를 백틱을 이용해서 만든다.
  const htmleventTag = ``;
  // 3.swiper 태그에 백틱을 배치한다.
  const eventSlide = `.event-slide-wrap`;
  // 4.swiper을 작동시킨다.
  const swiperEvent = new Swiper(".event-slide-wrap", {
    slidesPerView: 4,
    spaceBetween: 27,
    Loop: true,
    autoplay: {
      delay: 1000,
      disableOnInteraction: false,
    },
    speed: 500,
    navigation: {
      nextEl: ".event-slide .slide-next-bt",
      prevEl: ".event-slide .slide-prev-bt",
    },

    slidesPerGroup: 4,
  });
});

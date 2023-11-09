window.addEventListener("load", function () {
  // console.log("추천상품코딩");
  const fileName = "tour.json";

  const xhr = new XMLHttpRequest();

  xhr.open("GET", fileName);

  xhr.send();

  xhr.onreadystatechange = function (event) {
    // console.log("데이터 전송 상태 확인", event.target.readystate);
    if (event.target.readyState === XMLHttpRequest.DONE) {
      const res = event.target.response;

      const json = JSON.parse(res);
      makeHtmlTag(json);
    }
    // console.log("자료 가져오는데 성공완료", event.target.readystate);
  };

  function makeHtmlTag(_res) {
    let htmlTourTag = ``;
    // console.log(_res);

    for (let i = 0; i < _res.total; i++) {
      const index = i + 1;
      const obj = _res["tour_" + index];
      // console.log(obj);

      const tempTag = `
            <div class="swiper-slide">
              <a href="${obj.url}" class="tour-slide-link">
                <div class="tour-slide-item">
                        <div class="tour-slide-img">
                          <img src="${obj.image}" alt="${obj.desc}"/>
                        </div>
                        <div class="tour-info">
                          <div class="tour-info-badge">
                            <i>${obj.badge}</i>
                          </div>
                          <div class="tour-info-benefit">
                            
                          </div>
                          <div class="tour-info-name">
                            ${obj.name}
                          </div>
                          <div class="tour-info-price">
                            <span>
                              <em>${obj.price}</em>
                              <span class="tour-info-"></span>
                            </span>
                          </div>
                        </div>
                  </div>
                </a>
            </div>   
    `;
      // console.log(tempTag)
      htmlTourTag += tempTag;
    }
    showHtmlTag(htmlTourTag);
  }

  function showHtmlTag(_html) {
    // 3. swiper 태그에 백틱을 배치한다.
    const tourSlide = ".tour-slide .swiper-wrapper";
    const tag = document.querySelector(tourSlide);
    // console.log(tag);
    tag.innerHTML = _html;

    makeSwiper();
  }

  function makeSwiper() {
    // 4. swiper 작동시킨다.
    const swiperTour = new Swiper(".tour-slide-wrap", {
      slidesPerView: 3,
      spaceBetween: 27,
      // 좌, 우측 버튼
      navigation: {
        nextEl: ".tour-slide-wrap .slide-next-bt",
        prevEl: ".tour-slide-wrap .slide-prev-bt",
      },
      // 몇장씩 이동할지
      slidesPerGroup: 3,
    });
  }
});

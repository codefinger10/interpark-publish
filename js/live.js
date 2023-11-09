window.addEventListener("load", function () {
  // console.log("라이브상품코딩");
  const fileName = "live.json";
  // 외부 데이터를 불러들인다
  const xhr = new XMLHttpRequest();

  xhr.open("GET", fileName);

  xhr.send();

  xhr.onreadystatechange = function (event) {
    if (event.target.readyState === XMLHttpRequest.DONE) {
      const res = event.target.response;

      const json = JSON.parse(res);
      makeHtmlTag(json);
    }
    // console.log("자료 가져오는데 성공완료", event.target.response);
  };

  function makeHtmlTag(_res) {
    let htmlLiveTag = ``;
    // console.log(_res);

    for (let i = 0; i < _res.total; i++) {
      const index = i + 1;
      const obj = _res["live_" + index];
      // console.log(obj);

      const tempTag = `
           <div class="swiper-slide">
                <a href="${obj.url}">  
                    <div class="live-slide-pick">
                        <img src="${obj.image}" alt=""/>
                        
                        
                        </div>
                        </a>
                  </div>
      `;
      // console.log(tempTag);
      htmlLiveTag += tempTag;
    }
    showHtmlTag(htmlLiveTag);
  }

  function showHtmlTag(_html) {
    const liveSlide = ".live-slide .swiper-wrapper";
    const tag = document.querySelector(liveSlide);
    // console.log(tag);
    tag.innerHTML = _html;

    makeSwiper();
  }

  function makeSwiper() {
    const swiperlive = new Swiper(".live-slide-wrap", {
      slidesPerView: 4,
      spaceBetween: 27,
      navigation: {
        nextEl: ".live-slide .slide-next-bt",
        prevEl: ".live-slide .slide-prev-bt",
      },

      slidesPerGroup: 4,
    });
  }
});

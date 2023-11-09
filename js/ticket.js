window.addEventListener("load", function () {
  const fileName = "ticket.json";

  const xhr = new XMLHttpRequest();

  xhr.open("GET", fileName);

  xhr.send();

  xhr.onreadystatechange = function (event) {
    // console.log("데이터 전송 상태 확인");
    if (event.target.readyState === XMLHttpRequest.DONE) {
      const res = event.target.response;

      const json = JSON.parse(res);
      makeHtmlTag(json);
    }
    // console.log("자료 가져오는데 성공 완료", event.target.readyState);
  };

  function makeHtmlTag(_res) {
    let htmlTicketTag = ``;
    // console.log(_res)

    for (let i = 0; i < _res.total; i++) {
      const index = i + 1;
      const obj = _res["ticket_" + index];
      // console.log(obj);

      let tempTag = ``;

      if (i === _res.total - 1) {
        tempTag = `
        <div class="swiper-slide">
          <a href="#" class=recommend-slide-all>
            <i></i>
              전체보기
            </a>
          </div>
      `;
      } else {
        tempTag = `
        <div class="swiper-slide">
        <a href="${obj.url} class="ticket-link">
          <div class="ticket-item">
              <div class="ticket-img">
                <img src="${obj.image}" alt="${obj.desc}"/>
              </div>
              <div class="ticket-info">
                  <ul class="ticket-info-list">
                    <li>
                      <h1 class="ticket-info-name">${obj.name} <판></h1>
                    </li>
                    <li>
                      <span class="ticket-info-badge">${obj.badge}</span>
                    </li>
                    <li>
                      <span class="ticket-info-day">${obj.day}</span>  
                    </li>
                  </ul>
                  <div class="ticket-item-badge">
                    <i class="ticket-item-name">${obj.desc}</i>
                  </div>
              </div>
          </div>
        </a>
      </div>     
      `;
      }

      // console.log(tempTag);
      htmlTicketTag += tempTag;
    }
    showHtmlTag(htmlTicketTag);
  }

  function showHtmlTag(_html) {
    const ticketSlide = ".ticket-slide .swiper-wrapper";
    const tag = document.querySelector(ticketSlide);
    // console.log(tag);
    tag.innerHTML = _html;

    makeSwiper();
  }

  function makeSwiper() {
    const swiperTicket = new Swiper(".ticket-slide-wrap", {
      slidesPerView: 4,
      spaceBetween: 27,
      navigation: {
        nextEl: ".ticket-slide-wrap .slide-next-bt",
        prevEl: ".ticket-slide-wrap .slide-prev-bt",
      },
      slidesPerGroup: 4,
    });
  }
});
//  3.swiper 태그에 백틱을 배치한다.

//  4.swiper을 작동시킨다.

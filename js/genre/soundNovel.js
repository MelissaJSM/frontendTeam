//리스트 추가를 유동적으로 하면 개발자나 실사용하는 사람이나 작업이 매우 편하게 된다.
document.addEventListener('DOMContentLoaded', () => {
  const books = [
    {
      title: "왕구리네 떡집",
      author: "김리리 (지은이),김이랑 (그림)",
      publisher: "비룡소",
      publishDate: "2024년 6월",
      originalPrice: "13,000원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "밀리언 셀러를 넘어 누적 판매 160만 부를 돌파한 「만복이네 떡집」은 제각기 결핍과 고민을 품은 아이들이 이야기마다 새로운 주인공으로 등장하며, 꼬랑지가 만들어 내는 세상에 하나밖에 없는 맞춤형 소원 떡을 통해 아이들의 웃음을 되찾아 주는 선한 판타지 동화다.",
      coverImage: "../img/genre/soundNovel/img1.jpg"
    },
    {
      title: "흔한남매 과학 탐험대 10 : 생태계",
      author: "흔한남매 (원작),정현철,김희목,권경아,최진수 (기획),김언정,이현진 (글),이태영,임혜영 (그림),흔한컴퍼니 (감수)",
      publisher: "주니어김영사",
      publishDate: "2024년 5월",
      originalPrice: "14,800원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "《흔한남매 과학 탐험대》 시리즈는 과학을 처음 접하는 아이들이 과학의 주요 내용을 미리 맛볼 수 있는 초등 과학 입문서이다. 흔한남매가 최고의 과학 전문가들과 함께 우주, 지구와 달, 우리 몸, 정글 등을 여행하며 쉽고 재미있게 과학 지식을 배운다.",
      coverImage: "../img/genre/soundNovel/img2.jpg"
    },
    {
      title: "똑똑하게 내 마음을 말하는 법",
      author: "이임숙 (지은이),미혜 (그림)",
      publisher: "데이스타",
      publishDate: "2024년 5월",
      originalPrice: "15,000원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "인간관계는 소통에서부터 시작된다. 마음을 어떻게 표현해야 하는가, 어떤 방식으로 말해야 하는가. 소통의 어려움은 누구나, 언제든 겪을 수 있는 문제다. 아동.청소년 심리치료사, 의사소통 전문가, 부모 교육 전문가로서 다양한 치료 교육과 강연 활동을 병행하고 있는 이임숙 작가가, 본격적인 사회화 과정에 발을 내디딘 초등학교 아이들이 쉽게 따라 해 볼 수 있는 대화법을 제안한다.",
      coverImage: "../img/genre/soundNovel/img3.jpg"
    },{
      title: "설민석의 한국사 대모험 29",
      author: "설민석,스토리박스 (지은이),정현희 (그림),강석화 (감수)",
      publisher: "단꿈아이",
      publishDate: "2024년 5월",
      originalPrice: "13,000원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "설민석의 한국사 대모험 29권에서는 고려 거란 전쟁의 과정과 귀주 대첩에서 활약한 강감찬의 이야기를 재미있는 만화로 담아냈다. 거란은 왜 고려에 세 번이나 침입했는지, 강감찬은 어떻게 거란군과 맞서 싸웠는지 설쌤과 함께하는 시간 여행을 통해 확인해 보자.",
      coverImage: "../img/genre/soundNovel/img4.jpg"
    },{
      title: "채사장의 지대넓얕 10 : 거인의 어깨",
      author: "채사장,마케마케 (지은이),정용환 (그림)",
      publisher: "돌핀북",
      publishDate: "2024년 6월",
      originalPrice: "15,000원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "소중한 사람들에게 자신 있게 권할 수 있는 어린이 교양서적이 있을까? 채사장의 지대넓얕 시리즈는 출간 즉시 학부모와 어린이들 사이에서 큰 호평을 받으며 입소문을 타고 초등 필독서로 자리매김하였다. 어른이 읽어도 재미있고, 아이들은 여러 번 반복 독서를 하며 인생에 필요한 인문학 지식을 쌓아간다는 평이다.",
      coverImage: "../img/genre/soundNovel/img5.jpg"
    }

  ];

  //북리스트 id 를 호출
  const bookList = document.getElementById('bookList');

  //여태 book 배열을 전부 출력 시작
  books.forEach(book => {
    const bookItem = document.createElement('div');
    bookItem.className = 'book-item';

    bookItem.innerHTML = `
      <div id="bookImage">
        <img id="bookCover" alt="bookCover" src="${book.coverImage}">
      </div>
      <div id="bookText">
        <h2 id="title"><a class="title-link" href="../detailedPage.html"">${book.title}</a></h2>
        <div id="bookArtist"> "${book.author}" | "${book.publisher}" | "${book.publishDate}"</div>
        <div id="bookPrice"> "${book.originalPrice}"</div>
        <div id="bookDelivery"> "${book.deliveryInfo}"</div>
        <div id="bookContent">"${book.description}"</div>
      </div>
      <div id="bookButton">
        <button class="bookSoppingCard">장바구니</button>
        <button class="bookBuy">구매하기</button>
      </div>
    `;

    bookList.appendChild(bookItem);
  });

  // 장바구니 버튼에 이벤트 리스너 추가
  document.querySelectorAll('.bookSoppingCard').forEach(button => {
    button.addEventListener('click', function(event) {
      if (confirm("장바구니에 책이 담겼습니다. 장바구니로 이동하시겠습니까?")) {
        window.location.href = "../shoppingBag.html";
      }
    });
  });

  // 구매 버튼에 이벤트 리스너 추가
  document.querySelectorAll('.bookBuy').forEach(button => {
    button.addEventListener('click', function(event) {
      if (confirm("해당 책을 바로 구매하시겠습니까?")) {
        window.location.href = "../bookBuy.html";
      }
    });
  });
});

//리스트 추가를 유동적으로 하면 개발자나 실사용하는 사람이나 작업이 매우 편하게 된다.
document.addEventListener('DOMContentLoaded', () => {
  const books = [
    {
      title: "2024 시나공 정보처리기사 필기 기본서",
      author: "길벗 R&D,강윤석,김용갑,김우경,김정준 (지은이)",
      publisher: "길벗",
      publishDate: "2023년 10월",
      originalPrice: "35,000원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "기출문제를 면밀히 분석함으로써 출제 경향을 완벽하게 반영한 책으로, 매년 개정을 통해 최신 기출문제를 수록하고 있다. NCS 학습 모듈을 가이드 삼아 이론에 대한 자세한 설명과 충분한 예제를 더한 후, 기초가 없는 수험생도 이해할 수 있도록 최대한 쉽게 설명했다.",
      coverImage: "../img/genre/practical/img1.jpg"
    },
    {
      title: "2024 시나공 정보처리기사 실기 기본서",
      author: "길벗 R&D,김정준,강윤석,김용갑,김우경 (지은이)",
      publisher: "길벗",
      publishDate: "2024년 2월",
      originalPrice: "37,000원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "2024 시나공 정보처리기사 실기 기본서는 기출문제를 면밀히 분석함으로써 출제 경향을 완벽하게 반영한 책으로, 매년 개정을 통해 최신 기출문제를 수록하고 있다. NCS 학습 모듈을 가이드 삼아 이론에 대한 자세한 설명과 충분한 예제를 더한 후, 기초가 없는 수험생도 이해할 수 있도록 최대한 쉽게 설명했다.\n",
      coverImage: "../img/genre/practical/img2.jpg"
    },
    {
      title: "2024 에듀윌 전기기능사 필기 한권끝장 핵심이론편+8개년 기출편",
      author: "유치형,홍석묵,최대규 (지은이)",
      publisher: "에듀윌",
      publishDate: "2024년 1월",
      originalPrice: "26,000원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "핵심이론 + 8개년 기출문제 한권으로 단기 합격!\n" +
        "- 필수 핵심이론 + CBT 대비 8개년 기출문제\n" +
        "- 에듀윌만의 특별혜택, 매월 제공되는 따끈따끈한 월간 CBT 모의고사\n" +
        "- 2023 개정 용어 표준화 및 국문순화 완벽 반영",
      coverImage: "../img/genre/practical/img3.jpg"
    },{
      title: "2024 시대에듀 무료 동영상이 있는 Win-Q 전산응용기계제도기능사 실기 단기합격",
      author: "정인훈 (지은이)",
      publisher: "시대에듀",
      publishDate: "2024년 5월",
      originalPrice: "26,000원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "기초적인 개념 이해를 위해 필요한 기본 이론과 실기 시험 도면 작성을 위한 인벤터, 오토캐드의 환경 설정 및 프로그램 사용법을 설명하였다. 시험 출제기준에 맞추어 도면을 작성할 수 있도록 출제기준과 채점기준을 수록하였다.",
      coverImage: "../img/genre/practical/img4.jpg"
    },{
      title: "2024 시대에듀 무료 동영상이 있는 Win-Q 컴퓨터응용선반·밀링기능사 필기 단기합격",
      author: "박병욱 (지은이)",
      publisher: "시대에듀",
      publishDate: "2024년 1월",
      originalPrice: "31,000원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "핵심이론+핵심예제로 구성되었다. 필수적으로 학습해야 하는 중요한 핵심이론들을 각 과목별로 분류하여 수록하였고 시험에 자주 나오는 핵심예제를 엄선해 이론과 문제를 한 번에 학습할 수 있도록 하였다.",
      coverImage: "../img/genre/practical/img5.jpg"
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

//리스트 추가를 유동적으로 하면 개발자나 실사용하는 사람이나 작업이 매우 편하게 된다.
document.addEventListener('DOMContentLoaded', () => {
  const books = [
    {
      title: "좋은 삶은 좋은 제도 속에 있다 ",
      author: "김용재 (지은이)",
      publisher: "행복우물",
      publishDate: "2024년 6월",
      originalPrice: "17,000원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "책의 처음은 \"인간에게 행복이 있기는 한 걸까?\"라는 물음으로 시작해 \"자본은 인간을 어떻게 길들였나\"로 마무리 된다. 저자는 행복을 개인의 주관적 개념과 환경 역시 중요하지만 사회적 환경이 개인의 행복에 미치는 영향을 방점을 두며 ‘세상이 이렇게 바뀌었으면’ 하는 생각, 그리고 나, 개인의 만족, 개인의 행복을 생각하기 전에 우리 사회가 어떤 상태인지, 우리 사회가 개인에게, 국민에게 어떤 만족을 주는 나라인지를 사유한다.",
      coverImage: "img/month/img6.jpg"
    },{
      title: "금지된 장난",
      author: "시미즈 가루마 (지은이), 최주연 (옮긴이)",
      publisher: "모모",
      publishDate: "2024년 6월",
      originalPrice: "16,000원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "나오토는 새로 장만한 집에서 가족과 행복한 나날을 보내고 있다. 아름다운 아내 미유키와 천진난만한 다섯 살 아들 하루토, 새로 분양받은 강아지 포치까지. 모든 일상이 평화롭게 흘러가던 어느 날, 돌연 아내 미유키가 교통사고로 세상을 떠나는데….",
      coverImage: "img/month/img7.jpg"
    },{
      title: "AI 신들의 전쟁",
      author: "박영선, 유호현, 제임스 정 (지은이)",
      publisher: "나남출판",
      publishDate: "2024년 6월",
      originalPrice: "22,000원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "책 설명이 없는 책입니다.",
      coverImage: "img/month/img8.jpg"
    },{
      title: "몸 수련 마음 수련",
      author: "유재훈 (지은이)",
      publisher: "휴먼큐브",
      publishDate: "2024년 6월",
      originalPrice: "11,000원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "더 많은 사람이 튼튼한 몸과 단단한 마음을 가질 수 있도록, 저자는 연구와 지도 경험을 살려 자신의 깨달음과 수련법을 나누고 있다. 그는 먼저 몸과 마음은 서로 상호 보완을 이루고 있어서 한 가지만 수련해서는 반쪽짜리 수련이 된다는 사실을 전하며, 몸과 마음 그리고 호흡의 중요성을 설명한다.",
      coverImage: "img/month/img9.jpg"
    },{
      title: "그러니까 지금 여기 계신 분들은 모두 쓰레기란 말입니다",
      author: "트래쉬맨 (지은이), 조예리, 권하빈 (옮긴이)",
      publisher: "동양북스(동양문고)",
      publishDate: "2024년 6월",
      originalPrice: "15,000원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "사장, 상사, 동료를 잘못 만나는 바람에 회사에 오만 정이 다 떨어지는 경우가 많다. 결국 ‘절이 싫으면 중이 떠난다’는 지혜로우신 조상님 말씀 따라 이직이나 퇴사를 해버리고야 만다. 그러니까 지금 여기 계신 분들은 모두 쓰레기란 말입니다>는 새로운 일인칭 시리즈의 에세이로, 직장에서 만날 법한 빌런과 부당한 상황을 매운맛으로 풍자한 코미디 책이자 현실공감 에세이다.",
      coverImage: "img/month/img10.jpg"
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
        <h2 id="title"><a class="title-link" href="detailedPage.html"">${book.title}</a></h2>
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
        window.location.href = "shoppingBag.html";
      }
    });
  });

  // 구매 버튼에 이벤트 리스너 추가
  document.querySelectorAll('.bookBuy').forEach(button => {
    button.addEventListener('click', function(event) {
      if (confirm("해당 책을 바로 구매하시겠습니까?")) {
        window.location.href = "bookBuy.html";
      }
    });
  });
});

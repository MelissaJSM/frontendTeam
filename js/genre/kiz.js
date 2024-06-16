//리스트 추가를 유동적으로 하면 개발자나 실사용하는 사람이나 작업이 매우 편하게 된다.
document.addEventListener('DOMContentLoaded', () => {
  const books = [
    {
      title: "곰 생각 벌 생각",
      author: "박하잎 (지은이)",
      publisher: "창비",
      publishDate: "2024년 6월",
      originalPrice: "14,000원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "나무에 새집을 짓고 부지런히 꿀을 모으던 벌. 어느 날, 벌은 벌집에서 꿀을 꺼내려던 곰을 발견하고 꿀 도둑으로 몰아세운다. 곰 역시 자신이 살던 나무를 차지한 벌을 집 도둑이라고 받아치며 서로를 향해 으르렁거리는데…….",
      coverImage: "../img/genre/kiz/img1.jpg"
    },
    {
      title: "분실물 박물관",
      author: "마리나 사에스 (지은이),이숙진 (옮긴이)",
      publisher: "천개의바람",
      publishDate: "2024년 6월",
      originalPrice: "17,000원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "바람그림책 155권. 우리가 잃어버린 건 어디로 가는지 상상해 본 적 있나? 잃어버린 물건들의 행방이 궁금하다면 ‘분실물 박물관’에 놀러 가자. 머리카락과 아주 오래된 물병부터 인내심과 시간처럼 눈에 보이지 않는 것들까지, 전 세계 사람들이 잃어버린 모든 게 ‘분실물 박물관’에 있다. 참, 넓은 박물관에서 길도 잃어버리지 않도록 조심하자.",
      coverImage: "../img/genre/kiz/img2.jpg"
    },
    {
      title: "행복한 붕붕어",
      author: "권윤덕 (지은이)",
      publisher: "길벗어린이",
      publishDate: "2024년 6월",
      originalPrice: "18,000원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "전쟁과 폭력의 참상을 마주하고 평화의 메시지를 예리한 시선으로 포착해 온 권윤덕 작가의 새 그림책 《행복한 붕붕어》가 출간되었다. 자연 속 생명의 목소리를 담아낸 이번 그림책은 발 달린 물고기 ‘붕붕어’를 통해 자연과 분리된 채 환경을 파괴하며 살아가는 우리에게 함께 살아가자는 공존의 메시지를 건넨다.",
      coverImage: "../img/genre/kiz/img3.jpg"
    },{
      title: "비나가 어디 갔지?",
      author: "마이크 큐라토 (지은이),신수진 (옮긴이)",
      publisher: "비룡소",
      publishDate: "2024년 5월",
      originalPrice: "14,000원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "수줍음 많은 아이의 심리를 유머러스하게 담아낸 사랑스런 그림책. 친구들을 초대해 시끌벅적한 파티를 연 타이니, 그런데 아무리 찾아봐도 친구 비나가 보이지 않는다. 비나는 어디 있는 걸까?",
      coverImage: "../img/genre/kiz/img4.jpg"
    },{
      title: "다리를 건너면",
      author: "마르크 마주브스키 (지은이),서남희 (옮긴이)",
      publisher: "책읽는곰",
      publishDate: "2024년 5월",
      originalPrice: "14,000원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "세계 곳곳의 개성 넘치는 다리들을 따뜻하고 유려한 그림으로 담아낸 지식 그림책. 어떤 다리는 까마득히 높고, 어떤 다리는 운치 있게 낮다. 어떤 다리는 바다를 한참 건너 다른 나라에 닿고, 어떤 다리는 아주 짧아서 몇 걸음 만에 한 나라에서 다른 나라로 건너갈 수 있다.",
      coverImage: "../img/genre/kiz/img5.jpg"
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

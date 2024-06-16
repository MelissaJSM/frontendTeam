//리스트 추가를 유동적으로 하면 개발자나 실사용하는 사람이나 작업이 매우 편하게 된다.
document.addEventListener('DOMContentLoaded', () => {
  const books = [
    {
      title: "리틀 라이프 1",
      author: "한야 야나기하라 (지은이),권진아 (옮긴이)",
      publisher: "시공사",
      publishDate: "2016년 6월",
      originalPrice: "14,800원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "영미권을 대표하는 문학상 맨부커상과 전미도서상 최종후보에 나란히 오르고, 「뉴욕타임스」, 「워싱턴포스트」, 「가디언」, 「월스트리트저널」을 비롯한 25개 언론사에서 '올해의 책'으로 꼽은 화제작.",
      coverImage: "../img/genre/literature/img1.jpg"
    },
    {
      title: "리틀 라이프 2 ",
      author: "한야 야나기하라 (지은이),권진아 (옮긴이)",
      publisher: "시공사",
      publishDate: "2016년 6월",
      originalPrice: "14,800원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "영미권을 대표하는 문학상 맨부커상과 전미도서상 최종후보에 나란히 오르고, 「뉴욕타임스」, 「워싱턴포스트」, 「가디언」, 「월스트리트저널」을 비롯한 25개 언론사에서 '올해의 책'으로 꼽은 화제작.",
      coverImage: "../img/genre/literature/img2.jpg"
    },
    {
      title: "두 사람의 인터내셔널",
      author: "김기태 (지은이)",
      publisher: "문학동네",
      publishDate: "2024년 5월",
      originalPrice: "25,000원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "2024년 드디어 출격하는 김기태 첫 소설집. 김기태는 2024년에도 보편 교양으로 젊은작가상을, 팍스 아토미카로 이상문학상 우수상을 수상했다. 표제작 두 사람의 인터내셔널이 문장 웹진 연재 당시 SNS 등에서 화제가 되어 이 소설로 이 작가를 이미 알고 있는 눈 밝은 독자도 적지 않을 것이다. 2020년대를 논하면서 빼놓을 수 없게 될 작가, 김기태의 세태소설이 도착했다.",
      coverImage: "../img/literature/img3.jpg"
    },{
      title: "나의 돈키호테",
      author: "김호연 (지은이)",
      publisher: "나무옆의자",
      publishDate: "2024년 4월",
      originalPrice: "18,000원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "아저씨를 찾는 여정에 동행한 그 라만차 클럽 아이들은 어른이 되어 '솔'에게 변액보험, 경제적 자유, 파이프 라인, 마세라티 같은 단어를 말한다. 그때의 우리는 어디로 갔을까? 우리가 잃어버린 것을 찾아 모험을 떠나고 싶어지는 소설. 그 끝에 우리의 '돈아저씨'가 서있을 것만 같다.",
      coverImage: "../img/literature/img4.jpg"
    },{
      title: "당근밭 걷기",
      author: "안희연 (지은이)",
      publisher: "문학동네",
      publishDate: "2024년 6월",
      originalPrice: "12,000원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "여름 언덕에서 배운 것 안희연 시집. ‘여름 언덕’에서 내려와 ‘당근밭’을 걸으며 채집한 삶의 신비가 있다. 밤 한 알을 손에 쥔 시인은 이렇게 대화를 시작한다.",
      coverImage: "../img/literature/img5.jpg"
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
        window.location.href = "../orderPage.html";
      }
    });
  });
});

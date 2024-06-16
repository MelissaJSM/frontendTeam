//리스트 추가를 유동적으로 하면 개발자나 실사용하는 사람이나 작업이 매우 편하게 된다.
document.addEventListener('DOMContentLoaded', () => {
  const books = [
    {
      title: "어린이 과학동아 Vol.12 : 2024.06.15",
      author: "과학동아 편집부 (지은이)",
      publisher: "동아사이언스(잡지)",
      publishDate: "2024년 6월",
      originalPrice: "13,000원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "출판사에서 제공하는 정보가 부족하여 표시하지 못하는 경우가 있습니다. 1:1 상담을 이용해 주십시오.",
      coverImage: "../img/genre/magazine/img1.jpg"
    },
    {
      title: "인공일반지능AGI, 유토피아 혹은 디스토피아?",
      author: "스켑틱 협회 편집부 (지은이)",
      publisher: "바다출판사",
      publishDate: "2024년 6월",
      originalPrice: "17,500원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "출판사에서 제공하는 정보가 부족하여 표시하지 못하는 경우가 있습니다. 1:1 상담을 이용해 주십시오.",
      coverImage: "../img/genre/magazine/img2.jpg"
    },
    {
      title: "과학소년 2024.6",
      author: "과학소년 편집부 (지은이)",
      publisher: "교원문고(잡지)",
      publishDate: "2024년 6월",
      originalPrice: "12,500원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "출판사에서 제공하는 정보가 부족하여 표시하지 못하는 경우가 있습니다. 1:1 상담을 이용해 주십시오.",
      coverImage: "../img/genre/magazine/img3.jpg"
    },{
      title: "어린이 과학동아 Vol.11 : 2024.06.01",
      author: "과학동아 편집부 (지은이)",
      publisher: "동아사이언스(잡지)",
      publishDate: "2024년 5월",
      originalPrice: "13,000원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "출판사에서 제공하는 정보가 부족하여 표시하지 못하는 경우가 있습니다. 1:1 상담을 이용해 주십시오.",
      coverImage: "../img/genre/magazine/img4.jpg"
    },{
      title: "위즈키즈 2024.6",
      author: "위즈키즈 편집부 (지은이)",
      publisher: "교원문고(잡지)",
      publishDate: "2024년 6월",
      originalPrice: "12,500원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "출판사에서 제공하는 정보가 부족하여 표시하지 못하는 경우가 있습니다. 1:1 상담을 이용해 주십시오.",
      coverImage: "../img/genre/magazine/img5.jpg"
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

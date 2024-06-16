//리스트 추가를 유동적으로 하면 개발자나 실사용하는 사람이나 작업이 매우 편하게 된다.
document.addEventListener('DOMContentLoaded', () => {
  const books = [
    {
      title: "PASH! 2024年 4月號",
      author: "",
      publisher: "主婦と生活社",
      publishDate: "2024년 3월",
      originalPrice: "13,920원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "(종수가 많은) 외서는 해외거래처에서 제공하는 정보가 부족하여 표시하지 못하는 경우가 있습니다.",
      coverImage: "../img/genre/etc/img1.jpg"
    },
    {
      title: "ホロライブクリエイタ-コンテスト2023 pixiv COLLECTION",
      author: "カバ- (지은이)",
      publisher: "KADOKAWA",
      publishDate: "2023년 8월",
      originalPrice: "26,530원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "(종수가 많은) 외서는 해외거래처에서 제공하는 정보가 부족하여 표시하지 못하는 경우가 있습니다.",
      coverImage: "../img/genre/etc/img2.jpg"
    },
    {
      title: "リスアニ！Vol.55 ホロライブ音樂大全",
      author: "",
      publisher: "ソニ-·ミュ-ジックソリュ-ションズ",
      publishDate: "2024년 3월",
      originalPrice: "24,040원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "(종수가 많은) 외서는 해외거래처에서 제공하는 정보가 부족하여 표시하지 못하는 경우가 있습니다.",
      coverImage: "../img/genre/etc/img3.jpg"
    },{
      title: "コンプティ-ク 2023年 2月號",
      author: "",
      publisher: "KADOKAWA",
      publishDate: "2023년1월",
      originalPrice: "15,000원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "(종수가 많은) 외서는 해외거래처에서 제공하는 정보가 부족하여 표시하지 못하는 경우가 있습니다.",
      coverImage: "../img/genre/etc/img4.jpg"
    },{
      title: "S Cawaii!(エスカワイイ) 2022年 11 月號增刊 特別版【表紙·ホロライブ(夜空メル、癒月ちょこ、桃鈴ねね、鷹嶺ルイ)】",
      author: "",
      publisher: "主婦の友社",
      publishDate: "2022년 9월",
      originalPrice: "9,850원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "(종수가 많은) 외서는 해외거래처에서 제공하는 정보가 부족하여 표시하지 못하는 경우가 있습니다.",
      coverImage: "../img/genre/etc/img5.jpg"
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

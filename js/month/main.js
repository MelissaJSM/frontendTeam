//리스트 추가를 유동적으로 하면 개발자나 실사용하는 사람이나 작업이 매우 편하게 된다.
document.addEventListener('DOMContentLoaded', () => {
  const books = [
    {
      title: "남팬만화 7",
      author: "장진 (지은이)",
      publisher: "위즈덤하우스",
      publishDate: "2024년 6월",
      originalPrice: "16,000원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "연민성은 김용철과 함께 새로운 그룹 결성을 적극적으로 추진하고, 그 과정에서 조유현에게도 크고 작은 도움을 청한다. 서희망은 어쩐지 부쩍 가까워진 것만 같은 민성과 유현의 사이를, 그리고 민성을 바라보는 유현의 눈빛을 자꾸 신경 쓰게 된다.",
      coverImage: "img/month/img1.jpg"
    },
    {
      title: "오에 컬렉션 세트 - 전5권 (특별 한정판)",
      author: "오에 겐자부로 (지은이), 이민희, 남휘정, 정상민, 서은혜 (옮긴이), 남휘정 (해설)",
      publisher: "21세기문화원",
      publishDate: "2024년 6월",
      originalPrice: "100,000원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "2024년 오에 겐자부로 타계 1주년 기념 도서다. 『새로운 문학을 위하여』, 『읽는 행위』, 『쓰는 행위』, 『소설의 전략』, 『그리운 시절로 띄우는 편지』로 구성된 세트다.",
      coverImage: "img/month/img2.jpg"
    },
    {
      title: "나의 첫 시나리오",
      author: "정서경 (지은이), 김라온, 박재인 (그림)",
      publisher: "돌고래",
      publishDate: "2024년 6월",
      originalPrice: "25,000원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "처음 시나리오를 쓰기 시작하는 이들, 다른 글쓰기를 하다가 드라마나 영화 각본을 쓰려고 하는 이들, 어떤 식으로든 자기만의 이야기를 창조하고 싶은 이들을 위한 정서경 작가의 친절한 안내서.",
      coverImage: "img/month/img3.jpg"
    },{
      title: "벌거벗은 동물사",
      author: "이종식 (지은이)",
      publisher: "동아시아",
      publishDate: "2024년 6월",
      originalPrice: "15,000원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "역사 속에서 동물은 늘 인간과 공존했다. 동물은 인간에게 사냥감이기도 하고, 가축이기도 하고, 애완동물이기도 했다. 도시를 중심으로 현대 유럽 문명이 발전하고 전 지구적으로 확산되면서 인간은 강아지, 말, 젖소, 쥐, 낙타, 물개, 사자, 당나귀, 닭 등 다양한 동물에게 영향을 미쳤다.",
      coverImage: "img/month/img4.jpg"
    },{
      title: "이야기 요정",
      author: "정미진 (지은이), 최연주 (그림)",
      publisher: "엣눈북스(atnoonbooks)",
      publishDate: "2024년 6월",
      originalPrice: "18,000원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "도저히 새로운 이야기가 떠오르지 않아 괴로워하는 한 작가의 고민에서 시작되었다. 애잔한 마음으로 불쌍한 작가의 간절함을 좇다 보면 여러분도 불현듯, 자신만의 이야기 씨앗을 발견하게 될지도 모른다.",
      coverImage: "img/month/img5.jpg"
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
        window.location.href = "orderPage.html";
      }
    });
  });
});

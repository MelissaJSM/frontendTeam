//리스트 추가를 유동적으로 하면 개발자나 실사용하는 사람이나 작업이 매우 편하게 된다.
document.addEventListener('DOMContentLoaded', () => {
  const books = [
    {
      title: "타샤 튜더 나의 정원",
      author: "타샤 튜더 (지은이),김향 (옮긴이),리처드 W. 브라운 (사진)",
      publisher: "윌북",
      publishDate: "2024년 4월",
      originalPrice: "24,800원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "타샤 정원이 가장 아름다웠던 시절을 담은 책 『타샤 튜더 나의 정원』이 재출간되었다. 식물을 좋아하는 사람들과 자연주의적 라이프 스타일을 꿈꾸는 사람들에게 인생 책으로도 꼽혔던 책으로, 절판 후 복간을 간절히 원했던 수많은 독자에게 봄꽃처럼 반가운 얼굴로 돌아왔다.",
      coverImage: "../img/genre/nonLliterature/img1.jpg"
    },
    {
      title: "있는 힘껏 산다",
      author: "정재경 (지은이)",
      publisher: "샘터사",
      publishDate: "2024년 4월",
      originalPrice: "18,000원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "식물을 키우는 과정에서 경험한 것들을 써 내려간 저자의 이야기를 따라가다 보면, 식물이 베푼 사랑과 강인한 생명력이 어떻게 한 사람의 인생에 스며 삶의 방향을 결정하는 데 도움을 주고 좀 더 나은 방향으로 삶을 이끄는지 엿볼 수 있다. 그 어떤 상황 속에서도 푸른 새잎을 틔우고, 고유한 생존 방식으로 생명을 이어가는 식물들이 건네는 응원이 마음이 흔들리거나 힘이 들 때 다시 한번 나아갈 용기를 얻게 할 것이다.",
      coverImage: "../img/genre/nonLliterature/img2.jpg"
    },
    {
      title: "살아 있는 모든 것에 안부를 묻다",
      author: "니나 버튼 (지은이),김희정 (옮긴이)",
      publisher: "열린책들",
      publishDate: "2024년 5월",
      originalPrice: "18,000원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "스웨덴의 시인이자 에세이스트인 니나 버튼은 1946년생으로 평생 글을 쓰는 삶을 살아 왔다. 어느 날 그녀는 한적한 시골에 있는 별장을 개조해 그곳에서 집필 작업을 하기로 결심했다. 오래도록 비어 있었다고 생각했지만 사실 무수한 생명이 그 낡은 공간에서 활기차게 지내고 있었다. 저마다의 생명력을 뽐내면서 말이다. 자연스레 새부터 벌, 개미, 다람쥐, 여우, 물고기, 고래, 나무, 꽃, 풀에 이르기까지 주변의 동물과 식물을 자세히 살펴볼 수 있었다. 수많은 영감을 얻은 그녀는 문학, 철학, 과학, 역사, 언어 등을 아우르며 자연과 생명을 탐구하는 여정을 아름답게 묘사해 냈다.",
      coverImage: "../img/genre/nonLliterature/img3.jpg"
    },{
      title: "야생의 숨결 가까이",
      author: "리처드 메이비 (지은이),신소희 (옮긴이)",
      publisher: "사계절",
      publishDate: "2024년 5월",
      originalPrice: "19,800원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "책의 여정을 따라 인간이 딛고 선 자연 지대와 인간을 둘러싼 존재들을 하나하나 인식하다 보면, 이 세상이 하나의 생태계로 연결되어 있다는 사실을 체감하게 된다. 스스로를 생태계 공동체의 일원으로 여기고 세상과의 단절감을 극복해 나가는 것, 이것이 책에서 말하는 치유와 회복의 의미다.",
      coverImage: "../img/genre/nonLliterature/img4.jpg"
    },{
      title: "침대 딛고 다이빙",
      author: "송혜교 (지은이)",
      publisher: "동양북스(동양문고)",
      publishDate: "2024년 6월",
      originalPrice: "16,800원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "운동하기 싫은 마음을 완전히 끊어낸 과정을 담은 자전적인 에세이다. “나는 나 자신을 안 움직여 인간으로 정의했다”는 작가의 고백으로 이야기는 시작된다. 게으름에도 계급이 있다면 성골이요, 안 움직이는 데도 수준이 있다면 1등급을 거머쥘 인재가 자신이라고. 하지만 의학적으로 신체 나이가 부모님 나이에 가깝다는 굴욕적인 진단과 마흔부터는 골골거릴 거라는 살벌한 예언을 듣게 되면서, 저질 체력의 구렁텅이에 빠진 자신을 스스로 구하고자 운동이라는 존재를 삶에 들여오기로 결심한다.",
      coverImage: "../img/genre/nonLliterature/img5.jpg"
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

//리스트 추가를 유동적으로 하면 개발자나 실사용하는 사람이나 작업이 매우 편하게 된다.
document.addEventListener('DOMContentLoaded', () => {
  const books = [
    {
      title: "Holes (Paperback, 미국판)",
      author: "루이스 새커 (지은이)",
      publisher: "Random House",
      publishDate: "2000년 5월",
      originalPrice: "16,000원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "1999년 뉴베리상을 받은 청소년과 성인을 위한 소설. There's a Boy in the Girls' Bathroom 의 지은이 루이스 새커의 이름을 알린 소설이다.",
      coverImage: "../img/genre/eBook/img1.jpg"
    },
    {
      title: "The Little Prince (Paperback, 미국판)",
      author: "앙투안 드 생텍쥐페리 (지은이),리차드 하워드 (옮긴이)",
      publisher: "Harcourt",
      publishDate: "2000년 6월",
      originalPrice: "12,500원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "명작 중의 명작으로 손꼽히는 어린 왕자는 해방 이후 가장 많이 읽힌 해외 문학 작품 중 하나로, 어른과 아이 모두에게 끊임없이 사랑받는 고전이다. 조종사 아저씨의 입을 통해 진행되는 이야기는 책 속의 책 느낌으로 표현된 장면들과 함께 잔잔하고 깊은 감동을 선사할 것이다. 책 뒤쪽에 실린 어린 왕자와 조종사 아저씨의 편지는 어린이 독자들에게 한층 더 진한 감동과 기쁨을 전한다.",
      coverImage: "../img/genre/eBook/img2.jpg"
    },
    {
      title: "How to Steal a Dog (Paperback, 미국판) ",
      author: "Barbara O'Connor,바바라 오코너 (지은이)Square Fish",
      publisher: "Square Fish",
      publishDate: "2009년 4월",
      originalPrice: "10,200원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "조지나는 최근 자신에게 일어난 일을 믿을 수가 없다. 어느 날 학교에서 돌아와 보니, 아빠는 감쪽같이 사라져버렸고, 25센트 동전 꾸러미 세 개와 1달러짜리 지폐만 들어 있는 마요네즈 한 통뿐이다. 게다가 집주인은 집세를 내지 않았다고 즉각 방을 빼라고 한다. 그 때부터 조지나와 엄마, 동생은 자동차에서 자고 맥도널드 화장실에서 씻는 생활을 반복한다. 하루하루 평범한 생활을 동경하던 조지나의 눈에 돈 많은 집의 강아지 윌리가 들어왔다. 가족을 위한 기상천외한 '세상에서 가장 재기발랄한 집구하기 프로젝트'를 계획하는데…",
      coverImage: "../img/genre/eBook/img3.jpg"
    },{
      title: "Hatchet (Paperback, 미국판) ",
      author: "게리 폴슨 (지은이)",
      publisher: "Aladdin",
      publishDate: "2007년 1월",
      originalPrice: "15,000원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "캐나다 북부 삼림지대의 고립무원에 홀로 내던져진 한 소년의 54일간의 생존기록",
      coverImage: "../img/genre/eBook/img4.jpg"
    },{
      title: "Fanny's Dream (Paperback)",
      author: "Caralyn Buehner (지은이),Mark Buehner (그림)",
      publisher: "Puffin",
      publishDate: "2003년 6월",
      originalPrice: "9,500원",
      deliveryInfo: "지금 택배로 주문하면 당일 출고!",
      description: "In this inventive take on the traditional Cinderella tale, Fanny Agnes is a sturdy farm girl with a big dream. Someday, she believes, she will marry a prince. When the town mayor announces he is throwing a grand ball, Fanny is convinced her time has come. She puts on her best calico dress and goes out to the garden so that she'll be ready when her fairy godmother arrives. As the seconds tick by, Fanny waits and waits. Finally, she hears a voice. It isn't her fairy godmother-but it is someone who will change her life forever.",
      coverImage: "../img/genre/eBook/img5.jpg"
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

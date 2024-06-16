document.addEventListener('DOMContentLoaded', () => {
  const orders = [
    {
      title: "도둑맞은 집중력",
      date: "2024-06-14",
      originalPrice: "37,600",
      count : "2",
      coverImage: "img/myPage/img2.jpg",
      status: "배송중" // 상태를 추가
    },
    {
      title: "세이노의 가르침 (화이트 에디션)",
      date: "2024-02-01",
      originalPrice: "7,200",
      count : "1",
      coverImage: "img/myPage/img1.jpg",
      status: "배송완료" // 상태를 추가
    },
    {
      title: "도시와 그 불확실한 벽",
      date: "2024-01-03",
      originalPrice: "19,500",
      count : "1",
      coverImage: "img/myPage/img3.jpg",
      status: "배송완료" // 상태를 추가
    },
    {
      title: "하늘과 바람과 별과 인간",
      date: "2023-11-27",
      originalPrice: "17,800",
      count : "1",
      coverImage: "img/myPage/img4.jpg",
      status: "배송완료" // 상태를 추가
    },
    {
      title: "문과 남자의 과학 공부",
      date: "2023-07-14",
      originalPrice: "17,500",
      count : "1",
      coverImage: "img/myPage/img5.jpg",
      status: "배송완료" // 상태를 추가
    },
    {
      title: "스즈메의 문단속",
      date: "2023-05-20",
      originalPrice: "13,000",
      count : "1",
      coverImage: "img/myPage/img6.jpg",
      status: "배송완료" // 상태를 추가
    },
    {
      title: "슬램덩크 리소스-THE FIRST SLAM DUNK re:SOURCE",
      date: "2023-02-01",
      originalPrice: "140,000",
      count : "7",
      coverImage: "img/myPage/img7.jpg",
      status: "배송완료" // 상태를 추가
    },

    // 추가적인 주문 객체를 여기에 추가하세요
  ];

  const orderList = document.getElementById('order-list');

  orders.forEach(order => {
    const orderItem = document.createElement('div');
    orderItem.className = 'order-item';

    let statusColor = order.status === "배송완료" ? "red" : "green";

    orderItem.innerHTML = `
      <div id="order-img">
          <img src="${order.coverImage}">
        </div>
        <div class="order-details">
          <p>제목 : ${order.title}</p>
          <p class="order-price">가격 : ${order.originalPrice}원 / ${order.count}개</p>
          <p class="order-date">구매일자 : ${order.date}</p>
          <p class="status" style="color: ${statusColor};">배송 상태 : ${order.status}</p>
        </div>
        <div id="inquiry-delivery">
          <button class="inquiry-button">문의하기</button>
          <button class="delivery-button">배송조회</button>
        </div>
    `;

    orderList.appendChild(orderItem);
  });

  document.getElementById("searchedButton").onclick = function() {
    document.getElementById("order-container").style.display = "block";
  };

  document.querySelectorAll('.inquiry-button').forEach(button => {
    button.addEventListener('click', function(event) {
      if (confirm("문의 가능 시간이 지났습니다. 그래도 진행하시겠습니까?")) {
        window.location.href = "html/write.html";
      }
    });
  });

  document.querySelectorAll('.delivery-button').forEach(button => {
    button.addEventListener('click', function(event) {
      if (confirm("배송 확인으로 이동합니다.")) {
        //window.location.href = "bookBuy.html";
      }
    });
  });
});

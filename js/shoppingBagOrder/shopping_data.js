document.addEventListener("DOMContentLoaded", () => {
  const jsonData =  [
    {
      "book_src" : "img/shoppingBagOrder/001.jpg",
      "book_info" : "영미권을 대표하는 문학상 맨부커상과 전미도서상 최종후보에<br> 나란히 오르고, [뉴욕타임스] [워싱턴포스트]<br> [가디언] [월스트리트저널]을 비롯한 25개 언론사에서 ‘올해의 책’<br>으로 꼽은 화제작 《리틀 라이프》가 한국어판으로 출간되었다.",
      "book_name" : "불변의 법칙",
      "book_author" : "서삼독",
      "book_quantity" : "3",
      "book_price" : "22500",
      "book_date" : "2024년 02월 28일"
    },
    {
      "book_src" : "img/shoppingBagOrder/002.jpg",
      "book_info" : "2000년부터 발표된 그의 주옥같은 글들. 독자들이 자발적으로 <br>만든 제본서는 물론, 전자책과 앱까지 나왔던 『세이노의 가르침』이<br> 드디어 전국 서점에서 독자들을 마주한다. <br>여러 판본을 모으고 저자의 확인을<br>거쳐 최근 생각을 추가로 수록하였다.",
      "book_name" : "세이노의 가르침",
      "book_author" : "데이원",
      "book_quantity" : "2",
      "book_price" : "6480",
      "book_date" : "2024년 03월 02일"
    },
    {
      "book_src" : "img/shoppingBagOrder/003.jpg",
      "book_info" : "청소년 도서 시장의 베스트셀러를 오래도록 장식하고 있으며,<br> 철학과 고전은 어렵고 고루하다는 기존 인식까지 <br>보기 좋게 깨트린 『철학의 숲』, 『고전의 숲』 시리즈의<br> 세 번째 책 『신화의 숲』이 출간되어 화제다. ",
      "book_name" : "신화의 숲",
      "book_author" : "김헌",
      "book_quantity" : "5",
      "book_price" : "16200",
      "book_date" : "2024년 05월 20일"
    }
  ];

  let row = "<tr><th colspan='2'>도서 정보</th><th>도서명</th><th>저자</th><th>수량</th><th>도서가격</th><th>선택</th></tr>";
  let shopping_table = document.getElementById("shopping_table");

  for(let i = 0; i < jsonData.length; i++){
    row += `<tr><td><img src=${jsonData[i].book_src}></td>
								<td class='info'>${jsonData[i].book_info}</td>
								<td>${jsonData[i].book_name}</td>
								<td>${jsonData[i].book_author}</td>
								<td><input type='number' value='1' min='1' class='quantity_chk' oninput='calculateTotal()'></td>
								<td class='price_chk'>${jsonData[i].book_price}</td>
								<td><input type='checkbox' class='chk' id='check${i+1}' onchange="calculateTotal()" /></td></tr>`;
  };
  shopping_table.innerHTML = row;
});

function calculateTotal() {
  let total = 0;
  const rows = document.querySelectorAll("#shopping_table tr");

  rows.forEach((row, index) => {
    if (index === 0) return; // Skip the header row
    const checkbox = row.querySelector(".chk");
    const quantityInput = row.querySelector(".quantity_chk");
    const priceElement = row.querySelector(".price_chk");
    const price = parseInt(priceElement.textContent, 10);

    if (checkbox.checked) {
      const quantity = parseInt(quantityInput.value, 10);
      total += price * quantity;
    }
  });

  document.getElementById("total_price").textContent = `총 결제 금액: ${total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 원`;
}

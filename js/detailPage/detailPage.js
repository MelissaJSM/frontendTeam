//리스트 추가를 유동적으로 하면 개발자나 실사용하는 사람이나 작업이 매우 편하게 된다.
document.addEventListener('DOMContentLoaded', () => {

  // 장바구니 버튼에 이벤트 리스너 추가
  document.querySelectorAll('#shoppingBagButton').forEach(button => {
    button.addEventListener('click', function(event) {
      if (confirm("장바구니에 책이 담겼습니다. 장바구니로 이동하시겠습니까?")) {
        window.location.href = "shoppingBag.html";
      }
    });
  });

  // 구매 버튼에 이벤트 리스너 추가
  document.querySelectorAll('#buyButton').forEach(button => {
    button.addEventListener('click', function(event) {
      if (confirm("해당 책을 바로 구매하시겠습니까?")) {
        window.location.href = "orderPage.html";
      }
    });
  });
});

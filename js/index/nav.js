
//여기는 호버를 사용했으므로 클릭 기능이 없어도 괜찮다.

// 드롭다운 메뉴에서 리스트를 선택하면 텍스트와 이미지를 변경

// 드롭다운 메뉴에서 언어를 선택하면 텍스트와 이미지를 변경
document.querySelectorAll('#bookMenuDropdown a').forEach(function(element) {
  element.addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('bookMenuDropdown').style.display = 'none';
  });
});

// 클릭한 곳이 드롭다운 메뉴 바깥이면 메뉴를 닫음
window.addEventListener('click', function(event) {
  let dropdown = document.getElementById('bookMenuDropdown');
  if (dropdown.style.display === 'block') {
    dropdown.style.display = 'none';
  }
});

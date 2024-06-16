
//언어 클릭하면 동작하는 코드 추가.
document.getElementById('lang').addEventListener('click', function(event) {
  event.stopPropagation();
  let dropdown = document.getElementById('langDropdown');
  dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
  let rect = document.getElementById('lang').getBoundingClientRect();
  dropdown.style.top = rect.bottom + 'px';
  dropdown.style.left = rect.left + 'px';
});

// 드롭다운 메뉴에서 언어를 선택하면 텍스트와 이미지를 변경
document.querySelectorAll('#langDropdown a').forEach(function(element) {
  element.addEventListener('click', function(event) {
    event.preventDefault();
    let selectedLang = event.target.getAttribute('data-lang');
    let selectedImg = event.target.getAttribute('data-img');
    document.querySelector('#lang span').textContent = selectedLang;
    document.getElementById('langIcon').src = selectedImg;
    document.getElementById('langDropdown').style.display = 'none';
  });
});

// 클릭한 곳이 드롭다운 메뉴 바깥이면 메뉴를 닫음
window.addEventListener('click', function(event) {
  let dropdown = document.getElementById('langDropdown');
  if (dropdown.style.display === 'block') {
    dropdown.style.display = 'none';
  }
});

function openLoginWindow(event, value) {
  event.preventDefault(); // 기본 링크 동작을 막음
  const width = 800;
  const height = 800;
  const left = (screen.width / 2) - (width / 2);
  const top = (screen.height / 2) - (height / 2);
  if(value==0){
    window.open('../login.html', 'loginWindow', `width=${width},height=${height},top=${top},left=${left}`);
  }
  else if(value==1){
    window.open('../join.html', 'loginWindow', `width=${width},height=${height},top=${top},left=${left}`);
  }

}

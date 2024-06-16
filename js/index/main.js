
//슬라이드 관리 자바스크릅트.
let slideIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

document.querySelector('.prev').addEventListener('click', () => {
  showSlide(slideIndex - 1);
});

document.querySelector('.next').addEventListener('click', () => {
  showSlide(slideIndex + 1);
});

function showSlide(index) {
  if (index < 0) {
    slideIndex = totalSlides - 1;
  } else if (index >= totalSlides) {
    slideIndex = 0;
  } else {
    slideIndex = index;
  }
  slides.style.transform = `translateX(-${slideIndex * slides.clientWidth}px)`;
}

// 마우스 드래그 기능 추가
let isDragging = false;
let startPos = 0;
let currentTranslate = 0;
let prevTranslate = 0;
let animationID;
const slidesContainer = document.querySelector('.slides');
let hasMoved = false;
const threshold = 5; // 클릭과 드래그를 구분하기 위한 임계값

slidesContainer.addEventListener('mousedown', startDrag);
slidesContainer.addEventListener('mouseup', endDrag);
slidesContainer.addEventListener('mousemove', drag);
slidesContainer.addEventListener('mouseleave', endDrag);
slidesContainer.addEventListener('touchstart', startDrag);
slidesContainer.addEventListener('touchend', endDrag);
slidesContainer.addEventListener('touchmove', drag);
slidesContainer.addEventListener('click', preventClick, true);


//좌우로 드래그 하는 부분
//솔직히 크롬에서 사용해보니 빼버리고싶다.
function startDrag(event) {
  isDragging = true;
  hasMoved = false;
  startPos = getPositionX(event);
  animationID = requestAnimationFrame(animation);
  slidesContainer.style.transition = 'none';
}

function endDrag(event) {
  isDragging = false;
  cancelAnimationFrame(animationID);
  slidesContainer.style.transition = 'transform 0.5s ease-in-out';
  const movedBy = currentTranslate - prevTranslate;

  if (Math.abs(movedBy) < threshold) {
    setPositionByIndex();
    return; // 이동 거리가 임계값보다 작으면 클릭으로 간주하고 아무 작업도 하지 않음
  }

  if (movedBy < -100 && slideIndex < totalSlides - 1) {
    slideIndex += 1;
  } else if (movedBy > 100 && slideIndex > 0) {
    slideIndex -= 1;
  }

  // 슬라이드 순환 기능
  if (slideIndex < 0) {
    slideIndex = totalSlides - 1;
  } else if (slideIndex >= totalSlides) {
    slideIndex = 0;
  }

  setPositionByIndex();
}

function drag(event) {
  if (isDragging) {
    const currentPosition = getPositionX(event);
    currentTranslate = prevTranslate + currentPosition - startPos;
    hasMoved = true;
  }
}

function animation() {
  setSliderPosition();
  if (isDragging) requestAnimationFrame(animation);
}

function setSliderPosition() {
  slidesContainer.style.transform = `translateX(${currentTranslate}px)`;
}

function setPositionByIndex() {
  currentTranslate = slideIndex * -slides.clientWidth;
  prevTranslate = currentTranslate;
  slidesContainer.style.transform = `translateX(${currentTranslate}px)`;
}

function getPositionX(event) {
  return event.type.includes('mouse') ? event.clientX : event.touches[0].clientX;
}

function preventClick(event) {
  if (hasMoved) {
    event.preventDefault();
    event.stopImmediatePropagation();
  }
}

// 창 크기가 변경될 때 슬라이드 너비 재계산
//안하면 슬라이드가 너무 많이가거나 너무 적게가서 이상하게 나옴.
window.addEventListener('resize', () => {
  const newSlideWidth = slides.clientWidth;
  setPositionByIndex();
});

// 10초마다 자동으로 다음 슬라이드로 이동
setInterval(() => {
  showSlide(slideIndex + 1);
}, 10000);

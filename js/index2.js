console.clear()
const node = document.getElementById('letters')
const node2 = document.getElementById('letters2')
const node3 = document.getElementById('letters3')

const content = '시각의 경계를 넘어 우리만의 이야기로 담다'
const content2 = 'PANORAMA'
const content3 = '나는 집에 매우 가고 싶다'

// 반응형 radius 계산 함수 추가
function calculateRadius() {
  const windowWidth = window.innerWidth;
  
  // 기본 radius 값 (1024px 초과)
  let radius1 = 280;
  let radius2 = 120;
  let radius3 = 190;
  
  // 태블릿 크기 (769px ~ 1024px)
  if (windowWidth <= 1024) {
    radius1 = 240;
    radius2 = 100;
    radius3 = 160;
  }
  
  // 작은 태블릿 크기 (481px ~ 768px)
  if (windowWidth <= 768) {
    radius1 = 200;
    radius2 = 90;
    radius3 = 140;
  }
  
  // 모바일 크기 (480px 이하)
  if (windowWidth <= 480) {
    radius1 = 150;
    radius2 = 70;
    radius3 = 100;
  }
  
  return { radius1, radius2, radius3 };
}

// radius 값을 동적으로 설정
let { radius1, radius2, radius3 } = calculateRadius();

// 리사이즈 이벤트 리스너 추가
window.addEventListener('resize', () => {
  const newRadii = calculateRadius();
  radius1 = newRadii.radius1;
  radius2 = newRadii.radius2;
  radius3 = newRadii.radius3;
  
  // 크기 변경 시 텍스트 재생성
  generateLetters(content, node, radius1);
  generateLetters(content2, node2, radius2);
  generateLetters(content3, node3, radius3);
});

function generateLetters(text, targetNode, radius) {
  targetNode.innerHTML = ''
  const letters = text.split('')
  const step = 360 / letters.length
  letters.forEach((l, i) => {
    const span = document.createElement('span')
    span.textContent = l
    
    if (targetNode.id === 'letters') {
      if (i >= 0 && i <= 3) {
        span.style.color = '#f86222'
      } else if (i >= 4 && i <= 7) {
        span.style.color = '#f86222'
      }
    }
    
    const deg = step * i
    span.style.transform = transform(deg, radius)
    targetNode.append(span)
  })
}

function transform(deg, radius = 180) {
  return `rotateY(${deg}deg) translateZ(${radius}px)`
}

generateLetters(content, node, radius1)
generateLetters(content2, node2, radius2)
generateLetters(content3, node3, radius3)

function rotate() {
  let degree = 0
  setInterval(() => {
    // 자동 회전과 마우스 움직임을 결합
    node2.style.transform = `rotateX(${rotationX}deg) rotateY(${degree}deg)`;
    degree = (degree + 1) % 360
  }, 30)
}

rotate()

// 마우스 이벤트 리스너 추가
document.addEventListener('mousemove', handleMouseMove);

// 회전 각도 초기값 설정
let rotationX = 0;
let rotationY = 0;

function handleMouseMove(event) {
    // 마우스 위치를 화면 중앙 기준으로 계산
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    
    // 마우스 위치에 따른 회전 각도 계산
    rotationX = (event.clientY - centerY) * 0.1; // 상하 움직임
    rotationY = (event.clientX - centerX) * 0.1; // 좌우 움직임
    
    // letters에만 마우스 회전 적용
    const letters = document.getElementById('letters');
    letters.style.transform = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
}


let isDragging = false;
let startX;
let tiltAngle = 0; // 기울기 각도
let currentTilt = 0;
const rotationSpeed = 10; // 기본 회전 속도 (초)

const circle = document.querySelector('.circle');
circle.style.animation = `rotate ${rotationSpeed}s linear infinite`;

circle.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX;
});

document.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  
  const deltaX = e.clientX - startX;
  tiltAngle = currentTilt + deltaX * 0.5; // 기울기 조절 계수
  
  // 회전 애니메이션 유지하면서 Y축 기울기 추가
  circle.style.transform = `rotateY(${tiltAngle}deg)`;
  
  startX = e.clientX;
});

document.addEventListener('mouseup', () => {
  isDragging = false;
  currentTilt = tiltAngle; // 현재 기울기 저장
}); 
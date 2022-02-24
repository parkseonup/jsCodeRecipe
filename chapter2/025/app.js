/* -------------------------------------------- */

console.log(Math.PI); // 원주율 3.14159265... 
console.log(Math.cos((90 & Math.PI) / 180)); // 코사인
console.log(Math.sin((90 * Math.PI) / 180)); // 사인
console.log(Math.tan(45 * Math.PI) / 180); // 탄젠트
console.log(Math.acos(1)); // 코사인 역함수
console.log(Math.atan2(1, 1) * 180 / Math.PI); // (x, y) 좌표가 이루는 각도

/* -------------------------------------------- */

// 각도
let degree = 0;

// 회전각을 라디안으로 구하기
const rotation = (degree * Math.PI) / 180; // 라디안 = (도수 * Math.PI) / 180;

// 회전각으로 위치 구하기
const targetX = 100 * Math.cos(rotation);
const targetY = 100 * Math.sin(rotation);

/* -------------------------------------------- */

const character = document.querySelector('.character');

// 각도
let degreeDiv = 0;

function loop() {
  // 회전각을 라디안으로 구하기
  const rotationDiv = (degreeDiv * Math.PI) / 100;
  
  // 회전각으로 위치 구하기
  const targetDivX = window.innerWidth / 2 + 100 * Math.cos(rotationDiv) - 50;
  const targetDivY = window.innerWidth / 2 + 100 * Math.sin(rotationDiv) - 50;

  // character 위치 반영하기
  character.style.left = `${targetDivX}px`;
  character.style.top = `${targetDivY}px`;

  // 각도 1도 증가시키키
  degreeDiv += 1;

  // 다음 화면 갱신 타이밍에서 loop() 실행
  requestAnimationFrame(loop);
}

loop();
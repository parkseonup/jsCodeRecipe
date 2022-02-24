console.log(Math.random());
console.log(Math.floor(Math.random() * 100));
console.log(10 + Math.floor(Math.random() * 10));

// 직사각형
const rectangle = document.querySelector('.rectangle');

// 버튼 클릭 시 onClickButton() 실행
document.querySelector('.button').addEventListener('click', onClickButton);

// 버튼 누를 때마다 그라데이션 색상 변경
function onClickButton() {
  const randomNum = Math.trunc(Math.random() * 100);
  const randomNum2 = randomNum === Math.trunc(Math.random() * 100) ? onClickButton() : Math.trunc(Math.random() * 100);
  const randomColorStart = `hsl(${randomNum}, 100%, 50%)`;
  const randomColorEnd = `hsl(${randomNum2}, 100%, 50%)`;

  rectangle.style.setProperty('--start', randomColorStart);
  rectangle.style.setProperty('--end', randomColorEnd);
}

// 암호 랜덤은 crypto.getRandomValues(타입배열);
// Uint16Array: 16비트 타입배열
// Uint32Array: 32비트 타입배열
const randomArray1 = crypto.getRandomValues(new Uint16Array(10));

randomArray1.join('');
console.log(randomArray1);

crypto.getRandomValues(new Uint32Array(10)).join('');

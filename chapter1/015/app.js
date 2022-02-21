const myPrice = 1;

if (myPrice >= 50) {
  alert('myPrice는 50 이상입니다.');
} else if (myPrice >= 10) {
  alert('myPrice는 10 이상 50 미만입니다.');
} else {
  alert('myPrice는 10 미만입니다.');
}

if (true) {
  alert('Hello');
}

const randomNum = Math.random() * 10;

if (randomNum >= 5) {
  alert('randomNum은 5 이상');
} else {
  alert('randomNum은 5 미만');
}

const randomNum2 = Math.random() * 10;

if (randomNum2 >= 5) alert('randomNum2은 5 이상');
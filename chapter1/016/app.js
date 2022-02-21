const myFruit = '사과';

switch (myFruit) {
  case '사과':
    alert('사과입니다');
    break;
  case '귤':
    alert('귤입니다');
    break;
  default:
    alert('기타 과일입니다');
    break;
}

switch (myFruit) {
  case '사과':
    alert('사과입니다');
  case '귤':
    alert('귤입니다');
  default:
    alert('기타 과일입니다');
}

switch (myFruit) {
  case '사과':
  case '귤':
    alert('사과 혹은 귤입니다');
    break;
  default:
    alert('기타 과일입니다');
}

switch (myFruit) {
  case '사과':
  case '귤':
    alert('사과 혹은 귤입니다');
    break;
}

const myValue = '100';

switch (myValue) {
  case 100:
    console.log('숫자 100');
    break;
  default:
    console.log('NaN 100');
    break;
}
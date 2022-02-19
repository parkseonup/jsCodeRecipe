console.log('1', '사과' == '사과');
console.log('2', 10 < 30);
console.log('3', 20 >= 30);

const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
console.log('4', array1 == array2); // 각 배열이 저장된 repository가 달라서 false;

const array3 = [1, 2, 3];
const array4 = array3;
console.log('5', array3 == array4);

console.log('6', 10 == '10');

console.log('7', 10 === '10');
console.log('8', 20 != '20');
console.log('9', 20 !== '20');

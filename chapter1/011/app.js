function myFunction1(a) {
  const result1 = a + 2;
  return result1;
}
console.log(myFunction1(1));

function myFunction2(a, b, c) {
  const result2 = a + b + c;
  return result2;
}
console.log(myFunction2(1, 2, 3));

function myFunction3() {
  console.log('안녕하세요');
  return 100;
}
console.log(myFunction3());

function myFunction4() {
  console.log('안녕하세요');
}
myFunction4();

function myFunction5() {
  return 100;
  console.log('안녕하세요');
}
console.log(myFunction5());


function myFunction6(a, b) {
  if (a >= 100) {
    return a;
  }
  return b;
}
console.log(myFunction6(1, 2));

function myFunction7(price, tax) {
  const result = price + price + tax;
  return result;
}
const myResult = myFunction7(100, 0.1);
console.log(myResult);

function myFunction8() {
  console.log('안녕학세요');
}
myFunction8();
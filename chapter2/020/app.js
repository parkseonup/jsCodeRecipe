const a = 10;
const b = 20;

console.log(a < b);
console.log(a > b);

// IOS 여부 확인
const isIOS = navigator.userAgent.includes('iPhone');

if (isIOS) {
  // IOS용 처리 작업
}

const userName = '제이펍';
if (userName) {
  alert(`안녕하세요. ${userName}`);
}

const address = '';
if (address) {
  alert(`당신은 ${address}에 살고 계시네요`);
}

const flg = 'JavaScript'.includes('a');
console.log(!flg);

console.log(!'제이펍');
console.log(!24);
console.log(![1, 2, 3]);

console.log(!!'제이펍');
console.log(!!24);
console.log(!![1, 2, 3]);
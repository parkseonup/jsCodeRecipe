// image1.png -> image2.png
const imageName = 'image1.png';
console.log(imageName.replace('1.png', '2.png'));

// 문자열 내 줄바꿈 코드 제거
const inputText = '제이\n-펍';
console.log(inputText.replace('\n', ''));

// 첫번째 인수가 문자열일 경우 처음으로 발견되는 문자열만 변경됨
let phoneNum = '010-1234-5678';
console.log(phoneNum.replace('-', ''));

// 정규표현식을 사용해야 뒤에 있는 문자열도 변경 가능
console.log(phoneNum.replace(/-/g, ''));

// #submit-btn 클릭 시 처리 작업 설정
document.querySelector('#submit-btn').addEventListener('click', (event) => {
  event.preventDefault();
  // 전화번호 가져오기
  const phoneNumText =  document.querySelector('#phone-number-text').value;

  // 전화번호에 하이픈(-)이 삽입된 경우 ''(공백)으로 치환
  const trimmedPhoneNum = phoneNumText.replace(/-/g, '');
  alert(`전화번호는 ${trimmedPhoneNum} 입니다`);
})
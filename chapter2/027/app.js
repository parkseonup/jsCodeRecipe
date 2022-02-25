console.log('웹디자인'.length);
console.log('JavaScript'.length);

let textarea = document.querySelector('.textarea');
let string_num = document.querySelector('.string_num');

function onkeyUp() {
  const inputText = textarea.value;
  string_num.innerText = inputText.length;
}

textarea.addEventListener('keyup', onkeyUp);
console.log('😀'.length); // 결과값 2; 특수문자 및 이모티콘은 4바이트로 표현.
console.log(Array.from('😀').length);
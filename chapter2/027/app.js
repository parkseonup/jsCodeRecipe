console.log('μΉλμμΈ'.length);
console.log('JavaScript'.length);

let textarea = document.querySelector('.textarea');
let string_num = document.querySelector('.string_num');

function onkeyUp() {
  const inputText = textarea.value;
  string_num.innerText = inputText.length;
}

textarea.addEventListener('keyup', onkeyUp);
console.log('π'.length); // κ²°κ³Όκ° 2; νΉμλ¬Έμ λ° μ΄λͺ¨ν°μ½μ 4λ°μ΄νΈλ‘ νν.
console.log(Array.from('π').length);
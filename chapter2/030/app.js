const myString = 'JavaScript를 배우자';

const a1 = 'JavaScript를 배우자'.includes('JavaScript');
console.log(a1);

const a2 = 'JavaScript를 배우자'.startsWith('배우자');
console.log(a2);

const a3 = 'JavaScript를 배우자'.endsWith('배우자');
console.log(a3);

const targetString = 'JavaScript를 배우자';

document.querySelector('.result1').innerText = targetString.includes('JavaScript');
document.querySelector('.result2').innerText = targetString.includes('배우자', 13);
const myString = 'JavaScript를 배우자';

const a1 = myString.indexOf('JavaScript');
console.log(a1);

const a2 = myString.indexOf('배우자');
console.log(a2);

const a3 = myString.lastIndexOf('a');
console.log(a3);

const b1 = myString.indexOf('HTML');
console.log(b1);

const b2 = myString.indexOf('j');
console.log(b2);

const c1 = myString.indexOf('JavaScript', 4);
console.log(c1);

const targetString = 'JavaScript를 배우자';

document.querySelector('.result1').innerHTML = targetString.indexOf('JavaScript');
document.querySelector('.result2').innerHTML = targetString.indexOf('배우자');

const s1 = myString.search(/JavaScript/);
console.log(s1);

const s2 = myString.search(/HTML/);
console.log(s2);
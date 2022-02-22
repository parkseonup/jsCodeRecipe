console.log(Math.round(6.24));
console.log(Math.floor(6.24));
console.log(Math.ceil(6.24));
console.log(Math.trunc(6.24));

console.log(Math.round(7.8));
console.log(Math.floor(7.8));
console.log(Math.ceil(7.8));
console.log(Math.trunc(7.8));

console.log(Math.round(-7.45));
console.log(Math.round(-7.5));
console.log(Math.round(-7.51));

console.log(Math.floor(-8.5));
console.log(Math.ceil(-8.6));
console.log(Math.trunc(-8.6));

document.querySelector('.result1').innerHTML = Math.round(6.24);
document.querySelector('.result2').innerHTML = Math.ceil(6.24);
document.querySelector('.result3').innerHTML = Math.floor(6.24);
document.querySelector('.result4').innerHTML = Math.trunc(6.24);
document.querySelector('.result5').innerHTML = Math.round(-7.49);
document.querySelector('.result6').innerHTML = Math.ceil(-7.49);
document.querySelector('.result7').innerHTML = Math.floor(-7.49);
document.querySelector('.result8').innerHTML = Math.trunc(-7.49);
for (let index = 0; index < 10; index++) {
  if (index % 2 === 0) {
    continue;
  }

  console.log(index);
}

console.log('루프가 종료됨');

// fail: if 중첩
function myFunction(flgA) {
  for (let index = 0; index < 10; index++) {
    if (flgA === true) {
      if (index % 2 !== 0) {
        console.log('fail', index);
      }
    }
  }
}
myFunction(true);

// success: continue 활용으로 코드 클린
function myFunction2(flgA) {
  for (let index = 0; index < 10; index++) {
    if (flgA === false) {
      continue;
    }

    if (index % 2 !== 0) {
      console.log('success', index);
    }
  }
}
myFunction2(true);
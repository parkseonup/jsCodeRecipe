// slice(), substring() 둘 다 마지막 인자 생략하면 문자 끝까지 출력
console.log('JavaScript'.slice(0, 4));
console.log('JavaScript'.slice(0));
console.log('JavaScript'.substring(0, 4));
console.log('JavaScript'.substring(0));

// slice()는 음수 사용이 가능. 맨 끝 글자를 -1로 인지
console.log('나의 노트북'.slice(3, -1));
console.log('나의 노트북'.slice(-6, -4));
// substring()은 음수를 모두 0으로 치환함. ex) -1 -> 0
console.log('나의 노트북'.substring(3, -1));
console.log('나의 노트북'.substring(-6, -4));

// slice()는 시작 인덱스가 종료 인덱스보다 크면 공백을 출력함.
console.log('반갑습니다'.slice(3, 1));
// substring()은 시작 인덱스가 종료 인덱스보다 크면 둘의 순서를 치환해서 출력함 ex) 3, 1 -> 1, 3
console.log('반갑습니다'.substring(3, 1));
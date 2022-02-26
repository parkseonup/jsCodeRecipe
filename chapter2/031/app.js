console.log('JavaScript'.charAt(3));
console.log('JavaScript'.charAt());

const searchWordText = document.querySelector('#search-word-input');
const prefectureList = document.querySelectorAll('#prefecture-list');
const prefectureBtns = document.querySelectorAll('#prefecture-list > button');

const nameArray = {};
const phoneticArray = {};

function searchWordFunc() {

  prefectureBtns.forEach((btn) => {
    // data-name의 첫글자와 input 값이 같으면 nameArray
    console.log(btn.dataset.name.charAt(1), searchWordText.value);
    if (btn.dataset.name.charAt(1) === searchWordText.value) {
      console.log('hello');
      //nameArray.push(btn);
    }
    
    // data-phonetic의 첫글자와 input 값이 같으면 phoneticArray
    if (btn.dataset.phonetic.charAt(1) === searchWordText.value) {
      console.log(btn.dataset.phonetic.charAt(1), searchWordText.value);
      console.log('world');
      //phoneticArray.push(btn);
    }

    // a와 b를 리스트에 띄워라
  });
}

searchWordText.addEventListener('keyup', searchWordFunc);

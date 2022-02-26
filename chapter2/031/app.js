console.log('JavaScript'.charAt(3));
console.log('JavaScript'.charAt());

const searchWordText = document.querySelector('#search-word-input');
const prefectureList = document.querySelectorAll('#prefecture-list');
const prefectureBtns = document.querySelectorAll('#prefecture-list > button');

const prefectureArray = [];

function searchWordFunc() {

  prefectureBtns.forEach((btn) => {
    switch (searchWordText.value) {
      case btn.dataset.name.charAt(0):
        console.log('hello');
        prefectureArray.push(btn);
        break;
      case btn.dataset.phonetic.charAt(0):
        console.log('world');
        prefectureArray.push(btn);
        break;
      default:
        // node에는 뜨는데 html에는 안뜲
        prefectureList.innerText = '일치하는 검색어가 없습니다.';
        break;
    }

    // node에는 뜨는데 html에는 안뜲
    prefectureList.innerHTML = prefectureArray;
  });
}

searchWordText.addEventListener('keyup', searchWordFunc);

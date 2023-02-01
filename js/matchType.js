// 화면에 있는 글자를 입력하면 없어지는 기능 구현

// 총점수, 단어 한글자당 점수
let score = 0;
let oneLetterScore = 10;

// 인자로 받은 글자가 화면에 있으면 글자를 지우는 함수
function removeStr(str) {
  let idx = null;
  const scoreBox = document.querySelector("#score");
  // 지금 화면에 존재하는 단어를 배열로 받음
  const existingStr = Array.from(document.querySelectorAll(".random-str")); //querySelectorAll은 유사배열이라서 배열로 바꿔준다.
  // 배열을 돌면서 같은 글자가 있는지 확인
  for (let el of existingStr) {
    if (el.textContent === str) {
      idx = existingStr.indexOf(el); //글자가 있는 index값을 넣어준다.
      break;
    }
  }
  if (idx !== null) {
    // idx에 값이 있으면 지워준다.
    existingStr[idx].remove();
    // 단어 하나당 길이비례점수
    score += str.length * oneLetterScore;
    scoreBox.textContent = score;
  }
}

// input에 문자열을 입력하고 엔터를 누르면 이벤트 발생
const inputBox = document.querySelector("#input-box");
inputBox.onkeydown = (e) => {
  if (e.key === "Enter") {
    removeStr(inputBox.value);
    // input 박스 초기화
    inputBox.value = "";
  }
};

// 시작버튼 누르면 나오는 카운터와 랜덤 렌더링 시작 구현

// 시작버튼 누르면 나올 카운터와 start 글자
const setCounter = (counter) => {
  const mainContainer = document.querySelector("#main-container");
  const newDiv = document.createElement("div");
  newDiv.classList.add("start-counter");
  newDiv.textContent = counter;
  setTimeout(() => {
    newDiv.classList.add("act"); // 카운터 효과를 주기위한 class 동적 추가(transition발동을 위해서)
  }, 50);
  return mainContainer.appendChild(newDiv);
};
// setTimeOut으로 카운터 구현
const counter = (text, num, boolean = true) => {
  setTimeout(
    () => {
      const counter = document.querySelector(".start-counter");
      counter.remove();
      if (boolean) setCounter(text);
    },
    num,
    text
  );
};
// 시작버튼
const startButton = document.querySelector("#start-button");
let intervalRender;
startButton.onclick = () => {
  setTimeout(() => {
    startButton.style.display = "none"; //누르면 사라짐
  }, 500);
  setCounter(3);
  counter(2, 1000);
  counter(1, 2000);
  counter("Start!", 3000);
  counter(null, 4000, false);
  setTimeout(() => {
    intervalRender = setInterval(randomStrRender, 2000, strArr);
  }, 4000);
};

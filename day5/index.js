// You're gonna need this
// const NINE_HOURS_MILLISECONDS = 32400000;
const timeZone = document.querySelector(".dDay__js");
const sec = 1000; //ms
const min = sec * 60; //1000*60
const hour = min * 60; //1000*60*60
const day = hour * 24; //1000*60*60*24

function getTime() {
  const xmasDay = new Date("2020-12-24:00:00:00+0900");
  const today = new Date();
  const gapBet = xmasDay - today; // 현재시간 기준  6541287122
  const dDay = Math.floor(gapBet / day); // 두 날짜 사이의 gap을 day값으로 나눠 환산하고(현재시간 기준 75.70934...) 남은 시간은 floor 메소드로 내려서(남은 d-day를 계산해야 해서) 정수로 만듬
  const dHour = Math.floor((gapBet % day) / hour); // 두 날짜 사이의 gap을 day값으로 나눈 나머지 시간 중 hour을 추출해서 정수값으로 환산
  const dMinute = Math.floor((gapBet % hour) / min);
  const dSecond = Math.floor((gapBet % min) / sec);
  timeZone.innerText = `${dDay < 10 ? `0${dDay}` : dDay}day ${
    dHour < 10 ? `0${dHour}` : dHour
  }hour ${dMinute < 10 ? `0${dMinute}` : dMinute}min ${
    dSecond < 10 ? `0${dSecond}` : dSecond
  }sec`;
}

function init() {
  getTime();
  setInterval(getTime, 1000);
}

init();

function show_clock() {
  let currentDate = new Date();
  let divClock = document.getElementById("divClock");
  let msg = "현재 시간 : ";

  if (currentDate.getHours() > 12) {
    msg += "오후 ";
    msg += currentDate.getHours() - 12 + "시";
  } else {
    msg += "오전 ";
    msg += currentDate.getHours() + "시";
  }

  msg += currentDate.getMinutes() + "분 ";
  msg += currentDate.getSeconds() + "초";

  divClock.innerText = msg;

  if (currentDate.getMinutes() > 58) {
    divClock.style.color = "red";
  }

  setTimeout(show_clock, 1000);
}

// 마우스를 올렸을 때 실행되는 함수
function over(obj) {
  obj.src = "image/LOG.png"; // 마우스 올렸을 때 바뀔 이미지
}

// 마우스를 뗐을 때 실행되는 함수
function out(obj) {
  obj.src = "image/LOGO2.png"; // 원래 이미지로 되돌림
}
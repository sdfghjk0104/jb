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
const over = (obj) => {
  obj.src = "image/LOGO.png";
};

// 마우스를 뗐을 때 실행되는 함수
function out(obj) {
  obj.src = "image/LOGO2.png"; // 원래 이미지로 되돌림
}

// ✅ 1. 쿠키 SET 함수 (index.html에서 팝업 닫기 버튼 클릭 시 사용됨)
function setCookie(name, value, expiredays) {
  var date = new Date();
  date.setDate(date.getDate() + expiredays);
  document.cookie = escape(name) + "=" + escape(value) + "; expires=" + date.toUTCString() + "; path=/";
}

// ✅ 2. 쿠키 GET 함수 (index.html에서 pop_up 실행 시 사용됨)
function getCookie(name) {
  var cookie = document.cookie;
  console.log("쿠키를 요청합니다.");
  if (cookie !== "") {
    var cookie_array = cookie.split("; ");
    for (var index in cookie_array) {
      var cookie_name = cookie_array[index].split("=");
      if (cookie_name[0] === name) {
        return cookie_name[1];
      }
    }
  }
  return;
}

// ✅ 3. 팝업창 열기 함수 (index.html에서 onload로 실행)
function pop_up() {
  var cookieCheck = getCookie("popupYN");
  if (cookieCheck !== "N") {
    window.open("../popup/popup.html", "팝업테스트", "width=400,height=300,top=10,left=10");
  }
}

function closePopup() {
if (document.getElementById('check_popup').value) {
setCookie("popupYN", "N", 1);
console.log("쿠키를 설정합니다.");
self.close();
}
}

function setCookie(name, value, expiredays) {
  var date = new Date();
  date.setDate(date.getDate() + expiredays);
  document.cookie = 
    escape(name) + "=" + escape(value) + 
    "; expires=" + date.toUTCString() + 
    "; path=/" + 
    "; SameSite=None; Secure";
}


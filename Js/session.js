import { encrypt_text, decrypt_text } from './crypto.js';

// function session_set() { //세션 저장
//     let session_id = document.querySelector("#typeEmailX");
//     if (sessionStorage) {
//         sessionStorage.setItem("Session_Storage_test", session_id.value);
    
//     } else {
//         alert("로컬 스토리지 지원 x");
//     }
// }

// async 추가
async function session_set() {
  let session_id = document.querySelector("#typeEmailX");

  if (sessionStorage) {
    const obj = {
      id: session_id.value,
      otp: "random"
    };
    const objString = JSON.stringify(obj); // 객체 -> JSON 문자열 변환
    let en_text = await encrypt_text(objString); // ✅ await는 async 함수 안에서만 사용

    sessionStorage.setItem("Session_Storage_id", session_id.value);
    sessionStorage.setItem("Session_Storage_object", objString);
    sessionStorage.setItem("Session_Storage_pass", en_text);
  } else {
    alert("세션 스토리지 지원 x");
  }
}

// 다음 페이지 계속 작성하기

function session_get() { //세션 읽기
    if (sessionStorage) {
        return sessionStorage.getItem("Session_Storage_test");
    } else {
        alert("세션 스토리지 지원 x");
    }
}


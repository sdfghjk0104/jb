const check_input = () => {
    const loginForm = document.getElementById('login_form');
    const emailInput = document.getElementById('typeEmailX');
    const passwordInput = document.getElementById('typePasswordX');
    const idsave_check = document.getElementById('idSaveCheck');

    const payload = {
        id: emailValue,
        exp: Math.floor(Date.now() / 1000) + 3600 // 1시간 (3600초)
    };
    const jwtToken = generateJWT(payload);
    alert('아이디, 패스워드를 체크합니다');

    console.log('이메일:', emailValue);
    console.log('비밀번호:', passwordValue);
    session_set(); // 세션 생성
    localStorage.setItem('jwt_token', jwtToken);
    loginForm.submit();

    let emailValue = emailInput.value.trim();
    let passwordValue = passwordInput.value.trim();

    // ✨ XSS 필터 추가
    emailValue = check_xss(emailValue);
    if (!emailValue) return false;
    passwordValue = check_xss(passwordValue);
    if (!passwordValue) return false;

    // 유효성 검사
    if (emailValue === '') {
        alert('이메일을 입력하세요.');
        return false;
    }
    if (passwordValue === '') {
        alert('비밀번호를 입력하세요.');
        return false;
    }
    if (emailValue.length < 5) {
        alert('아이디는 최소 5글자 이상 입력해야 합니다.');
        return false;
    }
    if (passwordValue.length < 12) {
        alert('비밀번호는 반드시 12글자 이상 입력해야 합니다.');
        return false;
    }

    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(passwordValue);
    if (!hasSpecialChar) {
        alert('패스워드는 특수문자를 1개 이상 포함해야 합니다.');
        return false;
    }

    const hasUpperCase = /[A-Z]/.test(passwordValue);
    const hasLowerCase = /[a-z]/.test(passwordValue);
    if (!hasUpperCase || !hasLowerCase) {
        alert('패스워드는 대소문자를 1개 이상 포함해야 합니다.');
        return false;
    }

    // 이메일 길이 상한 검사
    if (emailValue.length > 10) {
    alert('이메일은 최대 10글자까지 입력할 수 있습니다.');
    return false;
    }

    // 비밀번호 길이 상한 검사
    if (passwordValue.length > 15) {
    alert('비밀번호는 최대 15글자까지 입력할 수 있습니다.');
    return false;
    }

    // 3글자 이상 반복된 문자 금지 (예: aaa, 111, 가나다가나다)
    const repeatPattern = /(.)\1\1+/;
    if (repeatPattern.test(emailValue) || repeatPattern.test(passwordValue)) {
    alert('3글자 이상 반복된 문자는 사용할 수 없습니다.');
    return false;
    }

    // 연속된 숫자 2개 이상 반복 금지 (예: 1212, 3434 등)
    const numberRepeatPattern = /(\d{2})\1+/;
    if (numberRepeatPattern.test(emailValue) || numberRepeatPattern.test(passwordValue)) {
    alert('2자리 이상의 연속된 숫자가 반복되는 입력은 허용되지 않습니다.');
    return false;
    }

    if (!hasUpperCase || !hasLowerCase) {
    alert('패스워드는 대소문자를 1개 이상 포함해야 합니다.');
    return false;
    }

    // 여기에 세션 생성
   function session_check() { //세션 검사
    if (sessionStorage.getItem("Session_Storage_id")) {
        alert("이미 로그인 되었습니다.");
        location.href='../login/index_login.html'; // 로그인된 페이지로 이동
        }
    }
    if(get_id) {
    id.value = get_id;
    check.checked = true;
    }
    session_check(); // 세션 유무 검사
    }

    function session_set() {
    const email = document.getElementById('typeEmailX').value;
    if (email) {
        sessionStorage.setItem("Session_Storage_test", email);
        }
    }

    function session_del() {//세션 삭제
         if (sessionStorage) {
            sessionStorage.removeItem("Session_Storage_test");
            alert('로그아웃 버튼 클릭 확인 : 세션 스토리지를 삭제합니다.');
        } else {
         alert("세션 스토리지 지원 x");
        }
    }
    function logout(){
        session_del(); // 세션 삭제
            location.href='../index.html';
    }

    // 제출
    loginForm.submit();

    if(idsave_check.checked == true) { // 아이디 체크 o
    alert("쿠키를 저장합니다.", emailValue);
    setCookie("id", emailValue, 1); // 1일 저장
    alert("쿠키 값 :" + emailValue);
    }

    else{ // 아이디 체크 x
    setCookie("id", emailValue.value, 0); //날짜를 0 - 쿠키 삭제
    }

    // 로그인 횟수 증가 함수
    function login_count() {
        let cnt = getCookie("login_cnt");
        cnt = cnt ? parseInt(cnt) + 1 : 1;
        setCookie("login_cnt", cnt, 1); // 1일 유지
    }

    // 로그아웃 횟수 증가 함수
    function logout_count() {
        let cnt = getCookie("logout_cnt");
        cnt = cnt ? parseInt(cnt) + 1 : 1;
        setCookie("logout_cnt", cnt, 1); // 1일 유지
    }


    function init(){ // 로그인 폼에 쿠키에서 가져온 아이디 입력
        const emailInput = document.getElementById('typeEmailX');
        const idsave_check = document.getElementById('idSaveCheck');
        let get_id = getCookie("id");
        if(get_id) {
        emailInput.value = get_id;
        idsave_check.checked = true;
        }
    }

    const sanitizedPassword = check_xss(passwordInput);
    // check_xss 함수로 비밀번호 Sanitize
    const sanitizedEmail = check_xss(emailInput);
    // check_xss 함수로 비밀번호 Sanitize
    if (!sanitizedEmail) {
    // Sanitize된 비밀번호 사용
    return false;
    }
    if (!sanitizedPassword) {
    // Sanitize된 비밀번호 사용
    return false;
    }

  return true; // 통과 시 form submit 됨

const check_xss = (input) => {
  const DOMPurify = window.DOMPurify;
  const sanitizedInput = DOMPurify.sanitize(input);
  if (sanitizedInput !== input) {
    alert('XSS 공격 가능성이 있는 입력값을 발견했습니다.');
    return false;
  }
  return sanitizedInput;
};

function session_set() { //세션 저장
    let session_id = document.querySelector("#typeEmailX"); // DOM 트리에서 ID 검색
    let session_pass = document.querySelector("#typePasswordX"); // DOM 트리에서 pass 검색
    if (sessionStorage) {
        let en_text = encrypt_text(session_pass.value);
        sessionStorage.setItem("Session_Storage_id", session_id.value);
        sessionStorage.setItem("Session_Storage_pass", en_text);
    } else {
        alert("로컬 스토리지 지원 x");
    }
}

function session_get() { //세션 읽기
    if (sessionStorage) {
        return sessionStorage.getItem("Session_Storage_pass");
    } else {
        alert("세션 스토리지 지원 x");
    }
}


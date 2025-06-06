const check_input = () => {
    const loginForm = document.getElementById('login_form');
    const emailInput = document.getElementById('typeEmailX');
    const passwordInput = document.getElementById('typePasswordX');
    alert('아이디, 패스워드를 체크합니다');

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
};
const check_xss = (input) => {
  const DOMPurify = window.DOMPurify;
  const sanitizedInput = DOMPurify.sanitize(input);
  if (sanitizedInput !== input) {
    alert('XSS 공격 가능성이 있는 입력값을 발견했습니다.');
    return false;
  }
  return sanitizedInput;
};

💻 웹페이지 프로젝트 실습 결과 보고서
✅ 1. 전체 실습 과정 완료 (기본 기능 동작)
🔷 사용자 인터페이스
index.html, login.html, join.html 등 기본 페이지 구현

Bootstrap5를 활용한 반응형 레이아웃 구성

form, button, input, label 등 구성요소의 의미 있는 활용

🔷 로그인 & 회원가입 구현
로그인 폼 → 이메일, 비밀번호 입력 후 조건에 따라 alert 및 로그인 처리

회원가입 폼 → 이름, 이메일, 비밀번호, 약관 동의 체크 후 가입

🔷 유효성 검사 (Validation)
자바스크립트를 통한 입력값 검사 기능 완성

이름: 한글만 허용 (nameRegex)

이메일: 이메일 정규식 검사

비밀번호: 8자 이상, 대/소문자, 숫자, 특수문자 포함 (pwRegex)

비밀번호 확인: 일치 여부 확인

약관 동의 체크 확인

✅ 2. 응용 문제 풀이 및 추가 기능 구현
🔶 비밀번호 보안 강화
비밀번호 입력 시 최소 길이, 대소문자 및 특수문자 포함 필수

정규표현식(regex) 기반 검사 완료

🔶 XSS 공격 방지 기능
DOMPurify 라이브러리를 활용하여 사용자의 입력값 sanitize 처리

로그인 및 회원가입 시 check_xss() 함수로 악성 스크립트 필터링

🔶 암호화 기능 (Crypto.js)
AES 암호화 알고리즘 적용

회원가입 정보 중 비밀번호 부분을 암호화 후 sessionStorage에 저장

로그인 시 복호화하여 console.log()로 디코딩된 회원 정보 확인

🔶 쿠키 기능 구현
팝업창(오늘 하루 안 보기) 기능 구현

setCookie, getCookie 함수 작성 및 동작 확인

팝업창 자동 오픈 여부를 쿠키로 제어

🔶 로그인/로그아웃 카운트 저장
login_count() / logout_count() 함수 추가

로그인 버튼 누를 때마다 쿠키로 횟수 저장 및 증가

🔶 세션 저장 기능
로그인 시 사용자 정보를 sessionStorage에 저장

로그인 페이지 접속 시 자동 로그인 여부 확인 (session_check())

✅ 3. 홈페이지 내용 수정 및 디자인 구성
🔸 전체 주제 설정
웹 사용자 로그인 및 회원가입 시스템

🔸 주요 메뉴 및 링크
회원가입 → 로그인 → 메인 페이지로 흐름 연결

form 버튼 클릭 시 JavaScript로 유효성 검사 → 정상 통과 시 index.html 이동

🔸 사용자 중심 디자인
배경 이미지 적용 (.bg-image)

카드 디자인 사용 (.card, border-radius)

글꼴, 정렬, 간격 등 UI 구성 개선

✅ 4. 소스 코드 정리
🔹 코드 구조 정비
JS 기능 분리: login.js, join.js, session.js, crypto.js, popup.js 등으로 모듈화

HTML에서 <script type="module" src="...">로 모듈 연동 처리

🔹 파일 이름 정리
camelCase 규칙 적용: joinForm, form3Example4cd, session_set2 등 일관성 유지

🔹 들여쓰기 및 주석
각 함수별 주요 동작에 한글 주석 달기

중첩 구조는 2 space 또는 tab으로 통일하여 가독성 향상

🔹 오류 및 디버깅 처리
F12 콘솔 확인을 통한 오류 추적

await, async 문법 오류 수정

VSCode에서 ESLint 기반 오류 경고 대응

🔚 결론
현재까지의 프로젝트는 다음과 같은 목표를 완수했습니다:

실무 수준의 회원 인증 및 보안 기능 구축

클라이언트 측 암호화 및 세션/쿠키 활용

모듈화, 구조화, UI 개선까지 포함한 완성도 높은 웹페이지 구축

🔗 향후 발전 방향

백엔드 서버 연동 (ex. Node.js, Firebase)

DB와의 실제 계정 연동

OAuth 기반 SNS 로그인 추가 (ex. Kakao, Google)

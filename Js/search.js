function googleSearch() {
  const input = document.getElementById("search_input").value.trim();

  // 1. 공백 검사
  if (input.length === 0) {
    alert("검색어를 입력하세요.");
    return false;
  }

  // 2. 비속어 검사 (예시 5개)
  const bannedWords = ["욕1", "욕2", "비속어1", "비속어2", "나쁜말"];

  for (let i = 0; i < bannedWords.length; i++) {
    if (input.includes(bannedWords[i])) {
      alert("부적절한 단어가 포함되어 있습니다.");
      return false;
    }
  }

  // 3. 모든 조건 통과 → 구글 검색 실행
  const url = "https://www.google.com/search?q=" + encodeURIComponent(input);
  window.open(url);
  return false; // form 제출 방지
}
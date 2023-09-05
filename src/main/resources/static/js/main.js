
const contentsText = document.querySelector('.contents_text'); // 클래스명으로 변경
const maxCharactersSmall = 0; // 최대 표시할 글자 수 (작은 화면)
const maxCharactersLarge = 30; // 최대 표시할 글자 수 (큰 화면)

// 초기에 페이지 로딩 시 원본 텍스트 내용 저장
const originalText = contentsText.textContent;

// // 네비게이션 바 토글 버튼 이벤트 리스너
// navbarToggleBtn.addEventListener('click', () => {
//     navbarMenu.classList.toggle('open');
// });

// 화면 크기 변화 감지 이벤트 리스너
window.addEventListener('resize', function() {
    var width_size = window.innerWidth;

    if (width_size <= 1200 && width_size >= 800) {
        // 글자 수를 30자로 제한한 후에 '...'을 추가
        if (contentsText.textContent.length > maxCharactersLarge) {
            const trimmedText = contentsText.textContent.substring(0, maxCharactersLarge) + '...';
            contentsText.textContent = trimmedText;
        }
    } else if (width_size < 800) {
        // 글자 수를 10자로 제한한 후에 '...'을 추가
        // if (contentsText.textContent.length > maxCharactersSmall) {
        //     const trimmedText = contentsText.textContent.substring(0, maxCharactersSmall) + '...';
        //     contentsText.textContent = trimmedText;
        // 작은 화면에서는 contentsText를 숨김
        contentsText.style.display = 'none';
    } else {
        // 크기에 따른 제한 없이 원래의 전체 텍스트 내용을 복원
        contentsText.textContent = originalText;
    }
}, true);
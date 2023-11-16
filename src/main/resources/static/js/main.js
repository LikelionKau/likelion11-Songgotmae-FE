//
// const maxCharctersSmall =1;
//
// // 초기에 페이지 로딩 시 원본 텍스트 내용 저장
// const originalText = contentsText.textContent;
//
// // 화면 크기 변화 감지 이벤트 리스너
// window.addEventListener('resize', function() {
//     var width_size = window.innerWidth;
//
//     if (width_size <= 1200 && width_size >= 800) {
//         // 글자 수를 30자로 제한한 후에 '...'을 추가
//         if (contentsText.textContent.length > maxCharactersLarge) {
//             const trimmedText = contentsText.textContent.substring(maxCharactersLarge) + '...';
//             contentsText.textContent = trimmedText;
//         }
//     } else if (width_size < 800) {
//         // 글자 수를 10자로 제한한 후에 '...'을 추가
//         if (contentsText.textContent.length > maxCharactersSmall) {
//             const trimmedText = contentsText.textContent.substring(maxCharactersSmall) + '...';
//             contentsText.textContent = trimmedText;
//         // 작은 화면에서는 contentsText를 숨김
//         contentsText.style.display = 'none';
//     } else {
//         // 크기에 따른 제한 없이 원래의 전체 텍스트 내용을 복원
//         contentsText.textContent = originalText;
//     }
// }, true);
//

// const contentsText = document.querySelectorAll('.contents_text'); // 클래스명으로 변경
// const maxCharactersLarge = 8; // 최대 표시할 글자 수 (큰 화면)
// if(contentsText.length>maxCharactersLarge){
//     // contentsText= contentsText.substring(0,maxCharactersLarge);
// }

// 로컬 스토리지에서 토큰을 읽어오기
const token = localStorage.getItem('token');

// 토큰을 로컬 스토리지에 저장
localStorage.setItem('token', token);

const instance = axios.create({
    baseURL: 'http://ec2-52-78-33-144.ap-northeast-2.compute.amazonaws.com:8080',
    headers: {
        Authorization: token,
    },
});

document.addEventListener('DOMContentLoaded', () => {

    function logout() {
        localStorage.removeItem('token');
        alert('로그아웃되었습니다.');
    }

    if (localStorage.getItem('token') !== 'null') {
        // 토큰이 있으면 로그아웃 버튼으로 업데이트
        loginButton.textContent = '로그아웃';
        loginButton.addEventListener('click', logout);
        nav_signup.textContent = '마이페이지';
        nav_signup.href = '../templates/mypage.html';
    }
});

// window.onload = function() {
//
//     const contents_title = document.getElementById("contents_title");
//     const contents_text = document.getElementById("contents_text");
//     const contents_detail_date = document.getElementById("contents_detail_date");
//     const contents_detail_view = document.getElementById("contents_detail_view");
//     const mobile_detail_date = document.getElementById("mobile_detail_date");
//     const mobile_detail_view = document.getElementById("mobile_detail_view");
//
//     axios({
//         method: "GET",
//         url: "http://ec2-52-78-33-144.ap-northeast-2.compute.amazonaws.com:8080/api/v1/posts/all/approved",
//         // 데이터 전송 부분 제거
//
//         // query string을 사용하여 데이터 전송
//         params: {
//             contents_title: contents_title.value,
//             contents_text: contents_text.value,
//             contents_detail_date: contents_detail_date.value,
//             contents_detail_view: contents_detail_view.value,
//             mobile_detail_date: mobile_detail_date.value,
//             mobile_detail_view: mobile_detail_view.value,
//         }
//     }).then(response => {
//         console.log(response.data);
//         // TODO: 불러온 데이터를 사용하여 화면에 표시하는 코드 추가
//
//         // 예시: 데이터를 가져와서 화면에 표시
//         const postData = response.data;  // 실제 서버 응답에 따라 수정해야 함
//         contents_title.innerText = postData.contents_title;
//         contents_text.innerText = postData.contents_text;
//         contents_detail_date.innerText = postData.contents_detail_date;
//         contents_detail_view.innerText = postData.contents_detail_view;
//         mobile_detail_date.innerText = postData.mobile_detail_date;
//         mobile_detail_view.innerText = postData.mobile_detail_view;
//
//     }).catch(error => {
//         console.error('API 요청 실패:', error);
//     });
// };

window.onload = function() {

    // 특정 ID를 가진 요소를 찾기
    // var container = document.getElementById("container");
    var dataContainer = document.getElementById("contents_title");

    instance.get('/api/v1/posts/all')
        .then((res)=> {
            console.log(res);
            // for (var i = 0; i < res.data.length; i++) {
            //     // contents_title.innerText = res.data[i].title;
            //
            //     // 새로운 요소 생성
            //     var newElement0 = document.createElement("div")
            //     var newElement = document.createElement("p");
            //
            //     // 텍스트 내용 설정
            //     newElement0.classList.add("contents_main_box");
            //     newElement.textContent = res.data[i].title;
            //
            //     // 생성한 요소를 특정 ID를 가진 요소에 추가
            //     newElement0.appendChild(newElement);
            //     dataContainer.appendChild(newElement0);
            //
            // }
        })
        .catch(error=> {
            console.log(error);
        })
}
// 로컬 스토리지에서 토큰을 읽어오기
const token = localStorage.getItem('token');

// 토큰을 로컬 스토리지에 저장
localStorage.setItem('token', token);

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

window.onload = function() {
    // memberId를 가져옴
    const memberId = document.getElementById("memberId");
    const contents_title = document.getElementById("contents_title");
    const contents_text = document.getElementById("contents_text");
    const contents_detail_date = document.getElementById("contents_detail_date");
    const contents_detail_view = document.getElementById("contents_detail_view");
    const mobile_detail_date = document.getElementById("mobile_detail_date");
    const mobile_detail_view = document.getElementById("mobile_detail_view");

    // memberId를 사용하여 API 호출
    axios({
        method: "POST",
        url: `http://ec2-52-78-33-144.ap-northeast-2.compute.amazonaws.com:8080/api/v1/posts/wroteBy/${memberId}`,
        params: {
            contents_title: contents_title.value,
            contents_text: contents_text.value,
            contents_detail_date: contents_detail_date.value,
            contents_detail_view: contents_detail_view.value,
            mobile_detail_date: mobile_detail_date.value,
            mobile_detail_view: mobile_detail_view.value,
        }

    }).then(response => {
        console.log(response.data);

        const postData = response.data;
        contents_title.innerText = postData.contents_title;
        contents_text.innerText = postData.contents_text;
        contents_detail_date.innerText = postData.contents_detail_date;
        contents_detail_view.innerText = postData.contents_detail_view;
        mobile_detail_date.innerText = postData.mobile_detail_date;
        mobile_detail_view.innerText = postData.mobile_detail_view;

    }).catch(error => {
        console.error('API 요청 실패:', error);
    });
};
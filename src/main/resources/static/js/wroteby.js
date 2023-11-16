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

function approve(){

    const memberId = document.getElementById("memberId")

    axios({
        method:"POST",
        url: 'http://ec2-52-78-33-144.ap-northeast-2.compute.amazonaws.com:8080/api/v1/posts/wroteBy/{memberId}',
        data: {
            "memberId": memberId.value,
        }
    }).then(response => {
        console.log(response.data);
    })
        .catch(error => {
            console.error('API 요청 실패:', error);
        });

}
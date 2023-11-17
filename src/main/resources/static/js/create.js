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

// console.log(token);
// console.log(localStorage.getItem('token'));

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
        nav_signup.href = "mypage.html";
    }
});

function create(){

    const title = document.getElementById("title");
    const content = document.getElementById('content');

    if(token) {

        instance.post('/api/v1/posts/new', {
            "title": title.value,
            "content": content.value,
        })
            .then((res) => {
            console.log(res);
            alert(res.data.message);
            window.location.href = "main.html";
        }).catch(error => {
            console.log(error);
            // throw new Error(error);
            // console.log(token);
            alert(error.response.data.message);
        });

    }
}
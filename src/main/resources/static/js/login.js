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
        nav_signup.href = "mypage.html";
    }
});

function login(){

    const kauemail = document.getElementById("kauemail");
    const password = document.getElementById("password");

    axios({
        method:"POST",
        // url: 'http://www.songgotmae.com:8080/api/v1/join',
        url: 'http://ec2-52-78-33-144.ap-northeast-2.compute.amazonaws.com:8080/api/v1/members/login',
        data:{
            "kauEmail": kauemail.value,
            "password": password.value,
        },
        withCredentials: true
    })
        .then((res)=>{
            console.log(res);
            // console.log(res.headers.authorization);
            localStorage.setItem('token', res.headers.authorization);
            alert('로그인이 완료되었습니다.');
            window.location.href ="main.html";

            // 로컬 스토리지에서 토큰을 읽어오기
            // const token = localStorage.getItem('token');

            // 토큰을 로컬 스토리지에 저장
            // localStorage.setItem('token', token);

            // instance();

        }).catch(error=>{
        console.log(error);
        alert(error.response.data.message);
    });
}
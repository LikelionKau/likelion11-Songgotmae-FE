// let comiit = await Response.json();

// 로컬 스토리지에서 토큰을 읽어오기
const token = localStorage.getItem('token');

// 토큰을 로컬 스토리지에 저장
localStorage.setItem('token', token);

let e_confirm = 0;

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

function signup(){
    if(e_confirm == 0) {
        const nickname = document.getElementById("nickname");
        const kauEmail = document.getElementById("kauemail");
        const password = document.getElementById("password");
        const doublecheck = document.getElementById("doublecheck")

        // const data = Response[5][1][1][2];
        if(password.value == doublecheck.value) {
            axios({
                method: "POST",
                // url: 'http://www.songgotmae.com:8080/api/v1/join',
                url: 'http://ec2-52-78-33-144.ap-northeast-2.compute.amazonaws.com:8080/api/v1/members/join',
                data: {
                    "nickname": nickname.value,
                    "kauEmail": kauEmail.value,
                    "password": password.value,
                }
            })
                // .then(response => response.json())
                .then((res) => {
                    console.log(res);
                    alert('회원가입이 완료되었습니다.');
                    window.location.href = '../templates/login.html';
                }).catch(error => {
                console.log(error);
                alert(error.response.data.message);
                // throw new Error(error);
            });
        }
        else{
            alert('비밀번호가 일치하지 않습니다.')
        }
    }
    else {
        alert('이메일 인증을 완료해주세요.')
    }
}

function echeck() {

    const kauemail = document.getElementById("kauemail");

    axios.get('http://ec2-52-78-33-144.ap-northeast-2.compute.amazonaws.com:8080/api/v1/email/authcode', {
        params: {
            emailAddress: kauemail.value
        }
    })
        .then((res)=> {
            console.log(res);
            alert('이메일로 인증번호가 발송되었습니다.');
        })
        .catch(error=> {
            console.log(error);
            alert(error.response.data.message);
        })
}

// function econfig() {
//     // const kauemail = document.getElementById("kauemail");
//     const econfig = document.getElementById("econfig");
//
//     axios.post('http://ec2-52-78-33-144.ap-northeast-2.compute.amazonaws.com:8080/api/v1/email/authcode', {
//         params: {
//             // emailAddress: kauemail.value,
//             "code": econfig.value
//         }
//     })
//         .then((res) => {
//             console.log(res);
//             alert('이메일 인증이 완료되었습니다.');
//         })
//         .catch(error => {
//             console.log(error);
//             alert(error.response.data.message);
//             // window.location.href = '../templates/email.html';
//         })
// }

function econfig() {
    const apiUrl = 'http://ec2-52-78-33-144.ap-northeast-2.compute.amazonaws.com:8080/api/v1/email/authcode';
    const kauemail = document.getElementById("kauemail");
    const econfig = document.getElementById("econfig");

    const urlWithParams = new URL(apiUrl);
    urlWithParams.searchParams.append('emailAddress', kauemail.value);

    // POST 요청
    axios.post(urlWithParams, {
        "code": econfig.value
    })
        .then((res) => {
            console.log(res);
            alert('이메일 인증이 완료되었습니다.');
            e_confirm = 1;
        })
        .catch(error => {
            console.log(error);
            alert(error.response.data.message);
            window.location.href = '../templates/email.html';
        })
}
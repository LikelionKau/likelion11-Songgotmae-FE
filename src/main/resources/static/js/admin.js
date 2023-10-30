function approve(){

    const nickname = document.getElementById("nickname");
    const kauemail = document.getElementById("kauemail");
    const password = document.getElementById("password");

    // const data = Response[5][1][1][2];

    axios({
        method:"POST",
        // url: 'http://www.songgotmae.com:8080/api/v1/join',
        url: 'http://ec2-52-78-33-144.ap-northeast-2.compute.amazonaws.com:8080/admin/v1/posts/{postId}/approve',
        data:{
            "nickname": nickname.value,
            "kauEmail": kauemail.value,
            "password": password.value,
        }
    })  .then(response => response.json())
        .then((res)=>{
            console.log(res);
            alert('회원가입이 완료되었습니다.');
            window.location.href = '../templates/login.html';
        }).catch(error=>{
        console.log(error);
        alert(error.response.data.message);
        // throw new Error(error);
    });
}

function reject(){

    const nickname = document.getElementById("nickname");
    const kauemail = document.getElementById("kauemail");
    const password = document.getElementById("password");

    // const data = Response[5][1][1][2];

    axios({
        method:"POST",
        // url: 'http://www.songgotmae.com:8080/api/v1/join',
        url: 'http://ec2-52-78-33-144.ap-northeast-2.compute.amazonaws.com:8080/admin/v1/posts/{postId}/disapprove',
        data:{
            "nickname": nickname.value,
            "kauEmail": kauemail.value,
            "password": password.value,
        }
    })  .then(response => response.json())
        .then((res)=>{
            console.log(res);
            alert('회원가입이 완료되었습니다.');
            window.location.href = '../templates/login.html';
        }).catch(error=>{
        console.log(error);
        alert(error.response.data.message);
        // throw new Error(error);
    });
}
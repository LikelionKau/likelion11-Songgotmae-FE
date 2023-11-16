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
        }
    })
        .then((res)=>{
            console.log(res);
            console.log(axios.AxiosHeaders.accessors);
            // const { accessToken } = res.data;
            // console.log(accessToken);
            // console.log(axios.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`)
            alert('로그인이 완료되었습니다.');
            // window.location.href = '../templates/main.html';
        }).catch(error=>{
        console.log(error);
        // throw new Error(error);
    });
}
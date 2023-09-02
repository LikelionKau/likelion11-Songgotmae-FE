function signup(){

    const nickname = document.getElementById("nickname");
    const kauemail = document.getElementById("kauemail");
    const password = document.getElementById("password")

    axios({
        method:"POST",
        // url: 'http://www.songgotmae.com:8080/api/v1/join',
        url: 'http://ec2-3-34-198-220.ap-northeast-2.compute.amazonaws.com:8080/api/v1/join',
        data:{
            "nickname": nickname.value,
            "kauEmail": kauemail.value,
            "password": password.value,
        }
    }).then((res)=>{
        console.log(res);
    }).catch(error=>{
        console.log(error);
        // throw new Error(error);
    });
}
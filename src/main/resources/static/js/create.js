function create(){

    const userId = document.getElementById("userId");
    const title = document.getElementById("title");
    const content = document.getElementById('content');

    axios({
        method:"POST",
        // url: 'http://www.songgotmae.com:8080/api/v1/posts/new',
        url: 'http://ec2-52-78-33-144.ap-northeast-2.compute.amazonaws.com:8080/api/v1/posts/new',
        data:{
            // "userId": userId.value,
            "title": title.value,
            "content": content.value,
        }
    }).then((res)=>{
        console.log(res);
    }).catch(error=>{
        console.log(error);
        // throw new Error(error);
        alert(error.response.data.message);
    });
}
function create(){

    const userId = document.getElementById("userId");
    const title = document.getElementById("title");
    const content = document.getElementById('content');

    axios({
        method:"POST",
        url: 'http://www.songgotmae.com:8080/api/v1/posts/new',
        // url: 'http://ec2-3-34-198-220.ap-northeast-2.compute.amazonaws.com:8080/api/v1/posts/new',
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
    });
}
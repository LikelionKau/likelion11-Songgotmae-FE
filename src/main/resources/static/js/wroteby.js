function approve (){

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
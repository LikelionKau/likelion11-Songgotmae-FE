function approve(){

    const postId = document.getElementById("postId")

    axios({
        method:"PATCH",
        url: 'http://ec2-52-78-33-144.ap-northeast-2.compute.amazonaws.com:8080/admin/v1/posts/{postId}/approve',
        data:{
            "postId":postId.value,
        }
    })
        .then(response => {
            console.log(`포스트(${postId})가 성공적으로 거부되었습니다.`);
        })
        .catch(error => {
            console.error(`포스트(${postId}) 거부 중 오류가 발생했습니다.`, error);
        });
}
function disapprove(postId) {

    axios({
        method: "PATCH",
        url: `http://ec2-52-78-33-144.ap-northeast-2.compute.amazonaws.com:8080/admin/v1/posts/{postId}/disapprove`,
        data: {
            "postId":postId.value,
        }

    })
        .then(response => {
            console.log(`포스트(${postId})가 성공적으로 거부되었습니다.`);
        })
        .catch(error => {
            console.error(`포스트(${postId}) 거부 중 오류가 발생했습니다.`, error);
        });
}
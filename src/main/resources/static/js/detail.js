function clip(){
    var url = '';
    var textarea = document.createElement("textarea");
    document.body.appendChild(textarea);
    url = window.document.location.href;
    textarea.value = url;
    textarea.select();
    document.execCommand("copy");
    document.body.removeChild(textarea);
    alert("URL이 복사되었습니다.");
}

function approve(isAgree) {
    const postId = getPostIdFromURL(); // 동적으로 postId 설정

    axios({
        method: "POST",
        url: `http://ec2-52-78-33-144.ap-northeast-2.compute.amazonaws.com:8080/api/v1/agreements/new/${postId}`,
        data: {
            "isAgree": isAgree,
        }
    })
        .then(response => {
            // API 호출 성공 시 수행할 작업
            console.log("API 호출 성공", response.data);
        })
        .catch(error => {
            // API 호출 오류 시 수행할 작업
            console.error("API 호출 오류:", error);
        });
}

function getPostIdFromURL() {
    // URL에서 postId를 추출하는 로직을 작성
    // 예를 들어, URL의 쿼리 매개변수에서 postId를 추출할 수 있습니다.
    // URL이 "http://example.com/detail.html?postId=123"와 같은 형태라면:
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('postId');
}

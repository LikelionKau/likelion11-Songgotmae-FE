window.onload = function() {

    const contents_title = document.getElementById("contents_title");
    const contents_text = document.getElementById("contents_text");
    const contents_detail_date = document.getElementById("contents_detail_date");
    const contents_detail_view = document.getElementById("contents_detail_view");
    const mobile_detail_date = document.getElementById("mobile_detail_date");
    const mobile_detail_view = document.getElementById("mobile_detail_view");

    axios({
        method: "GET",
        url: "http://ec2-52-78-33-144.ap-northeast-2.compute.amazonaws.com:8080/api/v1/posts/all/approved",
        // 데이터 전송 부분 제거

        // query string을 사용하여 데이터 전송
        params: {
            contents_title: contents_title.value,
            contents_text: contents_text.value,
            contents_detail_date: contents_detail_date.value,
            contents_detail_view: contents_detail_view.value,
            mobile_detail_date: mobile_detail_date.value,
            mobile_detail_view: mobile_detail_view.value,
        }
    }).then(response => {
        console.log(response.data);
        // TODO: 불러온 데이터를 사용하여 화면에 표시하는 코드 추가

        // 예시: 데이터를 가져와서 화면에 표시
        const postData = response.data;  // 실제 서버 응답에 따라 수정해야 함
        contents_title.innerText = postData.contents_title;
        contents_text.innerText = postData.contents_text;
        contents_detail_date.innerText = postData.contents_detail_date;
        contents_detail_view.innerText = postData.contents_detail_view;
        mobile_detail_date.innerText = postData.mobile_detail_date;
        mobile_detail_view.innerText = postData.mobile_detail_view;

    }).catch(error => {
        console.error('API 요청 실패:', error);
    });
};
function orderedByOpinionCount(){

    axios({

        method: "GET",
        url:`http://ec2-52-78-33-144.ap-northeast-2.compute.amazonaws.com:8080/api/v1/posts/orderedByOpinionCount`,

    }).then((res)=>{
    console.log(res);
}).catch(error=>{
    console.log(error);
    // throw new Error(error);
    alert(error.response.data.message);
});
}
function orderedByCreatedAt(){

    axios({
        method:"GET",
        url:`http://ec2-52-78-33-144.ap-northeast-2.compute.amazonaws.com:8080/api/v1/posts/orderedByCreatedAt`,
    }).then((res)=>{
        console.log(res);
    }).catch(error=> {
        console.log(error);
        // throw new Error(error);
        alert(error.response.data.message);
    });
}

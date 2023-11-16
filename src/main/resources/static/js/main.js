// const maxCharctersSmall =1;
//
// // 초기에 페이지 로딩 시 원본 텍스트 내용 저장
// const originalText = contentsText.textContent;
//
// // 화면 크기 변화 감지 이벤트 리스너
// window.addEventListener('resize', function() {
//     var width_size = window.innerWidth;
//
//     if (width_size <= 1200 && width_size >= 800) {
//         // 글자 수를 30자로 제한한 후에 '...'을 추가
//         if (contentsText.textContent.length > maxCharactersLarge) {
//             const trimmedText = contentsText.textContent.substring(maxCharactersLarge) + '...';
//             contentsText.textContent = trimmedText;
//         }
//     } else if (width_size < 800) {
//         // 글자 수를 10자로 제한한 후에 '...'을 추가
//         if (contentsText.textContent.length > maxCharactersSmall) {
//             const trimmedText = contentsText.textContent.substring(maxCharactersSmall) + '...';
//             contentsText.textContent = trimmedText;
//         // 작은 화면에서는 contentsText를 숨김
//         contentsText.style.display = 'none';
//     } else {
//         // 크기에 따른 제한 없이 원래의 전체 텍스트 내용을 복원
//         contentsText.textContent = originalText;
//     }
// }, true);
//

// const contentsText = document.querySelectorAll('.contents_text'); // 클래스명으로 변경
// const maxCharactersLarge = 8; // 최대 표시할 글자 수 (큰 화면)
// if(contentsText.length>maxCharactersLarge){
//     // contentsText= contentsText.substring(0,maxCharactersLarge);
// }

// 로컬 스토리지에서 토큰을 읽어오기
const token = localStorage.getItem('token');

// 토큰을 로컬 스토리지에 저장
localStorage.setItem('token', token);

const instance = axios.create({
    baseURL: 'http://ec2-52-78-33-144.ap-northeast-2.compute.amazonaws.com:8080',
    headers: {
        Authorization: token,
    },
});

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

window.onload = function() {

    // 특정 ID를 가진 요소를 찾기
    var container = document.getElementById("container");
    // var dataContainer = document.getElementById("contents_title");

    instance.get('/api/v1/posts/all')
        .then((res)=> {
            console.log(res);

            var listchar = document.createElement("div");
            listchar.classList.add("list_char");

            var listsize = document.createElement("p");
            listsize.classList.add("many_content_text");
            listsize.textContent = "청원이 총 " + res.data.length + "건 있습니다.";
            listchar.appendChild(listsize);
            document.body.appendChild(listchar);

            for (var i = 0; i < res.data.length; i++) {
                // 새로운 container 생성
                var newContainer = document.createElement("div");
                newContainer.classList.add("contents_main_box");
                newContainer.href = "detail.html"

                // contents_div 추가
                var contentsDiv = document.createElement("div");
                contentsDiv.classList.add("contents_div");
                contentsDiv.href = "detail.html"

                // contents_title 추가
                var contentsTitle = document.createElement("a");
                contentsTitle.classList.add("contents_title");
                contentsTitle.textContent = res.data[i].title;
                contentsTitle.href = "detail.html"

                // contents_text 추가
                var contentsText = document.createElement("p");
                contentsText.classList.add("contents_text");
                contentsText.textContent = res.data[i].content; // 원하는 텍스트 추가

                // contents_detail_div 추가
                var contentsDetailDiv = document.createElement("div");
                contentsDetailDiv.classList.add("contents_detail_div");

                // contents_detail_date 추가
                var contentsDetailDate = document.createElement("p");
                contentsDetailDate.classList.add("contents_detail_date");
                contentsDetailDate.textContent = res.data[i].createdAt;

                // contents_detail_view 추가
                var contentsDetailView = document.createElement("p");
                contentsDetailView.classList.add("contents_detail_view");
                contentsDetailView.textContent = res.data[i].modifiedAt;

                // contents_detail_div_mobile 추가
                var contentsDetailDivMobile = document.createElement("div");
                contentsDetailDivMobile.classList.add("contents_detail_div_mobile");

                // mobile_detail_date 추가
                var mobileDetailDate = document.createElement("p");
                mobileDetailDate.classList.add("mobile_detail_date");
                mobileDetailDate.textContent = res.data[i].title;

                // mobile_detail_view 추가
                var mobileDetailView = document.createElement("p");
                mobileDetailView.classList.add("mobile_detail_view");
                mobileDetailView.textContent = res.data[i].title;

                // 생성한 요소들을 추가
                contentsDiv.appendChild(contentsTitle);
                contentsDiv.appendChild(contentsText);
                contentsDetailDiv.appendChild(contentsDetailDate);
                contentsDetailDiv.appendChild(contentsDetailView);
                contentsDetailDivMobile.appendChild(mobileDetailDate);
                contentsDetailDivMobile.appendChild(mobileDetailView);
                newContainer.appendChild(contentsDiv);
                newContainer.appendChild(contentsDetailDiv);
                newContainer.appendChild(contentsDetailDivMobile);

                // 생성한 container를 body에 추가
                document.body.appendChild(newContainer);
            }
        })
        .catch(error=> {
            console.log(error);
        })
}
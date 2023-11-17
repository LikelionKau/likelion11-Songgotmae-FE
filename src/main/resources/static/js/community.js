// // community.js
// import { initializeAccordion } from './accordion.js';
//
// // 아코디언 아이템을 생성하는 함수 (예시)
// function createCommunityItem(title, content) {
//     const accordionItem = document.createElement('div');
//     // 여기에서 다른 요소들을 생성하고 추가하는 코드
//
//     // 아코디언 초기화
//     const accordionBtn = accordionItem.querySelector('.open_btn');
//     const accordionContents = accordionItem.querySelector('.accordion_content');
//     const accordionText = accordionItem.querySelector('.accordion_title_text');
//     const informationCircle = accordionItem.querySelector('.info_circle');
//     const informationBlack = accordionItem.querySelector('.info_circle_black');
//     const bottomArrow = accordionItem.querySelector('.bottom_arrow');
//
//     initializeAccordion(accordionBtn, accordionContents, accordionText, informationCircle, informationBlack, bottomArrow);
//
//     return accordionItem;
// }
//
// // 커뮤니티 준수사항 생성 예시
// const communityGuidelines = [
//     { title: '준수사항 1', content: '내용 1' },
//     { title: '준수사항 2', content: '내용 2' },
//     // 원하는 만큼 아코디언 아이템을 추가할 수 있습니다.
// ];
//
// communityGuidelines.forEach(guideline => {
//     const accordionItem = createCommunityItem(guideline.title, guideline.content);
//     accordionContainer.appendChild(accordionItem);
// });

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
        nav_signup.href = "mypage.html";
    }
});
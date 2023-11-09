const navbarMenu = document.querySelector('.navbar_menu');
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
const navbarBackground = document.querySelector('.navbar');
const navbarMenuDown = document.querySelector('.bg');
const bodyDiv = document.querySelector('.main_div');

navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
    navbarToggleBtn.classList.toggle('open');
    // "open" 클래스가 부여되었을 때
    if (bodyDiv.classList.toggle('open')) {
        // 추가 여백을 설정
        bodyDiv.style.marginTop = '100px'; // 예시로 100px로 설정
    }
    else {
        console.log("Element not found.");
    }
});


document.addEventListener('click', (event) => {
    const targetElement = event.target;
    if (!targetElement.closest('.navbar_menu') && !targetElement.closest('.navbar__toggle-btn') || !targetElement.closest('.navbar__toggle-btn')) {
        navbarMenu.classList.remove('open');
        navbarToggleBtn.classList.remove('open');
        bodyDiv.classList.remove('open');
        bodyDiv.style.marginTop = '0';
    }
});





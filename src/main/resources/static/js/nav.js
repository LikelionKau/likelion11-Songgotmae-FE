const navbarMenu = document.querySelector('.navbar_menu');
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
const navbarBackground = document.querySelector('.navbar');
const navbarMenuDown = document.querySelector('.bg');
const bodyDiv = document.querySelector('.main_div');
const communityBodyDiv = document.querySelector('.community_main_div');


navbarToggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('open');
    navbarToggleBtn.classList.toggle('open');
    if(bodyDiv){
        bodyDiv.classList.toggle('open');
        bodyDiv.style.marginTop = '100px';
    }
    else if(communityBodyDiv){
        communityBodyDiv.classList.toggle('open');
        if(communityBodyDiv.classList.contains('open')){
            communityBodyDiv.style.marginTop='120px';
        }
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
        if(bodyDiv){
            bodyDiv.classList.remove('open');
            bodyDiv.style.marginTop = '0';
        }
        else if (!bodyDiv&& communityBodyDiv) {
            // bodyDiv가 없고 communityBodyDiv만 있는 경우
            communityBodyDiv.classList.remove('open');
            communityBodyDiv.style.marginTop = '0';
        }
    }


});





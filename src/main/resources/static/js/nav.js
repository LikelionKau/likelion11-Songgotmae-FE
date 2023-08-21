const navbarMenu = document.querySelector('.navbar_menu');
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');

navbarToggleBtn.addEventListener('click',()=>{
    navbarMenu.classList.toggle('open');
    navbarToggleBtn.classList.toggle('open');
});
const navbarMenu = document.querySelector('.navbar_menu');
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
const navbarBackground = document.querySelector('.navbar')

navbarToggleBtn.addEventListener('click',()=>{
    navbarMenu.classList.toggle('open');
    navbarToggleBtn.classList.toggle('open');
});

document.addEventListener('click', (event) => {
    const targetElement = event.target;
    if (!targetElement.closest('.navbar_menu') && !targetElement.closest('.navbar__toggle-btn')) {
        navbarMenu.classList.remove('open');
        navbarToggleBtn.classList.remove('open');
    }
});
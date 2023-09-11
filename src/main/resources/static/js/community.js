const accordionText = document.querySelector('.accordion_title_text');
const accordionBtn = document.querySelector('.open_btn');
const accordionContents = document.querySelector('.accordion_content');
const informationCircle = document.querySelector('.info_circle');
const bottomArrow = document.querySelector('.bottom_arrow');

accordionBtn.addEventListener('click', () => {
    if (accordionContents.classList.contains('dropdown')) {
        accordionContents.classList.remove('dropdown');
        accordionBtn.classList.remove('dropdown');
        accordionText.classList.remove('dropdown');
        informationCircle.classList.remove('dropdown');
    } else {
        accordionContents.classList.add('dropdown');
        accordionBtn.classList.add('dropdown');
        accordionText.classList.add('dropdown');
        informationCircle.classList.add('dropdown');
        bottomArrow.classList.add('dropdown');
    }
});
const accordionTitle = document.querySelectorAll('.accordion_title_text');
let accordionBtn = document.querySelectorAll('.open_btn');
const accordionContents = document.querySelectorAll('.accordion_content');
const informationCircle = document.querySelectorAll('.info_circle');
const informationBlack = document.querySelectorAll('.info_circle_black');
const bottomArrow = document.querySelectorAll('.bottom_arrow');
    for(let i=0;i<accordionBtn.length;i++){
        accordionBtn[i].addEventListener('click', () => {
            if (accordionContents[i].classList.contains('dropdown')) {
                accordionContents[i].classList.remove('dropdown');
                accordionBtn[i].classList.remove('dropdown');
                accordionTitle[i].classList.remove('dropdown');
                informationCircle[i].classList.remove('dropdown');
                informationBlack[i].classList.remove('dropdown');
                bottomArrow[i].classList.remove('dropdown');
            } else {
                accordionContents[i].classList.add('dropdown');
                accordionBtn[i].classList.add('dropdown');
                accordionTitle[i].classList.add('dropdown');
                informationCircle[i].classList.add('dropdown');
                bottomArrow[i].classList.add('dropdown');
                informationBlack[i].classList.add('dropdown');
            }
        });
    }

    const subContentTitle = document.querySelectorAll('.accordion_content_sub_area')
    const subContentText = document.querySelectorAll('.accordion_content_text')
    function openSubList(){
       
    }
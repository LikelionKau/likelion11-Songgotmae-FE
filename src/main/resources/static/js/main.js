const navbarMenu = document.querySelector('.navbar_menu');
const navbarToggleBtn = document.querySelector('.navbar__toggle-btn');
const contentsText=document.querySelector('.contents_text');
const maxCharactersSmall=0;
const maxCharactersLarge=30;

const originalText = contentsText.textContent;

navbarToggleBtn.addEventListener('click',()=>{
    navbarMenu.classList.toggle('open');
    navbarToggleBtn.classList.toggle('open');
});


window.addEventListener('resize',function(){
   var width_size = window.innerWidth;

   if(width_size<=1200 && width_size>=800){
       if(contentsText.textContent.length>maxCharactersLarge){
           const trimmedText = contentsText.textContent.substring(0,maxCharactersLarge) + '...';
           contentsText.textContent=trimmedText;
       }
   }
   else if(width_size<800){
       contentsText.style.display='none';
   }
   else{
       contentsText.textContent = originalText;
   }
},true);
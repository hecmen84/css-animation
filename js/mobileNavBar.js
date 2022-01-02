const menuMobile = document.querySelector('.menu-mobile');
const circle = document.querySelector('.circle');
menuMobile.addEventListener('click', ()=>{
    circle.classList.toggle('show');
})
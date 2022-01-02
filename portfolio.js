const nav = document.querySelectorAll('nav ul li');
const box = document.querySelectorAll('.box');
let attNav, attBox;

nav.forEach(element => {
    element.addEventListener('click', ()=>{
        nav.forEach(item =>{
        item.className = "";
        
        })
        element.classList.toggle('active');
        attNav =  element.getAttribute('cat');
        //recorrer box para saber si hacen match los atributos
        box.forEach(element =>{
            //element.classList.toggle('remove')
            attBox = element.getAttribute('cat');
            console.log(attBox)
            if(attNav !== attBox){
                element.style.display = 'none';
            }
            else{
                element.style.display = "block";
            }
            if(attNav == 'all'){
                element.style.display = "block";
            }
        })
    })
});
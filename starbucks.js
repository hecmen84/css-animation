const starbucks = document.querySelector('.starbucks');
const thumb_li  = document.querySelectorAll('.thumb li img');
const circle    = document.querySelector('.circle');

thumb_li.forEach(item =>{
    item.addEventListener('click', ()=>{
        let att = item.getAttribute('att');
        changeGlass(att);
    });
});

function changeGlass(att){
    console.log(att)
    switch(att){
        case "1":
        starbucks.src = 'img/img1.png';
        circle.style.background = '#017143';
        break
        case "2":
        starbucks.src = 'img/img2.png';
        circle.style.background = '#eb7495';
        break
        case "3":
        starbucks.src = 'img/img3.png';
        circle.style.background = '#d752b1';
        break  
    } 
    
}



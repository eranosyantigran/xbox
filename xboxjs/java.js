let dot = document.getElementsByClassName('dot'),
dotA = document.getElementsByClassName('block')[0],
slide = document.getElementsByClassName('img-item'),
prev = document.getElementsByClassName('left'),
next = document.getElementsByClassName('rigth'),
index = 1;

slider(index);

function slider (n) {
    if (n < 1) {
        index = slide.length;
    } else if (n > slide.length){
        index = 1;
    }
    for (let i = 0; i < slide.length ; i++){
        slide[i].style.display = 'none';
    }
    for(let i = 0; i < dot.length ; i++ ){
        dot[i].classList.remove('active');
    }
    slide[index - 1].style.display = "block";
    dot[index - 1].classList.add('active');
    }
    function plusSlide (n){
        slider(index += n);
    }
    function current(n){
        slider(index = n);
    }
    dotA.onclick = function(e) {
    for(let i = 0; i < dot.length + 1 ; i++){
        if(e.target.classList.contains('dot') && e.target == dot[i - 1]){
            current(1);
        }
    }   
}

var card = document.querySelector(".card1");
var cont3 = document.querySelector(".cont31");
var left = document.querySelector(".left1");
var rigth = document.querySelector(".rigth1");
var gap = 0;

rigth.addEventListener("click" , function click() {
    if (gap > -2500) {
        gap -= 285;
        cont3.style.transform = `translateX(${gap}px)`; 
    } else{
        gap = 0;
        cont3.style.transform = `translateX(0px)`;
    }
})

var icon = document.querySelector(".fa-bars"),
    menu = document.querySelector(".menu1"),
    icon1 = document.querySelector(".fa-minus-circle");

icon.addEventListener("click" , function cl() {
    menu.style.display = `block`;
    icon.style.display = `none`;
    icon1.style.opacity = `1` ;
})
icon1.addEventListener("click" , function cli() {
    menu.style.display = `none`;
    icon1.style.opacity = `0` ;
    icon.style.display = `block`;
})
var icon=document.querySelector('.icon i');
var nav= document. querySelector('.navbar');
icon.addEventListener('click',fun);
function fun(){
    icon.classList.toggle('fa-times');
    nav.classList.toggle('navbar-active');
}
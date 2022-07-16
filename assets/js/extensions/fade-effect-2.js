window.onscroll = function(){miFuncion()};

var basico1 = document.getElementById("basico1");
var basico2 = document.getElementById("basico2");
var basico3 = document.getElementById("basico3");
var basico4 = document.getElementById("basico4");
var basico5 = document.getElementById("basico5");
var inter1 = document.getElementById("inter1");
var inter2 = document.getElementById("inter2");
var inter3 = document.getElementById("inter3");
var inter4 = document.getElementById("inter4");
var inter5 = document.getElementById("inter5");

var dis_basico1, dis_basico2, dis_basico3, dis_basico4,dis_basico5, dis_inter1, dis_inter2, dis_inter3,dis_inter4, dis_inter5;

function miFuncion(){
    dis_basico1 = window.innerHeight - basico1.getBoundingClientRect().top;
    if(dis_basico1 >= 200){
        basico1.classList.add("efecto-basico1");
    }
    dis_basico2 = window.innerHeight - basico2.getBoundingClientRect().top;
    if(dis_basico2 >= 200){
        basico2.classList.add("efecto-basico2");
    }
    dis_basico3 = window.innerHeight - basico3.getBoundingClientRect().top;
    if(dis_basico3 >= 200){
        basico3.classList.add("efecto-basico3");
    }
    dis_basico4 = window.innerHeight - basico4.getBoundingClientRect().top;
    if(dis_basico4 >= 200){
        basico4.classList.add("efecto-basico4");
    }
    dis_basico5 = window.innerHeight - basico5.getBoundingClientRect().top;
    if(dis_basico5 >= 200){
        basico5.classList.add("efecto-basico5");
    }


    dis_inter1 = window.innerHeight - inter1.getBoundingClientRect().top;
    if(dis_inter1 >= 200){
        inter1.classList.add("efecto-inter1");
    }
    dis_inter2 = window.innerHeight - inter2.getBoundingClientRect().top;
    if(dis_inter2 >= 200){
        inter2.classList.add("efecto-inter2");
    }
    dis_inter3 = window.innerHeight - inter3.getBoundingClientRect().top;
    if(dis_inter3 >= 200){
        inter3.classList.add("efecto-inter3");
    }
    dis_inter4 = window.innerHeight - inter4.getBoundingClientRect().top;
    if(dis_inter4 >= 200){
        inter4.classList.add("efecto-inter4");
    }
    dis_inter5= window.innerHeight - inter5.getBoundingClientRect().top;
    if(dis_inter5 >= 200){
        inter5.classList.add("efecto-inter5");
    }
}
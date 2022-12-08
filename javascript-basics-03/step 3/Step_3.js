var green = document.querySelector(".green");
var red = document.querySelector(".red");
var blue = document.querySelector(".blue");
var text=document.getElementById('text');
green.setAttribute('onclick', 'changeColor("green")');
red.setAttribute('onclick', 'changeColor("red")');
blue.setAttribute('onclick', 'changeColor("blue")');

function changeColor(c){
    text.style.color=c;
}
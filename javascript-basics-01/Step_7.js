var a=prompt("Enter your shoes size");
var b=prompt("Enter your bithday year");
var in1=document.getElementById('shoe_size');
var in2= document.getElementById('year');
in1.value=a;
in2.value =b;
var val=document.getElementById('validate');
val.addEventListener("click",function(){
    var cal=a*2;
    cal+=5;
    cal*=50;
    cal-=b;
    cal+=1766;
alert ("The result is : "+ cal)});
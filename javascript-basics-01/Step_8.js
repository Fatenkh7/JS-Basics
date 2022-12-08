var a=prompt("Enter your age");
var b=document.getElementById('age');
var val=document.getElementById('validate');
b.value=a;
val.addEventListener('click',function(){
    if(b>=18){
        alert("you are over 18");
    }
    else {alert("you are under 18")
    }
});

alert("Enter 2 numbers");
var a=document.getElementById('first_number');
var b=document.getElementById('second_number');
var calc=document.getElementById('validate');
calc.addEventListener('click', function(){
    alert("The result is: "+ a.value/b.value)
});
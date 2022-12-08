var textOut=document.getElementById("div1");
var text=document.querySelector("input");
text.addEventListener('change',function(){
    textOut.innerHTML=text.value;
})
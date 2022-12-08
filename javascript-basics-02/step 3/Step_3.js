body.div = document.createElement("div");
var text=document.querySelector("input");
text.addEventListener('change',function(){
    div.innerHTML=text.value;
})
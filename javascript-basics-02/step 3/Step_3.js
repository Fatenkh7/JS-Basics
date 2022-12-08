const div = document.createElement("div");
document.body.appendChild(div)
var text=document.querySelector("input");
text.addEventListener('change',function(){
    console.log('hi')
    document.getElementsByTagName('div')[0].innerText=text.value;
})
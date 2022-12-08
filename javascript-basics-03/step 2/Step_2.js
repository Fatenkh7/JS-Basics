var bttn = document.querySelectorAll("a");
var div = document.getElementById("texte")
bttn.forEach(function(element) {
    if (element.id == "show") {
        element.onclick = function () {
            div.style.display = "block"
        }
    } 
    if (element.id == "hide") {
        element.onclick = function () {
            div.style.display = "none"
        }
    } 
});
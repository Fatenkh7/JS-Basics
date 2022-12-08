var sname = document.getElementById('name');
var surName=document.getElementById('surname');
var city=document.getElementById('city');
document.getElementById('validate').addEventListener('click',function(){
    console.log(sname);
    alert("Nom : " + sname.value + "\n Prenom : "+ surName.value + "\n Ville : "+ city.value);
})

const inputDiv = document.querySelector('.inputDiv');
const input = document.getElementById('input');
const button = document.getElementById('button');
const contentDiv = document.querySelector('.contentDiv');
var calculate = 0;
button.addEventListener('click',go);
function go(){
    if (input.value != ""){
        calculate++;
        var paragraf  = document.createElement('p');
        paragraf.innerText = calculate+ '-' +input.value;
        contentDiv.appendChild(paragraf);
        input.value = "";
    }
   

}
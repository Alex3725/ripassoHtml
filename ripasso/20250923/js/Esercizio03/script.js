// drop a tendina
function toggleMenu(idMenu) {
const dropdown = document.getElementById(idMenu);
dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}



let bottone = document.querySelector("#id_btn");
let risultato = document.querySelector(".risultato");

bottone.addEventListener("click",()=>{
    let inputTesto = document.querySelector("#id_input");

    inputTesto = inputTesto.value
    risultato.textContent = "ciao " + inputTesto
});





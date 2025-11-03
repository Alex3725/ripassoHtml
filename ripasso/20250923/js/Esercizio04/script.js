// drop a tendina
function toggleMenu(idMenu) {
const dropdown = document.getElementById(idMenu);
dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

const btnAggiungi = document.getElementById('btnAggiungi');
const input = document.getElementById('nuovoElemento');
const lista = document.getElementById('lista');


btnAggiungi.addEventListener('click', () => {
    console.log("ciao-> " + input.value);
    
    let testo = input.value.trim();
    if(testo != '') {
        const li = document.createElement('li');
        
        li.textContent = testo;
        lista.appendChild(li);
        input.value = '';
}
});
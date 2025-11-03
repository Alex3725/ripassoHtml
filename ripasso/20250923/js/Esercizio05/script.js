
function toggleMenu(idMenu) {
const dropdown = document.getElementById(idMenu);
dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

const box = document.getElementById('box');
const btnColore = document.getElementById('btnColore');
const btnBordo = document.getElementById('btnBordo');

let colori = ["white","red","green","blue"]
let count = -1;
let statoBordi = true;

btnColore.addEventListener('click', () => {
    if (count == 3) {

        console.log(count);
        count = -1;
    }   
    count++;
    box.style.backgroundColor = colori[count];
    
});


btnBordo.addEventListener('click', () => {
    if(statoBordi){
        box.style.border = '';
        statoBordi = !statoBordi
    }else{
        box.style.border = '4px solid black';
        statoBordi = !statoBordi
    }

});
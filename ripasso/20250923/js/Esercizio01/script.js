let num1 = "15";
let num2 = "7";
const bot = document.querySelector("#btn");
const outSomma = document.querySelector("#somm");
const outDifferenza = document.querySelector("#diff");
const outProdotto = document.querySelector("#Prod");
const outDivisione = document.querySelector("#divi");

num1 = Number(num1);
num2 = Number(num2);

let somma = num1 + num2;
let differenza = num1 - num2;
let prodotto = num1 * num2;
let divisione = num1/num2;

bot.addEventListener('click', ()=>{
    outSomma.textContent = somma;
    outDifferenza.textContent = differenza;
    outProdotto.textContent = prodotto;
    outDivisione.textContent = divisione;
    console.log("premuto");
    
});


// drop a tendina
function toggleMenu(idMenu) {
const dropdown = document.getElementById(idMenu);
dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

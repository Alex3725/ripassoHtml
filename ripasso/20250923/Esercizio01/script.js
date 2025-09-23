const num1 = "15" 
const num2 = "7"
const bot = document.querySelector("#btn")
const outSomma = document.querySelector("#somm")
const outDifferenza = document.querySelector("#diff")
const outProdotto = document.querySelector("#Prod")
const outDivisione = document.querySelector("#divi")

num1 = Number(num1)
num2 = Number(num2)

let somma = num1 + num2
let differenza = num1 - num2
let prodotto = num1 * num2
let divisione = num1/num2

bot.addEventListener('click', ()=>{
    outSomma.textContent = somma
    outDifferenza.textContent = differenza
    outProdotto.textContent = prodotto
    outDivisione.textContent = divisione
})


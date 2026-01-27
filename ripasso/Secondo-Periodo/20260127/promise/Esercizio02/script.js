const myButton = document.getElementById("myButton");
const resultDiv = document.getElementById("result");

async function getNumeroCasuale() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const numeroCasuale = Math.floor(Math.random() * 100) + 1;
            resolve(numeroCasuale);
        }, 2000);
    });
}

myButton.addEventListener("click", async () => {
    const numero = await getNumeroCasuale();
    resultDiv.textContent = "Numero casuale ottenuto: " + numero;
});
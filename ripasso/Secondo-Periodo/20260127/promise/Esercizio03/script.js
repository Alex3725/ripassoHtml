const myButton = document.getElementById("myButton");
const resultDiv = document.getElementById("result");
const numeroInput = document.getElementById("numeroInput");

async function isPari(numero) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (numero % 2 === 0) {
                resolve(true);
            } else {
                reject(false);
            }
        }, 1000);
    });
}

myButton.addEventListener("click", async () => {
    const numero = parseInt(numeroInput.value);
    try {
        const risultato = await isPari(numero);
        if (risultato) {
            resultDiv.textContent = "Il numero è pari.";
        }
    } catch {
        resultDiv.textContent = "Il numero è dispari.";
    }
});

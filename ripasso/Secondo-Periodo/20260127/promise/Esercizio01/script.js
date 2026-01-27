const myButton = document.getElementById("myButton");
const resultDiv = document.getElementById("result");

async function nomeFunzione(parametri) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            
                resolve("Operazione completata");
            
        }, 1000);
    });
}

myButton.addEventListener("click", async () => {
    const risultato = await nomeFunzione();
    resultDiv.textContent = risultato;
});

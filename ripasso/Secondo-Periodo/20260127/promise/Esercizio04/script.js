const resultDiv = document.getElementById("result");
const myButton = document.getElementById("myButton");


function getDati() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Dati ottenuti!"), 3000);
    });
}

async function esempio() {
    console.log("Attendo i dati...");
    const dati = await getDati();
    console.log(dati);
}

myButton.addEventListener("click", async () => {
    resultDiv.textContent = "Attendo i dati...";
    const dati = await getDati();
    resultDiv.textContent = dati;
});

esempio();
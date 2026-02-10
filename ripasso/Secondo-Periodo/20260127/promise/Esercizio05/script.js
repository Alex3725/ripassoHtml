const form = document.getElementById('loginForm');
const resultDiv = document.getElementById('result');

function simulateLogin(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "user" && password === "pass") {
                resolve("Login effettuato con successo!");
            } else {
                reject("Credenziali non valide.");
            }
        }, 1000);
    });
}
form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = form.username.value;
    const password = form.password.value;

    // try {
    //     const message = await simulateLogin(username, password);
    //     resultDiv.textContent = message;
    // } catch (error) {
    //     resultDiv.textContent = error;
    // }
    await simulateLogin(username, password)
        .then(message => {
            resultDiv.textContent = message;
        })
        .catch(error => {
            resultDiv.textContent = error;
        });
});

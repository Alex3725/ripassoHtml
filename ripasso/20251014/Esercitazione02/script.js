let btn = document.querySelector('.btn');



function controlloEmail(inpemail) {
    let errore = document.querySelector('.errore');
    if (!inpemail.includes("@")) {
        errore.textContent = "ERRORE: email non valida";
        return true;
    }
    let emailDIvisione = inpemail.split('@');

    if (!emailDIvisione[1].includes(".")) {
        errore.textContent = "ERRORE: email non valida";
        return true;
    }
}

btn.addEventListener('click', ()=> {
    let 
    if (controlloEmail()) {
        
    }
})
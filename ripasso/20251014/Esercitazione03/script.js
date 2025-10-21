

let btn = document.querySelector('.btn');

function validaIp(Ip) {


    let listaNum = Ip.value
        .split(".").map(s => s.trim()).filter(Boolean);

    if (listaNum.length != 4) {
        alert("Errore: nel inserimento ip");
        return true;
    }
    listaNum.forEach(byte => {
        console.log(isNaN(byte));
        
        if (isNaN(byte) || Number(byte) > 255 ||  Number(byte) < 0) {
            setTimeout(() => {
                alert("Errore: nel inserimento ip controllare di non aver inserito lettere");
                console.log("ERROR");
                
                return true;
                }, 1000);
        }
    });
    return false;
}

function convertiScrivi(params) {
    let outputIpDec = document.querySelector('.ip_deci');
    let outputIpBina = document.querySelector('.ip_bina');
    console.log("sium");

    let inputText = document.querySelector('.input');

    let listaDati = inputText.value
        .split(".").map(s => s.trim()).filter(Boolean);
    console.log(listaDati);

    let risultatoDeci = "";
    let risultatoBinario = "";
    console.log(validaIp(inputText));
    
    if (validaIp(inputText)) {
        
        
        risultato = 0;
        return false;
    } else {
        listaDati.forEach(byte => {
            risultatoDeci += byte + ".";
            let numeroByte = Number(byte);
            risultatoBinario += numeroByte.toString(2) + ".";
        });

        outputIpDec.textContent = risultatoDeci.slice(0, -1);
        outputIpBina.textContent = risultatoBinario.slice(0, -1);
        console.log(outputIpDec);
    }

}


btn.addEventListener("click", convertiScrivi);
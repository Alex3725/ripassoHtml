// console.log("Inizio");

// setTimeout(() => {
//     console.log("Operazione completa");
// }, 3000);

// console.log("Fine");


function funzione_di_pre(params) {
    let i = 0
    while (i++ <= 0) {
        console.log("FAi domanda");
    }
    return 12234
}

console.log(funzione_di_pre()); //cosi ritorna return 12234
console.log(funzione_di_pre);// fa prorprio il corpo della funzione 

setTimeout(funzione_di_pre, 4000);


const cont01 = document.getElementById("contenuto01");
const cont02 = document.getElementById("contenuto02");
const cont03 = document.getElementById("contenuto03");
const btn03 = document.getElementById("btn")

// ----------------1------------------
// cont01.textContent="Pagina caricata";
// setTimeout(() => {
//     cont01.textContent = "Operazione completata";
// }, 3000);



// for (let index = 5; index > 0; index--) {
//     setTimeout(() => {
//         cont02.textContent= index;
//     }, 1000);
// }
// cont02.textContent = "Tempo scaduto";


// -------- 2---------------------
// let n = 5;
// cont02.textContent = n;

// const timer = setInterval(() => {
//   n--;
//   if (n > 0) {
//     cont02.textContent = n;
//   } else {
//     clearInterval(timer);
//     cont02.textContent = "Tempo scaduto";
//   }
// }, 1000);


// for (let index = 5; index > 0; index--) {
//   setTimeout(() => {
//     cont02.textContent = index;
//   },(5 - index) * 1000); // 0s, 1s, 2s, 3s, 4s
// }

// setTimeout(() => {
//   cont02.textContent = "Tempo scaduto";
// }, 5 * 1000); // dopo 5 secondi


// ------------------ ricorsiva ritardata ------------
function cronometro(params) {
    let numero = Number(cont02.textContent);
    numero--;
    cont02.textContent = numero
    if (numero > 0) {
        return setTimeout(cronometro,1000);
    }
    return;
}
cronometro();
// -------------------------3---------------------

// function cronometro(params) {
//     for (let index = 0; index < 6; index++) {
//         setTimeout(() => {
//             cont03.textContent = index ;
//         }, 1000);
//     }
//     cont03.textContent = "Cronometro fermato";
// }




// function cronometro(numeroMaxCro = 5, numeroPartenza = 0, tempo = 1000) {
//   let n = numeroPartenza;
//   cont03.textContent = n;

//   const timer = setInterval(() => {
//     n++;
//     if (n <= numeroMaxCro) {
//       cont03.textContent = n;
//     } else {
//       clearInterval(timer);
//       cont03.textContent = "Cronometro fermato";
//     }
//   }, tempo);
// }



// function cronometro(numeroMaxCro = 5, numeroPartenza = 0, tempo = 1000) {
//     let index = numeroPartenza;
//     cont03.textContent = index;
//     for (let index = numeroPartenza; index <= numeroMaxCro; index++) {
//         setTimeout(() => {
//             cont03.textContent = index;
//             console.log("ciao");
            
//         }, index * tempo);
//     }
//     setTimeout(() => {
//         cont03.textContent = "Cronometro fermato";
//     }, (numeroMaxCro+1) * tempo);
// }

// btn03.addEventListener("click", cronometro(6,4,2000));
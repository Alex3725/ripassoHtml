const bottone = document.querySelector("#id_btn");




// console.log(bottone);

// bottone.addEventListener('click', ()=>{
//     alert(nome + " non disturbare visto i tuoi "+ eta);
// })


// 4
// creare elemeni

// let nuovo_elemento = document.createElement("p");

// let testo = "non si ricorda niente";

// nuovo_elemento.textContent = testo

// // aggiungi element al dom

// const blocco = document.querySelector("#aggiungi");
// blocco.appendChild(nuovo_elemento);

//6 

//aggiungere una tabella con due colonne nome eta

function createTable(params) {
    let eta = document.querySelector("#id_eta").value;
    let nome = document.querySelector("#id_nome").value;

    let nuovo_elemento_tabella_riga = document.createElement("tr")
    let nuovo_elemento_tabella_colonna1 = document.createElement("td")
    let nuovo_elemento_tabella_colonna2 = document.createElement("td")
    let tabella = document.querySelector("#tbody")

    nuovo_elemento_tabella_colonna1.textContent = nome
    nuovo_elemento_tabella_colonna2.textContent = eta

    nuovo_elemento_tabella_riga.appendChild(nuovo_elemento_tabella_colonna1);
    nuovo_elemento_tabella_riga.appendChild(nuovo_elemento_tabella_colonna2);
    
    tabella.appendChild(nuovo_elemento_tabella_riga)

    console.log(nuovo_elemento_tabella_colonna2)
}

bottone.addEventListener("click",createTable);


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

const btnAggiungiTodo = document.getElementById('btnAggiungiTodo');
const todoInput = document.getElementById('todoInput');
const todoContainer = document.getElementById('todoContainer');

function createToDo(params) {
    
    const testo = todoInput.value.trim();
    if (testo !== '') {
        const div = document.createElement('div');
        div.classList.add('todo-item');
        div.textContent = testo;

        const btnFatto = document.createElement('button');
        btnFatto.textContent = 'Fatto';
        btnFatto.classList.add('btn', 'btnFatto');

        btnFatto.addEventListener('click', () => {
            div.style.textDecoration = 'line-through';
            div.style.opacity = '0.6';
            btnFatto.disabled = true;
        });

        div.appendChild(btnFatto);
        todoContainer.appendChild(div);
        todoInput.value = '';
    }
};


btnAggiungiTodo.addEventListener('click', createToDo);

// drop a tendina
function toggleMenu(idMenu) {
const dropdown = document.getElementById(idMenu);
dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}


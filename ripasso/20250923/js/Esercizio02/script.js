let titolo = document.querySelector("#Tit");
let bottone = document.querySelector("#btn");

let Titoli = ["buongiorno","come va ","va bene come sito?","questo sito è preopreio bello"]
let count = -1

// drop a tendina
function toggleMenu(idMenu) {
const dropdown = document.getElementById(idMenu);
dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}



bottone.addEventListener("click", ()=>{
    if (count == 3) {
    console.log(count);
    count = -1;
}
    count++;
    titolo.textContent = Titoli[count];
    
    
});
let btn = document.querySelector('.btn');

function checkInpNomeCo(inputNomeCogn) {
    if (inputNomeCogn == "") {
        setTimeout(()=>{
            alert("ERROR: inserire un parametro")
        }, 1000);
        return true
    }
    let listaInputNomeCogn = inputNomeCogn.value
    .split(".").map(s => s.trim()).filter(Boolean);

}
function checkEta(inpEta) {
    if (inpEta == 0) {
        setTimeout(()=>{
            alert("ERROR: non sei ancora nato?")
        }, 1000);
        return true;
    } else if(inpEta > 14 && inpEta < 99){
        return false
    }else{
        setTimeout(()=>{
            alert("ERROR: valori non validi")
        }, 1000);
        return true;
    }
}

btn.addEventListener("click", () => {
    let inputEta = document.querySelector('.eta_input')
    let inputNomeCogn = document.querySelector('.input_nom_cog')
    if (checkInpNomeCo(inputNomeCogn) || checkEta(inputEta)) {
        alert(":(")
    }else{

    }
})
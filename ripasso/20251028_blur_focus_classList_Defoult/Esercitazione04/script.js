
// const nameInput = document.getElementById('name');
// const emailInput = document.getElementById('email');

// const messageInput = document.getElementById('message');
// const charCount = document.getElementById('charCount');

// const feedback = document.getElementById('feedback');

// const privacyCheckbox = document.getElementById('privacy');

// const submitBtn = document.getElementById('submitBtn');
// const form = document.getElementById('newsletterForm');
// const msg = document.getElementById('msg');


// [nameInput, emailInput].forEach(input => {
//     input.addEventListener('focus', () => {
//         input.classList.toggle('focused', true);
//     });
//     input.addEventListener('blur', () => {
//         input.classList.toggle('focused', false);
//     });
// });


// messageInput.addEventListener('input', () => {
//     charCount.textContent = `Caratteri: ${messageInput.value.length}`;
// });


// messageInput.addEventListener('blur', () => {

//     if (messageInput.value.length < 30) {
//         messageInput.classList.add('error');
//         messageInput.classList.remove('valid');

//     } else {
//         messageInput.classList.remove('error');
//         messageInput.classList.add('valid');
//     }
// });

// function isNameAndEmailCorrect() {
//     console.log("ciao");

//     const name = nameInput.value.trim();
//     const email = emailInput.value.trim();

//     if (!name || !email) {
//         msg.textContent = 'Compila tutti i campi .';
//         console.log(msg.textContent);

//         msg.classList.remove('ok'); msg.classList.add('err');
//         return false;
//     }
//     msg.textContent = 'Dati ricevuti !';
//     msg.classList.remove('err'); msg.classList.add('ok');
//     return true;
// }



// function isCheckAndMessCorrect(checkBox) {
//     if (!isNameAndEmailCorrect() || messageInput.classList.contains('error') || !checkBox) {
//         feedback.textContent = "inserire testo piu lungo e selezionare la privacy"
//         return false;
//     }
//     return true;
// };


// privacyCheckbox.addEventListener('change', () => {
//     console.log(isCheckAndMessCorrect(privacyCheckbox.checked));

//     submitBtn.disabled = !isCheckAndMessCorrect(privacyCheckbox.checked);


//     submitBtn.classList.toggle('disabled', isCheckAndMessCorrect(privacyCheckbox.checked));
// });



// form.addEventListener('submit', (e) => {
//     e.preventDefault();
//     feedback.textContent = "i tuoi dati sono stati salvati";
// })


const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const charCount = document.getElementById('charCount');
const feedback = document.getElementById('feedback');
const privacyCheckbox = document.getElementById('privacy');
const submitBtn = document.getElementById('submitBtn');
const form = document.getElementById('newsletterForm');
const msg = document.getElementById('msg');

// Effetto focus sui campi
[nameInput, emailInput].forEach(input => {
    input.addEventListener('focus', () => input.classList.add('focused'));
    input.addEventListener('blur', () => input.classList.remove('focused'));
});

// Contatore caratteri in tempo reale
messageInput.addEventListener('input', () => {
    charCount.textContent = `Caratteri: ${messageInput.value.length}`;
    validateAll(); // aggiorna pulsante in tempo reale
});

// Controllo lunghezza messaggio
messageInput.addEventListener('blur', () => {
    if (messageInput.value.length < 30) {
        messageInput.classList.add('error');
        messageInput.classList.remove('valid');
    } else {
        messageInput.classList.remove('error');
        messageInput.classList.add('valid');
    }
    validateAll(); // aggiorna
});

// Controllo nome ed email
function isNameAndEmailCorrect() {
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (!name || !email) {
        msg.textContent = 'Compila tutti i campi.';
        msg.classList.remove('ok');
        msg.classList.add('err');
        return false;
    }
    msg.textContent = 'Dati ricevuti!';
    msg.classList.remove('err');
    msg.classList.add('ok');
    return true;
}

// Controllo generale
function isCheckAndMessCorrect() {
    if (!isNameAndEmailCorrect() || messageInput.classList.contains('error') || !privacyCheckbox.checked) {
        feedback.textContent = "Inserire testo più lungo e selezionare la privacy";
        return false;
    }
    feedback.textContent = "";
    return true;
}

// Aggiorna stato bottone
function validateAll() {
    const isValid = isCheckAndMessCorrect();
    submitBtn.disabled = !isValid;
    submitBtn.classList.toggle('disabled', !isValid);
}

// Eventi per aggiornare tutto in tempo reale
[nameInput, emailInput, privacyCheckbox].forEach(el => {
    el.addEventListener('input', validateAll);
    el.addEventListener('change', validateAll);
});

// Gestione invio form
form.addEventListener('submit', e => {
    e.preventDefault();
    if (isCheckAndMessCorrect()) {
        feedback.textContent = "✅ I tuoi dati sono stati salvati!";
    }
});

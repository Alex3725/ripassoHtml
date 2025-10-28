const form = document.getElementById('signupForm');
const nameEl = document.getElementById('name');
const emailEl = document.getElementById('email');
const msg = document.getElementById('msg');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = nameEl.value.trim();
    const email = emailEl.value.trim();

    if (!name || !email) {
        msg.textContent = 'Compila tutti i campi .';
        msg.classList.remove('ok'); msg.classList.add('err');
        return;
    }
    msg.textContent = 'Dati ricevuti !';
    msg.classList.remove('err '); msg.classList.add('ok');
});

[nameEl, emailEl].forEach((el) => {
    el.addEventListener('focus', () => el.classList.add('is-focused'));

    el.addEventListener('blur', () => {

        el.classList.remove('is-focused');
        el.classList.toggle('err', el.value.trim() === '');
    });
    el.addEventListener('input', () => el.classList.remove('err'))
        ;
});
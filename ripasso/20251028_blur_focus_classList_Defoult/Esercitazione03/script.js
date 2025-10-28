    const messageInput = document.getElementById('message');
    const charCount = document.getElementById('charCount');
    const feedback = document.getElementById('feedback');
    const form = document.getElementById('contactForm');

    // Contacaratteri live
    messageInput.addEventListener('input', () => {
      charCount.textContent = `Caratteri: ${messageInput.value.length}`;
    });

    // Validazione al blur
    
    messageInput.addEventListener('blur', () => {

      if (messageInput.value.length < 30) {
        messageInput.classList.add('error');
        messageInput.classList.remove('valid');

      } else {
        messageInput.classList.remove('error');
        messageInput.classList.add('valid');
      }
    });

    // Submit simulato
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (messageInput.value.length < 30) {
        feedback.textContent = "Errore: il messaggio deve contenere almeno 30 caratteri.";
      } else {
        feedback.textContent = "Messaggio inviato con successo!";
      }
    });
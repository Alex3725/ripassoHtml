    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const privacyCheckbox = document.getElementById('privacy');
    const submitBtn = document.getElementById('submitBtn');
    const feedback = document.getElementById('feedback');
    const form = document.getElementById('newsletterForm');

    // Gestione focus/blur
    [nameInput, emailInput].forEach(input => {
      input.addEventListener('focus', () => {
        input.classList.toggle('focused', true);
      });
      input.addEventListener('blur', () => {
        input.classList.toggle('focused', false);
      });
    });

    // Abilita/disabilita il bottone
    privacyCheckbox.addEventListener('change', () => {
      submitBtn.disabled = !privacyCheckbox.checked;
      submitBtn.classList.toggle('disabled', !privacyCheckbox.checked);
    });

    // Simulazione invio
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      feedback.textContent = "Iscrizione completata con successo!";
    });
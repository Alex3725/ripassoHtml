// Utility per mostrare messaggi con stile
const result = document.getElementById('result');

function showMessage(text, type = 'ok') {
  const wrap = document.createElement('div');
  wrap.className = `msg msg--${type}`;
  const dot = document.createElement('span');
  dot.className = 'dot';
  const content = document.createElement('span');
  content.textContent = text;
  wrap.append(dot, content);
  result.replaceChildren(wrap);
}

function showLoading(text = 'Attendere…') {
  showMessage(text, 'load');
}

// ========== ESEMPIO: collega il bottone ai tuoi esercizi ==========
document.getElementById('myButton').addEventListener('click', async () => {
  const value = document.getElementById('numeroInput')?.value;
  const numero = value !== '' ? Number(value) : null;

  // Mostra caricamento
  showLoading('Esecuzione esercizi con Promise…');

  // Qui metti la TUA logica. Per demo te ne mostro 4,
  // allineati agli esercizi dell’immagine.

  // 1) Dopo 1s -> "Operazione terminata"
  await new Promise(res => setTimeout(res, 1000));
  showMessage('Operazione terminata');

  // 2) Dopo 2s -> numero casuale con .then
  await new Promise(res => setTimeout(res, 2000))
    .then(() => {
      const n = Math.floor(Math.random() * 100);
      showMessage(`Numero casuale: ${n}`);
    });

  // 3) Dopo 2s: resolve(true) se numero > 0 altrimenti reject
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      const n = typeof numero === 'number' && !Number.isNaN(numero) ? numero : 0;
      n > 0 ? resolve(true) : reject(new Error('Il numero non è positivo'));
    }, 2000);
  })
  .then(() => showMessage('Numero positivo: true ✅', 'ok'))
  .catch(err => showMessage(err.message, 'err'));

  // 4) Simula caricamento dati 3s
  showLoading('Caricamento dati…');
  await new Promise(res => setTimeout(res, 3000));
  showMessage('Caricamento completato ✅');
});
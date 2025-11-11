const ctx = document.getElementById('grafico').getContext('2d');

const categorie = ['Categoria A', 'Categoria B', 'Categoria C', 'Categoria D', 'Categoria E', 'Categoria F', 'Categoria G', 'Categoria H'];
const valori = [45, 12, 78, 34, 56, 23, 67, 89];
let crescente = true;

const data = {
  labels: categorie,
  datasets: [{
    label: 'Valori',
    data: valori,
    backgroundColor: 'rgba(54, 162, 235, 0.5)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1
  }]
};

const options = {
  indexAxis: 'y', // barre orizzontali
  responsive: true,
  scales: {
    x: {
      beginAtZero: true,
      title: {
        display: true,
        text: 'Valore'
      }
    },
    y: {
      title: {
        display: true,
        text: 'Categoria'
      },
      ticks: {
        autoSkip: false
      }
    }
  },
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      enabled: true
    }
  }
};

const chart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: options
});

// Pulsante per ordinare
document.getElementById('ordina').addEventListener('click', () => {
  const combinati = data.labels.map((label, i) => ({
    label: label,
    valore: data.datasets[0].data[i]
  }));

  combinati.sort((a, b) => crescente ? a.valore - b.valore : b.valore - a.valore);

  data.labels = combinati.map(el => el.label);
  data.datasets[0].data = combinati.map(el => el.valore);

  chart.update();
  crescente = !crescente;
});

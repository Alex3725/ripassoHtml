const ctx = document.getElementById('grafico').getContext('2d');

const data = {
  labels: ['Ita', 'Sto', 'Ing', 'Mat', 'Inf', 'Tps', 'Ser', 'TLC', 'SMS'],
  datasets: [{
    label: 'Voto',
    data: [9, 8, 4, 10, 4, 3, 6, 7, 2],
    backgroundColor: ['rgba(75, 192, 192, 0.5)','rgba(12, 30, 112, 0.5)','rgba(59, 12, 112, 0.5)','rgba(95, 12, 112, 0.5)','rgba(112, 12, 107, 0.5)','rgba(112, 12, 50, 0.5)','rgba(112, 12, 29, 0.5)','rgba(112, 12, 12, 0.5)','rgba(112, 69, 12, 0.5)'],
    borderColor: 'rgba(75, 192, 192, 1)',
    borderWidth: 1,
    tension: 0.3,
    pointRadius: 3
  }]
};

new Chart(ctx, {
  type: 'bar',
  data: data,
  options: {
    responsive: true,
    plugins : {
        title : { display: true, text: "Voti di ale"},
        legend : { position : 'bottom'}//sposta la legenda
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

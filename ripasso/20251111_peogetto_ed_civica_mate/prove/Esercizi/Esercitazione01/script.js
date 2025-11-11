const ctx = document.getElementById('grafico').getContext('2d');

const data = {
  labels: ['Lun', 'Mar', 'Mer', 'Gio', 'Ven', 'Sab', 'Dom'],
  datasets: [
{
      label: 'Massima',
      data: [22, 24, 26, 25, 27, 28, 23],
      tension: 0.3,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    },
    {
      label: 'Media',
      data: [Media(22,12), Media(24,14), Media(26,13), Media(25,15), Media(27,14), Media(28,16) ,Media(23,13)],
      tension: 0.3,
      backgroundColor: 'rgba(32, 114, 0, 0.5)',
      borderColor: 'rgba(57, 114, 52, 1)',
      borderWidth: 1
    },
    {
      label: 'Minima',
      data: [12, 14, 13, 15, 14, 16, 13],
      tension: 0.3,
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }
]
};

new Chart(ctx, {
  type: 'line',
  data: data,
  options: {
    responsive: true,
    plugins : {
        title : { display: true, text: "Temperatura"},
        legend : { position : 'bottom'}//sposta la legenda
    },
    scales: {
      y: { 
        beginAtZero: false, 
        ticks: { 
          callback: v => v + '°C' 
        }, 

      title: {
      display: true,
      text: '°C' }
      },

    x: { 
      title: { 
      display: true, 
      text: 'Mese' 
      }
    }
    }
  }
});

function Media(a,b) {
  let somma = a + b;
  return somma /2;
}
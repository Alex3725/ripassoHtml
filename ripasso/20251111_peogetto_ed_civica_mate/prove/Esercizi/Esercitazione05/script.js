const ctx = document.getElementById('grafico').getContext('2d');

const data = {
  labels: ['Gen', 'Feb', 'Mar', 'Apr', 'Mag', 'Giu', 'Lug', 'Ago', 'Set', 'Ott', 'Nov', 'Dic'],
  datasets: [
{
      label: 'Prodotto 1',
      data: [22, 24, 26, 25, 27, 28, 23, 15, 14,14, 13, 15,],
      tension: 0.3,
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderWidth: 1
    },
    
    
    {
      label: 'Prodotto 2',
      data: [12, 14, 13, 15, 14, 16, 13, 27, 28,25, 27, 28,],
      tension: 0.3,
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }
]
};



const options = {
    responsive: true,
    plugins : {
        
      tooltip: {
                  enabled: true
        },
        legend: {
            position: 'top'
        }

    },
    scales: {
      y: { 
        beginAtZero: false, 
        ticks: { 
          callback: v => v + '$' 
        }, 

      title: {
      display: true,
      text: '$' }
      },

    x: { 
      title: { 
      display: true, 
      text: 'Mese' 
      }
    }
    }
  };

  new Chart(ctx, {
  type: 'bar',
  data: data,
  options: options
});

function Media(a,b) {
  let somma = a + b;
  return somma /2;
}
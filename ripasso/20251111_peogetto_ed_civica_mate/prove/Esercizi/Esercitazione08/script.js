
const ctx1 = document.getElementById('grafico1').getContext('2d');

let X1 = [];
let NUM1 = [];
let DEN1 = [];

for (let x = 0; x <= 10; x += 0.25) {
  X1.push(x.toFixed(1));
  NUM1.push(Math.pow(2, x).toFixed(2));
  DEN1.push(Math.pow(x, 8).toFixed(2));
}

new Chart(ctx1, {
  type: 'line',
  data: {
    labels: X1,
    datasets: [
      {
        label: 'Numeratore: 2^x',
        data: NUM1,
        borderColor: 'red',
        tension: 0.3
      },
      {
        label: 'Denominatore: x^8',
        data: DEN1,
        borderColor: 'blue',
        tension: 0.3
      }
    ]
  },
  options: {
    scales: {
      y: {
        min: 0,
        max: 2000,   // limite asse Y
        ticks: { callback: v => Math.round(v) }
      }
    }
  }
});


const ctx2 = document.getElementById('grafico2').getContext('2d');

let X2 = [];
let NUM2 = [];
let DEN2 = [];

for (let x = 0; x <= 10; x += 0.25) {
  X2.push(x.toFixed(1));
  NUM2.push(Math.exp(x).toFixed(2));
  DEN2.push(Math.pow(x, 3).toFixed(2));
}

new Chart(ctx2, {
  type: 'line',
  data: {
    labels: X2,
    datasets: [
      {
        label: 'Numeratore: e^x',
        data: NUM2,
        borderColor: 'green',
        tension: 0.3
      },
      {
        label: 'Denominatore: x^3',
        data: DEN2,
        borderColor: 'purple',
        tension: 0.3
      }
    ]
  },
  options: {
    scales: {
      y: {
        min: 0,
        max: 2000,   // limite asse Y
        ticks: { callback: v => Math.round(v) }
      }
    }
  }
});
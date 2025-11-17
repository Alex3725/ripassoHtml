// --- DATI ---
const labels = ["Prod A", "Prod B", "Prod C", "Servizi"];

const data2024 = [120, 80, 45, 55];
const data2025 = [150, 60, 70, 40];

const colors = ["#3b82f6", "#ef4444", "#f59e0b", "#10b981"];


// Funzione che somma gli elementi
function getTotal(arr) {
  return arr.reduce((a, b) => a + b, 0);
}


// Funzione che crea un doughnut
function createDoughnut(canvasId, legendId, centerId, labels, values, colors) {

  const canvas = document.getElementById(canvasId);
  const total = getTotal(values);

  // --- DOUGHNUT ---
  const chart = new Chart(canvas, {
    type: "doughnut",
    data: {
      labels: labels,
      datasets: [{
        data: values,
        backgroundColor: colors,
        borderColor: "white",
        borderWidth: 2
      }]
    },
    options: {
      cutout: "65%", // spessore
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => {
              const value = ctx.parsed;
              const percent = (value / total * 100).toFixed(1);
              return `${ctx.label}: ${value} (${percent}%)`;
            }
          }
        }
      }
    }
  });

  // --- TESTO AL CENTRO ---
  document.querySelector(`#${centerId} .total`).textContent = total;

  // --- LEGENDA PERSONALIZZATA ---
  const legendBox = document.getElementById(legendId);
  legendBox.innerHTML = "";

  labels.forEach((label, i) => {
    const item = document.createElement("div");
    item.className = "item";

    item.innerHTML = `
      <div class="color-box" style="background:${colors[i]}"></div>
      ${label}: ${values[i]} (${((values[i] / total) * 100).toFixed(1)}%)
    `;

    legendBox.appendChild(item);
  });
}


// --- CREAZIONE DEI DUE GRAFICI ---
createDoughnut("chart2024", "legend2024", "center2024", labels, data2024, colors, 2024);

createDoughnut("chart2025", "legend2025", "center2025", labels, data2025, colors, 2025);

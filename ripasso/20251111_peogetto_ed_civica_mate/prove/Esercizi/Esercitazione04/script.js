const ctx = document.getElementById('grafico');

const data = {
    labels: [
        'JavaScript',
        'HTML/CSS',
        'React',
        'Node.js',
        'Database',
        'UI/UX Design'
    ],
    datasets: [{
        label: 'Competenze Studente A',
        data: [8, 7, 6, 5, 4, 3],
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)'
    }, {
        label: 'Competenze Studente B',
        data: [4, 6, 8, 7, 5, 6],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)'
    }]
};

const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
        title: {
            display: true,
            text: 'Confronto Competenze Sviluppatori',
            font: {
                size: 16,
                weight: 'bold'
            },
            padding: {
                bottom: 20
            }
        },
        legend: {
            position: 'top',
            labels: {
                font: {
                    size: 12
                },
                padding: 15
            }
        },
        tooltip: {
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            titleFont: {
                size: 13
            },
            bodyFont: {
                size: 12
            }
        }
    },
    scales: {
        r: {
            angleLines: {
                display: true,
                color: 'rgba(0, 0, 0, 0.1)'
            },
            suggestedMin: 0,
            suggestedMax: 10,
            ticks: {
                stepSize: 2,
                backdropColor: 'transparent'
            },
            grid: {
                color: 'rgba(0, 0, 0, 0.1)'
            },
            pointLabels: {
                font: {
                    size: 11,
                    weight: 'bold'
                },
                color: '#333'
            }
        }
    },
    elements: {
        line: {
            borderWidth: 2,
            tension: 0.1
        },
        point: {
            radius: 4,
            hoverRadius: 6
        }
    }
};

const myChart = new Chart(ctx, {
    type: 'radar',
    data: data,
    options: options
});

function cambiaTipo(tipo) {
    myChart.destroy();
    new Chart(ctx, {
        type: tipo,
        data: data,
        options: options
    });
}
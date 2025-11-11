const ctx = document.getElementById('grafico');

const data = {
    labels: ['Apple', 'Samsung', 'Xiaomi', 'Huawei', 'Altri'],
    datasets: [{
        label: 'Quote di mercato (%)',
        data: [25, 20, 15, 10, 30],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#4BC0C0', 
            '#9966FF'  
        ],
        borderColor: '#fff',
        borderWidth: 2,
        hoverOffset: 15
    }]
};

const options = {
    responsive: true,
    maintainAspectRatio: true,
    plugins: {
        legend: {
            position: 'top',
            labels: {
                font: {
                    size: 14
                },
                padding: 20
            }
        },
        title: {
            display: true,
            text: 'Distribuzione quote di mercato smartphone 2024',
            font: {
                size: 16
            },
            padding: {
                top: 10,
                bottom: 30
            }
        },

    }
};

const myChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
});


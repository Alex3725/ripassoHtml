const colors = {
    blue: '#64b5f6',
    red: '#ef5350',
    green: '#66bb6a',
    orange: '#ffb74d',
    gray: '#90a4ae',
    lightgray: '#424242'
};

Chart.defaults.font.family = "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif";
Chart.defaults.font.size = 11;
Chart.defaults.color = '#e0e0e0';

const commonBarOptions = {
    responsive: true,
    scales: {
        y: { beginAtZero: true, grid: { color: '#404040' }, ticks: { color: '#e0e0e0' } },
        x: { grid: { display: false }, ticks: { color: '#e0e0e0' } }
    },
    plugins: { legend: { display: false } }
};

const commonPieOptions = {
    responsive: true,
    plugins: {
        legend: {
            position: 'bottom',
            labels: { usePointStyle: true }
        }
    }
};

new Chart(document.getElementById('knowledgeChart'), {
    type: 'doughnut',
    data: {
        labels: ['Conoscono (15)', 'Non conoscono (8)'],
        datasets: [{ data: [15, 8], backgroundColor: [colors.red, colors.green], borderWidth: 1, borderColor: '#2d2d2d' }]
    },
    options: commonPieOptions
});

new Chart(document.getElementById('frequencyChart'), {
    type: 'bar',
    data: {
        labels: ['Spesso', 'Una volta/Non sanno'],
        datasets: [{ data: [12, 3], backgroundColor: [colors.red, colors.orange], borderWidth: 0 }]
    },
    options: { ...commonBarOptions, scales: { ...commonBarOptions.scales, y: { ...commonBarOptions.scales.y, max: 15 } } }
});

new Chart(document.getElementById('friendshipChart'), {
    type: 'pie',
    data: {
        labels: ['Erano amici (5)', 'Non erano amici (10)'],
        datasets: [{ data: [5, 10], backgroundColor: [colors.blue, colors.gray], borderWidth: 1, borderColor: '#2d2d2d' }]
    },
    options: commonPieOptions
});

new Chart(document.getElementById('showStrengthChart'), {
    type: 'bar',
    data: {
        labels: ['Tutti d\'accordo'],
        datasets: [{ data: [23], backgroundColor: [colors.blue], borderWidth: 0 }]
    },
    options: { ...commonBarOptions, scales: { ...commonBarOptions.scales, y: { ...commonBarOptions.scales.y, max: 25 } } }
});

new Chart(document.getElementById('defenseChart'), {
    type: 'bar',
    data: {
        labels: ['Lo pensano', 'Non la pensano così'],
        datasets: [{ data: [8, 15], backgroundColor: [colors.orange, colors.green], borderWidth: 0 }]
    },
    options: { ...commonBarOptions, scales: { ...commonBarOptions.scales, y: { ...commonBarOptions.scales.y, max: 20 } } }
});

new Chart(document.getElementById('deterrentChart'), {
    type: 'bar',
    data: {
        labels: ['Non conoscono\nla parola', 'D\'accordo', 'Non d\'accordo'],
        datasets: [{ data: [5, 9, 9], backgroundColor: [colors.lightgray, colors.green, colors.red], borderWidth: 0 }]
    },
    options: { ...commonBarOptions, scales: { ...commonBarOptions.scales, y: { ...commonBarOptions.scales.y, max: 12 } } }
});

new Chart(document.getElementById('ethnicGroupsChart'), {
    type: 'doughnut',
    data: {
        labels: ['D\'accordo (17)', 'Non completamente d\'accordo (6)'],
        datasets: [{ data: [17, 6], backgroundColor: [colors.red, colors.blue], borderWidth: 1, borderColor: '#2d2d2d' }]
    },
    options: commonPieOptions
});

new Chart(document.getElementById('justifiedChart'), {
    type: 'pie',
    data: {
        labels: ['Non sempre sbagliato (4)', 'Sempre sbagliato (19)'],
        datasets: [{ data: [4, 19], backgroundColor: [colors.orange, colors.green], borderWidth: 1, borderColor: '#2d2d2d' }]
    },
    options: commonPieOptions
});
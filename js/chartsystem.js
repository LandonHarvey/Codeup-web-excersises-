

var ctx = document.getElementById('myBudget').getContext('2d');
var chart = new Chart(ctx, {
    // The type of chart we want to create
    type: 'pie',

    // The data for our dataset
    data: {
        labels: ["Rent", "Loans", "Groceries", "Entertainment", "Insurance", "Misc"],
        datasets: [{
            label: "My First Budget",
            borderColor: 'rgb(255, 99, 132)',
            data: [45.234, 10, 5, 2, 20, 30],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)'
            ]
        }]
    },

    // Configuration options go here
    options: {
        legend: {
            position: 'bottom'
        }
    }
});


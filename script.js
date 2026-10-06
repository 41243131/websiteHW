const ctx = document.getElementById('myChart');

Chart.register(ChartDataLabels);

new Chart(ctx, {
  type: 'pie',

  data: {
    labels: ['=LOVE', '≠ME', '≒JOY'],

    datasets: [{
      data: [45, 35, 20]
    }]
  },

  options: {
    responsive: true,

    plugins: {
      legend: {
        position: 'top'
      },

      datalabels: {
        color: '#ffffff',

        font: {
          size: 18,
          weight: 'bold'
        },

        formatter: function(value) {
          return value + '%';
        }
      }
    }
  }
});
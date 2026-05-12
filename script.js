document.addEventListener("DOMContentLoaded", function () {

  const commonOptions = {

    responsive: true,

    plugins: {

      legend: {
        display: false
      },

      tooltip: {
        callbacks: {
          label: function (context) {
            return context.raw + "% cancelaciones";
          }
        }
      }
    },

    scales: {

      y: {

        beginAtZero: true,

        ticks: {
          callback: function (value) {
            return value + "%";
          }
        }
      }
    }
  };

  new Chart(document.getElementById("hotelChart"), {

    type: "bar",

    data: {

      labels: ["City Hotel", "Resort Hotel"],

      datasets: [{

        data: [41.7, 27.8],

        backgroundColor: [
          "#dc2626",
          "#2563eb"
        ]

      }]
    },

    options: commonOptions
  });

  new Chart(document.getElementById("leadChart"), {

    type: "line",

    data: {

      labels: [
        "0-7 días",
        "8-30 días",
        "31-90 días",
        "91-180 días",
        "181-365 días",
        ">365 días"
      ],

      datasets: [{

        data: [
          9.6,
          27.9,
          37.7,
          44.7,
          55.5,
          67.7
        ],

        borderColor: "#dc2626",

        backgroundColor: "#fecaca",

        fill: true,

        tension: 0.3,

        pointRadius: 5

      }]
    },

    options: commonOptions
  });

  new Chart(document.getElementById("channelChart"), {

    type: "bar",

    data: {

      labels: [
        "TA/TO",
        "Corporate",
        "GDS",
        "Direct"
      ],

      datasets: [{

        data: [
          41.0,
          22.1,
          19.2,
          17.5
        ],

        backgroundColor: [
          "#dc2626",
          "#64748b",
          "#64748b",
          "#2563eb"
        ]

      }]
    },

    options: commonOptions
  });

  new Chart(document.getElementById("customerChart"), {

    type: "bar",

    data: {

      labels: [
        "Transient",
        "Contract",
        "Transient-Party",
        "Group"
      ],

      datasets: [{

        data: [
          40.7,
          31.0,
          25.4,
          10.2
        ],

        backgroundColor: [
          "#dc2626",
          "#f97316",
          "#64748b",
          "#2563eb"
        ]

      }]
    },

    options: commonOptions
  });

});
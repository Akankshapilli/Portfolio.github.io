const tskills = document.getElementById("tskills");
const pskills = document.getElementById("pskills");
Chart.defaults.color = "#7afa4f";
Chart.defaults.borderColor = "#7afa4f";

new Chart(tskills, {
  type: "doughnut",
  data: {
    labels: ["HTML", "CSS", "DBMS", "JavaScript", "Python"],
    datasets: [
      {
        label: "My Level",
        data: [400, 300, 200, 50, 50],
        backgroundColor: [
          "#0d0d0d",
          "#0d0d0d",
          "#0d0d0d",
          "#0d0d0d",
          "#0d0d0d",
        ],
        hoverBackgroundColor: "#7afa4f",
        borderColor: "#7afa4f",
      },
    ],
  },
  options: {
    responsive: true,
  },
});

new Chart(pskills, {
  type: "doughnut",
  data: {
    labels: ["Creativity", "Communication", "Teamwork", "Critisism"],
    datasets: [
      {
        label: "My Level",
        data: [200, 200, 500, 100],
        backgroundColor: ["#0d0d0d", "#0d0d0d", "#0d0d0d", "#0d0d0d"],
        hoverBackgroundColor: "#7afa4f",
        borderColor: "#7afa4f",
      },
    ],
  },
  options: {
    responsive: true,
  },
});

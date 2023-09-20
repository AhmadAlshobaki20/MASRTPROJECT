document.addEventListener("DOMContentLoaded", function () {
  "use strict";

  function createGradient(ctx, color1, color2) {
    var gradient = ctx.createLinearGradient(0, 0, 0, 250);
    gradient.addColorStop(0, color1);
    gradient.addColorStop(1, color2);
    return gradient;
  }

  function createChart(ctx, type, data, options) {
    return new Chart(ctx, { type: type, data: data, options: options });
  }

  var chartBar1Ctx = document.getElementById("chartBar1").getContext("2d");
  var chartBar1 = createChart(chartBar1Ctx, "bar", {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      { label: "Sales", data: [24, 10, 32, 24, 26, 20], backgroundColor: "#664dc9" },
    ],
  }, {
    maintainAspectRatio: false,
    responsive: true,
    legend: { display: false },
    scales: {
      y: { beginAtZero: true, fontSize: 10, max: 80 },
      x: { barPercentage: 0.6, ticks: { beginAtZero: true, fontSize: 11 } },
    },
  });

  var chartBar2Ctx = document.getElementById("chartBar2").getContext("2d");
  var chartBar2 = createChart(chartBar2Ctx, "bar", {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      { label: "Sales", data: [14, 12, 34, 25, 24, 20], backgroundColor: "#44c4fa" },
    ],
  }, {
    maintainAspectRatio: false,
    responsive: true,
    legend: { display: false },
    scales: {
      y: { beginAtZero: true, fontSize: 10, max: 80 },
      x: { barPercentage: 0.6, ticks: { beginAtZero: true, fontSize: 11 } },
    },
  });

  var chartBar3Ctx = document.getElementById("chartBar3").getContext("2d");
  var chartBar3 = createChart(chartBar3Ctx, "bar", {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      { label: "Sales", data: [14, 12, 34, 25, 24, 20], backgroundColor: createGradient(chartBar3Ctx, "#44c4fa", "#664dc9") },
    ],
  }, {
    maintainAspectRatio: false,
    responsive: true,
    legend: { display: false },
    scales: {
      y: { beginAtZero: true, fontSize: 10, max: 80 },
      x: { barPercentage: 0.6, ticks: { beginAtZero: true, fontSize: 11 } },
    },
  });

  var chartBar4Ctx = document.getElementById("chartBar4").getContext("2d");
  var chartBar4 = createChart(chartBar4Ctx, "bar", {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      { label: "Sales", data: [14, 12, 34, 25, 24, 20], backgroundColor: ["#664dc9", "#44c4fa", "#38cb89", "#3e80eb", "#ffab00", "#ef4b4b"] },
    ],
  }, {
    indexAxis: "y",
    maintainAspectRatio: false,
    legend: { display: false },
    scales: {
      y: { beginAtZero: true, fontSize: 10 },
      x: { beginAtZero: true, fontSize: 11, max: 80 },
    },
  });

  var chartBar5Ctx = document.getElementById("chartBar5").getContext("2d");
  var chartBar5 = createChart(chartBar5Ctx, "bar", {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      { data: [14, 12, 34, 25, 24, 20], backgroundColor: ["#664dc9", "#38cb89", "#116e7c", "#ffab00", "#ef4b4b"] },
      { data: [22, 30, 25, 30, 20, 40], backgroundColor: "#44c4fa" },
    ],
  }, {
    indexAxis: "y",
    maintainAspectRatio: false,
    legend: { display: false },
    scales: {
      y: { beginAtZero: true, fontSize: 11 },
      x: { beginAtZero: true, fontSize: 11, max: 80 },
    },
  });

  var chartStacked1Ctx = document.getElementById("chartStacked1").getContext("2d");
  var chartStacked1 = createChart(chartStacked1Ctx, "bar", {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      { data: [14, 12, 34, 25, 24, 20], backgroundColor: "#664dc9", borderWidth: 1, fill: true },
      { data: [14, 12, 34, 25, 24, 20], backgroundColor: "#44c4fa", borderWidth: 1, fill: true },
    ],
  }, {
    maintainAspectRatio: false,
    legend: { display: false },
    scales: {
      y: { stacked: true, beginAtZero: true, fontSize: 11 },
      x: { barPercentage: 0.5, stacked: true, ticks: { fontSize: 11 } },
    },
  });

  var chartStacked2Ctx = document.getElementById("chartStacked2").getContext("2d");
  var chartStacked2 = createChart(chartStacked2Ctx, "bar", {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      { data: [14, 12, 34, 25, 24, 20], backgroundColor: "#664dc9", borderWidth: 1, fill: true },
      { data: [14, 12, 34, 25, 24, 20], backgroundColor: "#44c4fa", borderWidth: 1, fill: true },
    ],
  }, {
    indexAxis: "y",
    maintainAspectRatio: false,
    legend: { display: false },
    scales: {
      y: { stacked: true, beginAtZero: true, fontSize: 10, max: 80 },
      x: { stacked: true, ticks: { beginAtZero: true, fontSize: 11 } },
    },
  });

  var chartLine1Ctx = document.getElementById("chartLine1").getContext("2d");
  var chartLine1 = createChart(chartLine1Ctx, "line", {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      { data: [14, 12, 34, 25, 44, 36, 35, 25, 30, 32, 20, 25], borderColor: "#664dc9", borderWidth: 1, fill: false },
      { data: [35, 30, 45, 35, 55, 40, 10, 20, 25, 55, 50, 45], borderColor: "#44c4fa", borderWidth: 1, fill: false },
    ],
  }, {
    maintainAspectRatio: false,
    legend: { display: false },
    scales: {
      y: { beginAtZero: true, fontSize: 10, max: 80 },
      x: { beginAtZero: true, fontSize: 11 },
    },
  });

  var chartArea1Ctx = document.getElementById("chartArea1").getContext("2d");
  var chartArea1Gradient1 = createGradient(chartArea1Ctx, "rgba(102, 77, 201,0)", "rgba(102, 77, 201,.5)");
  var chartArea1Gradient2 = createGradient(chartArea1Ctx, "rgba(91, 115, 232,0)", "rgba(91, 115, 232,.5)");
  var chartArea1 = createChart(chartArea1Ctx, "line", {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      { data: [14, 12, 34, 25, 44, 36, 35, 25, 30, 32, 20, 25], borderColor: "#664dc9", borderWidth: 1, backgroundColor: chartArea1Gradient1 },
      { data: [35, 30, 45, 35, 55, 40, 10, 20, 25, 55, 50, 45], borderColor: "#44c4fa", borderWidth: 1, backgroundColor: chartArea1Gradient2 },
    ],
  }, {
    maintainAspectRatio: false,
    legend: { display: false },
    scales: {
      y: { beginAtZero: true, fontSize: 10, max: 80 },
      x: { beginAtZero: true, fontSize: 11 },
    },
  });

  var chartPieCtx = document.getElementById("chartPie").getContext("2d");
  var datapie = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [{ data: [35, 20, 8, 15, 24], backgroundColor: ["#664dc9", "#44c4fa", "#38cb89", "#3e80eb", "#ffab00"] }],
  };
  var optionpie = {
    maintainAspectRatio: false,
    responsive: true,
    legend: { display: false },
    animation: { animateScale: true, animateRotate: true },
  };
  var chartPie = createChart(chartPieCtx, "doughnut", datapie, optionpie);

  var chartDonutCtx = document.getElementById("chartDonut").getContext("2d");
  var chartDonut = createChart(chartDonutCtx, "pie", datapie, optionpie);
});

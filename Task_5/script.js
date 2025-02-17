function generatePoints(func, start, end, steps) {
  const points = [];
  const step = (end - start) / steps;
  for (let x = start; x <= end; x += step) {
    points.push({ x: x, y: func(x) });
  }
  return points;
}

function euclideanDistance(f, g, a, b) {
  const steps = 1000;
  const dx = (b - a) / steps;
  let sum = 0;

  for (let i = 0; i < steps; i++) {
    const x = a + i * dx;
    const diff = f(x) - g(x);
    sum += diff * diff * dx;
  }

  return Math.sqrt(sum);
}

function manhattanDistance(f, g, a, b) {
  const steps = 1000;
  const dx = (b - a) / steps;
  let sum = 0;

  for (let i = 0; i < steps; i++) {
    const x = a + i * dx;
    sum += Math.abs(f(x) - g(x)) * dx;
  }

  return sum;
}

function chebyshevDistance(f, g, a, b) {
  const steps = 1000;
  const dx = (b - a) / steps;
  let max = 0;

  for (let i = 0; i < steps; i++) {
    const x = a + i * dx;
    const diff = Math.abs(f(x) - g(x));
    if (diff > max) max = diff;
  }

  return max;
}

window.onload = function () {
  // Define our functions
  const f = (x) => x;
  const g = (x) => -x;

  // Calculate distances
  const euclidean = euclideanDistance(f, g, 0, 1);
  const manhattan = manhattanDistance(f, g, 0, 1);
  const chebyshev = chebyshevDistance(f, g, 0, 1);

  // Display results
  document.getElementById("euclidean").textContent = euclidean.toFixed(4);
  document.getElementById("manhattan").textContent = manhattan.toFixed(4);
  document.getElementById("chebyshev").textContent = chebyshev.toFixed(4);

  // Generate points for plotting
  const pointsF = generatePoints(f, 0, 1, 100);
  const pointsG = generatePoints(g, 0, 1, 100);

  // Create graph
  const ctx = document.getElementById("functionGraph").getContext("2d");
  new Chart(ctx, {
    type: "line",
    data: {
      datasets: [
        {
          label: "f(x) = x",
          data: pointsF,
          borderColor: "#2196F3",
          borderWidth: 2,
          fill: false,
        },
        {
          label: "g(x) = -x",
          data: pointsG,
          borderColor: "#F44336",
          borderWidth: 2,
          fill: false,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        x: {
          type: "linear",
          position: "center",
          title: {
            display: true,
            text: "x",
          },
        },
        y: {
          type: "linear",
          position: "center",
          title: {
            display: true,
            text: "y",
          },
        },
      },
    },
  });
};

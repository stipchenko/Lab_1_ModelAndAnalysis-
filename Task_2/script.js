function calculateDistances() {
  // Get input values
  const v1 = {
    x: parseFloat(document.getElementById("v1x").value),
    y: parseFloat(document.getElementById("v1y").value),
    z: parseFloat(document.getElementById("v1z").value),
  };

  const v2 = {
    x: parseFloat(document.getElementById("v2x").value),
    y: parseFloat(document.getElementById("v2y").value),
    z: parseFloat(document.getElementById("v2z").value),
  };

  // Calculate Euclidean distance
  const euclidean = Math.sqrt(
    Math.pow(v2.x - v1.x, 2) +
      Math.pow(v2.y - v1.y, 2) +
      Math.pow(v2.z - v1.z, 2)
  );

  // Calculate Manhattan distance
  const manhattan =
    Math.abs(v2.x - v1.x) + Math.abs(v2.y - v1.y) + Math.abs(v2.z - v1.z);

  // Calculate Chebyshev distance
  const chebyshev = Math.max(
    Math.abs(v2.x - v1.x),
    Math.abs(v2.y - v1.y),
    Math.abs(v2.z - v1.z)
  );

  // Display results
  document.getElementById(
    "euclidean"
  ).innerHTML = `<strong>Euclidean Distance:</strong> ${euclidean.toFixed(4)}`;
  document.getElementById(
    "manhattan"
  ).innerHTML = `<strong>Manhattan Distance:</strong> ${manhattan.toFixed(4)}`;
  document.getElementById(
    "chebyshev"
  ).innerHTML = `<strong>Chebyshev Distance:</strong> ${chebyshev.toFixed(4)}`;
}

function clearInputs() {
  const inputs = document.querySelectorAll("input");
  inputs.forEach((input) => (input.value = "0"));
  document.getElementById("euclidean").innerHTML = "";
  document.getElementById("manhattan").innerHTML = "";
  document.getElementById("chebyshev").innerHTML = "";
}

// Calculate initial values
calculateDistances();

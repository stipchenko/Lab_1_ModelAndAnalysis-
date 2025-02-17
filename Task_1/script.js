function calculateInteger() {
  const x = -3;
  const y = 4;
  const distance = Math.abs(x - y);
  document.getElementById(
    "integerResult"
  ).innerHTML = `Distance = |${x} - ${y}| = ${distance}`;
}

function calculateFraction() {
  const x = -8 / 5; // -1.6
  const y = -2 / 6; // -0.333...

  const decimalDist = Math.abs(x - y);

  document.getElementById(
    "fractionResult"
  ).innerHTML = `Distance = |-8/5 - (-2/6)| = |${x.toFixed(3)} - ${y.toFixed(
    3
  )}| = ${decimalDist.toFixed(3)} ≈ 1 7/30`;
}

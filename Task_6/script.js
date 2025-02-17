function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

function calculateDistance(counts) {
  const expected = 2;
  let distance = 0;

  for (let count of counts) {
    const diff = count - expected;
    distance += (diff * diff) / expected;
  }

  return distance;
}

document.getElementById("rollButton").addEventListener("click", function () {
  const counts = Array(6).fill(0);

  for (let i = 0; i < 12; i++) {
    const result = rollDice();
    counts[result - 1]++;
  }

  for (let i = 0; i < 6; i++) {
    document.getElementById(`face${i + 1}`).textContent = counts[i];
  }

  const distance = calculateDistance(counts);
  document.getElementById("distance").textContent = distance.toFixed(2);
});

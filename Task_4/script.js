function calculateDistance() {
  const word1 = document.getElementById("word1").value;
  const word2 = document.getElementById("word2").value;

  if (word1.length !== word2.length) {
    document.getElementById("result").innerHTML =
      "Error: Words must be of equal length!";
    return;
  }

  let distance = 0;
  for (let i = 0; i < word1.length; i++) {
    if (word1[i] !== word2[i]) {
      distance++;
    }
  }

  document.getElementById("result").innerHTML = `Distance: ${distance}`;
}

window.onload = calculateDistance;

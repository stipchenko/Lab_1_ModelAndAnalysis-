class HammingCalculator {
  constructor() {
    this.seq1Input = document.getElementById("seq1");
    this.seq2Input = document.getElementById("seq2");
    this.errorElement = document.getElementById("error");
    this.comparisonElement = document.getElementById("comparison");
    this.resultElement = document.getElementById("result");
    this.display1 = document.getElementById("display1");
    this.display2 = document.getElementById("display2");

    // Add input listeners
    this.seq1Input.addEventListener("input", () =>
      this.validateInput(this.seq1Input, this.display1)
    );
    this.seq2Input.addEventListener("input", () =>
      this.validateInput(this.seq2Input, this.display2)
    );
  }

  validateInput(inputElement, displayElement) {
    const value = inputElement.value;
    if (!/^[01]*$/.test(value)) {
      displayElement.textContent = "Only 0s and 1s allowed";
      displayElement.style.color = "var(--accent-color)";
      return false;
    }
    displayElement.textContent = "";
    return true;
  }

  calculate() {
    // Clear previous results
    this.errorElement.textContent = "";
    this.comparisonElement.innerHTML = "";
    this.resultElement.textContent = "";

    const seq1 = this.seq1Input.value;
    const seq2 = this.seq2Input.value;

    // Validate inputs
    if (
      !this.validateInput(this.seq1Input, this.display1) ||
      !this.validateInput(this.seq2Input, this.display2)
    ) {
      this.errorElement.textContent = "Please enter valid binary sequences";
      return;
    }

    if (seq1.length !== seq2.length) {
      this.errorElement.textContent = "Sequences must be the same length";
      return;
    }

    // Calculate Hamming distance
    let distance = 0;
    let comparison = "";

    for (let i = 0; i < seq1.length; i++) {
      if (seq1[i] !== seq2[i]) {
        comparison += `<span class="different">${seq1[i]}</span>`;
        distance++;
      } else {
        comparison += seq1[i];
      }
    }

    // Display results
    this.comparisonElement.innerHTML = `
          <div>Sequence 1: ${seq1}</div>
          <div>Sequence 2: ${seq2}</div>
          <div>Differences: ${comparison}</div>
      `;

    this.resultElement.innerHTML = `
          <span>Hamming Distance = ${distance}</span>
      `;

    // Add animation class to result
    this.resultElement.classList.add("animate-result");
    setTimeout(
      () => this.resultElement.classList.remove("animate-result"),
      500
    );
  }

  loadVariant4() {
    this.seq1Input.value = "01101101";
    this.seq2Input.value = "11110010";
    this.calculate();
  }
}

// Initialize calculator
const calculator = new HammingCalculator();

// Global functions for HTML buttons
function calculateDistance() {
  calculator.calculate();
}

function loadVariant() {
  calculator.loadVariant4();
}

// Calculate initial distance
document.addEventListener("DOMContentLoaded", () => {
  calculator.calculate();
});

function showMessage(subject) {
  alert(subject + " section selected. You can add your notes, videos, PDFs, and practice questions here.");
}

function answer(correct) {
  const result = document.getElementById("quiz-result");
  result.textContent = correct
    ? "Correct! The balance sheet reports assets, liabilities, and equity."
    : "Not quite. Try again — think about the statement showing financial position.";
}

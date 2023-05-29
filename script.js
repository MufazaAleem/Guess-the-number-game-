let secretNumber;
let attempts;

function startGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 5;
}

function checkGuess() {
  const guessInput = document.getElementById("guessInput");
  const guess = parseInt(guessInput.value);

  if (isNaN(guess) || guess < 1 || guess > 100) {
    showMessage("Please enter a valid number between 1 and 100");
    return;
  }

  attempts--;

  if (guess === secretNumber) {
    showMessage(`Congratulations! You guessed the number in ${6 - attempts} attempts.`);
    disableInput();
  } else if (attempts === 0) {
    showMessage(`Game Over! The number was ${secretNumber}.`);
    disableInput();
  } else if (guess < secretNumber) {
    showMessage("Too low! Try again.");
  } else {
    showMessage("Too high! Try again.");
  }

  guessInput.value = "";
}

function resetGame() {
  enableInput();
  startGame();
  showMessage("");
  document.getElementById("guessInput").value = "";
}

function showMessage(message) {
  const messageElement = document.getElementById("message");
  messageElement.textContent = message;
}

function disableInput() {
  document.getElementById("guessInput").disabled = true;
  document.querySelector("button").disabled = true;
}

function enableInput() {
  document.getElementById("guessInput").disabled = false;
  document.querySelector("button").disabled = false;
}

startGame();

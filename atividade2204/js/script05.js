let secretNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 0;

function checkGuess() {
    const guessInput = document.getElementById("guess");
    const messageDiv = document.getElementById("message");
    const userGuess = parseInt(guessInput.value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 10) {
        messageDiv.textContent = "Por favor, digite um número entre 1 e 10.";
        messageDiv.style.display = "block";
        messageDiv.classList.remove("alert-success", "alert-info");
        messageDiv.classList.add("alert-danger");
        return;
    }

    attempts++;

    if (userGuess === secretNumber) {
        messageDiv.textContent = `Parabéns! Você acertou em ${attempts} tentativa(s). O número era ${secretNumber}.`;
        messageDiv.style.display = "block";
        messageDiv.classList.remove("alert-danger", "alert-info");
        messageDiv.classList.add("alert-success");
        guessInput.disabled = true; // Desabilita a entrada após acertar
        document.querySelector("button").disabled = true; // Desabilita o botão
    } else if (userGuess < secretNumber) {
        messageDiv.textContent = "O número é maior.";
        messageDiv.style.display = "block";
        messageDiv.classList.remove("alert-success", "alert-danger");
        messageDiv.classList.add("alert-info");
    } else {
        messageDiv.textContent = "O número é menor.";
        messageDiv.style.display = "block";
        messageDiv.classList.remove("alert-success", "alert-danger");
        messageDiv.classList.add("alert-info");
    }

    guessInput.value = ""; // Limpa o campo de entrada após cada tentativa
}
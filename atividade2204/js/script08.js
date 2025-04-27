function validarCPF() {
    let cpfDigitado = document.getElementById("cpf").value;
    let mensagemResultadoElemento = document.getElementById("mensagemResultado");

    // Remover caracteres que não são números (pontos e traço)
    const cpfLimpo = cpfDigitado.replace(/\D/g, '');

    // Verificar se o CPF tem 11 dígitos
    if (cpfLimpo.length !== 11) {
        mensagemResultadoElemento.textContent = "CPF inválido: precisa ter 11 dígitos.";
        return;
    }

    // Verificar se todos os dígitos são iguais (ex: 11111111111)
    if (cpfLimpo.split('').every(digito => digito === cpfLimpo[0])) {
        mensagemResultadoElemento.textContent = "CPF inválido: todos os dígitos são iguais.";
        return;
    }

    // Calcular o primeiro dígito verificador
    let soma = 0;
    for (let i = 0; i < 9; i++) {
        soma += parseInt(cpfLimpo[i]) * (10 - i);
    }
    let resto = (soma * 10) % 11;
    const primeiroDigitoVerificador = (resto === 10 || resto === 11) ? 0 : resto;

    // Verificar o primeiro dígito verificador
    if (parseInt(cpfLimpo[9]) !== primeiroDigitoVerificador) {
        mensagemResultadoElemento.textContent = "CPF inválido: primeiro dígito verificador incorreto.";
        return;
    }

    // Calcular o segundo dígito verificador
    soma = 0;
    for (let i = 0; i < 10; i++) {
        soma += parseInt(cpfLimpo[i]) * (11 - i);
    }
    resto = (soma * 10) % 11;
    const segundoDigitoVerificador = (resto === 10 || resto === 11) ? 0 : resto;

    // Verificar o segundo dígito verificador
    if (parseInt(cpfLimpo[10]) !== segundoDigitoVerificador) {
        mensagemResultadoElemento.textContent = "CPF inválido: segundo dígito verificador incorreto.";
        return;
    }

    mensagemResultadoElemento.textContent = "CPF válido!";
}
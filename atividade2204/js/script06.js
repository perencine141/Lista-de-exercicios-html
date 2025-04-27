function Fatoracao() {
    const numero = parseInt(document.getElementById('numero').value);
    let fator = 1;
    
    for (let i = 1; i <= numero; i++) {
            fator = fator * i;
    }

    document.getElementById('resultado').innerHTML = numero + ' fatorial é ' + fator;
}
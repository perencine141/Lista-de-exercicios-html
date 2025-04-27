function calcularMedia() {
    const n1 = parseFloat(document.getElementById('nota1').value);
    const n2 = parseFloat(document.getElementById('nota2').value);
    const n3 = parseFloat(document.getElementById('nota3').value);
    const media = (n1 + n2 + n3) / 3;
    
    let status = "";
    if (media >= 7) {
        status = "Aprovado";
    } else {
        status = "Reprovado";
    }

    document.getElementById('resultado').innerHTML = 'Media: ' + (media. toFixed(2)) + " - " + status;
}
function converter() {

    const horas = parseFloat(document.getElementById('numero').value);
    
    if (isNaN(horas)) {
        alert("Por favor, digite um número válido de horas.");
        return;
    }
    let minutos = horas * 60;
    let segundos = horas * 3600;

    document.getElementById('resultado').innerHTML = horas + ' horas são: ' + minutos + ' minutos<br>' + horas + ' horas são: ' + segundos + ' segundos';

}
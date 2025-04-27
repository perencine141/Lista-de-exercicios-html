function Idade() {

    const idade = parseFloat(document.getElementById('numero').value);
    
    let status = "";
    if (idade <= 10) {
        status = "Criança";
    } else if (idade <= 17) {
        status = "Adolescente";
    } 
    else if (idade <= 60) {
        status = "Adulto";
    } else {
        status = "Idoso";
    }

    document.getElementById('resultado').innerHTML = 'Você é: ' + status;
}
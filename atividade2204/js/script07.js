function ehPrimo(numero) {
    if (numero <= 1) {
        return false;
    }
    for (let i = 2; i < numero; i++) {
        if (numero % i === 0) {
            return false;
        }
    }
    return true;
}

function encontrarPrimos() {
    let valorInicial = parseInt(document.getElementById("valorInicial").value);
    let valorFinal = parseInt(document.getElementById("valorFinal").value);
    let listaPrimosElemento = document.getElementById("listaPrimos");

    // Limpar a lista anterior, caso haja
    listaPrimosElemento.innerHTML = "";

    if (isNaN(valorInicial) || isNaN(valorFinal)) {
        alert("Por favor, digite valores numéricos válidos.");
        return;
    }

    if (valorInicial > valorFinal) {
        alert("O valor inicial não pode ser maior que o valor final.");
        return;
    }

    for (let i = valorInicial; i <= valorFinal; i++) {
        if (ehPrimo(i)) {
            let novoItemLista = document.createElement("li");
            novoItemLista.textContent = i;
            listaPrimosElemento.appendChild(novoItemLista);
        }
    }

    // Se nenhum primo for encontrado
    if (listaPrimosElemento.innerHTML === "") {
        let novoItemLista = document.createElement("li");
        novoItemLista.textContent = "Nenhum número primo encontrado no intervalo.";
        listaPrimosElemento.appendChild(novoItemLista);
    }
}
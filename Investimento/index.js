function calcular() {
    event.preventDefault(); // corta as funcoes padroes do formulario(recarregar a pagina, submeter o formulario)
    var dinheiroInicial = document.querySelector("input[name='dinheiroInicial']").value;
    var dinheiroInvestidoMensal = Number(document.getElementById("dinheiroInvestidoMensal").value);
    var taxaDeRendimento = Number(document.getElementById("taxaJuros").value);
    var tempoInvestido = Number(document.getElementById("tempoInvestido").value);
    var tempoInicial = 0
    var taxaEmPorcent = taxaDeRendimento / 100;

    while (tempoInicial < tempoInvestido) {
        calcularInvestimento();
        tempoInicial++;
    }
    function calcularInvestimento() {
        var rendimento = (dinheiroInicial * taxaEmPorcent ) + dinheiroInvestidoMensal ;
        dinheiroInicial = rendimento
    }
    var res = document.getElementById("res");
    res.innerHTML = "O valor final do investimento é: " + Number(dinheiroInicial).toFixed(2);
}


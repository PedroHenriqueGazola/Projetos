function transformarBinario(numero) {
    let binario = '';
    while (numero > 0) {
        binario = (numero % 2) + binario;
        numero = Math.floor(numero / 2);
    }
    return binario;
}

console.log(transformarBinario(197));

// function transformarDecimal(numero)
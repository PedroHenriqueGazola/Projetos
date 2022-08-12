function transformarBinario(numero) { // Função que transforma um número decimal em binário, recebe como paramento o numero decimal 
    let binario = ''; // declaração de uma variavel vazia
    while (numero > 0) { // enquanto o numero for maior que 0, faça
        binario = (numero % 2) + binario; // o resto da divisão do numero por 2 é adicionado a variavel binario
        numero = Math.floor(numero / 2); // o  numero decimal e dividido por 2 e arredondado para baixo 
    }
    return binario; // retorna o valor da variavel binario para fora da função, possibilitando a utilização do mesmo em outras funções como o console.log
}

console.log(transformarBinario(19)); // imprime o resultado da função transformarBinario passando o 19 como paramento

function transformarDecimal(numero) { // Função que transforma um número binário em decimal, recebe como paramento o numero binário
    let numDec = 0; // declaração de uma variavel com valor 0
    let expoente = 0; // declaração de uma variavel com valor 0
    while (numero > 0) { // enquanto o numero for maior que 0, faça
        numDec += (numero % 10) * (2 ** expoente); // o resto da divisão do numero por 10  multiplicado por 2 elevado ao expoente é adicionado a variavel numDec
        expoente++; // é adicionar o valor 1 ao expoente, (expoente = expoente + 1)
        numero = Math.floor(numero / 10); // o  numero binário e dividido por 10 e arredondado para baixo
    }
    return numDec; // retorna o valor da variavel numDec para fora da função, possibilitando a utilização do mesmo em outras funções como o console.log
}

console.log(transformarDecimal(10011)); // imprime o resultado da função transformarDecimal passando o 10011 como paramento
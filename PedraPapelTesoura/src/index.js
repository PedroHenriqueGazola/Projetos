function jogar(escolhaUser) {
    res = document.getElementById("res");
    pcPedra = document.getElementById("Pc1");
    pcPapel = document.getElementById("Pc2");
    pcTesoura = document.getElementById("Pc3");

    pcPedra.style.backgroundColor = 'transparent';
    pcPapel.style.backgroundColor = 'transparent';
    pcTesoura.style.backgroundColor = 'transparent';

    ganhador = 0
    // 1 = empate
    // 2 = user
    // 3 = pc
    escolhaPc = Math.floor((Math.random() * (3 + 1 - 1))) + 1

    // 1 - pedra, 2 - papel, 3 - tesoura
    if(escolhaUser == 1 && escolhaPc == 1) {
        ganhador = 1
    } else if( escolhaUser == 1 && escolhaPc == 2) {
        ganhador = 3
    } else if ( escolhaUser == 1 && escolhaPc == 3){
        ganhador = 2
    } else if(escolhaUser == 2 && escolhaPc == 1) {
        ganhador = 2
    } else if( escolhaUser == 2 && escolhaPc == 2) {
        ganhador = 1
    } else if ( escolhaUser == 2 && escolhaPc == 3){
        ganhador = 3
    } else if(escolhaUser == 3 && escolhaPc == 1) {
        ganhador = 3
    } else if( escolhaUser == 3 && escolhaPc == 2) {
        ganhador = 2
    } else if ( escolhaUser == 3 && escolhaPc == 3){
        ganhador = 1
    }
    if(ganhador == 1) {
        res.innerHTML = "Empate"
    } else if(ganhador == 2) {
        res.innerHTML = "Você ganhou"
    }
    else if(ganhador == 3) {
        res.innerHTML = "Você perdeu"
    }

    document.getElementById(`Pc${escolhaPc}`).style.backgroundColor = "#530404"
    

}
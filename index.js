

function ranking(wins, loses) {
    let saldoVitorias = wins - loses
    let nivel

    if (saldoVitorias < 10) {
        nivel = "Ferro"
    }
    else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = "Bronze"
    }
    else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata"
    }
    else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro"
    }
    else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Diamante"
    }
    else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário"
    }
    else {
        nivel = "Imortal"
    }

    return `O Herói tem um saldo de ${saldoVitorias} está no nível de ${nivel}!`;

}

let wins = 200
let loses = 30
const resultado = ranking(wins, loses)
console.log(resultado)
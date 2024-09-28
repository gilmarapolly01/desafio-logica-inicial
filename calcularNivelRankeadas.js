let vitorias = 30
let derrotas = 10
let resultado = calcularNivelRankeadas (vitorias, derrotas)
console.log(resultado)

function calcularNivelRankeadas (vitorias, derrotas){
    let saldoVitorias = vitorias - derrotas
    let nivel = ""

    if(saldoVitorias < 10){
        nivel = "Ferro"
    } else if (saldoVitorias <= 20){
        nivel = "Broze"
    }else if (saldoVitorias <= 50){
        nivel = "Prata"
    }else if (saldoVitorias <= 80){
        nivel = "Ouro"
    }else if (saldoVitorias <= 90){
        nivel = "Diamante"
    }else if (saldoVitorias <= 100){
        nivel = "Lendário"
    } else{
        nivel = "Imortal"
    }
    return `O O Herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`

}


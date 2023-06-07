//4.Crie um programa que verifica se um aluno foi aprovado em uma prova Obs : Leve em consideração que a media é 7.
let nota = prompt("Digite a nota: ")

function situacao(nota) {
    let msg
    if (nota >= 7) {
        msg = "Aprovado"
    } else {
        msg = "Reprovado"
    }

    return msg
}

let result = situacao(nota)
console.log(result)
document.write(result)
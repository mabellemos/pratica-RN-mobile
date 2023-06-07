//3.Faça um programa que verifica se uma pessoa é maior de idade
let idade = prompt("Informe a idade: ")
if (idade < 0) {
    alert("Você informou um valor negativo para a idade.")
} else {
    function maioridade(idade) {
        let msg
        if (idade >= 18) {
            msg = "Maior de idade"
        } else {
            msg = "Menor de idade"
        }

        return msg
    }

    let result = maioridade(idade)
    console.log(result)
    document.write(result)
}
//2.Escreva um programa que verifica se um número é par ou ímpar
let num = prompt("Digite um número: ")

function par_impar(num) {
    let msg
    if (num % 2 == 0) {
        msg = "O número é par"
    } else {
        msg = "O número é ímpar"
    }

    return msg
}

let result = par_impar(num)
console.log(result)
document.write(result)
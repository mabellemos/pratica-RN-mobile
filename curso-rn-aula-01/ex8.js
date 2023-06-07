//8.Escreva um programa que verifique se um número é positivo e ímpar ao mesmo tempo.
let num = prompt("Digite um número: ")

function numero_pos(num) {
    let msg
    if (num > 0 && num % 2 != 0) {
        msg = "O número é positivo e ímpar"
    } else if (num > 0) {
        msg = "O número é positivo"
    } else if (num < 0) {
        msg = "O número é negativo"
    } else {
        msg = "O número é zero"
    }

    return msg
}

let result = numero_pos(num)
console.log(result)
document.write(result)
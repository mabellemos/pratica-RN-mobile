//5.Faça uma função que retorna se um número é positivo, negativo ou zero
let num = prompt("Digite um número: ")

function numero_pos(num) {
    let msg
    if (num > 0) {
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
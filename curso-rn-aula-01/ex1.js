//1.Crie uma função que retorna o maior entre dois números
let num1 = prompt("Digite um número: ")
let num2 = prompt("Digite um número: ")
let maior = 0

function numero_maior(num1, num2) {
    if (num1 > num2) {
        maior = num1
    } else if (num2 > num1) {
        maior = num2
    } else {
        maior = "Os números são iguais"
    }

    return maior
}

let result = numero_maior(num1, num2)
console.log(result)
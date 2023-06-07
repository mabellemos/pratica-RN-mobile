//7.Crie uma função que receba uma temperatura em graus Celsius como parâmetro e retorne o valor equivalente em graus Fahrenheit.
let celsius = prompt("Informe a temperatura: ")

function converter_temp(celsius) {
    return celsius * 1.8 + 32
}

let result = converter_temp(celsius)
console.log(result)
document.write(result)
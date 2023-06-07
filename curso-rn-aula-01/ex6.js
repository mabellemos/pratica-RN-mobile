//6.Faça um programa que verifique se um ano é bissexto. Um ano é bissexto se for divisível por 4, mas não por 100, exceto se for divisível por 400.
let ano = prompt("Informe o ano: ")

function ano_bissexto(ano) {
    let msg
    if ((ano % 4 == 0) && (ano % 100 != 0) && (ano % 400 == 0)) {
        msg = "O ano é bissexto"
    } else {
        msg = "O ano não é bissexto"
    }

    return msg
}

let result = ano_bissexto(ano)
console.log(result)
document.write(result)
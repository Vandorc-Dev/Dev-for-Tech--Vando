// Faça um programa que calcule e imprima o valor em reais de cada kw, o valor em reais a ser pago o novo valor a ser pago por essa residência com um
// desconto de 10%. Dado: 100 kilowatts custa 1/7 do salario minimo. quantidade de kw gasto por residência.


let salarioMin = prompt('Digite o valor do salario minimo')
let qtKw = prompt('Digite a quantidade de KW')

let valorCadaKw = salarioMin / 700

let consumoKwValor = valorCadaKw * qtKw


let valorComDesconto = consumoKwValor * 0.9

alert(`O valor toal é ${consumoKwValor}. E o valor com desconto é ${valorComDesconto}`)
// 1. Faça um programa que leia o valor de um produto X e leia a quantidade de reais de um cofrinho que contenha:
// a. N moedas de 1 real;
// b. N moedas de 50 centavos;
// c. N moedas de 25 centavos;
// d. N moedas de 10 centavos;
// e. N moedas de 5 centavos;
// f. N moedas de 1 centavos.

// Lembrando que N é o número determinado por vocês.

// O programa deverá verificar se o total de reais que contém no cofrinho é 
//o bastante para comprar o produto X e imprimir se possui ou não valor suficiente.
let precoProduto = prompt("Digite o valor do produto em reais: ")

let moeda1Cent = prompt("Digite a quantidade de moedas de 1 centavo")
let moeda5Cent = prompt("Digite a quantidade de moedas de 5 centavos")
let moeda10Cent = prompt("Digite a quantidade de moedas de 10 centavos")
let moeda25Cent = prompt("Digite a quantidade de moedas de 25 centavos")
let moeda50Cent = prompt("Digite a quantidade de moedas de 50 centavos")
let moeda1Real = prompt("Digite a quantidade de moedas de 1 real")


let valorCofrinho = moeda1Cent * 0.01 + moeda10Cent * 0.1 + moeda5Cent * 0.05 + moeda25Cent*0.25 + moeda50Cent * 0.5 + moeda1Real*1

if(valorCofrinho == precoProduto){
    alert('Você tem o valor exato para comprar!')
}
if(valorCofrinho > precoProduto){
    let saldo =  valorCofrinho - precoProduto
    alert(`Você pode comprar esse produto, e ainda ficará com saldo de R$ ${saldo.toFixed(2)}`)
}
if(valorCofrinho < precoProduto){
    let saldo = precoProduto - valorCofrinho
    alert(`Saldo insuficiente! Falta R$ ${saldo.toFixed(2)}`)
}

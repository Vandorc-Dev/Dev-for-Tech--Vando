function calculaIMC(kilos, altura){
    var imc = kilos / (altura * altura);
    alert("Seu IMC É: "+imc.toFixed(2)) 
}

var kilos = prompt("Digite seu peso: ")
var altura = prompt("Digite sua altura: ")

calculaIMC(kilos, altura)

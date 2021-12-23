
function somar(){
    var number1 = document.getElementById('txtn1')
    var number2 = document.getElementById('txtn2')
    var res = document.getElementById('res')
    var n1 = Number(number1.value)
    var n2 = Number(number2.value)    
    var s = n1 + n2 
    res.innerHTML = `A soma de ${n1} mais ${n2} é igual a <strong>${s}</strong> \u{1F609}`  
}
function subtrair(){
    var number1 = document.getElementById('txtn1')
    var number2 = document.getElementById('txtn2')
    var res = document.getElementById('res')
    var n1 = Number(number1.value)
    var n2 = Number(number2.value)
    var sub = n1 - n2 
    res .innerHTML = `A subtração de ${n1} menos ${n2} é igual a <strong>${sub}</strong>\u{1F609}`
}
function multiplicar(){
    var number1= document.getElementById('txtn1')
    var number2= document.getElementById('txtn2')
    var res = document.getElementById('res')
    var n1 = Number(number1.value)
    var n2 = Number(number2.value)
    var  multi = n1 * n2 
    res.innerHTML= `A  multiplicação de ${n1} vezes ${n2} é igual a <strong>${multi}</strong> \u{1F609}`
}
function dividir(){
    var number1 = document.getElementById('txtn1')
    var number2 = document.getElementById('txtn2')
    var res = document.getElementById('res')
    var n1 = Number(number1.value)
    var n2 = Number(number2.value)
    var divi = n1 / n2 
    res.innerHTML = `A divisão de ${n1} dividido ${n2} é igual a <strong>${divi}</strong> \u{1F609}` 
}

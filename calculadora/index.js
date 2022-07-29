const resultado = document.getElementById('resultado') 

function somar(){

    const numero1 = parseFloat(document.getElementById('numero1').value)
    const numero2 = parseFloat(document.getElementById('numero2').value)

    const calcularSoma= numero1+numero2
    resultado.textContent = calcularSoma
}

document.getElementById('somar').addEventListener ('click', somar)


function subtrair(){

    const numero1 = parseFloat(document.getElementById('numero1').value)
    const numero2 = parseFloat(document.getElementById('numero2').value)

    const calcularSubtracao= numero1-numero2
    resultado.textContent = calcularSubtracao
}

document.getElementById('subtrair').addEventListener ('click', subtrair)


function multiplicar(){

    const numero1 = parseFloat(document.getElementById('numero1').value)
    const numero2 = parseFloat(document.getElementById('numero2').value)

    const calcularMultiplicacao= numero1*numero2
    resultado.textContent = calcularMultiplicacao
}

document.getElementById('multiplicar').addEventListener ('click', multiplicar)


function dividir(){

    const numero1 = parseFloat(document.getElementById('numero1').value)
    const numero2 = parseFloat(document.getElementById('numero2').value)

    const calcularDivisao= numero1/numero2
    resultado.textContent = calcularDivisao
}

document.getElementById('dividir').addEventListener ('click', dividir)




    
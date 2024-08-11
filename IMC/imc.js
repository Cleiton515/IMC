var btn = document.querySelector('#buttom')
btn.addEventListener('click', calcularimc)

function calcularimc() {
    var peso = document.querySelector('#peso').value
    var altura = document.querySelector('#altura').value
    var result = document.querySelector('#resultado')
    result.innerHTML = `seu peso é`
    var imc = (peso / (altura*altura)).toFixed(2);

    if (imc <18.5){
        result.innerHTML = `${imc} esta abaixo do peso`
        result.style = 'color: rgb(255, 0, 0);'
    }else if (imc <25){
        result.innerHTML = `${imc} Você está com o peso ideal!`
        result.style = 'color: rgb(1, 255, 17);'
    }else if (imc <30){
        result.innerHTML = `${imc} Você está levemente acima do peso!`
        result.style = 'color: rgb(255, 251, 0);'
    }else if (imc <35){
        result.innerHTML = `${imc} Cuidado! Obesidade grau I`
        result.style = 'color: rgb(255, 0, 0);'
    }else if (imc <40){
        result.innerHTML = `${imc} Cuidado! Obesidade grau II`
        result.style = 'color: rgb(255, 0, 0);'
    }else {
        result.innerHTML = `${imc} Cuidado! Obesidade grau III`
        result.style = 'color: rgb(255, 0, 0);'
    }

}


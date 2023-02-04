let secretNumber = parseInt(Math.random()*11)
let numberAttempts = 3
let returnFunction = false
let userNumber = document.getElementById('kickNumber')

const tipMessage = document.getElementById('tip')
const buttonReloadNewNumber = document.getElementById('button-reload')
const buttonLuck = document.getElementById('userNumber')
const correctMessage = document.getElementById('correct')
const finalMessage = document.getElementById('end-attempts')
const wrongMessage = document.getElementById('wrong')

//código para restringir caracteres no input
document.getElementById('kickNumber').onkeypress = function(e) {
    var chr = String.fromCharCode(e.which);
    if("1234567890".indexOf(chr) < 0)
    return false;
}

function didItHit() {
    let userNumberNumeric = userNumber.value
    
    correctMessage.innerHTML = ""
    finalMessage.innerHTML = ""
    wrongMessage.innerHTML = ""

    verifyUserNumberIsCorrect(userNumberNumeric) 
    if(returnFunction) {
        return
    }

    comparingNumbers(userNumberNumeric, secretNumber)
    if(returnFunction) {
        return
    }
}

function verifyUserNumberIsCorrect(userNumberNumeric) {
    let errorMessage = document.getElementById('alertUserNumber')

    if(userNumberNumeric > 10) {
        errorMessage.innerHTML = "O número precisa ser menor que 10!"
        returnFunction = true
    } else if(userNumberNumeric == "") {
        errorMessage.innerHTML = "O número precisa estar entre 0 e 10!"
        returnFunction = true
    } else {
        errorMessage.innerHTML = ""
        returnFunction = false
    }
}

function comparingNumbers(userNumberNumeric, secretNumber) {
    if(userNumberNumeric == secretNumber) {
        correctMessage.innerHTML = "Parabéns! Você acertou!"
        buttonLuck.disabled = true
        buttonReloadNewNumber.classList.add('displayOn')
        tipMessage.innerHTML = ""
        returnFunction = true
        return
    }

    while (numberAttempts >= 1) {
        numberAttempts--
        if (numberAttempts == 0) {
            finalMessage.innerHTML = "Que pena, você perdeu todas as tentativas.<br> Número sorteado: <span>" + secretNumber + "</span>"
            tipMessage.innerHTML = ""
            buttonLuck.disabled = true
            buttonReloadNewNumber.classList.add('displayOn')
            return
        }
        wrongMessage.innerHTML = "Errou! Você tem mais <span>" + numberAttempts + "</span> tentativa(s)!"
        tip(userNumberNumeric, secretNumber)
        return
    }
}

function tip(userNumberNumeric, secretNumber) {
    if(numberAttempts == 1 && userNumberNumeric < secretNumber)  {
        tipMessage.innerHTML = "DICA: O número é maior"
        return
    } else if(numberAttempts == 1 && userNumberNumeric > secretNumber) {
        tipMessage.innerHTML = "DICA: O número é menor"
        return
    }
}

function reloadPage() {
    window.location.reload()
}
let secretNumber = parseInt(Math.random()*11)
let numberAttempts = 3
let userNumber = document.getElementById('user-number')

const buttonGame = document.getElementById('btn-user-number')
const buttonNewGame = document.getElementById('btn-new-game')

buttonGame.addEventListener('click', validateInput)

//código para restringir caracteres no input
document.getElementById('user-number').onkeypress = function(e) {
    var chr = String.fromCharCode(e.which);
    if("1234567890".indexOf(chr) < 0)
    return false;
}

function validateInput() {
    const errorMessage = document.getElementById('alert-user-number')
    errorMessage.innerHTML = ''

    if(userNumber.value > 10) {
        errorMessage.innerHTML = "O número precisa ser menor que 10!"
        return
    } else if(userNumber.value == '') {
        errorMessage.innerHTML = "O número precisa estar entre 0 e 10!"
        return
    }

    comparingNumbers()
}

function comparingNumbers() {
    const gameResultMessage = document.getElementById('game-result')

    gameResultMessage.innerHTML = ''

    if(userNumber.value == secretNumber) {
        gameResultMessage.innerHTML = "Parabéns! Você acertou!"
        buttonGame.disabled = true
        buttonNewGame.classList.add('displayOn')
        return
    }
      
    while(numberAttempts >= 1) {
        numberAttempts--
        gameResultMessage.innerHTML = "Errou! Você tem mais <span>" + numberAttempts + "</span> tentativa(s)!"
        tipMessageOn()
        break
    }

    if(numberAttempts == 0) {
        gameResultMessage.innerHTML = "Que pena, você perdeu todas as tentativas.<br> Número sorteado: <span>" + secretNumber + "</span>"
        buttonGame.disabled = true
        buttonNewGame.classList.add('displayOn')
        return
    }
}

function tipMessageOn() {
    const tipMessage = document.getElementById('tip')
    tipMessage.innerHTML = ''

    if(numberAttempts == 1 && userNumber.value > secretNumber) {
        tipMessage.innerHTML = "DICA: O número é menor"
        return
    } else if(numberAttempts == 1 && userNumber.value < secretNumber) {
        tipMessage.innerHTML = "DICA: O número é maior"
        return
    }
}

function createNewGame() {
    window.location.reload()
}
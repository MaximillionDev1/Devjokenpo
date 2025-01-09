const result = document.querySelector('.result')
const humanPoint = document.querySelector('#human-score')
const scarletPoint = document.querySelector('#scarlet-score')

let myScoreNumber = 0
let scarletScoreNumber = 0

const playHuman = (humanchoice) => {
    console.log(humanchoice)
    console.log(playMachine())

    playTheGame(humanchoice, playMachine())

}

const playMachine = () => {
    const choices = ['rock', 'paper', 'scissor'];
    const randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber]

}

const playTheGame = (human, scarlet) => {
    if (human === scarlet) {
        result.innerHTML = "Empatou 🙅‍♂️ 🙅‍♀️"
    }

    else if (human === 'rock' && scarlet === 'scissor' || human === 'paper' && scarlet === 'rock' || human === 'scissor' && scarlet === 'paper') {
        result.innerHTML = "Voce ganhou ✅"
        myScoreNumber++
        humanPoint.innerHTML = myScoreNumber
    }

    else {
        result.innerHTML = "Voce perdeu para Scarlet ❌"
        scarletScoreNumber++
        scarletPoint.innerHTML = scarletScoreNumber
    }


}




const form = document.querySelector('.quiz-form')
const correctAnswers = ['A','B','C','B']
const showScore = document.querySelector('.result')
let score = 0;


// incrementa a pontuação do usuário no DOM
const ShowUserScore  = () => {
    let counter = 0

    const intervalId = setInterval(() => {
        
        if(counter === score || score === 0){
            clearInterval(intervalId)
            return
        }
        counter++
        
        showScore.querySelector('samp').textContent = `${counter}%`

    }, 10)

}

// obtém as respostas do usuário

const getAnswersUser = () => {
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ]

    return userAnswers
}

const calculatesUserScore = (userAnswers) => {
    
    userAnswers.forEach((userAnswer, index) => {
        if(userAnswer === correctAnswers[index]){
            score += 25
        }
    })
}


form.addEventListener('submit', event => {
    event.preventDefault()

    score = 0
    scrollTo(0, 0);
    showScore.classList.remove('d-none');

    // obtém as respostas do usuário
    const userAnswers = getAnswersUser()

    // calcula a apontuação do usuário
    calculatesUserScore(userAnswers)

    // incrementa a pontuação do usuário no DOM
    ShowUserScore()
})






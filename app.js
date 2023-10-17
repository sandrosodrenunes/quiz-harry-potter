const form = document.querySelector('.quiz-form')
const correctAnswers = ['A','B','C','B']
const finalScoreContainer = document.querySelector('.final-score-container')
let score = 0;


// incrementa a pontuação do usuário no DOM
const ShowUserScore  = () => {
    let counter = 0

    const intervalId = setInterval(() => {
        
        if(counter === score || score === 0){
            clearInterval(intervalId)
        }
        
        finalScoreContainer.querySelector('samp').textContent = `${counter++}%`
        
        
    }, 10)

}

// obtém as respostas do usuário

const getAnswersUser = () => {
    const userAnswers = []

    correctAnswers.forEach((_, index) => {
        const userAnswer = form[`inputQuestion${index + 1}`].value
        userAnswers.push(userAnswer)
    }) 
        
    return userAnswers
}

const calculatesUserScore = (userAnswers) => {
    
    userAnswers.forEach((userAnswer, index) => {
        const isUserAnswerCorrect = userAnswer === correctAnswers[index]
        if(isUserAnswerCorrect){
            score += 25
        }
    })
}


form.addEventListener('submit', event => {
    event.preventDefault()

    score = 0
    scrollTo(0, 0);
    finalScoreContainer.classList.remove('d-none');

    // obtém as respostas do usuário
    const userAnswers = getAnswersUser()

    // calcula a apontuação do usuário
    calculatesUserScore(userAnswers)

    // incrementa a pontuação do usuário no DOM
    ShowUserScore()
})






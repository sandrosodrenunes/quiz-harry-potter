const form = document.querySelector('.quiz-form')
const correctAnswers = ['A','B','C','B']
const showScore = document.querySelector('.result')
let score = 0;

const setIntervalCounter = () => {
    let counter = 0
    
    const intervalId = setInterval(() => {
        
        if(counter === score || score === 0){
            clearInterval(intervalId)
            return
        }
        counter++
        
        showScore.querySelector('samp').textContent = `${counter}%`

    }, 10)

    scrollTo(0, 0);
}

const scoreSumUser = () => {
    
    const userAnswers = [
        form.inputQuestion1.value,
        form.inputQuestion2.value,
        form.inputQuestion3.value,
        form.inputQuestion4.value,
    ]

    userAnswers.forEach((userAnswer, index) => {
        if(userAnswer === correctAnswers[index]){
            score += 25
        }
    })
}


form.addEventListener('submit', event => {
    event.preventDefault()
    score = 0

    showScore.classList.remove('d-none');

    scoreSumUser()
    setIntervalCounter()
})






const quizData = [
    {
        question: 'How old is Florin?',
        a: '19',
        b: '17',
        c: '26',
        d: '120',
        correct: 'c'
    },
    {
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'Javascript',
        correct: 'd'
    },
    {
        question: 'Who is the President of US?',
        a: 'Florin Pop',
        b: 'Donald Trump',
        c: 'IvanSaldano',
        d: 'Mihai Andrei',
        correct: 'b'
    },
    {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Helicopters Terminals Motorboats Lamborginis',
        correct: 'a'
    },
    {
        question: 'What year was Javascript launched?',
        a: '2020',
        b: '2019',
        c: '2018',
        d: 'none of the above',
        correct: 'd'
    }
]

const questionEl = document.querySelector('#question')
const a_text = document.querySelector('#a_text')
const b_text = document.querySelector('#b_text')
const c_text = document.querySelector('#c_text')
const d_text = document.querySelector('#d_text')
const submitBtn = document.querySelector('#submit')
const quizContainer = document.querySelector('.quiz-container')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    const currentQuestion = quizData[currentQuiz]
    questionEl.innerText = currentQuestion.question
    a_text.innerText = currentQuestion.a
    b_text.innerText = currentQuestion.b
    c_text.innerText = currentQuestion.c
    d_text.innerText = currentQuestion.d
    const answers = document.querySelectorAll('.answer')
    answers.forEach(item => {
        item.checked = false;
    })

}

function getSelected() {
    const answers = document.querySelectorAll('.answer')
    let answer = undefined
    answers.forEach(item => {
        if (item.checked) {
            answer = item.id
        }
        // console.log(item.value);
    })
    return answer
}

submitBtn.addEventListener('click', () => {
    let answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quizContainer.innerHTML = `
            <h2>Your score is ${score}/${quizData.length}</h2>
            <button onclick="location.reload()">Try Again</button>
            `
        }
    } else {

    }
})
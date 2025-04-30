const question = [
    {
            question: "1. Qual palavra-chave é usada para declarar uma variável em JavaScript?",
        answers: [
            { id: 1, text: "let", correct: true},
            { id: 2, text: "varb", correct: false},
            { id: 3, text: "def", correct: false},
            { id: 4, text: "dim", correct: false},
        ]
    }
]
const question = [
    {
        question: "2. Qual método é usado para exibir uma mensagem no console do navegador?",
        answers: [
            { id: 1, text: "diplay.log()", correct: false},
            { id: 2, text: "console.print()", correct: false},
            { id: 3, text: "console.log()", correct: true},
            { id: 4, text: "show.log()", correct: false},
        ]
    },
]


const question = [
    {
        question: "3. Qual método é usado para remover o último elemento de um array em JavaScript?",
        answers: [
            { id: 1, text: "shift()", correct: false},
            { id: 2, text: "unshift()", correct: false},
            { id: 3, text: "pop()", correct: true},
            { id: 4, text: "splice()", correct: false},
        ]
    },
]


const question = [
    {
        question: "4. Qual destes métodos pode ser usado para converter uma string em um número inteiro em JavaScript?",
        answers: [
            { id: 1, text: "parseInt()", correct: true},
            { id: 2, text: "convertToInteger()", correct: false},
            { id: 3, text: "stringToNumber()", correct: false},
            { id: 4, text: "toInteger()", correct: false},
        ]
    },
]

const question = [
    {
        question: "5. Como você remove o primeiro elemento de um array em JavaScript?",
        answers: [
            { id: 1, text: "array.pop()", correct: false},
            { id: 2, text: "array.shift()", correct: true},
            { id: 3, text: "array.splice()", correct: false},
            { id: 4, text: "array.removeFirst()", correct: false},
        ]
    },
]

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0 ;
    nextButton.innerHTML = "Próxima";
    showQuestion();
}

function showQuestion(){
    let currentQuestion = question[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
}

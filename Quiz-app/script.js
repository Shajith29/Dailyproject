const quizData = [
    {
        question: "Which language runs in a web browser?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "What does CSS stand for?",
        a: "Central Style Sheets",
        b: "Cascading Style Sheets",
        c: "Cascading Simple Sheets",
        d: "Cars SUVs Sailboats",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Hypertext Markdown Language",
        c: "Hyperloop Machine Language",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];


const quiz = document.getElementById('quiz');
const questionEl = document.getElementById('question')
const answerEl = document.querySelectorAll('.answer');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const sumbit = document.getElementById('button');

let currentQuiz = 0;
let score = 0;


loadQuiz()


function loadQuiz(){

    deselectQuiz();

    const currentQuizData = quizData[currentQuiz];
    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;    
}

function selectQuiz(){
    let quizAnswer;

    answerEl.forEach(answer => {
        if(answer.checked){
            quizAnswer = answer.id;
         }
    })

   return quizAnswer;

}

function deselectQuiz(){
    answerEl.forEach(answer => answer.checked = false);
}

sumbit.addEventListener('click',() => {
    let answer = selectQuiz();

    if(answer === quizData[currentQuiz].correct){
        score++;
    }

    currentQuiz++;

    if(currentQuiz < quizData.length){
        loadQuiz();
    }else{
        quiz.innerHTML = `
        <div class = "quiz-header">
            <h2>You have answerd ${score}/${quizData.length} correctly
        </div>
        <button class = "btn" onclick = "location.reload()">Reload</button>
        `
    }
})

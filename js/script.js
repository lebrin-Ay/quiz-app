const question = document.getElementById("question");
const choices = Array.from(document.getElementsByClassName("choice-text"));

let currentQuestion = {};
let acceptingAnswers = false;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];


let questions = [
    {
      question: "Commonly used data types DO NOT include:",
      choice1: "1. strings",
      choice2: "2. booleans",
      choice3: "3. alerts",
      choice4: "4. numbers",
      answer: 3
    },
    {
      question: "Arrays in JavaScript can be used to store ______.", 
        choice1: "1. numbers and strings",
        choice2: "2. other arrays",
        choice3: "3. booleans",
        choice4: "4. all of the above",
      
      answer: 4
    },
    {
      question: "String values must be enclosed within _____ when being assigned to variables.",
      choice1: "1. commas",
      choice2:  "2. curly brackets",
      choice3: "3. quotes",
      choice4: "4. parentheses",
      answer: 3,
    },
    {
      question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        choice1: "1. JavaScript",
        choice2: "2. terminal/bash",
        choice3: "3. for loops",
        choice4: "4. console.log",
      answer: 4
    },
    {
      question:
        "Which of the following is a statement that can be used to terminate a loop, switch or label statement?",
      choice1: "1. break",
      choice2: "2. stop", 
      choice3: "3. halt",
      choice4: "4. exit",
      answer: 1
    },
  ];

const CORRECT_BONUS = 10;
const MAX_QUESTIONS = 5;

startGame = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    getNewQuestion();

};
getNewQuestion = () => {
    if (availableQuestions.length === 0 || questionCounter >= MAX_QUESTIONS){
        //go to end page
        return window.location.assign('/finished.html');
    }
    questionCounter++;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.innerText = currentQuestion.question;

    choices.forEach( choice =>{
        const number = choice.dataset['number'];
        choice.innerText = currentQuestion['choice' + number];
    })

    availableQuestions.splice(questionIndex, 1);

    acceptingAnswers = true;
};

choices.forEach( choice => {
    choice.addEventListener('click', e => {
     if(!acceptingAnswers) return;

     acceptingAnswers = false;
     const selectedChoice = e.target;
     const selectedAnswer = selectedChoice.dataset['number'];

    const classToApply = 
      selectedAnswer == currentQuestion.answer ? "correct" : "incorrect";
    

    selectedChoice.parentElement.classList.add(classToApply);

    setTimeout(() => {
        selectedChoice.parentElement.classList.remove(classToApply);
        getNewQuestion();

    }, 1000);
     
    });
    var crct = document.getElementById('crct')
    if(currentQuestion.answer == "correct"){
        crct.style.display = 'block';
        incrct.style.display = 'none';
        
    };

    var incrct = document.getElementById('incrct');
    if(currentQuestion.answer == "incorrect"){
        incrct.style.display = 'block';
        crct.style.display = 'none'
        
    };

});

startGame();
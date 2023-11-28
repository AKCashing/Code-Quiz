var score = 0;

var startScreenEl = document.getElementById('start-screen');
var question1El = document.getElementById('question1');
var startButtonEl = document.getElementById('start-button');
var stringsEl = document.getElementById('strings-button');
var booleansEl = document.getElementById('booleans-button');
var alertsEl = document.getElementById('alerts-button');
var numbersEl = document.getElementById('numbers-button');
var question2El = document.getElementById('question2');
var quotesEl = document.getElementById('quotes-button');
var crlybracketsEl = document.getElementById('crlybrackets-button');
var parenthesisEl = document.getElementById('parenthesis-button');
var sqbracketsEl = document.getElementById('sqbrackets-button');

startButtonEl.addEventListener('click', startGame);
stringsEl.addEventListener('click', question1AnswerWrong);
booleansEl.addEventListener('click', question1AnswerWrong);
alertsEl.addEventListener('click', question1AnswerCorrect);
numbersEl.addEventListener('click', question1AnswerWrong);
quotesEl.addEventListener('click', question2AnswerWrong);
crlybracketsEl.addEventListener('click', question2AnswerCorrect);
parenthesisEl.addEventListener('click', question2AnswerWrong);
sqbracketsEl.addEventListener('click', question2AnswerWrong);

question1El.style.display = 'none';
question2El.style.display = 'none';

function startGame() {
    startScreenEl.style.display = 'none';
    question1El.style.display = 'flex'
}

function question1AnswerWrong() {
    question1El.style.display = 'none';
    question2El.style.display = 'flex';
}

function question1AnswerCorrect() {
    score++;
    question1El.style.display = 'none';
    question2El.style.display = 'flex';
}

function question2AnswerWrong() {
    question2El.style.display = 'none';
}

function question2AnswerCorrect() {
    score++;
    question2El.style.display = 'none';
}
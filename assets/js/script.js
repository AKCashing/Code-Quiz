var startButtonEl = document.getElementById('start-button');
var startScreenEl = document.getElementById('start-screen');

var question1El = document.getElementById('question1');
var q1Answer1El = document.getElementById('question1-button1');
var q1Answer2El = document.getElementById('question1-button2');
var q1Answer3El = document.getElementById('question1-button3');
var q1Answer4El = document.getElementById('question1-button4');

startButtonEl.addEventListener('click', startGame);

question1El.style.display = 'none';

function startGame() {
    startScreenEl.style.display = 'none';
    question1El.style.display = 'flex'
}
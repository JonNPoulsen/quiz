
var answerBtns = document.querySelectorAll(".answer");
var startBtn = document.querySelector("#new-question");
var questionText = document.querySelector("#question-text");
var score = document.querySelector("#score");
var correctIndex = 1;

const questions = new Array();

questions.push(
  ["Hvad hed kong Arthurs slot?",
  "Avalon",
  "Kamelot",
  "Excalibur",
  "Galahad",
  2]);

questions.push(
  ["Hvad er hovedstaden i Østrig?",
  "Wien",
  "Bern",
  "Salzburg",
  "Linz",
  1]);

questions.push(
  ["Hvilken af disse dinosaurslægter levede i Juratiden?",
  "Velociraptor",
  "Tyrannosaurus",
  "Triceratops",
  "Stegosaurus",
  4]);

questions.push(
  ["Hvilken tone ligger én heltone over et B?",
  "Bb",
  "C",
  "C#",
  "D",
  3]);

var randomQ = questions[Math.floor(Math.random()*questions.length)];

console.log(answerBtns);

for (var i = 0; i < answerBtns.length; i++) {
  answerBtns[i].addEventListener("click", function(e){
    evaluateAnswer(this);
  });
}

startBtn.addEventListener("click", function(e){
  startQuiz();
})

/* -----FUNCTION IMPLEMENTATIONS----- */

function evaluateAnswer(btn){
  console.log(btn.id);
  if (btn.id == "correct") {
    btn.classList.remove("btn-outline-warning");
    btn.classList.add("btn-success");
    console.log(score.innerText);

    var newScore = parseInt(score.innerHTML, 10);
    newScore++;
    score.innerHTML = newScore.toString();
  }
  else {
    btn.classList.remove("btn-outline-warning");
    btn.classList.add("btn-danger");
    score.innerHTML = "0";
  }
  btn.blur();

  setTimeout(newQuestion, 200);
}

function newQuestion(){

  //prevent same question from being asked more than once in a row
  oldQ = randomQ;
  randomQ = questions[Math.floor(Math.random()*questions.length)];
  while (randomQ === oldQ) {
    randomQ = questions[Math.floor(Math.random()*questions.length)];
  }

  //assign question text and answers
  questionText.innerHTML = randomQ[0];
  answerBtns[0].innerHTML = randomQ[1];
  answerBtns[1].innerHTML = randomQ[2];
  answerBtns[2].innerHTML = randomQ[3];
  answerBtns[3].innerHTML = randomQ[4];

  //update correct and wrong answers
  for (var i = 0; i < answerBtns.length; i++) {
    if (answerBtns[i].id == "correct") {
      answerBtns[i].removeAttribute("id");
      answerBtns[i].classList.remove("btn-success");
      answerBtns[i].classList.add("btn-outline-warning");
      console.log(answerBtns[i]);
    } else {
      answerBtns[i].classList.remove("btn-danger");
      answerBtns[i].classList.add("btn-outline-warning");
    }

    if (i === randomQ[5]-1) {
      answerBtns[i].setAttribute("id", "correct");
    }
  }
}

function startQuiz(){
  for (var i = 0; i < answerBtns.length; i++) {
    answerBtns[i].classList.add("btn");
    answerBtns[i].classList.add("btn-outline-warning");
    answerBtns[i].classList.add("btn-lg");
    answerBtns[i].classList.remove("hidden");
  }
  startBtn.removeAttribute("class");
  startBtn.classList.add("hidden");
  newQuestion();
}

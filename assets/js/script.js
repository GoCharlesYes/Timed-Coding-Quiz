// Creating variables in order to access html elements
let timer = document.querySelector("#timer");
let hiscore = document.querySelector("#hiscore");
let maincontainer = document.querySelector("#maincontainer");
let startinstructions = document.querySelector("#startinstructions");
let maintitle = document.querySelector("#maintitle");
let startbutton = document.querySelector("#startbutton");
let correctincorrect = document.querySelector("#correct-incorrect");

// Question prompt structure and using constructor tag for creating object for the questions
class quest {
    constructor(question, option, answer) {
        this.quest = quest;
        this.option = option;
        this.answer = answer; 
    }
}

// Placeholder for questions list array
let questionList = [];

// Creating consants for questions which will then be pushed into questionList array above
const option1 = ["Hey There, My Lady", "Hot Tacos? Maybe Later", "Hypertext Markup Language", "Hairy Toes Monkey Lorax"];
const quest1 = new quest("What does HTML stand for?", option1, "Hypertext Markup Language");
// Pushing quest1 constant into questionList array
questionList.push(quest1);
// Logging to console to test if it functional may remove in final commit
console.log(questionList);

const option2 = ["Cascading Style Sheet", "Cake Sweet Shop", "Cheese Stinky Sweat", "Cascading Sheet Style"];
const quest2 = new quest("What does CSS stand for?", option2, "Cascading Style Sheet");
// Pushing quest2 constant into questionList array
questionList.push(quest2);
// Logging to console to test if it functional may remove in final commit
console.log(questionList);

const option3 = ["Homer Simpson", "Jerry Seinfeld", "John Stamos", "JavaScript"];
const quest3 = new quest("What does JS stand for?", option3, "JavaScript");
// Pushing quest3 constant into questionList array
questionList.push(quest3);
// Logging to console to test if it functional may remove in final commit
console.log(questionList);

// Might add more questions later

// Creating variables for quesitons functions added later
let optionsList = [];
let questNum = 0;
let valueScore = 0;
let timeRem = 100;
let quizRun = false;
let scoreinitials = "";
let scoreleaderboard = [];
let answerClear = false;
let clearingAnswer = 0;
let correct = false;

// Adding init to load highscores and start button clickable
// Change 'empty function into real one'
// 
// 
// 
// 
// 
// 
// 
// 
function init() {
    startbutton.addEventListener("click", questvis);
    hiscore.addEventListener("click", empty function);
}

// Adding function to hide questions before starting quiz
function questvis() {
    runTimer();
    // If quizRun=true then hide content
    quizRun = true;
    startbutton.setAttribute("style", "display:none");
    hiscore.setAttribute("style", "display:none");
    
    // Declaring a let variable for questionList in order to create for loop
    let optionNum = questionList[0].option.length;
    
    for (let i = 0; i < optionNum; i++) {
        let optionb = document.createElement("button");
        maincontainer.appendChild(optionb);
        optionsList.push(optionb);
        // Template Literal String
        optionb.setAttribute("id", `button${i + 1}`);
    }
    nextQuest();
}

// Countdown timer, stops quiz once it reaches 0
function runTimer() {
    let quizTimer = setInterval(function() {
        timeLeft--;
        timer.textContent = `Time: ${timeLeft} seconds remaining!`;

        if(timeLeft === 0) {
            clearInterval(quizTimer);
            if(maintitle.textContent !== "Finish!") {
                quizEnd();
            }
        }
    })
}

// function checks what question and if the answer from previous question is correct, incorrect answers reduce timer by 10 seconds and changes color
function writeAns(event) {
    if(event !== undefined) {
        if(event.currentTarget.textContent === questionList[questNum - 1].answer) {
            correct = true;
            answer.textContent = "Correct Answer!";
            answer.setAttribute("style", "color: green");
            valueScore += 10;
        } else {
            correct = false;
            answer.textContent = "Incorrect Answer :(";
            answer.setAttribute("style", "color: red");
            if(timeRem > 10) {
                timeLeft -= 10;
            } else {
                timeLeft = 1;
            }
            timer.setAttribute("style", "color: red");
            setTimeout(function(){
                timer.setAttribute("style", "color: black");
            },1000);
        }
        removeAns();
    }
}

// removes content in footer after 5 seconds
function removeAns () {
    if(answerClear) {
        answerClear = false;
        clearTimeout(clearingAnswer);
        answerClear();
    } else {
        answerClear = true;
        clearingAnswer = setTimeout(function() {
            answer.textContent = "";
            answerClear = false;
        }, 5000);
    }
}

function questionNext() {
    maintitle.textContent = questionList[questNum].quest;
    for(let i = 0; i < questionList[questNum].option.length; i++) {
        optionsList[i].textContent = questionList[questNum].option[i];
        optionsList[i].addEventListener("click", nextQuest);
    }
    questNum++;
}

// Either moves to next question or end quiz
function nextQuest(event) {
    writeAns(event);
    if(questNum < optionsList.length) {
        questionNext();
    } else {
        quizEnd();
    }
}

// creating function to stop quiz and show score
function quizEnd() {
    maintitle.textContent = "Finished Quiz!";
    timeRem = 1;
    optionClear();
    removeAns();
    startinstructions.setAttribute("style", "display: visible");
    startinstructions.textContent = `Final Score: ${valueScore}`
    inputScore();
    // ^^undeclared function will add later
}

// clears option
function optionClear() {
    for (let i = 0; i = optionsList[i].length; i++) {
        optionsList[i].remove();
    }
    optionsList = [];
}

// Function for creating form for logging score
function inputScore() {
    let formIni = document.createElement("form");
    maincontainer.appendChild(formIni);
    formIni.setAttribute("id", "form");

    let input = document.createElement("input");
    formIni.appendChild(input);
    input.textContent = "Enter Initials Here:";
    
    let typeinput = document.createElement("typeinput");
    formIni.appendChild(typeinput);
    typeinput.setAttribute("id", "initials");
    
    let submission = document.createElement("button");
    formIni.appendChild(submission);
    submission.setAttribute("id", "submission")
    //might be submit^^^
    submission.textContent = "Submit";

    maintitle.setAttribute("style", "align-self: start");
    startinstructions.("style", "align-self: start; font-size: 125%");

    typeinput.addEventListener("keydown", terminateRefresh);
    startinstructions.addEventListener("click", addScore);
    // ^^Undeclared variable create down below
}

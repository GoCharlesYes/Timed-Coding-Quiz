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
    hiscore.addEventListener("click", scoreShow);
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
    startinstructions("style", "align-self: start; font-size: 125%");

    typeinput.addEventListener("keydown", terminateRefresh);
    startinstructions.addEventListener("click", addScore);
    // ^^Undeclared variables create down below
}

// Prevent default form from opening
function terminateRefresh(event) {
    if(event.key === "Enter") {
        event.preventDefault();
    }
}

// function to add score and check if initials are in proper format
function addScore(event) {
    if(event !== undefined) {
        event.preventDefault();
    }
    let id = document.getElementById("initials");
    if(id.value.length > 3 || id.value.length === 0) {
        wrongInput();
        return;
    }
    quizRun = false;
    document.getElementById("form").remove();
    scoreSave(id);
}

// Adds score to local storage and checks if there are already existing ones in local storage
function scoreSave(id) {
    if(localStorage.getItem("scoreleaderboard") !== null) {
        leaderboard = JSON.parse(localStorage.getItem("scoreleaderboard"));
    }
    leaderboard.push(`${score} ${id.value}`);
    localStorage.setItem("scoreleaderboard", JSON.stringify(scoreleaderboard));
    scoreShow();  
}

// Checks if initials are typed in correct format, otherwise a message is displayed
function wrongInput() {
    answer.textContent = "Initials must contain 3 characters";
    answer.setAttribute("style", "color: black");
    clearAnswer();
    let submit = document.getElementById("submit");
    submit.addEventListener("click", addScore);
}

// Prevents other actions while quiz is running
function scoreShow() {
    if(!isQuizOngoing) {
        title.textContent = "Hi-Scores";
        // Start button is hidden while scores are beign displayed
        startbutton.setAttribute("style", "display: none");
        displayScores();
        endCreate();
    } else if(title.textContent === "Finished!") {
        answer.textContent = "Enter Initials First.";
        answer.setAttribute("style", "color: black");
        removeAnswer();
    } else {
        answer.textContent = "Quiz must be finished before viewing scores";
        answer.setAttribute("style", "color: black");
        removeAnswer();
    }
}

// Checks for scores in local storage and assorts them into top to low scores
function displayScores() {
    startinstructions.textContent = "";
    startinstructions.setAttribute("style", "white-space: pre-wrap; font-size: 150%");
    if(localStorage.getItem("scoreleaderboard") !== null) {
        leaderboard = JSON.parse(localStorage.getItem("scoreleaderboard"));
    }
    scoreleaderboard.sort();
    scoreleaderboard.reverse();
    let limit = 11;
    if(limit > scoreleaderboard.length) {
        limit = scoreleaderboard.length;
    }
    for(let i = 0; i < limit; i++) {
        startinstructions.textContent += scoreleaderboard[i] + '\n';
    }
}

// event listeners for buttons
function endCreate() {
    if(!document.getElementById("restart")) {
        let resetMain = document.createElement("button");
        startinstructions.appendChild(resetMain);
        resetMain.textContent = "Go Back";
        resetMain.setAttribute("id", "restart");
        
        let clearSecondary = document.createElement("button");
        startinstructions.appendChild(clearSecondary);
        clearSecondary.textContent = "Clear Hi-Scores";
        clearSecondary.setAttribute("id", "clearScores");
        
        resetMain.addEventListener("click", restart);
        clearSecondary.addEventListener("click", clearScores);
    }
}

// sets screen back to original, and resets all variables
function restart() {
    maintitle.setAttribute("style", "align-self: center");
    startinstructions.setAttribute("style", "align-self: center; font-size: 110%");
    document.getElementById("restart").remove();
    document.getElementById("clearScores").remove();
    maintitle.textContent = "Coding Quiz Challenge";
    startinstructions.textContent = "Try to answer the following code-related questions within the time limit. Keep in mind that incorrect answers will penalize your time by reducing it by ten seconds.";
    startbutton.setAttribute("style", "display: visible");
    questNum = 0;
    valueScore = 0;
    timeRem = 100;
    init(); 
}

function clearScores() {
    localStorage.clear();
    startinstructions.textContent = "";
    scoreleaderboard = [];
}

init();
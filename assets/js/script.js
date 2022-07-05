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
let valuescore = 0;
let timeRem = 100;
let quizRun = false;
let scoreinitials = "";
let scoreleaderboard = [];
let answerClear = false;
let clearingAnswer = 0;
let correct = false;

// Adding init to load highscores and start button clickable
// Change 'empty function into real one'
function init() {
    startbutton.addEventListener("click", empty function);
    hiscore.addEventListener("click", empty function);
}

// Adding function to hide questions before starting quiz
function questvis() {
    runtimer();
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
    
    // add variable to determine whether to move to next question or end quiz
}
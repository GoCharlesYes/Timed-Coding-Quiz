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
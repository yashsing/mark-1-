var readlineSync = require('readline-sync');
const chalk = require('chalk');

var score = 0;

console.log(chalk.blue("Let's check how well you know me"));
 
var userName = readlineSync.question('What is your name?    ');

console.log(chalk.cyan.bold("Welcome " + userName + " to the quiz. For every correct answer you will get one point"));

console.log('lets start the quiz')

function quiz (question, answer){
  var useranswer = readlineSync.question(question);

  if(useranswer === answer){
    console.log(chalk.green("You're right!"))
    score = score + 1;
  }
  else{
    console.log(chalk.red("Wrong answer!"))
    score = score;
  }
  console.log("Your score is " + score)
  console.log(".............")
}

var questions = [{
  question: "Where do i live? ",
  answer: "Alwar"
}, 
{
  question: "What's my date of birth? ",
  answer: "Jan 4"
}, 
{
  question: "Where is my new home? ",
  answer: "Lajpat nagar"
},
{
  question: "Which is my fav colour? ",
  answer: "Blue"
},
{
  question: "Where i'm studying? ",
  answer: "SGT University, Gurugram"
},
{
  question: "When my undergradution going to complete? ",
  answer: "2022"
},
{
  question: "Which is my favourite car? ",
  answer: "Range Rover Velar"
},
{
  question: "Which is my favourite place? ",
  answer: "Jammu & kashmir"
}
];

for (i=0; i<questions.length; i++) {
  var currentquestion = questions[i];
  quiz(currentquestion.question, currentquestion.answer)
}

console.log(chalk.green("Your total score " + score))
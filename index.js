var readlineSync = require('readline-sync');
var chalk = require('chalk');

var highscore = [
  {
    name : "dummy",
    userScore : 0,
    scoress : 0,
    defaultscore : 4
  }
]

var userName = readlineSync.question(chalk.green("What's Your Name ?  "));

console.log(chalk.bold.rgb(10, 100, 200)("\nWelcome  "+userName +" to this Quiz \n"));

console.log(chalk.bold.rgb(10, 100, 200)('Hello!\n'));

//Question 1
var questionOne = {
  question: "Who is the main Hero of Radhe movie ? \n\n A.SRK \n B.AMITABH \n C.SALMAN \n D.VARUN\n\n",
  answer: 'SALMAN',
  answer_1: 'C'
}

//Question 2
var questionTwo = {
  question: "What is capital of India ? \n\n A.CHENNAI \n B.KOLKATA \n C.MUMBAI \n D.DELHI\n\n",
  answer: 'DELHI',
  answer_1: 'D'
}

//Question 3
var questionThree = {
  question: "What is the capital of Japan ? \n\n A.SHANGHAI \n B.TOKYO \n C.MALDIVES \n D.DUBAI\n\n",
  answer: 'TOKYO',
  answer_1: 'B'
}

//Question 4
var questionFour = {
  question: "What is the capital of China ? \n\n A.BEIJING \n B.MEGHALAYA \n C.WUHAN \n D.TOKYO\n\n",
  answer: 'BEIJING',
  answer_1: 'A'
}

//Question 5
var questionFive = {
  question: "Who is the  Captain of Royal Challengers Banglore ? \n\n A.DHONI \n B.SHREYAS \n C.VIRAT \n D.SHIKHAR\n\n",
  answer: 'VIRAT',
  answer_1: 'C'
}

var questionList = [questionOne,questionTwo,questionThree,questionFour,questionFive];


function quizPlay(question,answer_1,answer_2){
  var userAnswer = readlineSync.question(chalk.green(question));
  if((userAnswer.toUpperCase() === answer_1)||(userAnswer.toUpperCase() === answer_2)){
    console.log(chalk.bold.bgCyan("\nGreat!! Right Answer \n"));
    highscore[0].userScore+=1;
  }
  else{
    console.log(chalk.bold.bgMagenta("\nWrong Answer !! \n"));
    highscore[0].userScore-=1;
  }
  if( highscore[0].userScore > highscore[0].scoress){
    highscore[0].scoress = highscore[0].userScore ;
  }
  console.log(chalk.bold.yellow("\nCurrent Score : "+highscore[0].userScore));
  console.log();
}

for(var i=0;i<questionList.length;i++){
  highscore[0].name = userName;
  var questionForUser = questionList[i];
  quizPlay(questionForUser.question,questionForUser.answer,questionForUser.answer_1);
}

console.log(chalk.italic.bgCyan("Your Final score is : "+highscore[0].userScore+"\n"));
console.log(chalk.italic.bgBlueBright("\nYour Highest score is : "+ highscore[0].scoress + "\n"));
if(highscore[0].scoress >= highscore[0].defaultscore){
  highscore[0].defaultscore = highscore[0].scoress ;
  console.log(chalk.bold.green("\ncongrats !!  You have beaten the Highest scorer of this quiz"));
}
else{
  console.log(chalk.bold.bgRedBright("Oops!! You loose the Opportunity to be Highest Score of this quiz...."));
}

console.log(chalk.bold.bgCyan("\nSend the screenshot of Your score if You have beaten the Highest scorer of this game."));
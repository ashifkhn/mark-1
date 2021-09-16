var readlineSync=require('readline-sync')

var score=0
var userName= readlineSync.question('Enter your Name: ')
console.log('Hello '+userName)

function play(question,answer){
    var userAnswer=readlineSync.question(question)
    if (userAnswer===answer){
        console.log("Right Answer.\n")
        score++
        console.log("Your score is :",score)
    }
    else{
        console.log("Wrong Answer!\n")
        console.log("Your score is :",score)
    }
}
const highScore=[{
    name:'Ashif',
    score:'5'
},{
    name:'faiz',
    score:'4'
}
]

var ashifQuestion=[{
    question:"Do you know Ashif?",
    answer:"yes"
},
{
    question:"What is Ashif's Hometown?",
    answer: "lucknow"
},
{
    question:"Who is Ashif's fav Superhero?",
    answer:"iron man"
},{
    question:"What is Ashif's Hobby?",
    answer:"writing"
},{
    question:"Ashif's fav color?",
    answer:'black'
}
    
]

for (i=0;i<ashifQuestion.length;i++){
    var questionCount=ashifQuestion[i]
    play(questionCount.question,questionCount.answer)
}
console.log("Your total score is: ",score)

console.log("Check out the high scores, if you should be there send me a screenshot and I'll update it:")

for (i=0;i<highScore.length;i++){
    var highscoreName=highScore[i].name
    var highScored=highScore[i].score
    console.log(highscoreName,highScored)
}



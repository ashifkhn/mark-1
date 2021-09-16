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
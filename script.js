//Hämtar ut listan med 3
const question1answers = document.querySelectorAll(".q1")
const question2answers = document.querySelectorAll("q2");
const question3answers = document.querySelectorAll("q3");
//callback funktion ()=>{} = en funktion kallar på en annan funktion. Jag skapade en som heter answer
//loopar 
question1answers.forEach((answer)=>{
    //foreach = för varje svar
    answer.addEventListener("click", (event)=>{
        //vilken av radioknapparna triggade klicket
        checkQ1(event.target.value)
        console.log(event.target.value)
    })
})

//tar emot svaret 
function checkQ1 (answer) {
 //Gör en if sats 
 if (answer === "2008" ) {

    console.log("det gick bra");

 }
}





question2answers.forEach((answer2)=>{
    //foreach = för varje svar
    answer2.addEventListener("click", (event)=>{
        //vilken av radioknapparna triggade klicket
        checkQ2(event.target.value)
        console.log(event.target.value)
    })
})

//tar emot svaret 
function checkQ2 (answer2) {
 //Gör en if sats 
 if (answer2 === "Rocket Raccoon" ) {

    console.log("det gick bra");

 }
}


question3answers.forEach((answer3)=>{
    //foreach = för varje svar
    answer3.addEventListener("click", (event)=>{
        //vilken av radioknapparna triggade klicket
        checkQ3(event.target.value)
        console.log(event.target.value)
    })
})

//tar emot svaret 
function checkQ3 (answer3) {
 //Gör en if sats 
 if (answer3 === "Big rubber masturbating boots" ) {

    console.log("det gick bra");

 }
}






/*const form = document.querySelector("form")
const formp = document.querySelector("form p")
const textGreen = document.querySelector(".green")
const textRed = document.querySelector(".red")
const textRed2 = document.querySelector(".red2")
const first = document.querySelector(".first");
const label = document.querySelector("label");
const input = document.querySelector("form")
const second = document.querySelector(".second");
const third = document.querySelector(".third");
const resultsBtn = document.querySelector("button");
const answer1 = document.querySelector(".answer1");
const textColor = document.querySelector(".right1 ")


const answer = [
    {
        question: "2008",
    },
    {
        question: "2010",
    },
    {
        question: "Rocket Raccoon",
    },
    {
        question: "Big rubber masturbating boots",
    },

]

resultsBtn.addEventListener("click", control);

function control () {
    for(let x of answer) {
    if (answer1.value === x.question) {
        rightAnswer();
        return;
    } else if (answer1.value === x.question) {
        wronganswer();
    } else {
        wronganswer2();
    }
}  

}



function rightAnswer () {
    textGreen.style.color = "green";
}

function wronganswer () {
    textRed.style.color = "red";
}

function wronganswer2 () {
    textRed2.style.color = "red"
}






/*const quiz = document.querySelector(".quiz");
const submitContainer = document.querySelector(".submit");
const result = document.querySelector(".result");

const marvelQuiz = [
    {
        question: "When was the first Iron Man realesed?",
        answers: {
            a: "2008",
            b: "2010",
            c: "2005"
        },
        correctAnswer: "a"
    },
    {
        question: "What's the name of the raccoon in Guardians of the Galaxy?",
        answers: {
            a: "Trash-Panda",
            b: "Rocket Raccoon",
            c: "Hamster"
        },
        correctAnswer: "b"
    },
    {
        question: "What does Deadpool call his crocs?",
        answers: {
            a: "This is some killer crocs!",
            b: "Flat-ass sandals",
            c: "Big rubber masturbating boots"
        },
        correctAnswer: "c"
    }
]

runQuiz(marvelQuiz, quiz, submitContainer, result);

function runQuiz(question, quizContainer, resultContainer, submitButton){
    
    function showQuestions(question, quiz){

        const output = [];
        const answers;

        for(let x of marvelQuiz) {
            if (marvelQuiz.value )
        }

    }
}

*/
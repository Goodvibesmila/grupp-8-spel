const quiz = document.querySelector(".quiz");
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
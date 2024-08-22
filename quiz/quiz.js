let questions = [
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Saturn", "Jupiter", "Uranus"],
        answer: 2
    },
    {
        question: "Which planet is known for being the hottest?",
        options: ["Mercury", "Venus", "Mars", "Jupiter"],
        answer: 1
    },
    {
        question: "What is the farthest planet from the Sun?",
        options: ["Neptune", "Uranus", "Saturn", "Pluto"],
        answer: 0
    },
    //more questions yaha pe
];

let currentQuestion = 0;
let score = 0;

let questionElement = document.getElementById("question");
let optionsList = document.getElementById("options");
let nextButton = document.getElementById("next");
let resultElement = document.getElementById("result");
let scoreElement = document.getElementById("score");

scoreElement.textContent = `Score: ${score}`;

questionElement.textContent = questions[currentQuestion].question;
questions[currentQuestion].options.forEach((option, index) => {
    let optionElement = document.createElement("li");
    optionElement.textContent = option;
    optionElement.addEventListener("click", () => {
        if (index === questions[currentQuestion].answer) {
            score++;
            scoreElement.textContent = `Score: ${score}`;
            resultElement.textContent = "Correct!";
        } else {
            resultElement.textContent = `Incorrect! The correct answer is ${questions[currentQuestion].options[questions[currentQuestion].answer]}`;
        }
    });
    optionsList.appendChild(optionElement);
});

nextButton.addEventListener("click", () => {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        questionElement.textContent = questions[currentQuestion].question;
        optionsList.innerHTML = "";
        resultElement.textContent = "";
        questions[currentQuestion].options.forEach((option, index) => {
            let optionElement = document.createElement("li");
            optionElement.textContent = option;
            optionElement.addEventListener("click", () => {
                if (index === questions[currentQuestion].answer) {
                    score++;
                    scoreElement.textContent = `Score: ${score}`;
                    resultElement.textContent = "Correct!";
                } else {
                    resultElement.textContent = `Incorrect! The correct answer is ${questions[currentQuestion].options[questions[currentQuestion].answer]}`;
                }
            });
            optionsList.appendChild(optionElement);
        });
    } else {
        questionElement.textContent = "Quiz finished!";
        optionsList.innerHTML = "";
        resultElement.textContent = `Your final score is ${score} out of ${questions.length}`;
    }
});


async function fetchQuizQuestions() {
    const response = await fetch("https://opentdb.com/api.php?amount=10");
    const data = await response.json();
    return data.results;
}

fetchQuizQuestions().then((questions) => {
    const quizContainer = document.getElementById("quiz-container");
    const quizQuestion = document.getElementById("quiz-question");

    quizQuestion.textContent = questions[0].question;
    quizIncorrect = questions[0].incorrect_answers;
    quizCorrect = questions[0].correct_answer;

    const allAnswers = [...quizIncorrect, quizCorrect].sort(() => Math.random() - 0.5);

    allAnswers.forEach((answer, index) => {
        const label = document.createElement("label");
        label.innerHTML = `
            <input type="radio" name="answer" value="${answer}">
            ${answer}
        `;
        quizContainer.appendChild(label);
    });
    
});
document.getElementById("quiz-form").addEventListener("submit", function (e) {
    const radios = document.querySelectorAll(
        '#quiz-container input[type="radio"]'
    );

    const almenoUno = Array.from(radios).some(r => r.checked);

    if (!almenoUno) {
        e.preventDefault();
        document.getElementById("error").style.display = "block";
    } else {
        document.getElementById("error").style.display = "none";
    }
});


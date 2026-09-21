// 1. Welcome Screen Hide Event
document.getElementById('enter-btn').addEventListener('click', function() {
    document.getElementById('welcome-screen').style.display = 'none';
    document.getElementById('main-content').style.display = 'block';
});

// 2. Live Search Functionality
document.getElementById('searchInput').addEventListener('keyup', function() {
    let filterValue = this.value.toLowerCase();
    let cards = document.querySelectorAll('.card');

    cards.forEach(function(card) {
        let textContent = card.textContent.toLowerCase();
        if (textContent.includes(filterValue)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
});

// 3. Interactive MCQ Quiz Engine
const quizData = [
    {
        question: "1. Data Structure mein Stack kis principle par kaam karta hai?",
        options: ["FIFO (First In First Out)", "LIFO (Last In Last Out)", "LILO (Last In Last Out)", "Random"],
        correct: 1
    },
    {
        question: "2. C++ Language ko kisne develop kiya tha?",
        options: ["Dennis Ritchie", "Bjarne Stroustrup", "James Gosling", "Guido van Rossum"],
        correct: 1
    },
    {
        question: "3. Class 12 Physics: Electric Field Intensity ki SI unit kya hoti hai?",
        options: ["Newton/Coulomb (N/C)", "Joule/Coulomb (J/C)", "Volt/Meter (V/m)", "Both A & C"],
        correct: 3
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuiz() {
    const questionEl = document.getElementById('question-text');
    const optionsEl = document.getElementById('quiz-options');
    const scoreEl = document.getElementById('quiz-score');

    if (!questionEl || !optionsEl) return;

    if (currentQuestion < quizData.length) {
        let q = quizData[currentQuestion];
        questionEl.textContent = q.question;
        optionsEl.innerHTML = '';
        scoreEl.textContent = `Score: ${score} / ${quizData.length}`;

        q.options.forEach((option, index) => {
            const btn = document.createElement('button');
            btn.classList.add('quiz-option-btn');
            btn.textContent = option;
            btn.onclick = () => checkAnswer(index);
            optionsEl.appendChild(btn);
        });
    } else {
        questionEl.textContent = "Quiz Completed! 🎉";
        optionsEl.innerHTML = '';
        scoreEl.textContent = `Final Score: ${score} / ${quizData.length}`;
    }
}

function checkAnswer(selectedIndex) {
    if (selectedIndex === quizData[currentQuestion].correct) {
        score++;
        alert("Correct Answer! ✅");
    } else {
        alert("Wrong Answer! ❌");
    }
    currentQuestion++;
    loadQuiz();
}

// Page load hone par Quiz initiate karna
document.addEventListener('DOMContentLoaded', loadQuiz);
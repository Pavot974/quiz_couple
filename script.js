const questionsCouple = [
    "Quel est le film préféré de votre partenaire ?",
    "Quel est le plat préféré de votre partenaire ?",
    "Quel est le livre préféré de votre partenaire ?",
    "Quelle est la destination de vacances idéale de votre partenaire ?",
    "Quel est le hobby préféré de votre partenaire ?",
    "Quel est le plus grand rêve de votre partenaire ?",
    "Quelle est la plus grande peur de votre partenaire ?",
    "Quelle chanson votre partenaire considère-t-il comme sa préférée ?",
    "Quel est le super-héros préféré de votre partenaire ?",
    "Quelle est la série préférée de votre partenaire ?",
    "Quelle est la couleur préférée de votre partenaire ?",
    "Quel est le plus beau souvenir que vous avez partagé ensemble ?",
    "Quel est le film que votre partenaire pourrait regarder en boucle ?",
    "Quel est l'animal préféré de votre partenaire ?",
    "Quelle est la qualité que votre partenaire apprécie le plus chez vous ?",
    "Quel est le meilleur moment passé ensemble selon votre partenaire ?",
    "Quel est le sport préféré de votre partenaire ?",
    "Quelle est la période de l'année préférée de votre partenaire ?",
    "Quelle est la plus grande réussite de votre partenaire ?",
    "Quelle est la chose que votre partenaire ferait s'il gagnait à la loterie ?",
    "Quel est le talent caché de votre partenaire ?",
    "Quel est le vêtement préféré de votre partenaire ?",
    "Quelle est la tradition familiale préférée de votre partenaire ?",
    "Quelle est la chose la plus folle que votre partenaire aimerait faire ?",
    "Quel est le style musical préféré de votre partenaire ?",
    "Quel est le meilleur conseil que votre partenaire ait jamais reçu ?",
    "Quelle est la première impression que votre partenaire a eue de vous ?",
    "Quel est le plat que votre partenaire déteste ?",
    "Quel est le rêve d'enfance de votre partenaire ?",
    "Quel est le défaut que votre partenaire aimerait changer chez lui ?",
    "Quel est le plus grand changement que votre partenaire aimerait apporter à sa vie ?",
    "Quelle est la chose que votre partenaire aime le plus chez lui ?",
    "Quel est le film qui fait pleurer votre partenaire ?",
    "Quelle est la série qui fait rire votre partenaire ?",
    "Quel est le secret que votre partenaire a partagé avec vous ?",
    "Quelle est la compétence que votre partenaire aimerait apprendre ?",
    "Quel est le meilleur cadeau que votre partenaire ait jamais reçu ?",
    "Quelle est la chose que votre partenaire aimerait changer dans le monde ?",
    "Quel est l'endroit où votre partenaire aimerait vivre ?",
    "Quelle est la qualité que votre partenaire admire chez les autres ?",
    "Quel est le moment le plus gênant que votre partenaire a vécu ?",
    "Quel est l'événement marquant de la vie de votre partenaire ?",
    "Quelle est la première chose que votre partenaire ferait s'il était célèbre ?",
    "Quel est le souvenir le plus précieux de l'enfance de votre partenaire ?",
    "Quel est le but que votre partenaire aimerait atteindre dans la vie ?",
    "Quelle est la chanson que votre partenaire chante sous la douche ?",
    "Quel est le film d'horreur préféré de votre partenaire ?",
    "Quel est le personnage de film que votre partenaire admire le plus ?",
    "Quel est le restaurant préféré de votre partenaire ?",
    "Quel est le produit de beauté préféré de votre partenaire ?",
    "Quel est le moment le plus heureux de la vie de votre partenaire ?",
    "Quel est le jeu de société préféré de votre partenaire ?",
    "Quel est le voyage que votre partenaire aimerait faire ?",
    "Quel est le personnage de livre préféré de votre partenaire ?",
    "Quelle est l'activité que votre partenaire déteste faire ?",
    "Quel est le moment le plus romantique que votre partenaire a vécu ?",
    "Quel est le sport que votre partenaire aime regarder à la télé ?",
    "Quel est le jeu vidéo préféré de votre partenaire ?",
    "Quelle est la chose que votre partenaire ferait pour passer plus de temps avec vous ?",
    "Quel est le plat que votre partenaire aimerait apprendre à cuisiner ?",
    "Quelle est l'émission de télévision que votre partenaire regarde en ce moment ?",
    "Quel est le dessin animé préféré de votre partenaire ?",
    "Quel est le dessert préféré de votre partenaire ?",
    "Quel est le meilleur film d'amour selon votre partenaire ?",
    "Quel est l'objet sentimental de votre partenaire ?",
    "Quel est le mot que votre partenaire utilise le plus souvent ?",
    "Quel est le sentiment que votre partenaire aimerait ressentir plus souvent ?",
    "Quel est le moment le plus difficile de la vie de votre partenaire ?",
    "Quel est le film de Disney préféré de votre partenaire ?",
    "Quel est le super pouvoir que votre partenaire aimerait avoir ?"
];

let currentQuestionIndex = 0;
let player1Answers = [];
let player2Answers = [];
const totalQuestions = 10; // Nombre total de questions à poser
let selectedQuestions = [];

const quizContainer = document.getElementById("quizContainer");
const resultsContainer = document.getElementById("resultsContainer");
const currentPlayer = document.getElementById("currentPlayer");
const questionContainer = document.getElementById("questionContainer");
const answerInput = document.getElementById("answerInput");
const submitAnswerButton = document.getElementById("submitAnswerButton");
const resultsTableContainer = document.getElementById("resultsTableContainer");
const startButton = document.getElementById("startButton");
const restartButton = document.getElementById("restartButton");

startButton.addEventListener("click", startQuiz);
submitAnswerButton.addEventListener("click", submitAnswer);
restartButton.addEventListener("click", restartQuiz);

function startQuiz() {
    currentQuestionIndex = 0;
    player1Answers = [];
    player2Answers = [];
    questionContainer.innerHTML = '';
    resultsContainer.style.display = 'none';
    quizContainer.style.display = 'block';
    startButton.style.display = 'none';

    // Choisir 10 questions aléatoires parmi la liste de questions
    selectedQuestions = [];
    while (selectedQuestions.length < totalQuestions) {
        const randomIndex = Math.floor(Math.random() * questionsCouple.length);
        const question = questionsCouple[randomIndex];
        if (!selectedQuestions.includes(question)) {
            selectedQuestions.push(question);
        }
    }

    askQuestion();
}

function askQuestion() {
    if (currentQuestionIndex < totalQuestions) {
        currentPlayer.innerText = `Tour de Joueur 1`;
        questionContainer.innerText = selectedQuestions[currentQuestionIndex];
        answerInput.value = '';
        answerInput.focus();
    } else {
        displayResults();
    }
}

function submitAnswer() {
    const answer = answerInput.value.trim();
    if (!answer) {
        alert('Veuillez entrer une réponse avant de soumettre.');
        return;
    }

    // Collecter les réponses des deux joueurs
    if (currentPlayer.innerText.includes("Joueur 1")) {
        player1Answers.push(answer); // Réponse du Joueur 1
        currentPlayer.innerText = `Tour de Joueur 2`;
    } else {
        player2Answers.push(answer); // Réponse du Joueur 2
        currentQuestionIndex++;
        currentPlayer.innerText = `Tour de Joueur 1`;
    }

    answerInput.value = '';

    // Passer à la question suivante
    if (currentQuestionIndex < totalQuestions) {
        questionContainer.innerText = selectedQuestions[currentQuestionIndex];
    } else {
        displayResults();
    }
}

function displayResults() {
    quizContainer.style.display = 'none';
    resultsContainer.style.display = 'block';

    let tableHTML = '<table><tr><th>Question</th><th>Réponse Joueur 1</th><th>Réponse Joueur 2</th></tr>';

    for (let i = 0; i < totalQuestions; i++) {
        tableHTML += `<tr><td>${selectedQuestions[i]}</td><td>${player1Answers[i] || 'Non répondu'}</td><td>${player2Answers[i] || 'Non répondu'}</td></tr>`;
    }

    tableHTML += '</table>';
    resultsTableContainer.innerHTML = tableHTML;
}

function restartQuiz() {
    resultsContainer.style.display = 'none';
    startButton.style.display = 'block';
}

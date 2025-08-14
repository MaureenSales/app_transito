// Elementos del DOM
const tfBtn = document.getElementById("tf-btn");
const mcBtn = document.getElementById("mc-btn");
const nextBtn = document.getElementById("next-btn");
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const quizContainer = document.getElementById("quiz-container");
const questionDiv = document.getElementById("question");
const scoreDiv = document.getElementById("score");

// Variables de estado
let currentQuiz = [];
let currentQuestion = 0;
let score = 0;
let quizType = "";
let answered = false;

// Event listeners
tfBtn.addEventListener("click", () => startQuiz("tf"));
mcBtn.addEventListener("click", () => startQuiz("mc"));
nextBtn.addEventListener("click", nextQuestion);
menuBtn.addEventListener("click", showMenu);

function startQuiz(type) {
  quizType = type;
  currentQuestion = 0;
  score = 0;
  answered = false;

  currentQuiz =
    type === "tf"
      ? generateTrueFalseQuestions()
      : generateMultipleChoiceQuestions();

  menu.style.display = "none";
  quizContainer.style.display = "block";

  showQuestion();
}

function showQuestion() {
  if (currentQuestion >= currentQuiz.length) {
    showResults();
    return;
  }

  answered = false;
  const question = currentQuiz[currentQuestion];

  let html = `<h3>Pregunta ${currentQuestion + 1} de ${currentQuiz.length}</h3>
               <p>${question.question}</p>`;

  if (quizType === "tf") {
    html += `<div class="tf-buttons">
                   <button class="tf-btn true" onclick="checkAnswer(true)">✓ VERDADERO</button>
                   <button class="tf-btn false" onclick="checkAnswer(false)">✗ FALSO</button>
                 </div>`;
  } else {
    html += '<div class="options">';
    question.options.forEach((option) => {
      html += `<div class="option" onclick="checkAnswer('${option}')">${option}</div>`;
    });
    html += "</div>";
  }

  questionDiv.innerHTML = html;
  updateScore();
}

function checkAnswer(userAnswer) {
  if (answered) return;
  answered = true;

  const question = currentQuiz[currentQuestion];
  const isCorrect = userAnswer === question.answer;

  if (isCorrect) score++;

  // Mostrar feedback visual
  if (quizType === "tf") {
    const buttons = document.querySelectorAll(".tf-btn");
    buttons.forEach((btn) => {
      btn.style.pointerEvents = "none";
      if (
        (btn.classList.contains("true") && question.answer) ||
        (btn.classList.contains("false") && !question.answer)
      ) {
        btn.style.background = "#d4edda";
        btn.style.borderColor = "#28a745";
      }
      if (
        (btn.classList.contains("true") &&
          userAnswer === true &&
          !question.answer) ||
        (btn.classList.contains("false") &&
          userAnswer === false &&
          question.answer)
      ) {
        btn.style.background = "#f8d7da";
        btn.style.borderColor = "#dc3545";
      }
    });
  } else {
    const options = document.querySelectorAll(".option");
    options.forEach((option) => {
      option.style.pointerEvents = "none";
      if (option.textContent === question.answer) {
        option.classList.add("correct");
      } else if (option.textContent === userAnswer && !isCorrect) {
        option.classList.add("incorrect");
      }
    });
  }

  // Mostrar explicación
  const feedback = document.createElement("div");
  feedback.className = `feedback ${isCorrect ? "correct" : "incorrect"}`;
  feedback.textContent = question.explanation;
  questionDiv.appendChild(feedback);

  updateScore();
}

function nextQuestion() {
  currentQuestion++;
  showQuestion();
}

function updateScore() {
  scoreDiv.textContent = `Puntuación: ${score}/${
    currentQuestion + (answered ? 1 : 0)
  }`;
}

function showResults() {
  const percentage = Math.round((score / currentQuiz.length) * 100);
  let message = "";

  if (percentage >= 90) message = "¡Excelente conocimiento!";
  else if (percentage >= 70) message = "Buen nivel de conocimiento";
  else if (percentage >= 50) message = "Nivel aceptable, sigue estudiando";
  else message = "Necesitas repasar más el material";

  questionDiv.innerHTML = `
        <div style="text-align: center;">
            <h2>🏆 Resultados Finales</h2>
            <div style="font-size: 3em; margin: 20px 0; color: #667eea;">${score}/${currentQuiz.length}</div>
            <div style="font-size: 2em; margin: 20px 0; color: #2c3e50;">${percentage}%</div>
            <div style="font-size: 1.2em; font-weight: bold; color: #28a745;">${message}</div>
        </div>
    `;
}

function showMenu() {
  menu.style.display = "block";
  quizContainer.style.display = "none";
}

// Funciones para generar preguntas
function generateTrueFalseQuestions() {
  const questions = [];

  datos.definiciones.forEach((item) => {
    // Pregunta verdadera
    questions.push({
      question: `${item.term} se define como: ${item.definicion}`,
      answer: true,
      explanation: "Definición correcta según el texto de seguridad vial.",
    });

    // Pregunta falsa
    const wrongDef =
      datos.definiciones[Math.floor(Math.random() * datos.definiciones.length)];
    if (wrongDef.term !== item.term) {
      questions.push({
        question: `${item.term} se define como: ${wrongDef.definicion}`,
        answer: false,
        explanation: `Definición incorrecta. ${item.term} se define como: ${item.definicion}`,
      });
    }
  });

  datos.licencias.forEach((item) => {
    questions.push({
      question: `La categoría ${item.categoria} corresponde a: ${item.descripcion}`,
      answer: true,
      explanation: "Categoría correcta según la normativa.",
    });
  });

  return questions.sort(() => Math.random() - 0.5).slice(0, 10);
}

function standardMultipleChoiceQuestion(
  arrayItems,
  nameTerm,
  nameProperty,
  messageQuestion,
  messageExplanation
) {
  const questions = [];

  arrayItems.forEach((item) => {
    const options = [item[nameProperty]];
    while (options.length < 4) {
      const randomDef =
        arrayItems[Math.floor(Math.random() * arrayItems.length)];
      if (!options.includes(randomDef[nameProperty])) {
        options.push(randomDef[nameProperty]);
      }
    }

    questions.push({
      question: messageQuestion + " " + item[nameTerm] + "?",
      options: options.sort(() => Math.random() - 0.5),
      answer: item[nameProperty],
      explanation: messageExplanation + " " + item[nameProperty],
    });
  });
  return questions;
}

function generateMultipleChoiceQuestions() {
  const questions = [];

  // Preguntas sobre definiciones - CORREGIDO
  questions.push(
    ...standardMultipleChoiceQuestion(
      datos.definiciones,
      "term",
      "definicion",
      "¿Cuál es la definición correcta de",
      "La definición correcta es:"
    )
  );

  // Preguntas sobre categorías de licencia - CORREGIDO
  questions.push(
    ...standardMultipleChoiceQuestion(
      datos.licencias,
      "categoria",
      "descripcion",
      "¿A qué corresponde la categoría de licencia",
      "La categoría corresponde a:"
    )
  );

  // Preguntas sobre velocidades y visibilidad
  const randomV = Math.floor(Math.random() * (20 - 3 + 1) + 3) * 10;

  const options = (() => {
    const min = 12;
    const max = 60;
    let count = 3;
    const result = [];

    do {
      const randomNum =
        (Math.floor(Math.random() * (max - min + 1)) + min) * 10;
      if (!result.includes(randomNum)) {
        result.push(randomNum);
        count -= 1;
      }
    } while (count > 0);

    result.push(randomV * 3);
    result.sort((a, b) => a - b);
    return result;
  })();

  questions.push({
    question: `¿Cuál es la visibilidad mínima requerida en vías de ${randomV} km/h?`,
    options: options,
    answer: `${randomV * 3}`,
    explanation: `La velocidad de ${randomV} km/h tiene visibilidad mínima requerida de: ${
      randomV * 3
    } metros`,
  });

  questions.push({
    question: "¿Cada cuántos años se renueva la licencia de conducción?",
    options: ["5 años", "8 años", "10 años", "15 años"],
    answer: "10 años",
    explanation: "La licencia de conducción se renueva cada 10 años.",
  });
  
  return questions.sort(() => Math.random() - 0.5).slice(0, 10);
}
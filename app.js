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

// FUNCIONES UTILITARIAS REFACTORIZADAS

/**
 * Genera opciones aleatorias para preguntas de opción múltiple
 * @param {Array} dataArray - Array de datos del que obtener opciones
 * @param {string} correctAnswer - Respuesta correcta
 * @param {string} propertyName - Nombre de la propiedad a usar como opción
 * @param {number} totalOptions - Número total de opciones (default: 4)
 * @returns {Array} Array de opciones mezcladas
 */
function generateRandomOptions(dataArray, correctAnswer, propertyName, totalOptions = 4) {
  const options = [correctAnswer];
  
  while (options.length < totalOptions) {
    const randomItem = dataArray[Math.floor(Math.random() * dataArray.length)];
    const optionValue = randomItem[propertyName];
    
    if (!options.includes(optionValue)) {
      options.push(optionValue);
    }
  }
  
  return options.sort(() => Math.random() - 0.5);
}

/**
 * Crea una pregunta de opción múltiple genérica
 * @param {Object} config - Configuración de la pregunta
 * @param {string} config.questionText - Texto de la pregunta
 * @param {Array} config.options - Opciones de respuesta
 * @param {string} config.answer - Respuesta correcta
 * @param {string} config.explanation - Explicación de la respuesta
 * @returns {Object} Objeto de pregunta
 */
function createMultipleChoiceQuestion(config) {
  return {
    question: config.questionText,
    options: config.options,
    answer: config.answer,
    explanation: config.explanation
  };
}

/**
 * Genera preguntas de opción múltiple basadas en un dataset
 * @param {Array} dataArray - Array de datos
 * @param {Object} config - Configuración para generar preguntas
 * @param {Function} config.questionTemplate - Función que genera el texto de la pregunta
 * @param {string} config.answerProperty - Propiedad que contiene la respuesta correcta
 * @param {string} config.optionsProperty - Propiedad usada para generar opciones incorrectas
 * @param {Function} config.explanationTemplate - Función que genera la explicación
 * @returns {Array} Array de preguntas generadas
 */
function generateQuestionsFromData(dataArray, config) {
  return dataArray.map(item => {
    const correctAnswer = item[config.answerProperty];
    const options = generateRandomOptions(
      dataArray, 
      correctAnswer, 
      config.optionsProperty
    );
    
    return createMultipleChoiceQuestion({
      questionText: config.questionTemplate(item),
      options: options,
      answer: correctAnswer,
      explanation: config.explanationTemplate(item)
    });
  });
}

/**
 * Genera preguntas de verdadero/falso para regulaciones
 * @param {Array} regulationsArray - Array de regulaciones
 * @param {string} explanationText - Texto base para la explicación
 * @returns {Array} Array de preguntas de verdadero/falso
 */
function generateTrueFalseFromRegulations(regulationsArray, explanationText) {
  return regulationsArray.map(reg => ({
    question: reg,
    answer: true,
    explanation: explanationText
  }));
}

// Funciones para generar preguntas
function generateTrueFalseQuestions() {
  const questions = [];

  // Preguntas sobre definiciones
  data.definitions.forEach((item) => {
    // Pregunta verdadera
    questions.push({
      question: `${item.term} se define como: ${item.definition}`,
      answer: true,
      explanation: "Definición correcta según el texto de seguridad vial.",
    });

    // Pregunta falsa
    const wrongDef =
      data.definitions[Math.floor(Math.random() * data.definitions.length)];
    if (wrongDef.term !== item.term) {
      questions.push({
        question: `${item.term} se define como: ${wrongDef.definition}`,
        answer: false,
        explanation: `Definición incorreta. ${item.term} se define como: ${item.definition}`,
      });
    }
  });

  // Preguntas sobre licencias
  data.licenses.forEach((item) => {
    questions.push({
      question: `La categoría ${item.category} corresponde a: ${item.description}`,
      answer: true,
      explanation: "Categoría correcta según la normativa.",
    });
  });

  // Generar preguntas de verdadero/falso para diferentes tipos de regulaciones
  const regulationTypes = [
    { data: data.regulaciones_licencias, explanation: "Regulación correcta según el código de seguridad vial." },
    { data: data.requisitos_categoria, explanation: "Requisito según el código de seguridad vial." },
    { data: data.regulaciones_aprendizaje, explanation: "Regulación correcta según el código de seguridad vial." },
    { data: data.documentos_obligatorios, explanation: "Obligatorio según el código de seguridad vial." },
    { data: data.normas_extranjeros, explanation: "Norma correcta según el código de seguridad vial." },
    { data: data.gestion_documentos, explanation: "Documentación correcta según el código de seguridad vial." }
  ];

  regulationTypes.forEach(regType => {
    questions.push(...generateTrueFalseFromRegulations(regType.data, regType.explanation));
  });

  return questions.sort(() => Math.random() - 0.5).slice(0, 10);
}

function generateMultipleChoiceQuestions() {
  const questions = [];

  // Configuraciones para diferentes tipos de preguntas
  const questionConfigs = [
    {
      dataArray: data.definitions,
      config: {
        questionTemplate: (item) => `¿Cuál es la definición correcta de "${item.term}"?`,
        answerProperty: 'definition',
        optionsProperty: 'definition',
        explanationTemplate: (item) => `La definición correcta es: ${item.definition}`
      }
    },
    {
      dataArray: data.vehicles,
      config: {
        questionTemplate: (item) => `¿Cuál es la clase de vehículo ${item.kind}?`,
        answerProperty: 'description',
        optionsProperty: 'description',
        explanationTemplate: (item) => `La clase ${item.kind} se define como: ${item.description}`
      }
    },
    {
      dataArray: data.capacity_weight,
      config: {
        questionTemplate: (item) => `¿A qué corresponde el término ${item.term}?`,
        answerProperty: 'definition',
        optionsProperty: 'definition',
        explanationTemplate: (item) => `El término ${item.term} se define como: ${item.definition}`
      }
    },
    {
      dataArray: data.ways,
      config: {
        questionTemplate: (item) => `¿Qué se define como ${item.term}?`,
        answerProperty: 'definition',
        optionsProperty: 'definition',
        explanationTemplate: (item) => `El término ${item.term} se define como: ${item.definition}`
      }
    },
    {
      dataArray: data.licenses,
      config: {
        questionTemplate: (item) => `¿A qué corresponde la categoría de licencia ${item.category}?`,
        answerProperty: 'description',
        optionsProperty: 'description',
        explanationTemplate: (item) => `La categoría ${item.category} corresponde a: ${item.description}`
      }
    }
  ];

  // Generar preguntas usando las configuraciones
  questionConfigs.forEach(({ dataArray, config }) => {
    questions.push(...generateQuestionsFromData(dataArray, config));
  });

  // Pregunta especial sobre velocidades y visibilidad
  const randomV = Math.floor(Math.random() * (20 - 3 + 1) + 3) * 10;
  const options = (() => {
    const min = 12;
    const max = 60;
    let count = 3;
    const result = [];

    do {
      const randomNum = (Math.floor(Math.random() * (max - min + 1)) + min) * 10;
      if (!result.includes(randomNum)) {
        result.push(randomNum);
        count -= 1;
      }
    } while (count > 0);

    result.push(randomV * 3);
    result.sort((a, b) => a - b);
    return result;
  })();

  questions.push(createMultipleChoiceQuestion({
    questionText: `¿Cuál es la visibilidad mínima requerida en vías de ${randomV} km/h?`,
    options: options,
    answer: (randomV * 3),
    explanation: `La velocidad de ${randomV} km/h tiene visibilidad mínima requerida de: ${randomV * 3} metros`
  }));

  // Pregunta fija sobre renovación de licencia
  questions.push(createMultipleChoiceQuestion({
    questionText: "¿Cada cuántos años se renueva la licencia de conducción?",
    options: ["5 años", "8 años", "10 años", "15 años"],
    answer: "10 años",
    explanation: "La licencia de conducción se renueva cada 10 años."
  }));

  return questions.sort(() => Math.random() - 0.5).slice(0, 10);
}
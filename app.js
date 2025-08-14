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
  let questions = [];

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

  questions = questions.concat(
    generatePrincipiosJuridicosQuestions().filter((q) => q.type === "tf")
  );
  questions = questions.concat(
    generateSemaforoQuestions().filter((q) => q.type === "tf")
  );
  questions = questions.concat(
    generateSenalesHorizontalesQuestions().filter((q) => q.type === "tf")
  );
  questions = questions.concat(
    generateManiobraQuestions().filter((q) => q.type === "tf")
  );
  questions = questions.concat(
    generateRegulacionesCiclosQuestions().filter((q) => q.type === "tf")
  );
  questions = questions.concat(
    generateTraccionAnimalQuestions().filter((q) => q.type === "tf")
  );
  questions = questions.concat(
    generatePeatonesQuestions().filter((q) => q.type === "tf")
  );
  questions = questions.concat(
    generateAccidentesQuestions().filter((q) => q.type === "tf")
  );
  questions = questions.concat(
    generateDimensionesYCargasQuestions().filter((q) => q.type === "tf")
  );
  questions = questions.concat(
    generateEstacionamientoQuestions().filter((q) => q.type === "tf")
  );
  questions = questions.concat(
    generateOtrasSenalesQuestions().filter((q) => q.type === "tf")
  );
  questions = questions.concat(
    generateClasificacionVehiculosQuestions().filter((q) => q.type === "tf")
  );
  questions = questions.concat(
    generatePesoCapacidadQuestions().filter((q) => q.type === "tf")
  );
  questions = questions.concat(
    generateViasQuestions().filter((q) => q.type === "tf")
  );
  questions = questions.concat(
    generateRegulacionesLicenciasQuestions().filter((q) => q.type === "tf")
  );
  questions = questions.concat(generateCrossTopicQuestions().filter(q => q.type === "tf"));
  questions = questions.concat(generateCasosEspecificosQuestions().filter(q => q.type === "tf"));
  return questions.sort(() => Math.random() - 0.5).slice(0, 10);
}

function standardMultipleChoiceQuestion(
  arrayItems,
  nameTerm,
  nameProperty,
  messageQuestion,
  messageExplanation
) {
  let questions = [];

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
  let questions = [];

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

  questions = questions.concat(
    generatePrincipiosJuridicosQuestions().filter((q) => q.type === "mc")
  );
  questions = questions.concat(generateOrdenPrioridadQuestions());
  questions = questions.concat(generateSenalesAgenteQuestions());
  questions = questions.concat(generateBanderasPoliciaQuestions());
  questions = questions.concat(
    generateSemaforoQuestions().filter((q) => q.type === "mc")
  );
  questions = questions.concat(
    generateSenalesHorizontalesQuestions().filter((q) => q.type === "mc")
  );
  questions = questions.concat(generateLimitesVelocidadQuestions());
  questions = questions.concat(
    generateProhibicionesQuestions().filter((q) => q.type === "mc")
  );
  questions = questions.concat(
    generateManiobraQuestions().filter((q) => q.type === "mc")
  );
  questions = questions.concat(generateTransporteQuestions());
  questions = questions.concat(generateExigenciasTecnicasQuestions());
  questions = questions.concat(generateDispositivosVehiculoQuestions());
  questions = questions.concat(generateLucesQuestions());
  questions = questions.concat(
    generateRegulacionesCiclosQuestions().filter((q) => q.type === "mc")
  );
  questions = questions.concat(
    generateTraccionAnimalQuestions().filter((q) => q.type === "mc")
  );
  questions = questions.concat(
    generatePeatonesQuestions().filter((q) => q.type === "mc")
  );
  questions = questions.concat(
    generateAccidentesQuestions().filter((q) => q.type === "mc")
  );
  questions = questions.concat(
    generateDimensionesYCargasQuestions().filter((q) => q.type === "mc")
  );
  questions = questions.concat(generatePrioridadInterseccionesQuestions());
  questions = questions.concat(
    generateEstacionamientoQuestions().filter((q) => q.type === "mc")
  );
  questions = questions.concat(
    generateOtrasSenalesQuestions().filter((q) => q.type === "mc")
  );
  questions = questions.concat(generateUsoViasCarrilesQuestions());
  questions = questions.concat(
    generateClasificacionVehiculosQuestions().filter((q) => q.type === "mc")
  );
  questions = questions.concat(
    generatePesoCapacidadQuestions().filter((q) => q.type === "mc")
  );
  questions = questions.concat(
    generateViasQuestions().filter((q) => q.type === "mc")
  );
  questions = questions.concat(
    generateRegulacionesLicenciasQuestions().filter((q) => q.type === "mc")
  );
  questions = questions.concat(generateCrossTopicQuestions().filter(q => q.type === "mc"));
  questions = questions.concat(generateCasosEspecificosQuestions().filter(q => q.type === "mc"));
  return shuffleArray(questions).slice(0, 10);
}

function shuffleArray(array) {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

function generatePrincipiosJuridicosQuestions() {
  let questions = [];

  // Verdadero/Falso sobre principios
  datos.principiosJuridicos.forEach((principio, index) => {
    questions.push({
      question: `¿Es correcto el siguiente principio jurídico: "${principio}"?`,
      answer: true,
      explanation:
        "Este es un principio jurídico válido en el sistema legal cubano.",
      type: "tf",
    });

    // Crear versión falsa mezclando partes de otros principios
    if (index < datos.principiosJuridicos.length - 1) {
      const wrongPrinciple =
        principio.split(" ").slice(0, -3).join(" ") +
        " " +
        datos.principiosJuridicos[index + 1].split(" ").slice(-3).join(" ");
      questions.push({
        question: `¿Es correcto el siguiente principio jurídico: "${wrongPrinciple}"?`,
        answer: false,
        explanation: `Este no es un principio jurídico válido. El principio correcto es: "${principio}"`,
        type: "tf",
      });
    }
  });

  // Selección múltiple
  const principioGroups = [
    datos.principiosJuridicos.slice(0, 3),
    datos.principiosJuridicos.slice(3, 6),
    datos.principiosJuridicos.slice(6, 9),
  ];

  principioGroups.forEach((group) => {
    if (group.length >= 3) {
      const correct = group[Math.floor(Math.random() * group.length)];
      questions.push({
        question: "¿Cuál de los siguientes es un principio jurídico válido?",
        options: getSmartWrongOptions(correct, datos.principiosJuridicos),
        answer: correct,
        explanation: `El principio correcto es: "${correct}"`,
        type: "mc",
      });
    }
  });

  return questions;
}

// ========== PREGUNTAS SOBRE ORDEN DE PRIORIDAD ==========
function generateOrdenPrioridadQuestions() {
  let questions = [];

  // Pregunta sobre el orden completo
  const ordenIncorrecto = shuffleArray([...datos.ordenPrioridad]);
  questions.push({
    question:
      "¿Cuál es el orden correcto de prioridad en las señales de tránsito?",
    options: [
      datos.ordenPrioridad.join(", "),
      ordenIncorrecto.join(", "),
      datos.ordenPrioridad.slice(1).concat(datos.ordenPrioridad[0]).join(", "),
      datos.ordenPrioridad.slice().reverse().join(", "),
    ],
    answer: datos.ordenPrioridad.join(", "),
    explanation: "El orden correcto es: " + datos.ordenPrioridad.join(", "),
    type: "mc",
  });

  // Preguntas sobre posiciones específicas
  datos.ordenPrioridad.forEach((item, index) => {
    questions.push({
      question: `¿Qué tiene la ${
        index + 1
      }ª prioridad en el orden de señalización?`,
      options: getSmartWrongOptions(item, datos.ordenPrioridad),
      answer: item,
      explanation: `${item} tiene la ${
        index + 1
      }ª prioridad en el orden de señalización.`,
      type: "mc",
    });
  });

  return questions;
}

// ========== PREGUNTAS SOBRE SEÑALES DEL AGENTE ==========
function generateSenalesAgenteQuestions() {
  let questions = [];

  datos.senalesAgente.forEach((senal) => {
    if (senal.circulan && senal.seDetienen) {
      // Pregunta sobre quién circula
      questions.push({
        question: `Con la señal "${senal.senal}", ¿quién puede circular?`,
        options: [
          senal.circulan,
          senal.seDetienen,
          "Todos los usuarios de la vía",
          "Nadie puede circular",
        ],
        answer: senal.circulan,
        explanation: `Con esta señal circulan: ${senal.circulan}`,
        type: "mc",
      });

      // Pregunta sobre quién se detiene
      questions.push({
        question: `Con la señal "${senal.senal}", ¿quién debe detenerse?`,
        options: [
          senal.seDetienen,
          senal.circulan,
          "Todos los usuarios de la vía",
          "Nadie debe detenerse",
        ],
        answer: senal.seDetienen,
        explanation: `Con esta señal se detienen: ${senal.seDetienen}`,
        type: "mc",
      });
    }

    // Preguntas sobre silbato
    if (senal.unToqueLargo) {
      questions.push({
        question:
          "¿Qué significa un toque largo de silbato del agente de tránsito?",
        options: [
          senal.unToqueLargo,
          senal.toquesCortos,
          "Precaución",
          "Emergencia",
        ],
        answer: senal.unToqueLargo,
        explanation: `Un toque largo significa: ${senal.unToqueLargo}`,
        type: "mc",
      });

      questions.push({
        question:
          "¿Qué significan los toques cortos de silbato del agente de tránsito?",
        options: [
          senal.toquesCortos,
          senal.unToqueLargo,
          "Precaución",
          "Emergencia",
        ],
        answer: senal.toquesCortos,
        explanation: `Los toques cortos significan: ${senal.toquesCortos}`,
        type: "mc",
      });
    }
  });

  return questions;
}

// ========== PREGUNTAS SOBRE BANDERAS DE POLICÍA ==========
function generateBanderasPoliciaQuestions() {
  let questions = [];

  datos.banderasPolicia.forEach((bandera) => {
    // Pregunta sobre el significado de cada color
    const otrosBanderas = datos.banderasPolicia.filter(
      (b) => b.color !== bandera.color
    );
    questions.push({
      question: `¿Qué significa la bandera ${bandera.color} de la policía?`,
      options: [
        bandera.descripcion,
        ...otrosBanderas.map((b) => b.descripcion),
      ],
      answer: bandera.descripcion,
      explanation: `La bandera ${bandera.color} significa: ${bandera.descripcion}`,
      type: "mc",
    });

    // Pregunta sobre la acción requerida
    questions.push({
      question: `Al ver una bandera ${bandera.color} de la policía, ¿qué deben hacer los usuarios de la vía?`,
      options: [bandera.accion, ...otrosBanderas.map((b) => b.accion)],
      answer: bandera.accion,
      explanation: `Con bandera ${bandera.color} deben: ${bandera.accion}`,
      type: "mc",
    });

    // Verdadero/Falso
    questions.push({
      question: `La bandera ${bandera.color} significa que ${bandera.descripcion}`,
      answer: true,
      explanation: `Correcto. La bandera ${bandera.color} indica: ${bandera.descripcion}`,
      type: "tf",
    });
  });

  return questions;
}

// ========== PREGUNTAS SOBRE SEMÁFOROS ==========
function generateSemaforoQuestions() {
  let questions = [];

  // Función del semáforo
  questions.push({
    question: "¿Cuál es la función principal del semáforo?",
    options: [
      datos.semaforo.funcion,
      "Indicar la velocidad máxima permitida",
      "Señalar zonas de estacionamiento",
      "Marcar límites de velocidad urbana",
    ],
    answer: datos.semaforo.funcion,
    explanation: `La función del semáforo es: ${datos.semaforo.funcion}`,
    type: "mc",
  });

  // Disposición de luces
  questions.push({
    question: "¿En qué orden se ubican las luces del semáforo?",
    options: [
      "roja, amarilla, verde",
      "verde, amarilla, roja",
      "amarilla, roja, verde",
      "roja, verde, amarilla",
    ],
    answer: "roja, amarilla, verde",
    explanation: "Las luces se ubican de arriba abajo: roja, amarilla, verde",
    type: "mc",
  });

  // Preguntas sobre cada color
  datos.semaforo_colores.forEach((color) => {
    const otrosColores = datos.semaforo_colores.filter(
      (c) => c.color !== color.color
    );

    questions.push({
      question: `¿Qué deben hacer los usuarios ante la luz ${color.color}?`,
      options: [
        color.descripcion,
        ...otrosColores.slice(0, 3).map((c) => c.descripcion),
      ],
      answer: color.descripcion,
      explanation: `Con luz ${color.color}: ${color.descripcion}`,
      type: "mc",
    });

    // Verdadero/Falso
    questions.push({
      question: `La luz ${color.color} del semáforo significa: ${color.descripcion}`,
      answer: true,
      explanation: `Correcto. La luz ${color.color} indica: ${color.descripcion}`,
      type: "tf",
    });
  });

  return questions;
}

// ========== PREGUNTAS SOBRE SEÑALES HORIZONTALES ==========
function generateSenalesHorizontalesQuestions() {
  let questions = [];

  datos.senalesHorizontales.forEach((senal) => {
    const otrasSeñales = datos.senalesHorizontales.filter(
      (s) => s.senal !== senal.senal
    );

    questions.push({
      question: `¿Qué significa la señal horizontal "${senal.senal}"?`,
      options: [
        senal.descripcion,
        ...shuffleArray(otrasSeñales)
          .slice(0, 3)
          .map((s) => s.descripcion),
      ],
      answer: senal.descripcion,
      explanation: `La señal "${senal.senal}" significa: ${senal.descripcion}`,
      type: "mc",
    });

    // Verdadero/Falso
    questions.push({
      question: `La señal horizontal "${senal.senal}" significa: ${senal.descripcion}`,
      answer: true,
      explanation: `Correcto. Esta señal indica: ${senal.descripcion}`,
      type: "tf",
    });
  });

  return questions;
}

// ========== PREGUNTAS SOBRE LÍMITES DE VELOCIDAD ==========
function generateLimitesVelocidadQuestions() {
  let questions = [];

  // Límite general urbano
  questions.push({
    question: "¿Cuál es el límite de velocidad general en zona urbana?",
    options: ["50 kph", "40 kph", "60 kph", "30 kph"],
    answer: "50 kph",
    explanation:
      "El límite general en zona urbana es 50 kph para todo vehículo de motor",
    type: "mc",
  });

  // Límites especiales
  datos.limitesVelocidad.generales.limitesEspeciales.forEach((limite) => {
    limite.aplicacion.forEach((aplicacion) => {
      const otrosLimites = datos.limitesVelocidad.generales.limitesEspeciales
        .filter((l) => l.limite !== limite.limite)
        .map((l) => l.limite);

      questions.push({
        question: `¿Cuál es el límite de velocidad para ${aplicacion}?`,
        options: getSmartWrongOptions(
          limite.limite,
          [limite.limite, ...otrosLimites],
          "velocity"
        ),
        answer: limite.limite,
        explanation: `Para ${aplicacion} el límite es ${limite.limite}`,
        type: "mc",
      });
    });
  });

  // Límites por tipo de vehículo
  datos.limitesVelocidad.porTipoVehiculo.forEach((vehiculo) => {
    questions.push({
      question: `¿Cuál es el límite de velocidad en carretera para ${vehiculo.tipo}?`,
      options: [
        vehiculo.carretera,
        vehiculo.autopista,
        datos.limitesVelocidad.porTipoVehiculo.find((v) => v !== vehiculo)
          ?.carretera || "70 kph",
        "50 kph",
      ],
      answer: vehiculo.carretera,
      explanation: `En carretera, ${vehiculo.tipo} puede circular a ${vehiculo.carretera}`,
      type: "mc",
    });

    questions.push({
      question: `¿Cuál es el límite de velocidad en autopista para ${vehiculo.tipo}?`,
      options: [
        vehiculo.autopista,
        vehiculo.carretera,
        datos.limitesVelocidad.porTipoVehiculo.find((v) => v !== vehiculo)
          ?.autopista || "80 kph",
        "60 kph",
      ],
      answer: vehiculo.autopista,
      explanation: `En autopista, ${vehiculo.tipo} puede circular a ${vehiculo.autopista}`,
      type: "mc",
    });
  });

  // Límites de túneles
  questions.push({
    question: "¿Cuál es la velocidad mínima en túneles?",
    options: ["60 kph", "50 kph", "40 kph", "70 kph"],
    answer: "60 kph",
    explanation: "La velocidad mínima en túneles es 60 kph",
    type: "mc",
  });

  return questions;
}

// ========== PREGUNTAS SOBRE PROHIBICIONES ==========
function generateProhibicionesQuestions() {
  let questions = [];

  // Prohibiciones de circulación
  datos.prohibiciones.circulacion.forEach((prohibicion) => {
    questions.push({
      question: `¿Es cierto que está prohibido: ${prohibicion}?`,
      answer: true,
      explanation:
        "Esta es una prohibición válida según la normativa de tránsito.",
      type: "tf",
    });

    // Crear pregunta de selección múltiple agrupando prohibiciones
    const otrasProhibiciones = datos.prohibiciones.circulacion
      .filter((p) => p !== prohibicion)
      .slice(0, 3);

    questions.push({
      question: "¿Cuál de las siguientes es una prohibición de circulación?",
      options: shuffleArray([prohibicion, ...otrasProhibiciones]),
      answer: prohibicion,
      explanation: `Esta prohibición es correcta: ${prohibicion}`,
      type: "mc",
    });
  });

  // Prohibiciones de estacionamiento con distancias específicas
  const prohibicionesConDistancia = datos.prohibiciones.estacionamiento.filter(
    (p) => p.includes("m") || p.includes("cm")
  );

  prohibicionesConDistancia.forEach((prohibicion) => {
    const distancia = prohibicion.match(/\d+\s*(m|cm)/)?.[0];
    if (distancia) {
      const wrongDistances = [
        "5 m",
        "15 m",
        "20 m",
        "30 m",
        "1 m",
        "2 m",
      ].filter((d) => d !== distancia);
      const questionText = prohibicion.replace(distancia, "___");

      questions.push({
        question: `Complete la prohibición de estacionamiento: "${questionText}"`,
        options: shuffleArray([distancia, ...wrongDistances.slice(0, 3)]),
        answer: distancia,
        explanation: `La distancia correcta es: ${distancia}`,
        type: "mc",
      });
    }
  });

  return questions;
}

// ========== PREGUNTAS SOBRE MANIOBRAS ==========
function generateManiobraQuestions() {
  let questions = [];

  // Giros
  Object.entries(datos.maniobras.giros).forEach(([tipo, descripcion]) => {
    if (tipo !== "autorizadosPorFlechas" && tipo !== "ciclocarriles") {
      questions.push({
        question: `¿Desde dónde se debe realizar el giro a la ${tipo}?`,
        options: [
          descripcion,
          datos.maniobras.giros[tipo === "derecha" ? "izquierda" : "derecha"],
          "Desde cualquier carril",
          "Desde el carril central",
        ],
        answer: descripcion,
        explanation: `Giro a la ${tipo}: ${descripcion}`,
        type: "mc",
      });
    }
  });

  // Adelantamiento - procedimiento
  datos.maniobras.adelantamiento.procedimiento.forEach((paso, index) => {
    questions.push({
      question: `¿Es correcto este paso del adelantamiento: "${paso}"?`,
      answer: true,
      explanation:
        "Este es un paso correcto del procedimiento de adelantamiento.",
      type: "tf",
    });
  });

  // Adelantamiento - prohibiciones
  datos.maniobras.adelantamiento.prohibidoEn.forEach((lugar) => {
    questions.push({
      question: `¿Está prohibido adelantar en ${lugar}?`,
      answer: true,
      explanation: `Correcto. Está prohibido adelantar en ${lugar}`,
      type: "tf",
    });

    // Crear pregunta falsa
    const lugaresPermitidos = [
      "rectas largas",
      "vías amplias",
      "carreteras despejadas",
    ];
    const lugarPermitido =
      lugaresPermitidos[Math.floor(Math.random() * lugaresPermitidos.length)];
    questions.push({
      question: `¿Está prohibido adelantar en ${lugarPermitido}?`,
      answer: false,
      explanation: `No está prohibido adelantar en ${lugarPermitido}, siempre que se haga con seguridad`,
      type: "tf",
    });
  });

  // Retroceso
  datos.maniobras.retroceso.prohibidoEn.forEach((lugar) => {
    questions.push({
      question: `¿Está prohibido el retroceso en ${lugar}?`,
      answer: true,
      explanation: `Correcto. El retroceso está prohibido en ${lugar}`,
      type: "tf",
    });
  });

  return questions;
}

// ========== PREGUNTAS SOBRE TRANSPORTE ==========
function generateTransporteQuestions() {
  let questions = [];

  // Transporte de personas - velocidades
  const velocidadUrbana = "40 kph";
  const velocidadRural = "60 kph";

  questions.push({
    question:
      "¿Cuál es la velocidad máxima para vehículos de carga transportando personas en zona urbana?",
    options: [velocidadUrbana, velocidadRural, "50 kph", "30 kph"],
    answer: velocidadUrbana,
    explanation: `En zona urbana la velocidad no debe exceder ${velocidadUrbana} transportando personas`,
    type: "mc",
  });

  questions.push({
    question:
      "¿Cuál es la velocidad máxima para vehículos de carga transportando personas en zona rural?",
    options: [velocidadRural, velocidadUrbana, "70 kph", "80 kph"],
    answer: velocidadRural,
    explanation: `En zona rural la velocidad no debe exceder ${velocidadRural} transportando personas`,
    type: "mc",
  });

  // Regulaciones específicas
  datos.transportePersonas.casosAutorizados.regulaciones.forEach(
    (regulacion) => {
      questions.push({
        question: `¿Es correcta esta regulación para transporte de personas: "${regulacion}"?`,
        answer: true,
        explanation:
          "Esta es una regulación válida para el transporte autorizado de personas.",
        type: "tf",
      });
    }
  );

  // Motocicletas
  questions.push({
    question: "¿Cuántas personas pueden viajar en una motocicleta?",
    options: [
      "El conductor, una persona detrás y otra en el sidecar",
      "Solo el conductor",
      "El conductor y dos personas detrás",
      "Hasta 4 personas en total",
    ],
    answer: "El conductor, una persona detrás y otra en el sidecar",
    explanation:
      "En motocicleta pueden viajar el conductor, una persona detrás y otra en el sidecar",
    type: "mc",
  });

  return questions;
}

// ========== PREGUNTAS SOBRE EXIGENCIAS TÉCNICAS ==========
function generateExigenciasTecnicasQuestions() {
  let questions = [];

  // Deficiencias de frenos
  datos.exigenciasTecnicas.deficienciasProhibenCirculacion.frenos.forEach(
    (deficiencia) => {
      questions.push({
        question: `¿Prohíbe la circulación esta deficiencia en frenos: "${deficiencia}"?`,
        answer: true,
        explanation:
          "Esta deficiencia en el sistema de frenos prohíbe la circulación del vehículo.",
        type: "tf",
      });
    }
  );

  // Deficiencias de dirección
  datos.exigenciasTecnicas.deficienciasProhibenCirculacion.direccion.forEach(
    (deficiencia) => {
      questions.push({
        question: `¿Prohíbe la circulación esta deficiencia en dirección: "${deficiencia}"?`,
        answer: true,
        explanation:
          "Esta deficiencia en el sistema de dirección prohíbe la circulación del vehículo.",
        type: "tf",
      });
    }
  );

  // Holgura del timón
  questions.push({
    question: "¿Cuál es la holgura máxima permitida del timón?",
    options: ["25 grados", "20 grados", "30 grados", "15 grados"],
    answer: "25 grados",
    explanation: "La holgura del timón no debe ser mayor de 25 grados",
    type: "mc",
  });

  // Plazo para notificaciones
  questions.push({
    question:
      "¿En cuántos días se debe notificar cambios al registro del vehículo?",
    options: ["30 días", "15 días", "45 días", "60 días"],
    answer: "30 días",
    explanation: "Se debe notificar en un plazo de 30 días",
    type: "mc",
  });

  return questions;
}

// ========== PREGUNTAS SOBRE DISPOSITIVOS DEL VEHÍCULO ==========
function generateDispositivosVehiculoQuestions() {
  let questions = [];

  // Bocina
  questions.push({
    question: "¿Dónde está prohibido usar la bocina?",
    options: [
      "Zona urbana y zonas de silencio",
      "Solo en zona rural",
      "En autopistas",
      "En ningún lugar",
    ],
    answer: "Zona urbana y zonas de silencio",
    explanation: "La bocina está prohibida en zona urbana y zonas de silencio",
    type: "mc",
  });

  datos.dispositivosVehiculo.bocina.casosJustificados.forEach((caso) => {
    questions.push({
      question: `¿Es justificado usar la bocina ${caso}?`,
      answer: true,
      explanation: `Sí, está justificado usar la bocina ${caso}`,
      type: "tf",
    });
  });

  // Espejos
  questions.push({
    question:
      "¿A qué distancia mínima deben permitir ver los espejos retrovisores?",
    options: ["50 m", "40 m", "60 m", "30 m"],
    answer: "50 m",
    explanation:
      "Los espejos deben permitir ver a 50 m como mínimo hacia atrás",
    type: "mc",
  });

  // Matrículas
  questions.push({
    question: "¿A qué distancia deben ser legibles las matrículas?",
    options: ["40 m", "50 m", "30 m", "20 m"],
    answer: "40 m",
    explanation: "Las matrículas deben ser legibles a 40 m",
    type: "mc",
  });

  questions.push({
    question:
      "¿A qué distancia debe ser visible la matrícula trasera iluminada de noche?",
    options: ["20 m", "40 m", "30 m", "50 m"],
    answer: "20 m",
    explanation:
      "La matrícula trasera iluminada debe ser visible a 20 m de noche",
    type: "mc",
  });

  return questions;
}

// ========== PREGUNTAS SOBRE LUCES Y DISPOSITIVOS REFLECTANTES ==========
function generateLucesQuestions() {
  let questions = [];

  // Aspectos generales
  questions.push({
    question:
      "¿A qué distancia máxima pueden estar las luces de los bordes laterales?",
    options: ["40 cm", "50 cm", "30 cm", "60 cm"],
    answer: "40 cm",
    explanation:
      "Ninguna luz puede estar a más de 40 cm de los bordes laterales exteriores",
    type: "mc",
  });

  // Luces delanteras - alcance
  questions.push({
    question: "¿Cuál es el alcance mínimo de las luces de carretera?",
    options: ["100 m", "80 m", "120 m", "90 m"],
    answer: "100 m",
    explanation:
      "Las luces de carretera deben tener un alcance mínimo de 100 m",
    type: "mc",
  });

  questions.push({
    question: "¿Cuál es el alcance de las luces de cruce?",
    options: ["40 m", "50 m", "30 m", "60 m"],
    answer: "40 m",
    explanation: "Las luces de cruce tienen un alcance de 40 m",
    type: "mc",
  });

  // Luces de posición
  questions.push({
    question: "¿A qué distancia deben ser visibles las luces de posición?",
    options: ["300 m", "200 m", "150 m", "250 m"],
    answer: "300 m",
    explanation: "Las luces de posición deben ser visibles a 300 m",
    type: "mc",
  });

  // Dispositivos reflectantes
  questions.push({
    question:
      "¿A qué distancia deben ser visibles los dispositivos reflectantes?",
    options: ["150 m", "100 m", "200 m", "120 m"],
    answer: "150 m",
    explanation: "Los dispositivos reflectantes deben ser visibles a 150 m",
    type: "mc",
  });

  // Cambio de luces
  questions.push({
    question:
      "¿A qué distancia se deben cambiar las luces largas por cortas al aproximarse un vehículo?",
    options: ["150 m", "100 m", "200 m", "120 m"],
    answer: "150 m",
    explanation:
      "Se deben cambiar las luces a 150 m del vehículo que se acerca",
    type: "mc",
  });

  questions.push({
    question:
      "¿A qué distancia se deben cambiar las luces para evitar deslumbrar al vehículo de adelante?",
    options: ["50 m", "100 m", "30 m", "80 m"],
    answer: "50 m",
    explanation:
      "Se deben cambiar las luces a menos de 50 m del vehículo que circula delante",
    type: "mc",
  });

  return questions;
}

// ========== PREGUNTAS SOBRE REGULACIONES DE CICLOS ==========
function generateRegulacionesCiclosQuestions() {
  let questions = [];

  datos.regulacionesCiclos.prohibiciones.forEach((prohibicion) => {
    questions.push({
      question: `¿Es cierto que está prohibido para ciclos: ${prohibicion}?`,
      answer: true,
      explanation: "Esta es una prohibición válida para conductores de ciclos.",
      type: "tf",
    });
  });

  // Pregunta específica sobre edad
  questions.push({
    question:
      "¿A partir de qué edad pueden conducir ciclos por vías de mucho tránsito?",
    options: ["12 años", "10 años", "14 años", "16 años"],
    answer: "12 años",
    explanation:
      "Los menores de 12 años no pueden conducir por vías de mucho tránsito",
    type: "mc",
  });

  // Pregunta sobre distancia del contén
  questions.push({
    question: "¿A qué distancia máxima del contén pueden circular los ciclos?",
    options: ["1 m", "2 m", "1.5 m", "0.5 m"],
    answer: "1 m",
    explanation:
      "Los ciclos no pueden circular a más de 1 m del contén o del borde de la calzada",
    type: "mc",
  });

  return questions;
}

// ========== PREGUNTAS SOBRE TRACCIÓN ANIMAL ==========
function generateTraccionAnimalQuestions() {
  let questions = [];

  datos.regulacionesTraccionAnimal.forEach((regulacion) => {
    questions.push({
      question: `¿Es correcta esta regulación para vehículos de tracción animal: "${regulacion}"?`,
      answer: true,
      explanation:
        "Esta es una regulación válida para vehículos de tracción animal.",
      type: "tf",
    });
  });

  // Pregunta específica sobre edad mínima
  questions.push({
    question:
      "¿Cuál es la edad mínima para conducir vehículos de tracción animal?",
    options: ["16 años", "14 años", "18 años", "15 años"],
    answer: "16 años",
    explanation:
      "Los menores de 16 años no pueden conducir vehículos de tracción animal",
    type: "mc",
  });

  // Pregunta sobre horarios prohibidos
  questions.push({
    question:
      "¿Cuándo está prohibido que circulen por carreteras los vehículos de tracción animal?",
    options: [
      "Del anochecer al amanecer",
      "Durante el día",
      "Solo los fines de semana",
      "En días de lluvia",
    ],
    answer: "Del anochecer al amanecer",
    explanation: "No pueden circular por carreteras del anochecer al amanecer",
    type: "mc",
  });

  return questions;
}

// ========== PREGUNTAS SOBRE PEATONES ==========
function generatePeatonesQuestions() {
  let questions = [];

  // Regulaciones específicas
  datos.regulacionesPeatones.prohibiciones.forEach((prohibicion) => {
    questions.push({
      question: `¿Es correcta esta prohibición para peatones: "${prohibicion}"?`,
      answer: true,
      explanation: "Esta es una prohibición válida para peatones.",
      type: "tf",
    });
  });

  // Zona urbana vs rural
  questions.push({
    question: "¿Por dónde deben circular los peatones en zona urbana?",
    options: [
      "Por la parte derecha de la acera",
      "Por la parte izquierda de la acera",
      "Por el centro de la acera",
      "Por la calzada",
    ],
    answer: "Por la parte derecha de la acera",
    explanation:
      "En zona urbana los peatones circulan por la parte derecha de la acera",
    type: "mc",
  });

  questions.push({
    question: "¿Por dónde deben circular los peatones en zona rural?",
    options: [
      "Por la izquierda de la vía de frente al tránsito",
      "Por la derecha de la vía",
      "Por el centro de la vía",
      "Por cualquier lado",
    ],
    answer: "Por la izquierda de la vía de frente al tránsito",
    explanation:
      "En zona rural circulan por la izquierda de frente al tránsito",
    type: "mc",
  });

  // Tipos de paso peatonal
  questions.push({
    question: "¿Qué tipo de paso peatonal concede prioridad a los peatones?",
    options: ["Tipo cebra", "Tipo franja", "Ambos tipos", "Ninguno"],
    answer: "Tipo cebra",
    explanation: "El paso peatonal tipo cebra concede prioridad a los peatones",
    type: "mc",
  });

  questions.push({
    question: "¿Qué tipo de paso peatonal concede prioridad a los vehículos?",
    options: ["Tipo franja", "Tipo cebra", "Ambos tipos", "Ninguno"],
    answer: "Tipo franja",
    explanation:
      "El paso peatonal tipo franja concede prioridad a los vehículos",
    type: "mc",
  });

  return questions;
}

// ========== PREGUNTAS SOBRE ACCIDENTES ==========
function generateAccidentesQuestions() {
  let questions = [];

  // Casos de notificación inmediata
  datos.obligacionesAccidentes.casos.forEach((caso) => {
    questions.push({
      question: `¿Requiere notificación inmediata a la PNR cuando: ${caso}?`,
      answer: true,
      explanation: "Este caso requiere notificación inmediata a la PNR.",
      type: "tf",
    });
  });

  // Pregunta sobre mantener posición del vehículo
  questions.push({
    question:
      "¿Se debe mantener el vehículo en la misma posición después de un accidente con personas muertas o lesionadas?",
    answer: true,
    explanation:
      "Sí, se debe mantener la posición cuando hay personas muertas o lesionadas",
    type: "tf",
  });

  // Excepción para mover el vehículo
  questions.push({
    question: "¿Cuándo se puede mover el vehículo después de un accidente?",
    options: [
      "Para brindar auxilio a víctimas",
      "Para restablecer el tráfico",
      "Por comodidad del conductor",
      "Nunca se puede mover",
    ],
    answer: "Para brindar auxilio a víctimas",
    explanation:
      "Solo se puede mover para brindar auxilio a víctimas, incluyendo el propio conductor",
    type: "mc",
  });

  return questions;
}

// ========== PREGUNTAS SOBRE DIMENSIONES Y CARGAS ==========
function generateDimensionesYCargasQuestions() {
  let questions = [];

  // Dimensiones máximas
  Object.entries(datos.dimensionesMaximas).forEach(([dimension, valor]) => {
    const wrongValues = [
      "12 m",
      "16 m",
      "20 m",
      "3.5 m",
      "5 m",
      "2.40 m",
      "3 m",
    ].filter((v) => v !== valor);

    questions.push({
      question: `¿Cuál es la ${dimension} máxima permitida para vehículos?`,
      options: shuffleArray([valor, ...wrongValues.slice(0, 3)]),
      answer: valor,
      explanation: `La ${dimension} máxima permitida es ${valor}`,
      type: "mc",
    });
  });

  // Prohibiciones de transporte de cargas
  datos.transporteCargas.prohibicionesCirculacion.forEach((prohibicion) => {
    questions.push({
      question: `¿Es correcta esta prohibición para transporte de cargas: "${prohibicion}"?`,
      answer: true,
      explanation:
        "Esta es una prohibición válida para el transporte de cargas.",
      type: "tf",
    });
  });

  // Altura máxima de carga
  questions.push({
    question:
      "¿Cuál es la altura máxima permitida para la carga desde el pavimento?",
    options: ["4 m", "3.5 m", "4.5 m", "3 m"],
    answer: "4 m",
    explanation:
      "La altura de la carga no puede ser mayor de 4 m desde el pavimento",
    type: "mc",
  });

  // Sobresalir por delante/detrás
  questions.push({
    question:
      "¿Cuánto puede sobresalir la carga por delante o detrás del vehículo?",
    options: ["2 m", "1.5 m", "2.5 m", "3 m"],
    answer: "2 m",
    explanation:
      "La carga no puede sobresalir más de 2 m por delante o por detrás",
    type: "mc",
  });

  return questions;
}

// ========== PREGUNTAS SOBRE PRIORIDAD EN INTERSECCIONES ==========
function generatePrioridadInterseccionesQuestions() {
  let questions = [];

  datos.prioridadIntersecciones.forEach((categoria) => {
    if (categoria.opciones) {
      categoria.opciones.forEach((opcion) => {
        questions.push({
          question: `¿Es correcto que el conductor debe disminuir velocidad o detenerse: ${opcion}?`,
          answer: true,
          explanation:
            "Esta es una situación donde se debe disminuir velocidad o detenerse según las normas de prioridad.",
          type: "tf",
        });
      });
    }
  });

  // Pregunta específica sobre rotondas
  questions.push({
    question: "¿Quién tiene prioridad en las rotondas?",
    options: [
      "Los vehículos que circulan por el interior de la rotonda",
      "Los vehículos que van a ingresar",
      "El primer vehículo en llegar",
      "No hay prioridad establecida",
    ],
    answer: "Los vehículos que circulan por el interior de la rotonda",
    explanation:
      "Los vehículos del interior de la rotonda tienen prioridad, excepto que la señalización indique otra regulación",
    type: "mc",
  });

  return questions;
}

// ========== PREGUNTAS SOBRE ESTACIONAMIENTO ==========
function generateEstacionamientoQuestions() {
  let questions = [];

  // Procedimiento en pendientes
  datos.estacionamiento.procedimiento.forEach((paso) => {
    questions.push({
      question: `¿Es correcto este procedimiento de estacionamiento: "${paso}"?`,
      answer: true,
      explanation:
        "Este es un procedimiento correcto para estacionar el vehículo.",
      type: "tf",
    });
  });

  // Ubicación según tipo de vía
  datos.estacionamiento.ubicacion.forEach((ubicacion) => {
    questions.push({
      question: `¿Es correcta esta norma de ubicación: "${ubicacion}"?`,
      answer: true,
      explanation:
        "Esta es una norma correcta sobre dónde estacionar según el tipo de vía.",
      type: "tf",
    });
  });

  // Pregunta sobre pendiente descendente
  questions.push({
    question: "¿Qué se debe hacer al estacionar en pendiente descendente?",
    options: [
      "Conectar retroceso y girar ruedas a favor del contén",
      "Conectar primera velocidad y girar ruedas contra el contén",
      "Solo aplicar freno de mano",
      "Dejar en neutro",
    ],
    answer: "Conectar retroceso y girar ruedas a favor del contén",
    explanation:
      "En pendiente descendente: conectar retroceso y girar ruedas a favor del contén",
    type: "mc",
  });

  questions.push({
    question: "¿Qué se debe hacer al estacionar en pendiente ascendente?",
    options: [
      "Conectar primera velocidad y girar ruedas contra el contén",
      "Conectar retroceso y girar ruedas a favor del contén",
      "Solo aplicar freno de mano",
      "Dejar en neutro",
    ],
    answer: "Conectar primera velocidad y girar ruedas contra el contén",
    explanation:
      "En pendiente ascendente: conectar primera velocidad y girar ruedas contra el contén",
    type: "mc",
  });

  return questions;
}

// ========== PREGUNTAS SOBRE OTRAS SEÑALES ==========
function generateOtrasSenalesQuestions() {
  let questions = [];

  datos.otrasSeñales.forEach((senal) => {
    const otrasSeñalesOptions = datos.otrasSeñales.filter(
      (s) => s.senal !== senal.senal
    );

    questions.push({
      question: `¿Qué significa: ${senal.senal}?`,
      options: [
        senal.descripcion,
        ...shuffleArray(otrasSeñalesOptions)
          .slice(0, 3)
          .map((s) => s.descripcion),
      ],
      answer: senal.descripcion,
      explanation: `${senal.senal} significa: ${senal.descripcion}`,
      type: "mc",
    });

    // Verdadero/Falso
    questions.push({
      question: `${senal.senal} se utiliza ${senal.descripcion}`,
      answer: true,
      explanation: `Correcto. Esta señal se utiliza ${senal.descripcion}`,
      type: "tf",
    });
  });

  // Pregunta específica sobre señales de carga sobresaliente
  questions.push({
    question:
      "¿A qué distancia deben ser visibles las banderas rojas en cargas sobresalientes?",
    options: ["100 m", "150 m", "80 m", "120 m"],
    answer: "100 m",
    explanation:
      "Las banderas rojas en cargas sobresalientes deben ser visibles a 100 m",
    type: "mc",
  });

  // Pregunta sobre ganadería
  questions.push({
    question:
      "¿A qué distancia debe colocarse el ganadero con bandera roja para el cruce de ganado?",
    options: ["100 m", "150 m", "80 m", "50 m"],
    answer: "100 m",
    explanation:
      "Para cruce de ganado, el ganadero debe colocarse a 100 m con bandera roja",
    type: "mc",
  });

  return questions;
}

// ========== PREGUNTAS SOBRE USO DE VÍAS Y CARRILES ==========
function generateUsoViasCarrilesQuestions() {
  let questions = [];

  datos.usoViasCarriles.forEach((regla) => {
    if (regla.extremaIzquierda) {
      questions.push({
        question:
          "¿Qué obligación tiene el carril de extrema izquierda en vías de dos o más carriles del mismo sentido?",
        options: [
          regla.extremaIzquierda,
          regla.extremaDerecha,
          "Circular a velocidad reducida",
          "Solo para adelantar",
        ],
        answer: regla.extremaIzquierda,
        explanation: `Carril extrema izquierda: ${regla.extremaIzquierda}`,
        type: "mc",
      });

      questions.push({
        question:
          "¿Para qué se usa el carril de extrema derecha en vías de dos o más carriles del mismo sentido?",
        options: [
          regla.extremaDerecha,
          regla.extremaIzquierda,
          "Para adelantar únicamente",
          "Para vehículos de emergencia",
        ],
        answer: regla.extremaDerecha,
        explanation: `Carril extrema derecha: ${regla.extremaDerecha}`,
        type: "mc",
      });
    }

    if (regla.carrilCentral) {
      questions.push({
        question:
          "¿Para qué se usa el carril central en vías de doble sentido con tres carriles?",
        options: [
          regla.carrilCentral,
          "Para circular normalmente",
          "Solo para vehículos lentos",
          "Para estacionar temporalmente",
        ],
        answer: regla.carrilCentral,
        explanation: `El carril central es ${regla.carrilCentral}`,
        type: "mc",
      });
    }
  });

  // Pregunta sobre marcha lenta en zona rural
  questions.push({
    question: "¿A qué velocidad se considera marcha lenta en zona rural?",
    options: [
      "Inferior a 60 kph",
      "Inferior a 50 kph",
      "Inferior a 40 kph",
      "Inferior a 70 kph",
    ],
    answer: "Inferior a 60 kph",
    explanation:
      "En zona rural se considera marcha lenta cuando se circula a velocidad inferior a 60 kph",
    type: "mc",
  });

  return questions;
}

// ========== PREGUNTAS SOBRE CLASIFICACIÓN DE VEHÍCULOS ==========
function generateClasificacionVehiculosQuestions() {
  let questions = [];

  datos.vehiculos.forEach((vehiculo) => {
    const otrosVehiculos = datos.vehiculos.filter(
      (v) => v.nombre !== vehiculo.nombre
    );

    questions.push({
      question: `¿Cómo se clasifican los ${vehiculo.nombre}?`,
      options: [
        vehiculo.descripcion,
        ...shuffleArray(otrosVehiculos)
          .slice(0, 3)
          .map((v) => v.descripcion),
      ],
      answer: vehiculo.descripcion,
      explanation: `${vehiculo.nombre}: ${vehiculo.descripcion}`,
      type: "mc",
    });

    // Verdadero/Falso
    questions.push({
      question: `Los ${vehiculo.nombre} son: ${vehiculo.descripcion}`,
      answer: true,
      explanation: `Correcto. ${vehiculo.nombre} se definen como: ${vehiculo.descripcion}`,
      type: "tf",
    });
  });

  // Preguntas específicas con números
  questions.push({
    question: "¿Cuál es el peso máximo para clasificar como vehículo ligero?",
    options: ["3,500 kg", "3,000 kg", "4,000 kg", "5,000 kg"],
    answer: "3,500 kg",
    explanation: "Los vehículos ligeros tienen un peso máximo de 3,500 kg",
    type: "mc",
  });

  questions.push({
    question:
      "¿Cuántos asientos máximo puede tener un microbús (sin contar el conductor)?",
    options: ["16 asientos", "12 asientos", "20 asientos", "8 asientos"],
    answer: "16 asientos",
    explanation:
      "Un microbús tiene más de 8 pero no más de 16 asientos (sin contar el del conductor)",
    type: "mc",
  });

  return questions;
}

// ========== PREGUNTAS SOBRE PESO Y CAPACIDAD ==========
function generatePesoCapacidadQuestions() {
  let questions = [];

  datos.pesoCapacidad.forEach((item) => {
    const otrosConceptos = datos.pesoCapacidad.filter(
      (p) => p.term !== item.term
    );

    questions.push({
      question: `¿Cómo se define "${item.term}"?`,
      options: [
        item.definicion,
        ...shuffleArray(otrosConceptos)
          .slice(0, 3)
          .map((p) => p.definicion),
      ],
      answer: item.definicion,
      explanation: `${item.term} se define como: ${item.definicion}`,
      type: "mc",
    });

    // Verdadero/Falso
    questions.push({
      question: `${item.term} se define como: ${item.definicion}`,
      answer: true,
      explanation: `Correcto. ${item.term}: ${item.definicion}`,
      type: "tf",
    });
  });

  return questions;
}

// ========== PREGUNTAS SOBRE VÍAS ==========
function generateViasQuestions() {
  let questions = [];

  datos.vias.forEach((via) => {
    if (via.denominacion) {
      questions.push({
        question: `¿Cómo se denominan las ${via.nombre}?`,
        options: [
          via.denominacion,
          "Se denominan 'carreteras'",
          "Se denominan 'autopistas'",
          "Se denominan 'caminos'",
        ],
        answer: via.denominacion,
        explanation: `${via.nombre} ${via.denominacion}`,
        type: "mc",
      });
    }

    if (via.caracteristica) {
      questions.push({
        question: `¿Qué caracteriza a una ${via.nombre}?`,
        options: [
          via.caracteristica,
          ...datos.vias
            .filter((v) => v.nombre !== via.nombre && v.caracteristica)
            .slice(0, 3)
            .map((v) => v.caracteristica),
        ],
        answer: via.caracteristica,
        explanation: `${via.nombre}: ${via.caracteristica}`,
        type: "mc",
      });
    }

    // Verdadero/Falso
    if (via.caracteristica) {
      questions.push({
        question: `Una ${via.nombre} se caracteriza porque: ${via.caracteristica}`,
        answer: true,
        explanation: `Correcto. ${via.nombre}: ${via.caracteristica}`,
        type: "tf",
      });
    }
  });

  // Pregunta específica sobre vía suficientemente iluminada
  questions.push({
    question:
      "¿A qué distancia permite distinguir un vehículo oscuro una vía suficientemente iluminada?",
    options: ["50 metros", "40 metros", "60 metros", "30 metros"],
    answer: "50 metros",
    explanation:
      "Una vía suficientemente iluminada permite distinguir un vehículo oscuro a 50 metros",
    type: "mc",
  });

  return questions;
}

// ========== PREGUNTAS SOBRE REGULACIONES DE LICENCIAS ==========
function generateRegulacionesLicenciasQuestions() {
  let questions = [];

  // Tipos de licencias
  datos.regulaciones_licencias.tipos.forEach((tipo) => {
    questions.push({
      question: `¿"${tipo}" es un tipo válido de licencia de conducción?`,
      answer: true,
      explanation: `Sí, "${tipo}" es un tipo válido de licencia de conducción.`,
      type: "tf",
    });
  });

  // Vigencia
  questions.push({
    question: "¿Cuál es la vigencia de la licencia de conducción?",
    options: [
      datos.regulaciones_licencias.vigencia,
      "5 años",
      "15 años",
      "8 años",
    ],
    answer: datos.regulaciones_licencias.vigencia,
    explanation: `La licencia tiene una vigencia de ${datos.regulaciones_licencias.vigencia}`,
    type: "mc",
  });

  // Edades
  questions.push({
    question:
      "¿Cuál es la edad mínima general para obtener licencia de conducción?",
    options: [
      `${datos.regulaciones_licencias.edadGeneral} años`,
      `${datos.regulaciones_licencias.edadA1} años`,
      `${datos.regulaciones_licencias.edadEspecialMilitar} años`,
      "21 años",
    ],
    answer: `${datos.regulaciones_licencias.edadGeneral} años`,
    explanation: `La edad mínima general es ${datos.regulaciones_licencias.edadGeneral} años`,
    type: "mc",
  });

  questions.push({
    question: "¿Cuál es la edad mínima para licencia A-1?",
    options: [
      `${datos.regulaciones_licencias.edadA1} años`,
      `${datos.regulaciones_licencias.edadGeneral} años`,
      `${datos.regulaciones_licencias.edadEspecialMilitar} años`,
      "14 años",
    ],
    answer: `${datos.regulaciones_licencias.edadA1} años`,
    explanation: `Para licencia A-1 la edad mínima es ${datos.regulaciones_licencias.edadA1} años`,
    type: "mc",
  });

  // Requisitos
  datos.regulaciones_licencias.requisitos.forEach((requisito) => {
    questions.push({
      question: `¿Es "${requisito}" un requisito para obtener la licencia?`,
      answer: true,
      explanation: `Sí, "${requisito}" es un requisito obligatorio.`,
      type: "tf",
    });
  });

  return questions;
}

// ========== PREGUNTAS ADICIONALES COMPLEJAS Y CRUZADAS ==========
function generateCrossTopicQuestions() {
  let questions = [];

  // Preguntas que cruzan información de múltiples temas

  // Velocidad + Visibilidad + Maniobras
  questions.push({
    question:
      "¿A qué distancia mínima de cambios de rasante está prohibido adelantar?",
    options: ["150 m", "100 m", "200 m", "120 m"],
    answer: "150 m",
    explanation:
      "Está prohibido adelantar por debajo de 150 m de cambios de rasante",
    type: "mc",
  });

  // Licencias + Edad + Experiencia
  questions.push({
    question:
      "¿Cuántos años de experiencia mínima debe tener quien acompañe a un conductor con permiso de aprendizaje?",
    options: ["3 años", "2 años", "5 años", "4 años"],
    answer: "3 años",
    explanation:
      "El acompañante debe tener mínimo 3 años de experiencia en la categoría",
    type: "mc",
  });

  // Estacionamiento + Intersecciones + Distancias
  questions.push({
    question:
      "¿Hasta qué distancia de una intersección semaforizada está prohibido estacionar?",
    options: ["100 m", "50 m", "10 m", "40 m"],
    answer: "100 m",
    explanation:
      "Está prohibido estacionar hasta 100 m si la intersección es semaforizada",
    type: "mc",
  });

  // Transporte + Velocidad + Seguridad
  questions.push({
    question:
      "¿Cuántas personas máximo pueden viajar de pie por metro cuadrado en viajes de una hora o menos?",
    options: ["4 personas", "3 personas", "5 personas", "6 personas"],
    answer: "4 personas",
    explanation:
      "No pueden viajar más de 4 personas de pie por metro cuadrado en viajes de una hora o menos",
    type: "mc",
  });

  // Luces + Visibilidad + Distancias
  questions.push({
    question:
      "¿A qué distancia deben situarse las señales de emergencia detrás del vehículo?",
    options: ["30 m", "50 m", "20 m", "40 m"],
    answer: "30 m",
    explanation:
      "Las señales de emergencia se sitúan a 30 m detrás del vehículo",
    type: "mc",
  });

  questions.push({
    question: "¿A qué distancia deben ser visibles las señales de emergencia?",
    options: ["150 m", "100 m", "200 m", "120 m"],
    answer: "150 m",
    explanation: "Las señales de emergencia deben ser visibles a 150 m",
    type: "mc",
  });

  // Edad + Vehículos + Seguridad
  questions.push({
    question:
      "¿Hasta qué edad pueden transportarse niños en el asiento delantero?",
    options: ["11 años", "10 años", "12 años", "14 años"],
    answer: "11 años",
    explanation:
      "No se transportarán menores de 12 años en el asiento delantero",
    type: "mc",
  });

  questions.push({
    question: "¿Hasta qué edad requieren acompañamiento especial en vehículos?",
    options: ["1 año", "2 años", "3 años", "4 años"],
    answer: "1 año",
    explanation:
      "Los menores de 2 años requieren acompañamiento de personas mayores o aditamentos especiales",
    type: "mc",
  });

  // Remolque + Peso + Frenos
  questions.push({
    question:
      "¿A partir de qué peso los remolques deben tener sistema de frenos?",
    options: ["1500 kg", "1000 kg", "2000 kg", "750 kg"],
    answer: "1500 kg",
    explanation:
      "Los remolques de más de 1500 kg deben tener sistema de frenos o frenos de autobloqueo",
    type: "mc",
  });

  // Distancia + Velocidad + Seguridad
  questions.push({
    question:
      "¿Cuál es la fórmula para calcular la distancia mínima entre vehículos?",
    options: ["V/3", "V/2", "V/4", "V/5"],
    answer: "V/3",
    explanation: "La distancia mínima es V/3, es decir, 5 m por cada 15 kph",
    type: "mc",
  });

  // Carga + Motocicletas + Dimensiones
  questions.push({
    question:
      "¿Cuánto puede sobresalir la carga por los laterales en motocicletas?",
    options: ["50 cm", "40 cm", "60 cm", "30 cm"],
    answer: "50 cm",
    explanation:
      "En motocicletas la carga puede sobresalir hasta 50 cm por laterales y parte trasera",
    type: "mc",
  });

  // Recalificación + Tiempo + Consecuencias
  questions.push({
    question: "¿Cada cuántos años deben hacer recalificación los conductores?",
    options: ["2 años", "3 años", "4 años", "5 años"],
    answer: "2 años",
    explanation:
      "La recalificación es un entrenamiento que se realiza cada 2 años",
    type: "mc",
  });

  questions.push({
    question:
      "¿Por cuánto tiempo se cancela la licencia si no se aprueba la recalificación?",
    options: ["6 meses", "1 año", "3 meses", "9 meses"],
    answer: "6 meses",
    explanation:
      "Si no se aprueba la recalificación, se cancela la licencia por 6 meses",
    type: "mc",
  });

  // Extranjeros + Tiempo + Licencias
  questions.push({
    question:
      "¿Por cuánto tiempo pueden conducir extranjeros con su licencia extranjera?",
    options: ["6 meses", "1 año", "3 meses", "9 meses"],
    answer: "6 meses",
    explanation:
      "Los extranjeros pueden conducir 6 meses desde su entrada al país para categorías A y B",
    type: "mc",
  });

  // Barreras + Altura + Transporte personas
  questions.push({
    question:
      "¿Cuál es la altura mínima requerida para las barreras cuando las personas viajan sentadas?",
    options: ["40 cm", "50 cm", "30 cm", "60 cm"],
    answer: "40 cm",
    explanation:
      "Cuando las personas viajan sentadas, las barreras deben ser superiores a 40 cm",
    type: "mc",
  });

  questions.push({
    question:
      "¿Cuál es la altura mínima de barreras para que las personas puedan viajar de pie?",
    options: ["120 cm", "100 cm", "110 cm", "130 cm"],
    answer: "120 cm",
    explanation:
      "Para viajar de pie, las barreras deben ser de 120 cm o superiores",
    type: "mc",
  });

  // Freno de mano + Inclinación + Estacionamiento
  questions.push({
    question:
      "¿A qué porcentaje de inclinación debe sostener el vehículo el freno de mano?",
    options: ["16%", "15%", "18%", "20%"],
    answer: "16%",
    explanation:
      "El freno de mano debe sostener al vehículo al 16% de inclinación",
    type: "mc",
  });

  // Inspección técnica + Tiempo + Consecuencias
  questions.push({
    question:
      "¿Cuánto tiempo máximo se da para resolver deficiencias encontradas en inspección técnica?",
    options: ["2 años", "1 año", "3 años", "18 meses"],
    answer: "2 años",
    explanation:
      "Se da un término no mayor de 2 años para resolver las deficiencias",
    type: "mc",
  });

  // Conductor novel + Experiencia + Tiempo
  questions.push({
    question: "¿Hasta cuándo se considera conductor novel?",
    options: [
      "Menos de 2 años",
      "Menos de 3 años",
      "Menos de 1 año",
      "Menos de 4 años",
    ],
    answer: "Menos de 2 años",
    explanation:
      "Conductor novel es quien tiene menos de 2 años de haber obtenido su licencia",
    type: "mc",
  });

  // Categorías + Experiencia + Requisitos
  questions.push({
    question:
      "¿Cuántos años de experiencia con categoría B se requieren para obtener C o D?",
    options: ["2 años", "3 años", "1 año", "4 años"],
    answer: "2 años",
    explanation: "Para categorías C, C-1, D, D-1 se requieren 2 años con B",
    type: "mc",
  });

  questions.push({
    question:
      "¿Cuántos años de experiencia se requieren para obtener categoría E?",
    options: [
      "2 años con C y D",
      "3 años con C y D",
      "1 año con C y D",
      "2 años solo con C",
    ],
    answer: "2 años con C y D",
    explanation: "Para categoría E se requieren 2 años con C y D",
    type: "mc",
  });

  return shuffleArray(questions).slice(0, 10);
}

// ========== MODIFICAR LAS FUNCIONES EXISTENTES EN APP.JS ==========
// INSTRUCCIÓN: Reemplazar estas dos líneas en la función startQuiz():

/*
LÍNEAS A REEMPLAZAR EN APP.JS:
currentQuiz = type === "tf" ? generateTrueFalseQuestions() : generateMultipleChoiceQuestions();

REEMPLAZAR POR:
currentQuiz = type === "tf" ? generateEnhancedTrueFalseQuestions() : generateEnhancedMultipleChoiceQuestions();
*/

// ========== PREGUNTAS DE INTEGRACIÓN AVANZADA ==========
function generateAdvancedIntegrationQuestions() {
  let questions = [];

  // Combinar múltiples temas en una sola pregunta
  questions.push({
    question:
      "Un conductor novel con licencia B, ¿puede obtener inmediatamente la categoría C?",
    answer: false,
    explanation:
      "No, necesita 2 años de experiencia con B para obtener C, y un conductor novel tiene menos de 2 años",
    type: "tf",
  });

  questions.push({
    question:
      "¿Puede un vehículo con carga que sobresale 1.5 m por detrás circular a 90 kph en autopista?",
    answer: false,
    explanation:
      "No, debe llevar señalización especial y la carga no puede sobresalir más de 2 m",
    type: "tf",
  });

  questions.push({
    question:
      "¿Puede un extranjero con licencia válida conducir en Cuba durante 8 meses?",
    answer: false,
    explanation:
      "No, solo puede conducir 6 meses con licencia extranjera para categorías A y B",
    type: "tf",
  });

  questions.push({
    question:
      "¿Puede estacionar a 5 metros de una intersección no semaforizada?",
    answer: false,
    explanation:
      "No, está prohibido estacionar hasta 10 m de una intersección (100 m si es semaforizada)",
    type: "tf",
  });

  questions.push({
    question:
      "¿Puede un vehículo de carga de 12,000 kg circular por zona urbana?",
    answer: false,
    explanation:
      "No, está prohibido circular por zona urbana vehículos de carga de capacidad superior a 10,000 kg",
    type: "tf",
  });

  // Preguntas numéricas complejas
  questions.push({
    question:
      "Si circulo a 75 kph, ¿cuál es la distancia mínima que debo mantener con el vehículo de adelante?",
    options: ["25 m", "20 m", "30 m", "15 m"],
    answer: "25 m",
    explanation: "Usando la fórmula V/3: 75/3 = 25 metros de distancia mínima",
    type: "mc",
  });

  questions.push({
    question:
      "Si un vehículo articulado circula en autopista, ¿cuál es su velocidad máxima?",
    options: ["90 kph", "100 kph", "80 kph", "70 kph"],
    answer: "90 kph",
    explanation:
      "Los vehículos articulados de carga pueden circular a 90 kph en autopista",
    type: "mc",
  });

  // Situaciones complejas de tráfico
  questions.push({
    question:
      "En una rotonda con señalización especial que indica prioridad a los que ingresan, ¿quién tiene prioridad?",
    options: [
      "Los que ingresan según la señalización",
      "Siempre los del interior",
      "El primero en llegar",
      "No hay prioridad",
    ],
    answer: "Los que ingresan según la señalización",
    explanation:
      "Aunque normalmente la prioridad es del interior, la señalización especial puede indicar otra regulación",
    type: "mc",
  });

  // Combinación de prohibiciones
  questions.push({
    question:
      "¿Puede un menor de 12 años viajar en el asiento delantero acompañando a un conductor novel?",
    answer: false,
    explanation:
      "No, los menores de 12 años no pueden viajar en el asiento delantero, independientemente del tipo de conductor",
    type: "tf",
  });

  questions.push({
    question:
      "¿Puede un ciclista menor de 12 años circular paralelo a otro ciclo en una vía de poco tránsito?",
    answer: false,
    explanation:
      "No puede circular paralelo a otro ciclo (está prohibido), y tampoco por vías de mucho tránsito por ser menor de 12 años",
    type: "tf",
  });

  return questions;
}

// ========== PREGUNTAS SOBRE CASOS ESPECÍFICOS Y EXCEPCIONES ==========
function generateCasosEspecificosQuestions() {
  let questions = [];

  // Remolque específico
  questions.push({
    question: "¿Qué velocidad máxima tiene un remolque en zona urbana?",
    options: ["30 kph", "40 kph", "50 kph", "20 kph"],
    answer: "30 kph",
    explanation:
      "Los remolques tienen velocidad máxima de 30 kph en zona urbana",
    type: "mc",
  });

  questions.push({
    question: "¿Qué velocidad máxima tiene un remolque en zona rural?",
    options: ["40 kph", "50 kph", "60 kph", "30 kph"],
    answer: "40 kph",
    explanation:
      "Los remolques tienen velocidad máxima de 40 kph en zona rural",
    type: "mc",
  });

  // Longitud de cable para remolque
  questions.push({
    question: "¿Cuál es la longitud máxima del cable para remolcar?",
    options: ["8 m", "10 m", "6 m", "12 m"],
    answer: "8 m",
    explanation: "El cable para remolcar no debe ser mayor de 8 metros",
    type: "mc",
  });

  // Ancho de remolque estrecho
  questions.push({
    question:
      "¿Qué ancho máximo puede tener un remolque para circular con una sola luz roja trasera?",
    options: ["80 cm", "70 cm", "90 cm", "60 cm"],
    answer: "80 cm",
    explanation:
      "Un remolque que no sobrepase 80 cm de ancho puede circular con una luz roja trasera",
    type: "mc",
  });

  // Distancia entre luces laterales en remolques
  questions.push({
    question:
      "¿A qué distancia máxima deben estar las luces laterales en remolques?",
    options: ["1.5 m", "2 m", "1 m", "2.5 m"],
    answer: "1.5 m",
    explanation:
      "Las luces laterales en remolques no deben estar a más de 1.5 m una de otra",
    type: "mc",
  });

  // Triángulos reflectantes
  questions.push({
    question:
      "¿Cuál es el tamaño máximo de los lados del triángulo reflectante en remolques?",
    options: ["20 cm", "25 cm", "15 cm", "30 cm"],
    answer: "20 cm",
    explanation:
      "Los lados del triángulo no deben ser mayores de 20 cm ni menores de 15 cm",
    type: "mc",
  });

  questions.push({
    question:
      "¿Cuál es el tamaño mínimo de los lados del triángulo reflectante en remolques?",
    options: ["15 cm", "10 cm", "12 cm", "18 cm"],
    answer: "15 cm",
    explanation:
      "Los lados del triángulo no deben ser menores de 15 cm ni mayores de 20 cm",
    type: "mc",
  });

  // Banderas en ganadería - dimensiones
  questions.push({
    question:
      "¿Qué dimensiones deben tener las banderas rojas para cargas sobresalientes?",
    options: ["30 x 30 cm", "40 x 40 cm", "25 x 25 cm", "35 x 35 cm"],
    answer: "30 x 30 cm",
    explanation:
      "Las banderas rojas para cargas sobresalientes deben ser de 30 x 30 cm",
    type: "mc",
  });

  // Aceras angostas
  questions.push({
    question:
      "¿En aceras de qué ancho máximo no se puede circular apareado a otro peatón?",
    options: ["1 m", "1.5 m", "2 m", "0.8 m"],
    answer: "1 m",
    explanation:
      "En aceras de hasta 1 m de ancho no se puede circular apareado a otro peatón",
    type: "mc",
  });

  // Motocicletas y niños
  questions.push({
    question: "¿Dónde debe viajar un menor de 7 años en motocicleta?",
    options: [
      "En el sidecar con una persona de 14 o más años",
      "Detrás del conductor",
      "No puede viajar en motocicleta",
      "En cualquier posición",
    ],
    answer: "En el sidecar con una persona de 14 o más años",
    explanation:
      "El menor de 7 años debe viajar en el sidecar, acompañado de una persona de 14 o más años",
    type: "mc",
  });

  return questions;
}

// Función auxiliar para obtener opciones incorrectas inteligentes
function getSmartWrongOptions(correctAnswer, allOptions, questionType = "general") {
  const wrongOptions = allOptions.filter(opt => opt !== correctAnswer);
  const shuffled = shuffleArray(wrongOptions);
  
  // Para velocidades, crear opciones numéricas cercanas
  if (questionType === "velocity" && /\d+/.test(correctAnswer)) {
    const correctNum = parseInt(correctAnswer.match(/\d+/)[0]);
    const options = [correctAnswer];
    
    // Generar opciones cercanas al valor correcto
    const variations = [correctNum - 10, correctNum + 10, correctNum - 20, correctNum + 20];
    variations.forEach(num => {
      if (num > 0 && options.length < 4) {
        const option = correctAnswer.replace(/\d+/, num.toString());
        if (!options.includes(option)) {
          options.push(option);
        }
      }
    });
    
    // Completar con opciones aleatorias si es necesario
    while (options.length < 4 && shuffled.length > 0) {
      const option = shuffled.pop();
      if (!options.includes(option)) {
        options.push(option);
      }
    }
    
    return shuffleArray(options);
  }
  
  return [correctAnswer, ...shuffled.slice(0, 3)];
}

/**
 * Base de Datos de Seguridad Vial - Cuba
 * Datos uniformes y organizados para aplicaciones de educación vial
 * Versión completa en español
 */

const datos = {
  // ==================== DEFINICIONES GENERALES ====================
  definiciones: [
    {
      term: "Punto ciego",
      definicion:
        "Se denomina punto ciego al ángulo en el cual el espejo o espejos retrovisores no captan imagen",
    },
    {
      term: "Semáforo",
      definicion: "Sistema tricolor con caras verticales y horizontales",
    },
    {
      term: "Señales de emergencia",
      definicion:
        "Señales que se sitúan sobre la vía a 30m detrás del vehículo y serán visibles a una distancia de 150m",
    },
    {
      term: "Año natural",
      definicion:
        "En Cuba, solamente en Seguridad Vial es el período de fecha de un año a fecha igual del siguiente año",
    },
    {
      term: "Curva de visibilidad reducida",
      definicion:
        "Aquella que no permite ver el ancho total de la calzada según la escala de velocidades",
    },
    {
      term: "Estacionamiento",
      definicion:
        "Detención por causas distintas a tomar/dejar personas o carga",
    },
    { term: "Puente", definicion: "Construcción sobre cursos de agua" },
    { term: "Intercambio", definicion: "Cruce de vías a diferentes niveles" },
    {
      term: "Paso inferior",
      definicion: "Cruce de vía por debajo de otra o de una vía férrea",
    },
    {
      term: "Paso superior",
      definicion: "Cruce de vía por encima de otra o de una vía férrea",
    },
    {
      term: "Recalificación",
      definicion:
        "Entrenamiento cada 2 años para conductores. Cancelación de licencia por 6 meses si no se aprueba",
    },
    {
      term: "Transporte colectivo",
      definicion:
        "Ómnibus, taxi, vehículo de carga (cuando transporta personas a concentraciones, movilizaciones y otros casos autorizados)",
    },
    {
      term: "Cambio de rasante",
      definicion:
        "Son las ondulaciones o lomas que impiden ver la continuación de la vía",
    },
    {
      term: "Conductor de vehículo",
      definicion: "Persona que guía cualquier tipo de vehículo",
    },
    {
      term: "Conductor novel",
      definicion:
        "Conductor que tiene menos de 2 años de haber obtenido su licencia de conducción",
    },
    {
      term: "Conductor profesional",
      definicion:
        "Persona que recibe un salario o una tarifa por conducir vehículos",
    },
    {
      term: "Detención momentánea",
      definicion:
        "Detención voluntaria de un vehículo en la vía por no más del tiempo necesario para tomar o para dejar personas o carga",
    },
    {
      term: "Dispositivo reflectante",
      definicion:
        "Dispositivo destinado a indicar la presencia de un vehículo o de un obstáculo por luz emanada de una fuente luminosa ajena",
    },
    {
      term: "Hidrante",
      definicion: "Conducto o toma de agua para el servicio de bomberos",
    },
    { term: "Intersección", definicion: "Cruce de vías" },
    {
      term: "Paso a nivel con barreras",
      definicion:
        "Equivalente a un ceda el paso (moderar la velocidad y de ser necesario parar)",
    },
    {
      term: "Paso a nivel sin barreras",
      definicion:
        "Equivalente a una señal de pare (parar, mirar y seguir). Cuando carece de señal hay que parar 3 metros antes",
    },
  ],

  // ==================== CLASIFICACIÓN DE VEHÍCULOS ====================
  vehiculos: [
    {
      nombre: "Vehículos ligeros",
      descripcion: "Vehículos de motor con un peso máximo de hasta 3,500 kg",
    },
    {
      nombre: "Vehículos pesados",
      descripcion: "Vehículos de motor que superan los 3,500 kg",
    },
    {
      nombre: "Ómnibus",
      descripcion:
        "Vehículo destinado al transporte de pasajeros con más de 16 asientos (sin contar el del conductor)",
    },
    {
      nombre: "Microbús",
      descripcion:
        "Vehículo para pasajeros con más de 8 pero no más de 16 asientos (sin contar el del conductor)",
    },
    {
      nombre: "Camión rígido de carga",
      descripcion:
        "Vehículo donde la cabina y la caja de carga están montadas sobre un mismo chasis",
    },
    {
      nombre: "Camión articulado de carga",
      descripcion:
        "Vehículo compuesto por un tractocamión acoplado a un semirremolque",
    },
    {
      nombre: "Vehículo con remolque",
      descripcion: "Cualquier vehículo al que se le ha acoplado un remolque",
    },
    {
      nombre: "Grúa",
      descripcion: "Vehículo diseñado para izar y transportar cargas pesadas",
    },
    {
      nombre: "Vehículos agrícolas",
      descripcion:
        "Vehículos de motor utilizados para actividades agrícolas o similares",
    },
    {
      nombre: "Vehículos de servicio especial",
      descripcion:
        "Autorizados para servicios específicos como patrullas policiales, bomberos, ambulancias, vehículos de escolta y otros autorizados por el MININT",
    },
    {
      nombre: "Combinación de vehículos",
      descripcion:
        "Conjunto de vehículos acoplados que circulan como una sola unidad",
    },
  ],

  // ==================== PESO Y CAPACIDAD ====================
  pesoCapacidad: [
    {
      term: "Capacidad nominal",
      definicion: "carga útil máxima que puede transportar un vehículo",
    },
    {
      term: "Peso en carga",
      definicion:
        "peso total del vehículo y de su carga, incluido el personal de servicio y los pasajeros",
    },
    {
      term: "Tara",
      definicion:
        "peso del vehículo sin carga, sin personal de servicio y sin pasajeros; pero con la totalidad del carburante y utensilios normales de a bordo",
    },
    {
      term: "Peso por eje",
      definicion:
        "parte del peso total transmitido a la vía a través de cada eje",
    },
  ],

  // ==================== CLASIFICACIÓN DE VÍAS ====================
  vias: [
    {
      nombre: "Vías en zona urbana",
      denominacion: "Se denominan 'calles'",
    },
    {
      nombre: "Vías en zona rural",
      incluye: ["autopistas", "carreteras", "caminos de tierra o terraplén"],
    },
    {
      nombre: "Vía de doble sentido",
      caracteristica: "Aquella que no tiene indicado su sentido de dirección",
    },
    {
      nombre: "Vía de un solo sentido",
      caracteristica:
        "Tiene indicado su sentido de dirección. Generalmente con flechas en accesos transversales. Casos especiales pueden tener señales opuestas",
    },
    {
      nombre: "Señalización en un solo acceso",
      caracteristica:
        "La vía es de un solo sentido para el acceso señalizado y de doble sentido para el otro",
    },
    {
      nombre: "Vía suficientemente iluminada",
      caracteristica:
        "Permite distinguir un vehículo oscuro a 50 metros (visión normal)",
    },
  ],

  // ==================== LICENCIAS DE CONDUCCIÓN ====================
  licencias: [
    {
      categoria: "A-1",
      descripcion:
        "ciclomotores (hasta 50 cc o consumo eléctrico no superior a 1000 watts). Velocidad no superior a 50 kph",
    },
    {
      categoria: "B",
      descripcion:
        "hasta 3500 kg y hasta 8 asientos sin contar el del conductor. Puede arrastrarse un remolque ligero (hasta 750 kg)",
    },
    {
      categoria: "C",
      descripcion:
        "más de 3500 kg destinado al transporte de carga. Puede arrastrarse un remolque ligero (hasta 750 kg)",
    },
    {
      categoria: "D",
      descripcion:
        "más de 8 asientos, sin contar el del conductor, destinado al transporte de personas",
    },
    {
      categoria: "E",
      descripcion:
        "conjunto de vehículos cuyo vehículo de tracción puede ser de las categorías B, C, C-1, D, D-1",
    },
  ],

  regulaciones_licencias: {
    tipos: ["Nacional", "Internacional", "Especial militar"],
    vigencia: "10 años",
    edadGeneral: 18,
    edadEspecialMilitar: 17,
    edadA1: 16,
    requisitos: [
      "Saber leer y escribir",
      "Vencer examen médico",
      "Vencer examen teórico",
      "Vencer examen práctico",
    ],
  },

  permisoAprendizaje: {
    obligaciones: [
      "Portar el permiso durante las prácticas",
      "Realizar prácticas solo en zonas autorizadas",
      "Acompañamiento obligatorio por titular con licencia para aprendizaje (mínimo 3 años de experiencia en la categoría)",
    ],
    sanciones:
      "Violaciones pueden causar cancelación del permiso con prohibición de 1 a 3 años para nuevo trámite",
  },

  documentosObligatorios: [
    "Licencia o permiso de conducción vigente",
    "Permiso de aprendizaje (si aplica)",
    "Licencia de circulación del vehículo",
    "Documentos adicionales requeridos por ley",
  ],

  regulaciones_extranjeros: {
    duracion: "6 meses desde entrada al país para categorías A y B",
    estanciaMayor:
      "Requieren licencia cubana (sin exámenes, solo pago de tasa)",
    requisito: "Poseer licencia extranjera válida para el trámite",
  },

  requisitos_categoria: [
    "Para categorías C, C-1, D, D-1 se requieren 2 años con B",
    "Para categoría E se requieren 2 años con C y D",
    "Para categoría FE se requieren 2 años con F o poseer E",
  ],

  gestion_documentos: [
    "En caso de pérdida o deterioro: obtener duplicado",
    "Documentos deben estar legibles y en buen estado",
  ],

  // ==================== PRINCIPIOS JURÍDICOS ====================
  principiosJuridicos: [
    "Está permitido todo lo que no está prohibido",
    "Prohibida una cosa, las demás están permitidas",
    "Cuando la ley no distingue no cabe distinguir",
    "Primero en tiempo, primero en derecho",
    "La ignorancia de la ley no excusa de su cumplimiento",
    "Nadie es responsable de no ejecutar lo imposible",
    "Lo que acontece por caso fortuito y sin culpa a nadie puede ser imputado",
    "La interpretación de la ley no puede conducir al absurdo",
    "Las leyes y demás disposiciones jurídicas cubanas son escritas",
  ],

  // ==================== SEÑALIZACIÓN Y REGULACIÓN ====================
  ordenPrioridad: [
    "PNR y reguladores militares del tránsito",
    "Provisionales",
    "Semáforos",
    "Verticales",
    "Horizontales",
  ],

  senalesAgente: [
    {
      senal: "Alto (brazos extendidos horizontalmente)",
      circulan:
        "Los usuarios de la vía en el mismo sentido de los brazos del agente",
      seDetienen:
        "Los usuarios de la vía que se encuentran al frente y a la espalda del agente",
    },
    {
      senal: "Atención Alto (brazo vertical hacia arriba)",
      circulan: "Ninguna",
      seDetienen: "Todos los usuarios de la vía de inmediato",
    },
    {
      senal: "Brazo extendido horizontalmente al frente",
      circulan:
        "Los vehículos que se encuentran a la izquierda del agente y cruzan los peatones a su espalda",
      seDetienen: "Los vehículos que se encuentran a la derecha del agente",
    },
    {
      senal: "Silbato",
      unToqueLargo: "Circulación",
      toquesCortos: "Detención",
    },
    {
      senal: "Luz roja en balanceo",
      efecto: "Detención para usuarios a quienes va dirigida la señal",
    },
  ],

  banderasPolicia: [
    {
      color: "amarilla",
      descripcion: "que se aproxima un tramo o situación peligrosa",
      accion:
        "los conductores de vehículos deben moderar la velocidad o de ser necesario parar",
    },
    {
      color: "roja",
      descripcion: "a su paso el tránsito queda cerrado a la circulación",
      accion: "los usuarios de la vía deben dettenerse",
    },
    {
      color: "verde",
      descripcion: "a su paso el tránsito queda abierto a la circulación",
      accion: "continuar la circulación",
    },
  ],

  detenciones: [
    "Cuando un agente ordene la detención de un vehículo señalado hacia un lugar determinado, la detención se realizará en el lugar que él indique",
    "Cuando un agente ordene la detención de un vehículo y no señale el lugar, la detención se realizará en el margen derecho de la calzada",
    "Tras una detención el agente está obligado a dirigirse hacia el conductor y explicarle las causas de la misma",
  ],

  // ==================== SEMÁFOROS ====================
  semaforo: {
    funcion:
      "regular la prioridad alternativamente en las intersecciones de gran tráfico vehicular",
    disposicion:
      "sus luces de ubican de arriba abajo y de izquierda a derecha en el orden siguiente: roja, amarilla, verde",
  },
  
  semaforo_colores: [
    {
      color: "amarilla",
      descripcion:
        "parar vehículos y peatones hasta que cambie (los vehículos continúan cuando se encuentran tan cerca de ella que no puden detenerse en suficientes condiciones de seguridad)",
    },
    {
      color: "amarilla intermitente",
      descripcion: "continuar extremando precauciones",
    },
    {
      color: "roja",
      descripcion: "parar vehículos y peatones hasta que cambie",
    },
    {
      color: "roja intermitente en una intersección",
      descripcion: "parar, mirar y seguir",
    },
    {
      color:
        "roja intermitente ante vuelo rasante de aeronaves, puentes móviles, pasos a nivel, salidas de automóviles de bomberos, de patrullas y de ambulncias",
      descripcion:
        "parar vehículos y peatones y no continuar mientras esten encendidas",
    },
    {
      color: "verde",
      descripcion:
        "recto, girar derecha, y con precaución sin obstruir la vía girar izquierda",
    },
    {
      color: "verde con flechas en su interior",
      descripcion: "autoriza las maniobras que dichas flechas indican",
    },
    {
      color: "verde con flecha en su interior hacia la izquierda",
      descripcion:
        "autoriza girar hacia la izquierda, y circulando por una vía de soble sentido de circulación autoriza el giro en 'U' o media vuelta",
    },
    {
      color: "verde intermitente",
      descripcion: "indica que su tiempo está por concluir",
    },
  ],

  // ==================== SEÑALES HORIZONTALES ====================
  senalesHorizontales: [
    {
      senal: "paso peatonal tipo cebra",
      descripcion: "concede prioridad a los peatones",
    },
    {
      senal: "paso peatonal tipo franja",
      descripcion: "concede prioridad a los vehículos",
    },
    {
      senal: "línea de ceda el paso",
      descripcion: "moderar la velocidad y de ser necesario parar",
    },
    {
      senal: "línea de pare",
      descripcion: "parar ante ella, mirar y seguir",
    },
    {
      senal: "línea discontinua paralela a la circulación",
      descripcion: "los vehículos podran cruzarla según lo requieran",
    },
    {
      senal: "línea continua paralela a la circulación",
      descripcion: "ningún vehículo podrá cruzarla ni circular sobre ella",
    },
    {
      senal: "doble línea continua",
      descripcion:
        "ningún vehículo  podrá cruzarla ni circular sobre ella. Indica una peligrosidad mayor",
    },
    {
      senal: "línea continua extrema izquierda",
      descripcion:
        "cuando esté cerca del lado izquierdo del conductor no la podrá cruzar",
    },
    {
      senal: "línea discontinua extrema izquierda",
      descripcion:
        "cuando esté más cerca del lado izquierdo del coductor la podrá cruzar",
    },
    {
      senal: "línea continua",
      descripcion:
        "para regresar a la senda o carril por el que se transitaba se podrá cruzar",
    },
    {
      senal: "línea contínua extrema derecha",
      descripcion:
        "si está en el borde extremo derecho de la vía se podrá cruzar",
    },
  ],

  // ==================== OTRAS SEÑALES ====================
  otrasSeñales: [
    {
      senal: "Brazo extendido horizontalmente por el conductor",
      descripcion:
        "Para girar a la izquierda o para cambiar de senda o carril a la izquierda",
    },
    {
      senal: "Brazo del conductor vertical hacia arriba",
      descripcion:
        "Para girar a la derecha o para cambiar de senda o carril a la derecha",
    },
    {
      senal:
        "Brazo del conductor inclinado hacia abajo con la palma de la mano hacia atrás",
      descripcion: "Para detenerse o disminuir la velocidad",
    },
    {
      senal:
        "Brazo extendido horizontalmente con la palma de la mano haci atrás con movimientos repetidos delante hacia atrás",
      descripcion: "Para realizar el retroceso o marcha atrás",
    },
    {
      senal:
        "Triangular de 45 cm de lado de material reflectante, un mechero o un farol, o una bandera roja",
      descripcion: "Para señalar rotura, desperfecto o accidente",
    },
    {
      senal: "Banderas rojas de 30 x 30 cm en vehículo con carga",
      descripcion:
        "Para cargas que sobresalen más de un metro por delante o por detrás del vehículo del amanecer al anochecer, debe ser visible a 100m",
    },
    {
      senal: "Luz roja o dispositivo reflectante rojo en vehículo con carga",
      descripcion:
        "Para cargas que sobresalen más de un metro por detrás del vehículo del anochecer al amanecer, debe ser visible a 100m",
    },
    {
      senal:
        "Luz blanca o dispositivo reflectante blanco en vehículo con carga",
      descripcion:
        "Para cargas que sobresalen más de un metro por delante del vehículo del anochecer al amanecer, debe ser visible a 100m",
    },
    {
      senal: "A 100 m con bandera roja un ganadero a cada lado del rebaño",
      descripcion:
        "Señal para el cruce de ganado por una vía rural pavimentada del amanecer al anochecer",
    },
    {
      senal:
        "A 100 m con bandera roja un ganadero delante y otro detrás del rebaño",
      descripcion:
        "Señal para el traslado de ganado por una vía rural pavimentada del amanecer al anochecer",
    },
  ],

  // ==================== PROHIBICIONES ====================
  prohibiciones: {
    circulacion: [
      "No conducir con personas encimadas",
      "No se conducirá con una sola mano sobre el volante, excepto para la realización de operaciones lógicas como conectar velocidades, realizar señales de brazo y otras",
      "No cruzar las manos al realizar los giros",
      "No se circulará a distancias entre vehículos menores de 5 m por cada 15 kph (fórmula: V/3)",
      "No se transportarán menores de 12 años en el asiento delantero",
      "No se transportarán menores de 2 años en ninguna parte del vehículo sin acompañamiento de personas mayores o en su caso sin aditamentos especiales",
      "Se prohíbe utilizar teléfonos y otros medios de comunicación mientras el vehículo esté en marcha",
      "Se prohíbe conectar audio a un volumen muy alto",
    ],

    estacionamiento: [
      "A menos de 10 cm del contén",
      "A menos de 4 m de un hidrante",
      "A menos de 50 cm entre vehículos",
      "Hasta 10 m de una intersección",
      "Hasta 100 m si la intersección es semaforizada",
      "Hasta 40 m detrás y hasta 10 m hacia delante de una señal de parada de ómnibus",
      "En el paseo de zona urbana",
      "En aceras, césped, parterres",
      "Entre zona de seguridad o refugio de peatones y entre estos y la acera",
      "En los separadores centrales de la vía",
      "En ciclovías, ciclocarriles o vías exclusivas",
      "En rotondas o partes que la circundan",
      "Zonas de embajadas y consulados",
      "Zonas oficiales",
      "Zonas de carga, en días y horas establecidas para estas operaciones",
      "Zonas de piquera",
      "Frente y costado de unidades del MININT y de las FAR",
      "Frente a la entrada principal de edificios públicos",
      "Obstruyendo intersecciones, entradas o salidas",
      "Entrada y salida de garajes, pistas y rampas",
      "Obstaculizando de cualquier forma la vía o entradas y salidas de vehículos",
    ],

    consumo: [
      "Prohibido consumir bebidas alcohólicas en los vehículos",
      "Prohibido transportar bebidas alcohólicas en los compartimentos destinados a consumo del conductor o de los pasajeros",
    ],

    ganado: [
      "Por zona urbana se prohíbe el cruce y el traslado, excepto que se utilicen vehículos",
    ],

    generales: [
      "Lavar o reparar vehículos encima de la calzada",
      "Arrojar basuras, desechos y objetos sobre la vía",
      "Conducir muy enfermo o agotado",
      "Conducir con defectos físicos incapacitantes, excepto con autorización del jefe de licencia de conducción y adaptaciones correspondientes",
      "Circular por zona urbana vehículos de carga de capacidad nominal superior a 10000 kg",
      "Circular vehículos por las aceras, paseos, separador central o cualquier otro componente de la vía no construido para esos fines",
      "El cruce de cualquier vehículo por una intersección o zona de paso de peatones cuando pueda obstruir a estas",
      "Realizar frenazos o bandazos bruscos",
      "Circular vehículos agrícolas por vías de interés nacional, provincial o municipal",
    ],
  },

  // ==================== PRIORIDAD EN INTERSECCIONES ====================
  prioridadIntersecciones: [
    {
      term: "El conductor del vehículo deberá disminuir la velocidad o detenerse, según la visibilidad",
      opciones: [
        "Ante el vehículo que se aproxima por la senda o carril, cuando va a salir de un estacionamiento, parqueo o acceso",
        "Ante el vehículo que se aproxima en sentido opuesto cuando va a girar a la izquierda",
        "Ante el vehículo que se aproxima por una vía pavimentada, cuando circula por una vía no pavimentada",
        "Ante el vehículo que circula por una vía de doble sentido, cuando circula por una vía de un solo sentido",
        "Ante el vehículo que se aproxima por la vía transversal derecha, en el cruce de vías de igual categoría",
        "Ante el vehículo que se aproxima por la vía transversal cuando circula por una vía de igual categoría en forma de T o cualquier otra forma sin continuación",
        "Ante los vehículos que circulan por el interior de la rotonda, excepto que la señalización indique otra regulación",
      ],
    },
    {
      term: "Prioridad en la circulación mediante el empleo de señales para la regulación",
      opciones: [
        "Señal de vía con prioridad",
        "Cruces o entronques preferenciales",
        "Luz verde del semáforo",
        "Una o dos luces amarillas intermitentes",
      ],
    },
    {
      term: "No hay prioridad mediante la utilización de señales y el conductor del vehículo deberá disminuir la velocidad y de ser necesario parar",
      opciones: [
        "Ante la señal de ceda el paso",
        "Ante la línea de ceda el paso",
        "Ante un paso a nivel con barreras",
      ],
    },
    {
      term: "No hay prioridad mediante la utilización de señales y el conductor del vehículo deberá parar, mirar y seguir",
      opciones: [
        "Ante la señal de pare",
        "Ante la línea de pare",
        "Ante un paso a nivel sin barreras(si no tiene señal, parar 3 metros antes)",
        "Ante una o dos luces rojas intermitentes en una intersección",
      ],
    },
    {
      term: "No hay prioridad mediante la utilización de señales y el conductor del vehículo deberá parar vehículos y peatones",
      opciones: [
        "Mientras permanezcan encendidas Una o dos luces rojas intermitentes ante vuelo rasante de aeronaves, puentes móviles, pasos a nivel, salidas de automóviles de bomberos, de patrullas y de ambulancias",
        "Hasta que cambie luz roja del semáforo",
        "Hasta que cambie luz amarilla del semáforo. Los vehículos continúan cuando al proyectarse esta luz se encuentren tan cerca de ella que no puedan detenerse en suficientes condiciones de seguridad",
      ],
    },
  ],

  // ==================== ESTACIONAMIENTO ====================
  estacionamiento: {
    procedimiento: [
      "En pendiente descendente o cuesta abajo conectar retroceso o marcha atrás y girar las ruedas a favor del contén",
      "En pendiente ascendente o cuesta arriba conectar primera velocidad y girar el timón en sentido contrario del contén",
      "Donde no exista contén calzar las ruedas que queden situadas a mayor altura en la pendiente, delanteras o traseras",
      "Aplicar en todos los casos el freno de mano, de seguridad o de emergencia",
      "Apagar el motor del vehículo cerrando el chucho o interruptor de ignición",
      "Retirar la llave de dicho chucho o interruptor",
      "Donde existan vallas para el parqueo, estacionar dentro de estas sin sobresalir sus límites",
    ],

    ubicacion: [
      "En vías rurales: a la derecha de la calzada",
      "En calles de doble sentido: en la derecha de la calzada",
      "En calles de un solo sentido: en la izquierda de la calzada. Por causas obligatorias o forzosas en la derecha",
    ],
  },

  // ==================== LÍMITES DE VELOCIDAD ====================
  limitesVelocidad: {
    generales: {
      zonaUrbana: {
        limite: "50 kph",
        vehiculos: "Todo vehículo de motor",
        nota: "Mediante señal puede establecerse límites inferiores o superiores",
      },
      limitesEspeciales: [
        {
          limite: "20 kph",
          aplicacion: [
            "Tractores y otros vehículos similares de motor",
            "Retroceso o marcha atrás",
            "Salidas de edificios y de garajes",
            "Vías y parqueos interiores",
          ],
        },
        {
          limite: "40 kph",
          aplicacion: [
            "Zona de niños por áreas urbanas",
            "Vehículos de carga por zona urbana transportando personas a movilizaciones, concentraciones y otros casos autorizados",
          ],
        },
        {
          limite: "60 kph",
          aplicacion: [
            "Zona de niños por áreas rurales",
            "Vehículos de carga por zona rural transportando personas a movilizaciones, concentraciones y otros casos autorizados",
            "Caminos de tierra o terraplén",
          ],
        },
      ],
    },

    porTipoVehiculo: [
      {
        tipo: "Con remolque - Grúas y similares",
        carretera: "70 kph",
        autopista: "80 kph",
      },
      {
        tipo: "Rígido de carga - Articulado de carga",
        carretera: "80 kph",
        autopista: "90 kph",
      },
      {
        tipo: "Hasta 3500 kg y ómnibus",
        carretera: "90 kph",
        autopista: "100 kph",
      },
    ],

    remolque: {
      zonaUrbana: "30 kph",
      zonaRural: "40 kph",
    },

    tuneles: {
      minima: "60 kph",
      maxima: "La que indique la señal",
    },

    moderarVelocidad: [
      "Ante intersecciones cuando el semáforo no funciona o alguna de sus luces no está encendida",
      "Ante la señal de ceda el paso",
      "Ante la línea de ceda el paso",
      "Ante un paso a nivel con barreras",
      "Señales de peligro o precaución",
      "Superficie de la vía resbaladiza o con sustancias que puedan proyectarse",
      "Estrechamiento de vías",
      "En caso de niebla densa, lluvia intensa o copiosa, nubes de humo o de polvo",
      "Al resultar afectado por deslumbramiento",
      "Animal en la calzada o acercándose a ella",
      "Vehículo detenido o deteniéndose para tomar o para dejar personas",
      "Cuando quien guía a un grupo de personas indique el cruce de estas",
      "Peatón en la calzada",
      "Ante la presencia de un peatón discapacitado",
      "Ante aglomeraciones de personas",
    ],
  },

  // ==================== USO DE VÍAS Y CARRILES ====================
  usoViasCarriles: [
    {
      tipoCarril: "Dos o más carriles mismo sentido",
      extremaIzquierda:
        "Obligación de mantener el límite máximo de velocidad que se establece",
      extremaDerecha:
        "Marcha lenta. En zona rural se considera marcha lenta cuando se circula a velocidad inferior a 60 kph",
    },
    {
      tipoCarril: "Doble sentidos con tres carriles",
      carrilCentral: "Solo para adelantar en ambos sentidos",
      carrilesLaterales: "Para circular en el sentido que corresponde",
    },
  ],

  // ==================== MANIOBRAS ====================
  maniobras: {
    giros: {
      derecha:
        "Desde la senda o carril de la extrema derecha de la vía por donde se circula hacia cualquier senda o carril de la vía donde se efectuará la incorporación",
      izquierda:
        "Desde la senda o carril de la extrema izquierda de la vía por donde se circula hacia cualquier senda o carril de la vía donde se efectuará la incorporación",
      autorizadosPorFlechas:
        "Obligación de realizarlos como lo indican las flechas y mantener la misma posición de senda o carril",
      ciclocarriles:
        "La prioridad corresponde a los ciclos, a no ser que mediante señales se le conceda la prioridad a los demás vehículos",
    },

    adelantamiento: {
      procedimiento: [
        "Observar hacia delante y mediante el espejo retrovisor hacia atrás",
        "Realizar con suficiente antelación las señales con luces intermitentes o, en su defecto, con el brazo",
        "El hecho de realizar las señales no concede prioridad sobre los usuarios que están en uso de la vía",
        "Realizar el adelantamiento por la senda o carril de la izquierda",
        "Reincorporarse a la senda o carril de forma gradual y segura",
        "El adelantamiento a más de un vehículo debe realizarse de forma que no se atente contra la seguridad vial",
        "El conductor del vehículo que va a ser o está siendo adelantado debe facilitar la maniobra",
      ],
      prohibidoEn: [
        "Cambios de rasante",
        "Curvas de visibilidad reducida",
        "Pasos a nivel",
        "Túneles",
        "Pasos peatonales tipo cebra",
        "Por debajo de 150 m de cambios de rasante y de curvas de visibilidad reducida",
      ],
      excepcion:
        "Se permite adelantar en los cambios de rasante y en las curvas de visibilidad reducida si hay más de una senda o carril en el mismo sentido",
    },

    retroceso: {
      nombre: "Retroceso o marcha atrás",
      prohibidoEn: [
        "Cambios de rasante",
        "Curvas de visibilidad reducida",
        "Pasos a nivel y demás intersecciones",
        "Túneles",
        "A más de 20 kph",
        "Por más de 20 m",
        "Por debajo de 150 m de cambios de rasante y de curvas de visibilidad reducida",
      ],
    },

    giroU: {
      nombre: "Giro en 'U' o media vuelta",
      prohibidoEn: [
        "Cambios de rasante",
        "Curvas de visibilidad reducida",
        "Pasos a nivel",
        "Túneles",
        "Puentes",
        "Pasos superiores",
        "Pasos inferiores",
        "Intercambios",
        "Cuando haya que retroceder para realizarlo",
        "Por debajo de 150 m de cambios de rasante y de curvas de visibilidad reducida",
      ],
    },

    detencionMomentanea: {
      nombre: "Detención momentánea",
      prohibidaEn: [
        "Cambios de rasante",
        "Curvas de visibilidad reducida",
        "Pasos a nivel",
        "Túneles",
        "Puentes",
        "Pasos superiores",
        "Pasos inferiores",
        "Intercambios",
        "Pasos peatonales",
        "Obstruyendo la circulación",
        "Por debajo de 150 m de cambios de rasante y de curvas de visibilidad reducida",
      ],
    },

    circulacionMontanosa: {
      prohibiciones: [
        "Bajar con el motor del vehículo apagado o la transmisión en neutro",
        "En los pasos muy estrechos, el conductor del vehículo que baja debe ceder el paso al conductor que sube",
      ],
    },

    remolque: {
      normas: [
        "Se remolcará con barra fija. Puede remolcarse con cable o cuerda (resistente, señalizada, no mayor de 8 m) si el vehículo remolcado frena adecuadamente",
        "El vehículo remolcado debe estar señalizado",
        "El vehículo remolcador circulará con las luces encendidas",
        "La velocidad de arrastre no será mayor de 30 kph en zona urbana ni mayor de 40 kph en zona rural",
        "En tramos montañosos está prohibido remolcar con cable o similar y transportar pasajeros en cualquiera de los dos vehículos",
      ],
    },
  },

  // ==================== TRANSPORTE DE PERSONAS ====================
  transportePersonas: {
    prohibicionGeneral:
      "Se prohíbe transportar pasajeros en vehículos destinados al transporte de carga, excepto en los casos autorizados",

    casosAutorizados: {
      regulaciones: [
        "La velocidad no excederá de 40 kph por zona urbana ni de 60 kph por zona rural",
        "El vehículo deberá estar habilitado con barandas laterales y trasera resistentes",
        "No viajarán más de 4 personas de pie por metro cuadrado, en viajes de una hora o menos de duración",
        "Cuando las barandas sean inferiores a 120 cm las personas viajarán sentadas en la cama o caja del vehículo",
        "Las barandas en este caso serán superiores a 40 cm",
        "Cuando el viaje exceda de una hora el vehículo deberá estar habilitado con bancos resistentes",
        "No se transportarán cajas ni otras cargas, si ello pone en peligro la seguridad de los transportados",
        "Viajará un responsable en la cabina del vehículo y otro en la cama",
        "El vehículo se apartará de la calzada al llegar al lugar de destino",
      ],
    },

    caravanas: [
      "El responsable de toda la caravana viajará en la cabina del primer vehículo",
      "Cada vehículo que integra la caravana llevará encendidas durante el día las luces de cruce o cortas y durante la noche las establecidas en ese caso",
      "No deberán adelantarse entre ellos, excepto por razones de fuerza mayor",
    ],

    transportePublico: {
      prohibicionesConductor: ["Conversar"],
      prohibicionesGenerales: ["Fumar (conductor, ayudantes y pasajeros)"],
    },

    motocicletas: [
      "Podrá viajar el conductor, una persona detrás de él y otra en el sidecar",
      "El transporte de persona menor de 7 años se hará en el sidecar, en unión de otra de 14 o más años de edad",
      "Usarán cascos debidamente abrochados y ajustados, todos los ocupantes del vehículo",
    ],

    seguridadGeneral: [
      "Obligación de usar debidamente abrochado y ajustado el cinturón de seguridad, todos los ocupantes del vehículo",
      "Se prohíbe transportar un número mayor de personas del autorizado, según el tipo de vehículo",
    ],
  },

  // ==================== TRANSPORTE DE CARGAS ====================
  transporteCargas: {
    prohibicionesGenerales: [
      "Se prohíbe el trasbordo de carga o de otros objetos de un vehículo a otro encima de la calzada",
    ],
    prohibicionesCirculacion: [
      "La altura de la carga sea mayor de 4 m, desde el pavimento o terreno",
      "La carga sobresalga más de 2 m por delante o por detrás del vehículo",
      "La carga sobresalga el ancho de la cama o caja del vehículo (En motocicletas podrá sobresalir hasta 50 cm por los laterales y parte trasera en dispositivos habilitados para la carga)",
      "La carga se arrastre por la vía",
      "Las cargas o residuos que puedan esparcirse no estén tapados debidamente",
      "Las cargas o residuos malolientes no estén herméticamente tapados",
      "Las cargas pongan en peligro la integridad de las personas",
      "Las cargas provoquen ruidos por no estar amarradas debidamente",
      "Las cargas tapen las luces, los dispositivos reflectantes, matrículas, rótulos o distintivos",
      "La carga afecte la visibilidad del conductor",
    ],

    prohibicionesTuneles: [
      "Se prohíbe circular por túneles transportando materiales inflamables, explosivos o tóxicos",
    ],
    prohibicionesFumar: [
      "Se prohíbe fumar al conductor, ayudantes o pasajeros transportando materiales inflamables o explosivos",
    ],
  },

  // ==================== EXIGENCIAS TÉCNICAS ====================
  exigenciasTecnicas: {
    requisitosGenerales: [
      "Los vehículos para circular deben estar en buen estado técnico y de conservación",
      "Debidamente pintados y limpios",
    ],

    inspeccionTecnica: [
      "Los vehículos deben pasar por la inspección técnica a cargo del MININT y por la revisión técnica del MITRANS en el período que se establezca",
      "Cuando en la inspección técnica el vehículo presente dificultades se dará un término no mayor de 2 años para resolverlas",
      "Si en dicho término no se resuelven las deficiencias se dará baja del Registro al vehículo",
    ],

    notificacionesRegistro: {
      plazo: "30 días",
      cambios: [
        "Cambio de motores y de combustible",
        "Cambio de carrocería",
        "Cambio de colores",
        "Altas y bajas y nuevas inscripciones",
        "Cambio del régimen de propiedad o de posesión",
        "Conversiones de vehículos",
        "Cambio de marca y de modelo",
        "Cambio de domicilio cuando implique cambio de provincia",
        "Pérdida o deterioro de matrículas o de licencias de circulación",
      ],
    },

    deficienciasProhibenCirculacion: {
      frenos: [
        "Exista salidero de aire en el sistema de frenos",
        "Exista salidero de líquido hidráulico",
        "No trabaje el manómetro del sistema de aire",
        "El freno de servicio no accione uniformemente sobre todas las ruedas",
        "El compresor no produzca la presión de aire necesaria",
        "El freno de mano, de seguridad o de emergencia no sostenga al vehículo al 16% de inclinación",
        "Los remolques de hasta 1500 kg no dispongan de freno, cadena o cable que en caso de quedar libres los frenen y sujeten",
        "Los remolques y semirremolques de más de 1500 kg no dispongan de sistema de frenos o frenos de autobloqueo de funcionamiento automático eficiente",
      ],

      direccion: [
        "La holgura o juego libre del timón sobrepase las normas de fabricación o en su defecto sea mayor de 25 grados",
        "Exista rigidez en el timón",
        "Presenten desajuste en la dirección",
        "Exista desajuste en el sistema hidráulico de la dirección",
      ],

      neumaticosRuedas: [
        "Existan roturas en las cuerdas de los neumáticos",
        "Presenten desperfecto en las llantas",
        "La medida de los neumáticos no se corresponda con el peso del vehículo",
        "Los neumáticos estén muy desgastados",
        "Exista desajuste en las ruedas delanteras",
      ],

      motorTransmision: [
        "Exista salidero de combustible en el sistema de alimentación",
        "Exista vibración en la transmisión",
        "Las velocidades se desconecten de la caja",
        "El escape contenga una cantidad de gases contaminantes superior a lo establecido",
        "Falte el tubo de escape o el silenciador o cuando uno de ellos esté en mal estado",
      ],
    },
  },

  // ==================== DISPOSITIVOS DEL VEHÍCULO ====================
  dispositivosVehiculo: {
    bocina: {
      prohibidoEn: ["Zona urbana", "Zonas de silencio"],
      casosJustificados: [
        "Para evitar accidentes",
        "Por peligro",
        "Para pedir auxilio",
        "Conduciendo a heridos o a enfermos graves",
      ],
    },

    ruido:
      "Se prohíbe utilizar en el vehículo dispositivos que puedan provocar ruidos intensos o estridentes",

    espejos: {
      visibilidadMinima:
        "A 50 m como mínimo deben permitir ver hacia atrás, sin que se distorsione la imagen",
      obligacion:
        "Obligación de portar uno o varios, según las características del vehículo",
    },

    matriculas: {
      obligacion:
        "Obligación de portar en el vehículo una trasera y otra delantera",
      visibilidad: "Deben ser legibles a 40 m",
      iluminacionNocturna:
        "Del anochecer al amanecer la luz blanca que ilumina la matrícula trasera, deberá permitir que con el vehículo detenido y en condiciones normales de visibilidad dicha matrícula sea visible a 20 m",
    },

    equipoObligatorio: [
      "Defensas",
      "Parabrisas (con adecuada visibilidad y seguridad)",
      "Seguros o cierres en las puertas",
      "Limpiaparabrisas, al menos uno delante del asiento del conductor",
    ],

    botiquin: {
      obligatorioPara: [
        "Ómnibus por zona rural",
        "Vehículos de carga por zona rural",
      ],
    },

    extintor: {
      obligatorioPara: [
        "Ómnibus por cualquier zona que circulen",
        "Vehículos de carga",
        "Vehículos ligeros del sector estatal",
      ],
    },
  },

  // ==================== LUCES Y DISPOSITIVOS REFLECTANTES ====================
  lucesDispositivos: {
    aspectosGenerales: [
      "Las luces se encienden del anochecer al amanecer",
      "Las luces que trabajan en pareja deben tener igual intensidad y color",
      "Se prohíbe tener instalados en el vehículo reflectores fijos o móviles y otras luces no autorizadas",
      "Ninguna luz en el vehículo debe ser intermitente excepto las indicadoras de dirección o las de avería o parada de emergencia",
      "Ninguna luz en el vehículo puede estar situada de sus bordes laterales exteriores a más de 40 cm",
    ],

    lucesDelanteras: {
      vehiculosMas40kph: {
        carretera: {
          tipo: "Dos luces de carretera o largas, altas o directas",
          alcance: "100 m mínimo",
        },
        cruce: {
          tipo: "Dos luces de cruce o cortas, bajas o indirectas",
          alcance: "40 m",
        },
      },
      vehiculosMenos40kph: {
        tipo: "Dos luces de cruce o cortas, bajas o indirectas",
        alcance: "40 m",
      },
      motocicletas: {
        mas40kph:
          "Una luz de carretera o larga y una luz de cruce o corta, integradas en una sola unidad",
        menos40kph: "Una luz de cruce o corta",
      },
      color:
        "Las luces de carretera o largas y las de cruce o cortas serán blancas o de color amarillo selectivo",
    },

    lucesPosicion: {
      visibilidad: "300 m",
      proposito:
        "Indican la presencia y ancho del vehículo en marcha o estacionado",
      configuraciones: {
        estandar:
          "Dos rojas traseras y 2 blancas o de color amarillo selectivo delanteras",
        vehiculosAltos:
          "El vehículo que sobrepase de 2 m de altura portará estas luces en las partes superiores delantera y trasera",
        tractores: "Dos rojas traseras",
        motocicletas: "Una roja trasera",
        sidecar:
          "Una roja trasera y una blanca o de color amarillo selectivo delantera",
        remolques:
          "Dos rojas traseras y a no más de 15 cm de sus exteriores en cada extremo lateral delantero una blanca o de color amarillo selectivo. También tendrán luces laterales a no más de 1.5 m una de otra",
        remolquesEstrecho:
          "Remolque que no sobrepase de 80 cm de ancho: podrá circular con una luz roja trasera",
      },
    },

    dispositivosReflectantes: {
      visibilidad: "150 m",
      color: "rojo",
      ubicacion: "parte trasera del vehículo",
      formas: {
        remolques:
          "En forma de triángulo equilátero, sus lados no mayores de 20 cm ni menores de 15 cm",
        otros: "En forma no triangular",
      },
    },

    lucesFrenado: {
      color: "rojo intenso",
      requisito:
        "La portará en su parte trasera todo vehículo de motor capaz de alcanzar 25 kph",
    },

    lucesIntermitentes: {
      uso: "Se utilizan tanto de día como de noche",
      color:
        "amarillo (En la parte trasera se admite el color rojo cuando así se diseñó por el fabricante)",
    },

    luzMatricula: {
      color: "blanca",
      proposito:
        "Permitirá que la matrícula trasera sea visible de noche, en condiciones normales y con el vehículo detenido",
      visibilidad: "20 m",
    },

    reglasEspeciales: {
      condicionesAdversas:
        "Luces de cruce o cortas o luces de niebla en caso de niebla densa, lluvia intensa o copiosa, nubes de humo o de polvo",

      zonaUrbanaYTuneles: {
        iluminacionSuficiente: "Luces de cruce o cortas o luces de posición",
        iluminacionInsuficiente:
          "Luces de carretera o largas, altas o directas",
      },

      senalizacionLuces: {
        adelantar:
          "Cambios rápidos alternos de luces de carretera por luces de cruce",
        curvas:
          "Cambios espaciados a intervalos regulares para entrar a un cambio de rasante o a una curva de visibilidad reducida",
      },

      sustitucionLuces: [
        "A 150 m aproximadamente del vehículo que se acerca en sentido opuesto o cuando a cualquier distancia se solicite el cambio",
        "A menos de 50 m del vehículo que circula delante para evitar deslumbramiento a través de los espejos retrovisores",
      ],
    },

    ciclosTraccionAnimal: {
      ciclosDosRuedas: {
        delantero: "Una luz blanca o amarilla",
        trasero: "Una luz roja o un dispositivo reflectante rojo",
      },
      ciclosVariasRuedas: {
        delantero: "Una luz blanca o amarilla",
        trasero:
          "Dos luces rojas o dos dispositivos reflectantes rojos, uno a cada lado",
      },
      traccionAnimal: {
        delantero: "Una luz blanca en la parte superior delantera izquierda",
        trasero:
          "Una luz roja en la parte inferior trasera izquierda y un dispositivo reflectante a cada lado",
      },
    },
  },

  // ==================== REGULACIONES PARA CICLOS ====================
  regulacionesCiclos: {
    prohibiciones: [
      "Menores de 12 años conduciendo por vías de mucho tránsito",
      "A más de 1 m del contén o del borde de la calzada",
      "Paralelo a otro ciclo",
      "Remolcado de otro vehículo",
      "Realizando acrobacias o malabares",
      "Con objetos o personas en partes del ciclo que puedan afectar la maniobrabilidad o la visibilidad",
      "Con deficiencias técnicas que afecten la seguridad vial",
    ],
  },

  // ==================== REGULACIONES PARA VEHÍCULOS DE TRACCIÓN ANIMAL ====================
  regulacionesTraccionAnimal: [
    "Obligación de circular lo más próximo posible al contén o borde de la calzada",
    "Circular con ruedas de goma o revestidas de dicho material por vías pavimentadas",
    "Los animales deben disponer de viseras o anteojeras",
    "Disponer de aditamento para recoger el excremento del animal",
    "Disponer de freno o mecanismo de inmovilización para el estacionamiento",
    "No circular por las carreteras del anochecer al amanecer",
    "No conducir menores de 16 años de edad este tipo de vehículos",
  ],

  // ==================== REGULACIONES PARA PEATONES ====================
  regulacionesPeatones: {
    semaforo: ["Deben cruzar la vía con la luz verde del semáforo"],
    metodosCruce: [
      "Cruzar la vía de forma rápida. Cuando existan pasos peatonales cruzar por estos",
    ],
    prioridades: [
      "El paso peatonal tipo cebra concede prioridad con respecto a los vehículos, el de tipo franja establece la prioridad para los vehículos",
    ],
    zonaUrbana: "Por zona urbana circular por la parte derecha de la acera",
    zonaRural: [
      "Por zona rural circular por la izquierda de la vía de frente al tránsito",
    ],
    prohibiciones: [
      "No formar grupos en las aceras",
      "En las aceras de hasta 1 m de ancho no circular apareado a otro peatón",
      "No cruzar por delante, por detrás o entre vehículos, detenidos o deteniéndose",
      "Cuando se aproxime un vehículo requiriendo prioridad alcanzar rápidamente el borde más cercano de la calzada",
      "El guía de personas debe detener el tránsito para permitir el cruce de ellas",
      "No circular por la vía en patines, carriolas o artefactos similares",
    ],
  },

  // ==================== OBLIGACIONES EN ACCIDENTES ====================
  obligacionesAccidentes: {
    notificacionInmediata: [
      "El conductor de un vehículo implicado en un accidente de tránsito debe dar cuenta de inmediato a la PNR cuando:",
    ],
    casos: [
      "Resulten personas muertas o lesionadas",
      "Participe un vehículo estatal",
      "Se dañe la propiedad estatal",
      "Se dañen bienes muebles o inmuebles y el perjudicado esté ausente",
    ],

    posicionVehiculo: [
      "Se mantendrá el vehículo en la misma posición que resulte del accidente cuando haya personas muertas o lesionadas. Se situarán las señales establecidas y se tratará de restablecer la circulación",
    ],
    excepciones: [
      "Por excepción se podrá mover el vehículo cuando sea necesario brindar auxilio a víctimas, incluido el propio conductor, el cual deberá retornar al lugar de accidente, excepto que quede hospitalizado o su estado de salud se lo impida",
    ],
  },

  // ==================== DIMENSIONES MÁXIMAS PERMITIDAS ====================
  dimensionesMaximas: {
    longitud: "15 m (rígidos) o 18 m (articulado o conjunto de vehículos)",
    altura: "4 m",
    anchura: "2.60 m",
  },

  // ==================== PERMISOS ESPECIALES ====================
  permisosEspeciales: [
    "En vías anchas secundarias, de un sentido, de zonas residenciales de poco tránsito, se puede parquear a ambos lados, dejando el carril central para circular",
  ],
};

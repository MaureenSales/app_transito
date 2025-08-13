const data = {
  definitions: [
    {
      term: "Semáforo",
      definition: "sistema tricolor con caras verticales  y horizontales",
    },
    {
      term: "Señales para casos de rotura, desperfecto o accidente",
      definition:
        "señales que se sitúan sobre la vía a 30m detrás del vehículo y serán visibles a una distancia de 150m",
    },
    {
      term: "Año natural",
      definition:
        "En Cuba, solamente en Seguridad Vial es el período de fecha de un año a fecha igual del siguiente año",
    },
    {
      term: "Curva de visibilidad reducida",
      definition:
        "Aquella que no permite ver el ancho total de la calzada según la escala de velocidades",
    },
    {
      term: "Estacionamiento o parqueo",
      definition:
        "Detención por causas distintas a tomar/dejar personas o carga",
    },
    {
      term: "Puente",
      definition: "construcción sobre cursos de agua",
    },
    {
      term: "Intercambio",
      definition: "cruce de vías a diferentes niveles",
    },
    {
      term: "Paso inferior",
      definition: "cruce de vía por debajo de otra o de una vía férrea",
    },
    {
      term: "Paso superior",
      definition: "cruce de vía por encima de otra o de una vía férrea",
    },
    {
      term: "Recalificación",
      definition:
        "Entrenamiento cada 2 años para conductores. Cancelación de licencia por 6 meses si no se aprueba",
    },
    {
      term: "Transporte colectivo de pasajeros",
      definition:
        "Ómnibus, taxi, vehículo de carga (cuando transporta personas a concentraciones, movilizaciones y otros casos autorizados)",
    },
    {
      term: "Cambio de rasante",
      definition:
        "Son las ondulaciones o lomas que impiden ver la continuación de la vía",
    },
    {
      term: "Conductor de vehículo",
      definition: "Persona que guía cualquier tipo de vehículo",
    },
    {
      term: "Conductor novel",
      definition:
        "conductor que tiene menos de 2 años de haber obtenido su licencia de conducción",
    },
    {
      term: "Conductor profesional",
      definition:
        "persona que recibe un salario o una tarifa por conducir vehículos",
    },
    {
      term: "Detención momentánea",
      definition:
        "detención voluntaria de un vehículo en la vía por no más del tiempo necesario para tomar o para dejar personas o carga",
    },
    {
      term: "Dispositivo reflectante",
      definition:
        "dispositivo destinado a indicar la presencia de un vehículo o de un obstáculo por luz emanada de una fuente luminosa ajena",
    },
    {
      term: "Hidrante",
      definition: "conducto o toma de agua para el servicio de bomberos",
    },
    {
      term: "Intersección",
      definition: "cruce de vías",
    },
    {
      term: "Paso a nivel con barreras",
      definition:
        "equivalente a un ceda el paso (moderar la velocidad y de ser necesario parar)",
    },
    {
      term: "Paso a nivel sin barreras",
      definition:
        "equivalente a una señal de pare (parar, mirar y seguir).Cuando carece de señal hay que parar 3 metros antes",
    },
  ],

  vehicles: [
    {
      kind: "Vehículos ligeros",
      description: "Vehículos de motor con un peso máximo de hasta 3,500 kg.",
    },
    {
      kind: "Vehículos pesados",
      description: "Vehículos de motor que superan los 3,500 kg.",
    },
    {
      kind: "Ómnibus",
      description:
        "Vehículo destinado al transporte de pasajeros con más de 16 asientos (sin contar el del conductor).",
    },
    {
      kind: "Microbús",
      description:
        "Vehículo para pasajeros con más de 8 pero no más de 16 asientos (sin contar el del conductor).",
    },
    {
      kind: "Camión rígido de carga",
      description:
        "Vehículo donde la cabina y la caja de carga están montadas sobre un mismo chasis.",
    },
    {
      kind: "Camión articulado de carga",
      description:
        "Vehículo compuesto por un tractocamón acoplado a un semirremolque.",
    },
    {
      kind: "Vehículo con remolque",
      description: "Cualquier vehículo al que se le ha acoplado un remolque.",
    },
    {
      kind: "Grúa",
      description: "Vehículo diseñado para izar y transportar cargas pesadas.",
    },
    {
      kind: "Vehículos agrícolas",
      description:
        "Vehículos de motor utilizados para actividades agrícolas o similares.",
    },
    {
      kind: "Vehículos de servicio especial",
      description:
        "Autorizados para servicios específicos como patrullas policiales, bomberos, ambulancias, vehículos de escolta y otros autorizados por el MININT (Ministerio del Interior).",
    },
    {
      kind: "Combinación de vehículos",
      description:
        "Conjunto de vehículos acoplados que circulan como una sola unidad.",
    },
  ],

  capacity_weight: [
    {
      term: "Capacidad nominal",
      definition: "carga útil máxima que puede transportar un vehículo",
    },
    {
      term: "Peso en carga",
      definition:
        "peso total del vehículo y de su carga, incluido el personal de servicio y los pasajeros",
    },
    {
      term: "Tara",
      definition:
        "peso del vehículo sin carga, sin personal de servicio y sin pasajeros; pero con la totalidad del carburante y utensilios normales de a bordo",
    },
    {
      term: "Peso por eje",
      definition:
        "parte del peso total transmitido a la vía a través de cada eje",
    },
  ],

  ways: [
    {
      term: "Vías en zona urbana",
      definition: "Se denominan 'calles'",
    },
    {
      term: "Vías en zona rural",
      definition:
        "Incluyen: autopistas, carreteras, caminos de tierra o terraplén",
    },
    {
      term: "Vía de doble sentido",
      definition: "Aquella que no tiene indicado su sentido de dirección",
    },
    {
      term: "Vía de un solo sentido",
      definition:
        "Tiene indicado su sentido de dirección. Generalmente con flechas en accesos transversales. Casos especiales pueden tener señales opuestas",
    },
    {
      term: "Señalización en un solo acceso",
      definition:
        "La vía es de un solo sentido para el acceso señalizado y de doble sentido para el otro",
    },
    {
      term: "Vía suficientemente iluminada",
      definition:
        "Permite distinguir un vehículo oscuro a 50 metros (visión normal)",
    },
  ],

  licenses: [
    {
      category: "A-1",
      description:
        "ciclomotores (hasta 50 cc o consumo eléctrico no superior a 1000 watts). Velocidad no superior a 50 kph",
    },
    {
      category: "B",
      description:
        "hasta 3500 kg y hasta 8 asientos sin contar el del conductor. Puede arrastrarse un remolque ligero (hasta 750 kg)",
    },
    {
      category: "C",
      description:
        "más de 3500 kg destinado al transporte de carga. Puede arrastrarse un remolque ligero (hasta 750 kg)",
    },
    {
      category: "D",
      description:
        "más de 8 asientos, sin contar el del conductor, destinado al transporte de personas",
    },
    {
      category: "E",
      description:
        "conjunto de vehículos cuyo vehículo de tracción puede ser de las categorías B, C, C-1, D, D-1",
    },
  ],

  // 1. Regulaciones generales de licencias
  regulaciones_licencias: [
    "Las clases de licencia de conducción son Nacional, Internacional y Especial militar",
    "La licencia de conducción se renueva cada 10 años",
    "Para obtener licencia se requiere tener 18 años cumplidos (para la especial militar se admite 17 y para la A-1 16)",
    "Para obtener la licencia se requiere saber leer y escribir",
    "Para obtener la licencia se requiere vencer los exámenes médico, teórico y práctico",
  ],

  // 2. Requisitos por categoría
  requisitos_categoria: [
    "Para categorías C, C-1, D, D-1 se requieren 2 años con B",
    "Para categoría E se requieren 2 años con C y D",
    "Para categoría FE se requieren 2 años con F o poseer E",
  ],

  // 3. Permiso de aprendizaje
  regulaciones_aprendizaje: [
    "Obligación de portar el permiso durante las prácticas",
    "Realizar prácticas solo en zonas autorizadas",
    "Acompañamiento obligatorio por titular con licencia para aprendizaje (mínimo 3 años de experiencia en la categoría)",
    "Violaciones pueden causar cancelación del permiso con prohibición de 1 a 3 años para nuevo trámite",
  ],

  // 4. Obligaciones del conductor
  documentos_obligatorios: [
    "Debe portar licencia o permiso de conducción vigente",
    "Debe portar permiso de aprendizaje (si aplica)",
    "Debe portar licencia de circulación del vehículo",
    "Debe portar documentos adicionales requeridos por ley",
  ],

  // 5. Normas para extranjeros/residentes temporales
  normas_extranjeros: [
    "Extranjeros o residentes temporales pueden conducir categorías A y B por 6 meses (desde entrada al país)",
    "Estancias mayores a 6 meses en el país requieren licencia cubana (sin exámenes, solo pago de tasa)",
    "Las Normas aplica igualmente a cubanos que regresan tras servicios en el exterior",
    "Extranjeros o residentes temporales requieren poseer licencia extranjera válida para el trámite",
  ],

  // 6. Duplicados y pérdidas
  gestion_documentos: [
    "En caso de pérdida o deterioro: obtener duplicado",
    "Documentos deben estar legibles y en buen estado",
  ],

  principles: [
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

  priority_order: [
    "PNR y reguladores miitares del tránsito",
    "Provisionales",
    "Semáforos",
    "Verticales",
    "Horizontales",
  ],

  signals_agent: [
    {
      signal: "Alto(brazos extendidos horizontalmente) ",
      action_circulation:
        "los usuarios de la vía en el mismo sentido de los brazos del agente",
      action_detention:
        "los usuarios de la vía que se encuentran al frente y aa la espalda del agente",
    },
    {
      signal: "Atención Alto (brazo vertical hacia arriba) ",
      action_circulation: "ninguna",
      action_detention: "todos los usuarios de la vía de inmediato",
    },
    {
      signal: "Brazo extendido horizontalmente al frente ",
      action_circulation:
        "los vehículos que se encuentran a la izquierda del agente y cruzan los peatones a su espalda",
      action_detention:
        "los vehículos que se encuentran a la derecha del agente",
    },
    {
      signal: "Toques de silbatos",
      action_circulation: "un toque largo",
      action_detention: "serie de toques cortos",
    },
    {
      signal: "Luz roja en balanceo",
      action_circulation: "los usuarios a quienes no va dirigida la señal",
      action_detention: "los usuarios a quienes no va dirigida la señal",
    },
  ],

  police_flags: [
    {
      color_flag: "amarilla",
      description: "que se aproxima un tramo o situación peligrosa",
      action:
        "los conductores de vehículos deben moderar la velocidad o de ser necesario parar",
    },
    {
      color_flag: "roja",
      description: "a su paso el tránsito queda cerrado a la circulación",
      action: "los usuarios de la vía deben dettenerse",
    },
    {
      color_flag: "verde",
      description: "a su paso el tránsito queda abierto a la circulación",
      action: "continuar la circulación",
    },
  ],

  detentions: [
    "cuando un agente ordene la detención de un vehículo señalado hacia un lugar determinado, la detención se realizara en el lugar que él indique",
    "cuando un agente ordene la detención de un vehículo y no señale el lugar, la dettención se realizara en el margen derecho de la calzada",
    "tras una detención el agente está obligado a dirigirse hacia el conductor y explicarle las causas de la misma",
  ],

  semaphore: [
    {
      function:
        "regular la prioridad alternativamente en las intersecciones de gran tráfico vehicular",
      disposal:
        "sus luces de ubican de arriba abajo y de izquierda a derecha en el orden siguiente: roja, amarilla, verde",
      colors: [
        {
          color: "amarilla",
          description:
            "parar vehículos y peatones hasta que cambie (los vehículos continúan cuando se encuentran tan cerca de ella que no puden detenerse en suficientes condiciones de seguridad)",
        },
        {
          color: "amarilla intermitente",
          description: "continuar extremando precauciones",
        },
        {
          color: "roja",
          description: "parar vehículos y peatones hasta que cambie",
        },
        {
          color: "roja intermitente en una intersección",
          description: "parar, mirar y seguir",
        },
        {
          color:
            "roja intermitente ante vuelo rasante de aeronaves, puentes móviles, pasos a nivel, salidas de automóviles de bomberos, de patrullas y de ambulncias",
          description:
            "parar vehículos y peatones y no continuar mientras esten encendidas",
        },
        {
          color: "verde",
          description:
            "recto, girar derecha, y con precaución sin obstruir la vía girar izquierda",
        },
        {
          color: "verde con flechas en su interior",
          description: "autoriza las maniobras que dichas flechas indican",
        },
        {
          color: "verde con flecha en su interior hacia la izquierda",
          description:
            "autoriza girar hacia la izquierda, y circulando por una vía de soble sentido de circulación autoriza el giro en 'U' o media vuelta",
        },
        {
          color: "verde intermitente",
          description: "indica que su tiempo está por concluir",
        },
      ],
    },
  ],

  vertical_signals: [],

  horizontal_signals: [
    {
      signal: "paso peatonal tipo cebra",
      description: "concede prioridad a los peatones",
    },
    {
      signal: "paso peatonal tipo franja",
      description: "concede prioridad a los vehículos",
    },
    {
      signal: "línea de ceda el paso",
      description: "moderar la velocidad y de ser necesario parar",
    },
    {
      signal: "línea de pare",
      description: "parar ante ella, mirar y seguir",
    },
    {
      signal: "línea discontinua paralela a la circulación",
      description: "los vehículos podran cruzarla según lo requieran",
    },
    {
      signal: "línea continua paralela a la circulación",
      description: "ningún vehículo podrá cruzarla ni circular sobre ella",
    },
    {
      signal: "doble línea continua",
      description:
        "ningún vehículo  podrá cruzarla ni circular sobre ella. Indica una peligrosidad mayor",
    },
    {
      signal: "línea continua",
      description:
        "cuando esté cerca del lado izquierdo del conductor no la podrá cruzar",
    },
    {
      signal: "línea discontinua",
      description:
        "cuando esté más cerca del lado izquierdo del coductor la podrá cruzar",
    },
    {
      signal: "línea continua",
      description:
        "para regresar a la senda o carril por el que se transitaba se podrá cruzar",
    },
    {
      signal: "línea contínua",
      description:
        "si está en el orde extremo derecho de la vía se podrá cruzar",
    },
  ],

  other_signals: [
    {
      signal: "brazo extendido horizontalmente por el conductor",
      description:
        "para girar a la izquierda o para cambiar de senda o carril a la izquierda",
    },
    {
      signal: "brazo del conductor vertical hacia arriba",
      description:
        "para girar a la derecha o para cambiar de senda o carril a la derecha",
    },
    {
      signal:
        "brazo del conductor inclinado hacia abajo con la palma de la mano hacia atrás",
      description: "para detenerse o disminuir la velocidad",
    },
    {
      signal:
        "brazo extendido horizontalmente con la palma de la mano haci atrás con movimientos repetidos delante hacia atrás",
      description: "para realizar el retroceso o marcha atrás",
    },
    {
      signal:
        "triangular de 45 cm de lado de material reflectante, un mechero o un farol, o una bandera roja",
      description: "para señalar rotura, desperfecto o accidente",
    },
    {
      signal: "banderas rojas de 30 x 30 cm en vehículo con carga",
      description:
        "para cargas que sobresalen más de un metro por delante o por detrás del vehículo del amanecer al anochecer, debe ser visible a 100m",
    },
    {
      signal: "luz roja o dispositivo reflectante rojo en vehículo con carga",
      description:
        "para cargas que sobresalen más de un metro por detrás del vehículo del anochecer al amanecer, debe ser visible a 100m",
    },
    {
      signal:
        "luz blanca o dispositivo reflectante blanco en vehículo con carga",
      description:
        "para cargas que sobresalen más de un metro por delante del vehículo del anochecer al amanecer, debe ser visible a 100m",
    },
    {
      signal: "a 100 m con bandera roja un ganadero a cada lado del rebaño",
      description:
        "Señal para el cruce de ganado por una vía rural pavimentada del amanecer al anochecer",
    },
    {
      signal:
        "a 100 m con bandera roja un ganadero delante y otro detrás del rebaño",
      description:
        "Señal para el traslado de ganado por una vía rural pavimentada del amanecer al anochecer",
    },
  ],

  permissions: [
    "en vías anchas secundarias, de un sentido, de zonas residenciales de poco tránsito, se puede parquear a ambos lados, dejando el carril central para circular",
  ],

  prohibitions: [
    {
      term: "Prohibición de circulación de ganado",
      description:
        "Por zona urbana se prohíbe el cruce y el traslado, excepto que se utilicen vehículos",
    },
    {
      term: "Prohibición de consumo",
      description: "prohibido consumir bebidas alcohólicas en los vehículos ",
    },
    {
      term: "Prohibición de transportación",
      description:
        "prohibido transportar bebidas alcohólicas en los compartimentos destinados a consumo del conductor o de los pasajeros ",
    },
    {
      term: "Prohibicion de circulación",
      description: "No conducir con personas encimadas",
    },
    {
      term: "Prohibicion de circulación",
      description:
        "No se conducirá con una sola mano sobre el volante, excepto para la realización de operaciones lógicas como conectar velocidades, realizar señales de brazo y otras",
    },
    {
      term: "Prohibicion de circulación",
      description: "No cruzar las manos al realizar los giros",
    },
    {
      term: "Prohibicion de circulación",
      description:
        "No se circulará a distancias entre vehículos menores de 5 m por cada 15 kph (hint: V/3)",
    },
    {
      term: "Prohibicion de circulación",
      description:
        "No se transportarán menores de 12 años en el asiento delantero",
    },
    {
      term: "Prohibicion de circulación",
      description:
        "No se transportarán menores de 2 años en ninguna parte del vehículo sin acompañamiento de personas mayores o en su caso sin aditamentos especiales",
    },
    {
      term: "Prohibicion de circulación",
      description:
        "Se prohíbe utilizar teléfonos y otros medios de comunicación mientras el vehículo esté en marcha",
    },
    {
      term: "Prohibicion de circulación",
      description: "Se prohíbe conectar audio a un volumen muy alto",
    },
    {
      term: "Prohibicion de estacionamiento",
      description: "A menos de 10 cm del contén",
    },
    {
      term: "Prohibicion de estacionamiento",
      description: "A menos de 4 m de un hidrante",
    },
    {
      term: "Prohibicion de estacionamiento",
      description: "A menos de 50 cm entre vehículos",
    },
    {
      term: "Prohibicion de estacionamiento",
      description: "Hasta 10 m de una intersección",
    },
    {
      term: "Prohibicion de estacionamiento",
      description: "Hasta 100 m si la intersección es semaforizada",
    },
    {
      term: "Prohibicion de estacionamiento",
      description:
        "Hasta 40 m detrás y hasta 10 m hacia delante de una señal de parada de ómnibus",
    },
    {
      term: "Prohibicion de estacionamiento",
      description: "En el paseo de zona urbana",
    },
    {
      term: "Prohibicion de estacionamiento",
      description: "En aceras, césped, parterres",
    },
    {
      term: "Prohibicion de estacionamiento",
      description:
        "Entre zona de seguridad o refugio de peatones y entre estos y la acera",
    },
    {
      term: "Prohibicion de estacionamiento",
      description: "En los separadores centrales de la vía",
    },
    {
      term: "Prohibicion de estacionamiento",
      description: "En ciclovías, ciclocarriles o vías exclusivas",
    },
    {
      term: "Prohibicion de estacionamiento",
      description: "En rotondas o partes que la circundan",
    },
    {
      term: "Prohibicion de estacionamiento",
      description: "Zonas de embajadas y consulados",
    },
    {
      term: "Prohibicion de estacionamiento",
      description: "Zonas oficiales",
    },
    {
      term: "Prohibicion de estacionamiento",
      description:
        "Zonas de carga, en días y horas establecidas para estas operaciones",
    },
    {
      term: "Prohibicion de estacionamiento",
      description: "Zonas de piquera",
    },
    {
      term: "Prohibicion de estacionamiento",
      description: "Frente y costado de unidades del Minint y de las FAR",
    },
    {
      term: "Prohibicion de estacionamiento",
      description:
        "Frente a la entrada principal de edificios públicos (funerarias, hospitales, policlínicos, teatros, bancos, escuelas y otros), de forma que se obstruya la entrada o salida",
    },
    {
      term: "Prohibicion de estacionamiento",
      description: "Obstruyendo intersecciones, entradas o salidas",
    },
    {
      term: "Prohibicion de estacionamiento",
      description: "Entrada y salida de garajes, pistas y rampas",
    },
    {
      term: "Prohibicion de estacionamiento",
      description:
        "Obstaculizando de cualquier forma la vía o entradas y salidas de vehículos",
    },
  ],

  priority_intersections: [
    {
      term: "El conductor del vehículo deberá disminuir la velocidad o detenerse, según la visibilidad",
      options: [
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
      options: [
        "Señal de vía con prioridad",
        "Cruces o entronques preferenciales",
        "Luz verde del semáforo",
        "Una o dos luces amarillas intermitentes",
      ],
    },
    {
      term: "No hay prioridad mediante la utilización de señales y el conductor del vehículo deberá disminuir la velocidad y de ser necesario parar",
      options: [
        "Ante la señal de ceda el paso",
        "Ante la línea de ceda el paso",
        "Ante un paso a nivel con barreras",
      ],
    },
    {
      term: "No hay prioridad mediante la utilización de señales y el conductor del vehículo deberá parar, mirar y seguir",
      options: [
        "Ante la señal de pare",
        "Ante la línea de pare",
        "Ante un paso a nivel sin barreras(si no tiene señal, parar 3 metros antes)",
        "Ante una o dos luces rojas intermitentes en una intersección",
      ],
    },
    {
      term: "No hay prioridad mediante la utilización de señales y el conductor del vehículo deberá parar vehículos y peatones",
      options: [
        "mientras permanezcan encendidas Una o dos luces rojas intermitentes ante vuelo rasante de aeronaves, puentes móviles, pasos a nivel, salidas de automóviles de bomberos, de patrullas y de ambulancias",
        "hasta que cambie luz roja del semáforo",
        "hasta que cambie luz amarilla del semáforo. Los vehículos continúan cuando al proyectarse esta luz se encuentren tan cerca de ella que no puedan detenerse en suficientes condiciones de seguridad",
      ],
    },
  ],

  stationing: [
    "En pendiente descendente o cuesta abajo conectar retroceso o marcha atrás y girar las ruedas a favor del contén",
    "En pendiente ascendente o cuesta arriba conectar primera velocidad y girar el timón en sentido contrario del contén",
    "Donde no exista contén calzar las ruedas que queden situadas a mayor altura en la pendiente, delanteras o traseras",
    "Aplicar en todos los casos el freno de mano, de seguridad o de emergencia",
    "Apagar el motor del vehículo cerrando el chucho o interruptor de ignición",
    "Retirar la llave de dicho chucho o interruptor",
    "Donde existan vallas para el parqueo, estacionar dentro de estas sin sobresalir sus límites",
    "En vías rurales: a la derecha de la calzada",
    "En calles de doble sentido: en la derecha de la calzada",
    "En calles de un solo sentido: en la izquierda de la calzada. Por causas obligatorias o forzosas en la derecha",
  ],

  turns: [
    "Giro hacia la derecha(izquierda), por vías de varias sendas o carriles en el mismo sentido: Desde la senda o carril de la extrema derecha(izquierda) de la vía por donde se circula hacia cualquier senda o carril de la vía donde se efectuará la incorporación",
  ],

  maneuversAndProhibitions: [
    {
      generalTurns: {
        title: "Giros Generales",
        rules: [
          "Giros autorizados por flechas: Obligación de realizarlos como lo indican las flechas y mantener la misma posición de senda o carril.",
          "Giros por delante de ciclocarriles: La prioridad corresponde a los ciclos, a no ser que mediante señales se le conceda la prioridad a los demás vehículos.",
        ],
      },
    },
    {
      overtaking: {
        title: "Adelantamiento",
        howTo: [
          "Observar hacia delante y mediante el espejo retrovisor hacia atrás.",
          "Realizar con suficiente antelación las señales con luces intermitentes o, en su defecto, con el brazo.",
          "El hecho de realizar las señales no concede prioridad sobre los usuarios que están en uso de la vía.",
          "Realizar el adelantamiento por la senda o carril de la izquierda.",
          "Reincorporarse a la senda o carril de forma gradual y segura.",
          "El adelantamiento a más de un vehículo debe realizarse de forma que no se atente contra la seguridad vial.",
          "El conductor del vehículo que va a ser o está siendo adelantado debe facilitar la maniobra.",
        ],
        prohibitedIn: [
          "Cambios de rasante.",
          "Curvas de visibilidad reducida.",
          "Pasos a nivel.",
          "Túneles.",
          "Pasos peatonales tipo cebra.",
        ],
      },
    },
    {
      reversing: {
        title: "Retroceso o Marcha Atrás",
        prohibitedIn: [
          "Cambios de rasante.",
          "Curvas de visibilidad reducida.",
          "Pasos a nivel y demás intersecciones.",
          "Túneles.",
          "A más de 20 kph.",
          "Por más de 20 m.",
        ],
      },
    },
    {
      uTurn: {
        title: 'Giro en "U" o Media Vuelta',
        prohibitedIn: [
          "Cambios de rasante.",
          "Curvas de visibilidad reducida.",
          "Pasos a nivel.",
          "Túneles.",
          "Puentes.",
          "Pasos superiores.",
          "Pasos inferiores.",
          "Intercambios.",
          "Cuando haya que retroceder para realizarlo.",
        ],
      },
    },
    {
      momentaryStop: {
        title: "Detención Momentánea",
        prohibitedIn: [
          "Cambios de rasante.",
          "Curvas de visibilidad reducida.",
          "Pasos a nivel.",
          "Túneles.",
          "Puentes.",
          "Pasos superiores.",
          "Pasos inferiores.",
          "Intercambios.",
          "Pasos peatonales.",
          "Obstruyendo la circulación.",
        ],
      },
    },
    {
      mountainDriving: {
        title: "Circulación en Tramos Montañosos",
        prohibitions: [
          "Bajar con el motor del vehículo apagado o la transmisión en neutro.",
          "En los pasos muy estrechos, el conductor del vehículo que baja debe ceder el paso al conductor que sube.",
        ],
      },
    },
    {
      towing: {
        title: "Normas para el Remolque de Vehículos",
        rules: [
          "Se remolcará con barra fija. Puede remolcarse con cable o cuerda (resistente, señalizada, no mayor de 8 m) si el vehículo remolcado frena adecuadamente.",
          "El vehículo remolcado debe estar señalado.",
          "El vehículo remolcador circulará con las luces encendidas.",
          "La velocidad de arrastre no será mayor de 30 kph en zona urbana ni mayor de 40 kph en zona rural.",
          "En tramos montañosos está prohibido remolcar con cable o similar y transportar pasajeros en cualquiera de los dos vehículos.",
        ],
      },
    },
    {
      annexNotes: {
        title: "Notas Adicionales del Anexo de Prohibiciones",
        notes: [
          "Las maniobras de detención, giro en U, retroceso y adelantamiento están prohibidas también por debajo de 150 m de cambios de rasante y de curvas de visibilidad reducida.",
          "Se permite adelantar en los cambios de rasante y en las curvas de visibilidad reducida si hay más de una senda o carril en el mismo sentido.",
        ],
      },
    },
  ],

  // 5.1 Límites máximos de velocidad
  speed_limits: [
    {
      limit: "50 kph",
      zones: [
        "Zona urbana para todo vehículo de motor (mediante señal puede establecerse límites inferiores o superiores)",
      ],
    },
    {
      limit: "20 kph",
      zones: [
        "Tractores y otros vehículos similares de motor",
        "Retroceso o marcha atrás",
        "Salidas de edificios y de garajes",
        "Vías y parqueos interiores",
      ],
    },
    {
      limit: "40 kph",
      zones: [
        "Zona de niños por áreas urbanas",
        "Vehículos de carga por zona urbana transportando personas a movilizaciones, concentraciones y otros casos autorizados",
      ],
    },
    {
      limit: "60 kph",
      zones: [
        "Zona de niños por áreas rurales",
        "Vehículos de carga por zona rural transportando personas a movilizaciones, concentraciones y otros casos autorizados",
        "Caminos de tierra o terraplén",
      ],
    },
  ],

  // Tabla de velocidades por tipo de vehículo y vía
  speed_by_vehicle_type: [
    {
      vehicle_type: "Con remolque - Grúas y similares",
      carretera: "70 kph",
      autopista: "80 kph",
    },
    {
      vehicle_type: "Rígido de carga - Articulado de carga",
      carretera: "80 kph",
      autopista: "90 kph",
    },
    {
      vehicle_type: "Hasta 3500 kg y ómnibus",
      carretera: "90 kph",
      autopista: "100 kph",
    },
  ],

  // Vehículo remolcando a otro vehículo
  towing_speed_limits: [
    "30 kph por zona urbana y 40 kph por zona rural (carreteras, autopistas, caminos)",
  ],

  // 5.2 Límites de velocidad por túneles
  tunnel_speed_limits: ["Mínima 60 kph y máxima la que indique la señal"],

  // 5.3 Usos de vías y de sendas o carriles
  road_lane_usage: [
    {
      road_type: "Vías de dos o más carriles en el mismo sentido",
      rules: [
        {
          lane: "Senda o carril de la extrema izquierda",
          usage:
            "obligación de mantener el límite máximo de velocidad que se establece",
        },
        {
          lane: "Senda o carril de la extrema derecha",
          usage:
            "marcha lenta. En zona rural se considera marcha lenta cuando se circula a velocidad inferior a 60 kph",
        },
      ],
    },
    {
      road_type: "Vía de doble sentido con tres sendas o carriles",
      rules: [
        {
          lane: "Senda o carril central",
          usage: "solo para adelantar en ambos sentidos",
        },
        {
          lane: "Sendas o carriles laterales",
          usage: "para circular en el sentido que corresponde",
        },
      ],
    },
  ],

  // 5.4 Casos en los cuales se debe moderar la velocidad y de ser necesario parar
  speed_moderation_cases: [
    "Ante intersecciones cuando el semáforo no funciona o alguna de sus luces no está encendida (esto entra en contradicción con el orden de prioridad para obedecer las señales)",
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

  // 5.5 Otras regulaciones sobre velocidad
  other_speed_regulations: [
    "Se prohíbe circular a una velocidad tan lenta que resulte afectada la fluidez en la circulación",
    "Se prohíbe establecer competencias de velocidad en la vía. Esta violación puede dar lugar al decomiso del vehículo",
  ],
  // 6.1 Transportación de personas
  passenger_transportation: {
    general_prohibition:
      "Se prohíbe transportar pasajeros en vehículos destinados al transporte de carga, excepto en los casos autorizados",

    authorized_cases_regulations: [
      "La velocidad no excederá de 40 kph por zona urbana ni de 60 kph por zona rural",
      "El vehículo deberá estar habilitado con barandas laterales y trasera resistentes",
      "No viajarán más de 4 personas de pie por metro cuadrado, en viajes de una hora o menos de duración",
      "Cuando las barandas sean inferiores a 120 cm (1.20 m) las personas viajarán sentadas en la cama o caja del vehículo",
      "Las barandas en este caso serán superiores a 40 cm",
      "Cuando el viaje exceda de una hora el vehículo deberá estar habilitado con bancos resistentes",
      "No se transportarán cajas ni otras cargas, si ello pone en peligro la seguridad de los transportados",
      "Viajará un responsable en la cabina del vehículo y otro en la cama",
      "El vehículo se apartará de la calzada al llegar al lugar de destino",
    ],

    caravan_regulations: [
      "El responsable de toda la caravana viajará en la cabina del primer vehículo",
      "Cada vehículo que integra la caravana llevará encendidas durante el día las luces de cruce o cortas y durante la noche las establecidas en ese caso",
      "No deberán adelantarse entre ellos, excepto por razones de fuerza mayor",
    ],

    public_transport_prohibitions: [
      {
        activity: "Conversar",
        prohibited_for: ["Conductor"],
      },
      {
        activity: "Fumar",
        prohibited_for: ["Conductor", "Ayudantes", "Pasajeros"],
      },
    ],

    motorcycle_transportation: [
      "Podrá viajar el conductor, una persona detrás de él y otra en el sidecar",
      "El transporte de persona menor de 7 años se hará en el sidecar, en unión de otra de 14 o más años de edad",
      "Usarán cascos debidamente abrochados y ajustados, todos los ocupantes del vehículo",
    ],

    general_safety_regulations: [
      "Obligación de usar debidamente abrochado y ajustado el cinturón de seguridad, todos los ocupantes del vehículo",
      "Se prohíbe transportar un número mayor de personas del autorizado, según el tipo de vehículo",
    ],
  },

  // Agregar a las prohibiciones existentes
  additional_prohibitions: [
    {
      term: "Prohibición de transporte de pasajeros",
      description:
        "Se prohíbe transportar pasajeros en vehículos destinados al transporte de carga, excepto en los casos autorizados",
    },
    {
      term: "Prohibición en transporte público - conversar",
      description:
        "El conductor no puede conversar durante el transporte público de pasajeros",
    },
    {
      term: "Prohibición en transporte público - fumar",
      description:
        "Está prohibido fumar para conductor, ayudantes y pasajeros en el transporte público",
    },
    {
      term: "Prohibición de sobrecarga de pasajeros",
      description:
        "Se prohíbe transportar un número mayor de personas del autorizado, según el tipo de vehículo",
    },
    {
      term: "Prohibición de cinturón de seguridad",
      description:
        "Está prohibido no usar debidamente abrochado y ajustado el cinturón de seguridad por todos los ocupantes del vehículo",
    },
    {
      term: "Prohibición de cascos en motocicletas",
      description:
        "Está prohibido no usar cascos debidamente abrochados y ajustados en motocicletas y ciclomotores por todos los ocupantes",
    },
  ],

  // 6.2 Transportación de cargas
  cargo_transportation: {
    general_prohibition:
      "Se prohíbe el trasbordo de carga o de otros objetos de un vehículo a otro encima de la calzada",

    circulation_prohibitions: [
      "La altura de la carga sea mayor de 4 m, desde el pavimento o terreno",
      "La carga sobresalga más de 2 m por delante o por detrás del vehículo",
      "La carga sobresalga el ancho de la cama o caja del vehículo. En las motocicletas podrá sobresalir hasta 50 cm por los laterales y parte trasera en dispositivos habilitados para la carga",
      "La carga se arrastre por la vía",
      "Las cargas o residuos que puedan esparcirse no estén tapados debidamente",
      "Las cargas o residuos malolientes no estén herméticamente tapados",
      "Las cargas pongan en peligro la integridad de las personas",
      "Las cargas provoquen ruidos por no estar amarradas debidamente",
      "Las cargas tapen las luces, los dispositivos reflectantes, matrículas, rótulos o distintivos",
      "La carga afecte la visibilidad del conductor",
    ],

    tunnel_prohibition:
      "Se prohíbe circular por túneles transportando materiales inflamables, explosivos o tóxicos",

    smoking_prohibition:
      "Se prohíbe fumar al conductor, ayudantes o pasajeros transportando materiales inflamables o explosivos",
  },

  // Tema 7: Exigencias técnicas generales, dispositivos en el vehículo y elementos de mecánica automotriz
  technical_requirements: {
    general_requirements: [
      "Los vehículos para circular deben estar en buen estado técnico y de conservación",
      "Debidamente pintados y limpios",
    ],

    inspection_requirements: [
      "Los vehículos deben pasar por la inspección técnica a cargo del Minint y por la revisión técnica del Mitrans en el período que se establezca",
      "Cuando en la inspección técnica el vehículo presente dificultades se dará un término no mayor de 2 años para resolverlas. Si en dicho término no se resuelven las deficiencias o problemas señalados se dará baja del Registro al vehículo",
    ],

    registration_notifications: [
      "Debe informarse en un período de 30 días al Registro de vehículos a cargo del Minint:",
      "- Cambio de motores y de combustible en los vehículos",
      "- Cambio de carrocería",
      "- Cambio de colores",
      "- Altas y bajas y nuevas inscripciones",
      "- Cambio del régimen de propiedad o de posesión",
      "- Conversiones de vehículos",
      "- Cambio de marca y de modelo",
      "- Cambio de domicilio cuando implique cambio de provincia",
      "- Pérdida o deterioro de matrículas o de licencias de circulación",
    ],

    vehicle_construction:
      "Solamente están autorizadas a construir vehículos las empresas creadas para esos fines",
  },

  // 7.2 Deficiencias técnicas que prohíben la circulación
  technical_deficiencies_prohibiting_circulation: {
    brake_deficiencies: [
      "Exista salidero de aire en el sistema de frenos",
      "Exista salidero de líquido hidráulico",
      "No trabaje el manómetro del sistema de aire",
      "El freno de servicio no accione uniformemente sobre todas las ruedas",
      "El compresor no produzca la presión de aire necesaria",
      "El freno de mano, de seguridad o de emergencia no sostenga al vehículo al 16% de inclinación",
      "Los remolques de hasta 1500 kg no dispongan de freno, cadena o cable que en caso de quedar libres los frenen y sujeten",
      "Los remolques y semirremolques de más de 1500 kg no dispongan de sistema de frenos o frenos de autobloqueo de funcionamiento automático eficiente",
    ],
    steering_deficiencies: [
      "La holgura o juego libre del timón sobrepase las normas de fabricación o en su defecto sea mayor de 25 grados",
      "Exista rigidez en el timón",
      "Presenten desajuste en la dirección",
      "Exista desajuste en el sistema hidráulico de la dirección",
    ],

    tire_and_wheel_deficiencies: [
      "Existan roturas en las cuerdas de los neumáticos",
      "Presenten desperfecto en las llantas",
      "La medida de los neumáticos no se corresponda con el peso del vehículo",
      "Los neumáticos estén muy desgastados",
      "Exista desajuste en las ruedas delanteras",
    ],

    engine_and_transmission_deficiencies: [
      "Exista salidero de combustible en el sistema de alimentación",
      "Exista vibración en la transmisión",
      "Las velocidades se desconecten de la caja",
      "El escape contenga una cantidad de gases contaminantes superior a lo establecido",
      "Falte el tubo de escape o el silenciador o cuando uno de ellos esté en mal estado",
    ],
  },

  // Agregar a las prohibiciones existentes
  additional_cargo_prohibitions: [
    {
      term: "Prohibición de trasbordo de carga",
      description:
        "Se prohíbe el trasbordo de carga o de otros objetos de un vehículo a otro encima de la calzada",
    },
    {
      term: "Prohibición de altura excesiva de carga",
      description:
        "Prohibido que la altura de la carga sea mayor de 4 m, desde el pavimento o terreno",
    },
    {
      term: "Prohibición de sobresalir por delante o detrás",
      description:
        "Prohibido que la carga sobresalga más de 2 m por delante o por detrás del vehículo",
    },
    {
      term: "Prohibición de sobresalir el ancho del vehículo",
      description:
        "Prohibido que la carga sobresalga el ancho de la cama o caja del vehículo (excepto motocicletas hasta 50 cm por laterales y trasera)",
    },
    {
      term: "Prohibición de arrastrar carga",
      description: "Prohibido que la carga se arrastre por la vía",
    },
    {
      term: "Prohibición de cargas sin tapar",
      description:
        "Prohibido transportar cargas o residuos que puedan esparcirse sin estar tapados debidamente",
    },
    {
      term: "Prohibición de cargas malolientes sin sellar",
      description:
        "Prohibido transportar cargas o residuos malolientes sin estar herméticamente tapados",
    },
    {
      term: "Prohibición de cargas peligrosas",
      description:
        "Prohibido transportar cargas que pongan en peligro la integridad de las personas",
    },
    {
      term: "Prohibición de cargas ruidosas",
      description:
        "Prohibido transportar cargas que provoquen ruidos por no estar amarradas debidamente",
    },
    {
      term: "Prohibición de tapar dispositivos del vehículo",
      description:
        "Prohibido que las cargas tapen las luces, los dispositivos reflectantes, matrículas, rótulos o distintivos",
    },
    {
      term: "Prohibición de afectar visibilidad",
      description: "Prohibido que la carga afecte la visibilidad del conductor",
    },
    {
      term: "Prohibición en túneles con materiales peligrosos",
      description:
        "Se prohíbe circular por túneles transportando materiales inflamables, explosivos o tóxicos",
    },
    {
      term: "Prohibición de fumar con materiales peligrosos",
      description:
        "Se prohíbe fumar al conductor, ayudantes o pasajeros transportando materiales inflamables o explosivos",
    },
    {
      term: "Prohibición de circulación con deficiencias de frenos",
      description:
        "Prohibido circular con cualquier deficiencia en el sistema de frenos que comprometa la seguridad",
    },
  ],
  // 7.3 Dispositivos en el vehículo
  vehicle_devices: {
    horn: {
      prohibited_places: ["Zona urbana", "Zonas de silencio"],
      justified_cases: [
        "Para evitar accidentes",
        "Por peligro",
        "Para pedir auxilio",
        "Conduciendo a heridos o a enfermos graves",
      ],
    },

    noise_prohibition:
      "Se prohíbe utilizar en el vehículo dispositivos que puedan provocar ruidos intensos o estridentes",

    mirrors: {
      minimum_visibility:
        "A 50 m como mínimo deben permitir ver hacia atrás, sin que se distorsione la imagen",
      obligation:
        "Obligación de portar uno o varios, según las características del vehículo y de los espejos retrovisores",
      blind_spot:
        "Se denomina punto ciego al ángulo en el cual el espejo o espejos retrovisores no captan imagen",
    },

    license_plates: {
      obligation:
        "Obligación de portar en el vehículo una trasera y otra delantera",
      visibility: "Deben ser legibles a 40 m",
      night_illumination:
        "Del anochecer al amanecer la luz blanca que ilumina la matrícula trasera, deberá permitir que con el vehículo detenido y en condiciones normales de visibilidad dicha matrícula sea visible a 20 m",
    },

    required_equipment: {
      title: "Los vehículos deben portar en buen estado:",
      items: [
        "Defensas",
        "Parabrisas (con adecuada visibilidad y seguridad)",
        "Seguros o cierres en las puertas",
        "Limpiaparabrisas, al menos uno delante del asiento del conductor",
      ],
    },

    first_aid_kit: {
      required_for: [
        "Ómnibus por zona rural",
        "Vehículos de carga por zona rural",
      ],
    },

    fire_extinguisher: {
      required_for: [
        "Ómnibus por cualquier zona que circulen",
        "Vehículos de carga",
        "Vehículos ligeros del sector estatal",
      ],
    },
  },
  vehicleLightingRegulations: {
    topic: "Luces y dispositivos reflectantes en el vehículo",

    // 8.1 Aspectos generales
    generalAspects: {
      title: "Aspectos generales",
      rules: [
        "Las luces se encienden del anochecer al amanecer",
        "Las luces que trabajan en pareja deben tener igual intensidad y color",
        "Se prohíbe tener instalados en el vehículo reflectores fijos o móviles y otras luces no autorizadas en el Código. Se exceptúan aquellas dispuestas por tecnología o por fabricación, siempre que no contradigan la Ley",
        "Ninguna luz en el vehículo debe ser intermitente excepto las indicadoras de dirección o las de avería o parada de emergencia",
        "Ninguna luz en el vehículo puede estar situada de sus bordes laterales exteriores a más de 40 cm",
      ],
    },

    // 8.2 Aspectos específicos
    specificAspects: {
      title: "Aspectos específicos",

      // a) Luces para alumbrar por delante del vehículo
      frontLighting: {
        title: "Luces para alumbrar por delante del vehículo",

        vehiclesOver40kph: {
          title: "Vehículo que sea capaz de sobrepasar de 40 kph",
          headlights: {
            type: "Dos luces de carretera o largas, altas o directas",
            illuminationRange: "100 m mínimo",
          },
          dippedBeam: {
            type: "Dos luces de cruce o cortas, bajas o indirectas",
            illuminationRange: "40 m",
          },
        },

        vehiclesUnder40kph: {
          title:
            "Vehículos que no sea capaz de sobrepasar de 40 kph y equipos agrícolas y otros vehículos de motor similares",
          lights: {
            type: "Dos luces de cruce o cortas, bajas o indirectas",
            illuminationRange: "40 m",
          },
        },

        motorcycle: {
          title: "Motocicleta",
          over40kph:
            "una luz de carretera o larga y una luz de cruce o corta, integradas en una sola unidad y que alumbren a las distancias anteriores",
          under40kph: "una luz de cruce o corta",
        },

        lightColor:
          "Las luces de carretera o largas y las de cruce o cortas serán blancas o de color amarillo selectivo",
      },

      // b) Luces de posición
      positionLights: {
        title: "Luces de posición",
        visibility: "300 m",
        purpose: [
          "Indican la presencia y ancho del vehículo en marcha o estacionado",
        ],
        configuration: {
          standard:
            "Los vehículos portarán dos rojas traseras y 2 blancas o de color amarillo selectivo delanteras",
          tallVehicles:
            "El vehículo que sobrepase de 2 m de altura portará estas luces en las partes superiores delantera y trasera",
          tractors:
            "Tractores y vehículos de motor similares: dos rojas traseras",
          motorcycles: "Motocicleta: una roja trasera",
          sidecarMotorcycle:
            "Sidecar unido a motocicleta: una roja trasera y una blanca o de color amarillo selectivo delantera",
          trailers: {
            description:
              "Remolque y semirremolque: dos rojas traseras y a no más de 15 cm de sus exteriores en cada extremo lateral delantero una blanca o de color amarillo selectivo",
            additionalRule:
              "También tendrán luces laterales a no más de 1.5 m una de otra",
          },
          narrowTrailers:
            "Remolque que no sobrepase de 80 cm de ancho: podrá circular con una luz roja trasera",
        },
      },

      // c) Dispositivos reflectantes
      reflectiveDevices: {
        title: "Dispositivos reflectantes",
        visibility: "150 m",
        color: "rojo",
        placement: "parte trasera del vehículo",
        shapes: {
          trailersAndSemitrailers:
            "En remolques y en semirremolques serán en forma de triángulo equilátero, sus lados no mayores de 20 cm ni menores de 15 cm",
          otherVehicles: "En los demás vehículos serán en forma no triangular",
        },
      },

      // d) Luces de frenado
      brakeLights: {
        title: "Luces de frenado",
        color: "rojo intenso",
        requirement:
          "La portará en su parte trasera todo vehículo de motor capaz de alcanzar 25 kph",
      },

      // e) Luces intermitentes indicadoras de dirección
      turnSignals: {
        title: "Luces intermitentes indicadoras de dirección",
        usage: "Se utilizan tanto de día como de noche",
        color: {
          standard: "amarillo",
          exception:
            "En la parte trasera se admite el color rojo cuando así se diseñó por el fabricante",
        },
      },

      // f) Luz de matrícula
      licensePlateLights: {
        title: "Luz de matrícula",
        color: "blanca",
        purpose:
          "La portará el vehículo en la matrícula trasera y permitirá que esta sea visible de noche, en condiciones normales y con el vehículo detenido",
        visibility: "20 m",
      },
    },

    // 8.3 Otras reglas sobre luces
    otherLightingRules: {
      title: "Otras reglas sobre luces",

      foggyConditions: {
        title:
          "Luces en caso de niebla densa, lluvia intensa o copiosa, nubes de humo o de polvo",
        rule: "Luces de cruce o cortas o luces de niebla en caso de poseer estas",
      },

      urbanAreasAndTunnels: {
        title: "Luces en zona urbana y en túneles",
        conditions: {
          sufficientLighting: {
            condition: "Cuando la vía tenga suficiente iluminación",
            lights: "Luces de cruce o cortas o luces de posición",
          },
          insufficientLighting: {
            condition:
              "Cuando exista avería, inutilización o deficiencia en el alumbrado público",
            lights: "Luces de carretera o largas, altas o directas",
          },
        },
      },

      lightSignaling: {
        title:
          "Señales mediante cambio de luces de carretera o largas por luces de cruce o cortas, bajas o indirectas",
        purposes: {
          overtaking: {
            purpose: "Para adelantar",
            method: "Alternativamente (cambios rápidos)",
          },
          enteringCurves: {
            purpose:
              "Para entrar a un cambio de rasante o a una curva de visibilidad reducida",
            method: "A intervalos regulares (cambios espaciados)",
          },
        },
      },

      lightSubstitution: {
        title:
          "Sustitución de luces de carretera o largas por luces de cruce o cortas",
        rules: [
          {
            distance:
              "A 150 m aproximadamente del vehículo que se acerca en sentido opuesto o cuando a cualquier distancia se solicite el cambio",
          },
          {
            distance: "A menos de 50 m del vehículo que circula delante",
            reason:
              "no se utilizarán las luces de carretera o largas, se evita con ello el deslumbramiento a través de los espejos retrovisores",
          },
        ],
      },
    },

    // 8.4 Luces en ciclos y en los vehículos de tracción animal
    cyclesAndAnimalTraction: {
      title: "Luces en ciclos y en los vehículos de tracción animal",

      cycles: {
        title: "En ciclos",
        twoWheeled: {
          title: "En ciclo de dos ruedas",
          front: "una luz blanca o amarilla",
          rear: "una luz roja o un dispositivo reflectante rojo",
        },
        multiWheeled: {
          title: "En ciclo de más de dos ruedas",
          front: "una luz blanca o amarilla",
          rear: "dos luces rojas o dos dispositivos reflectantes rojos, uno a cada lado",
        },
      },

      animalTraction: {
        title: "En vehículos de tracción animal",
        front: "Una luz blanca en la parte superior delantera izquierda",
        rear: "Una luz roja en la parte inferior trasera izquierda y un dispositivo reflectante a cada lado",
      },
    },
  },
  prohibitionsAndObligations : {
  topic: "Prohibiciones y obligaciones generales",
  
  // 9.1 Prohibiciones generales
  generalProhibitions: [
    "Lavar o reparar vehículos encima de la calzada",
    "Arrojar basuras, desechos y objetos sobre la vía",
    "Conducir muy enfermo o agotado",
    "Conducir con defectos físicos incapacitantes, excepto con autorización del jefe de licencia de conducción y adaptaciones correspondientes",
    "Circular por zona urbana vehículos de carga de capacidad nominal superior a 10000 kg",
    "Circular vehículos por las aceras, paseos, separador central o cualquier otro componente de la vía no construido para esos fines",
    "El cruce de cualquier vehículo por una intersección o zona de paso de peatones cuando pueda obstruir a estas, por estar obstaculizado el paso más allá de dichos lugares",
    "Realizar frenazos o bandazos bruscos",
    "Circular vehículos agrícolas por vías de interés nacional, provincial o municipal"
  ],

  // 9.2 Dimensiones máximas permitidas
  maxDimensions: {
    length: "15 m (rígidos) o 18 m (articulado o conjunto de vehículos)",
    height: "4 m",
    width: "2.60 m"
  },

  // 9.3 Regulaciones para ciclos
  cycleRegulations: {
    prohibitions: [
      "Menores de 12 años conduciendo por vías de mucho tránsito",
      "A más de 1 m del contén o del borde de la calzada",
      "Paralelo a otro ciclo",
      "Remolcado de otro vehículo",
      "Realizando acrobacias o malabares",
      "Con objetos o personas en partes del ciclo que puedan afectar la maniobrabilidad o la visibilidad",
      "Con deficiencias técnicas que afecten la seguridad vial"
    ],
    penalties: "Por reiteración de las prohibiciones establecidas en las plecas de la 1 a la 4 puede retenerse el ciclo de uno a seis meses y de infringirse nuevamente dentro de dos años siguientes de cumplirse esta medida podrá disponerse el decomiso"
  },

  // 9.4 Regulaciones para vehículos de tracción animal
  animalTractionRegulations: [
    "Obligación de circular lo más próximo posible al contén o borde de la calzada",
    "Circular con ruedas de goma o revestidas de dicho material por vías pavimentadas",
    "Los animales deben disponer de viseras o anteojeras",
    "Disponer de aditamento para recoger el excremento del animal",
    "Disponer de freno o mecanismo de inmovilización para el estacionamiento",
    "No circular por las carreteras del anochecer al amanecer",
    "No conducir menores de 16 años de edad este tipo de vehículos"
  ],

  // 9.5 Regulaciones para peatones
  pedestrianRegulations: {
    trafficLight: "Deben cruzar la vía con la luz verde del semáforo",
    crossingMethod: "Cruzar la vía de forma rápida. Cuando existan pasos peatonales cruzar por estos",
    priority: "El paso peatonal tipo cebra concede prioridad con respecto a los vehículos, el de tipo franja establece la prioridad para los vehículos",
    urbanAreas: "Por zona urbana circular por la parte derecha de la acera",
    ruralAreas: "Por zona rural circular por la izquierda de la vía de frente al tránsito",
    prohibitions: [
      "No formar grupos en las aceras",
      "En las aceras de hasta 1 m de ancho no circular apareado a otro peatón",
      "No cruzar por delante, por detrás o entre vehículos, detenidos o deteniéndose",
      "Cuando se aproxime un vehículo requiriendo prioridad alcanzar rápidamente el borde más cercano de la calzada",
      "El guía de personas debe detener el tránsito para permitir el cruce de ellas",
      "No circular por la vía en patines, carriolas o artefactos similares"
    ]
  },

  // 9.6 Obligaciones generales en accidentes
  accidentObligations: {
    immediateNotification: "El conductor de un vehículo implicado en un accidente de tránsito debe dar cuenta de inmediato a la PNR cuando:",
    cases: [
      "Resulten personas muertas o lesionadas",
      "Participe un vehículo estatal",
      "Se dañe la propiedad estatal",
      "Se dañen bienes muebles o inmuebles y el perjudicado esté ausente"
    ],
    vehiclePosition: "Se mantendrá el vehículo en la misma posición que resulte del accidente cuando haya personas muertas o lesionadas. Se situarán las señales establecidas y se tratará de restablecer la circulación",
    exceptions: "Por excepción se podrá mover el vehículo cuando sea necesario brindar auxilio a víctimas, incluido el propio conductor, el cual deberá retornar al lugar de accidente, excepto que quede hospitalizado o su estado de salud se lo impida"
  }
}
};

traducciones = {

    index: {
      titulo: "¡Bienvenido! Soy Tony Villegas Brea",
      descripcion: "Desarrollador apasionado por el código y la tecnología",
      sobremi_titulo: "Sobre mí",
      sobremi_texto: "Con una trayectoria que combina habilidades técnicas y deportivas, me especializo en el desarrollo de aplicaciones web y la formación de deportistas. Como entrenador de tenis y pádel desde 2014, he cultivado una base sólida en liderazgo y adaptación a diferentes niveles y estilos de aprendizaje. Desde 2021, complemento mi experiencia en la Escuela 42 de Madrid, un entorno innovador que me reta a mejorar continuamente.",
      trayectoria_titulo: "Mi Trayectoria",
      trayectoria_year1: "2014 - Actualidad",
      trayectoria_texto1: "<strong>Entrenador de tenis y pádel</strong> - Con más de 10 años de experiencia formando jugadores de todos los niveles.",
      trayectoria_texto2: "<strong>FP en Desarrollo de Aplicaciones Web (DAW)</strong> - Adquirí conocimientos sólidos en desarrollo de aplicaciones web.",
      trayectoria_year3: "2021 - Actualidad",
      trayectoria_texto3: "<strong>Estudiante en Escuela 42 Madrid</strong> - Formación intensiva en programación y desarrollo en una escuela innovadora sin profesores ni horarios.",
      resumen_titulo: "Resumen de mi Currículum",
      resumen_texto: "A lo largo de mi carrera, he desarrollado habilidades en el campo del desarrollo web y he trabajado en proyectos diversos. Como entrenador, he cultivado la capacidad de liderazgo, paciencia y adaptación a diferentes niveles y necesidades de los alumnos.",
      derechos: "© 2024 Tony Villegas Brea. Todos los derechos reservados.",
      inicio_boton: "Inicio",
      proyectos_boton: "Proyectos",
      habilidades_boton: "Habilidades",
      empresa_boton: "Mi Empresa Ideal",
      juego_boton: "Jugar un juego",
    },
    proyectos: {
      titulo_proyectos: "Proyectos",
      descripcion_proyectos: "Estos son los proyectos que he estado realizando a lo largo de mi carrera",
      titulo_42: "Proyectos destacados",
      proyecto_fdf: "Proyecto FdF",
      proyecto_minishell: "Proyecto minishell",
      proyecto_cub3d: "Proyecto cub3D",
      titulo_destacados: "Proyectos destacados",
      descripcion_titulo_descatados : "Aquí verás algunos de mis proyectos más interesantes.",
      derechos: "© 2024 Tony Villegas Brea. Todos los derechos reservados.",
      volver: "Volver a la página principal",
      // ... traducciones para proyectos.html ...
    },

    FdF: {
      titulo_fdf: "Proyecto FdF",
      descripcion: "Programa que visualiza mapas en 3D",
      titulo_descripcion: "Descripción",
      descripcion_42: "El proyecto FdF de la Escuela 42 es un visor gráfico de mapas en 3D que utiliza la biblioteca gráfica de la escuela, como mlx. El programa lee datos de un archivo que contiene información sobre la altura de los puntos de un mapa y crea una representación visual en 3D utilizando líneas que conectan estos puntos.",
      objetivos: "Objetivos",
      interfaz: "Interfaz gráfica:<br>&emsp; · Crear una interfaz gráfica utilizando la biblioteca gráfica de la escuela (mlx).",
      lectura: "Lectura de datos:<br>&emsp; · Leer un archivo de datos para obtener información sobre la altura de los puntos del mapa.",
      proyecciones: "Proyecciones:<br>&emsp; · Implementar al menos dos proyecciones (isométrica y ortográfica) para visualizar el mapa en 3D.",
      colores: "Colores:<br>&emsp; · Asignar colores a las líneas según la altura de los puntos para mejorar la legibilidad visual.",
      controles: "Controles de usuario:<br>&emsp; · Permitir la interacción del usuario, como ajustar la altura o rotar los puntos.",
      codigo: "Ver código",
      derechos: "© 2024 Tony Villegas Brea. Todos los derechos reservados.",
      volver: "Volver a la página principal",

    },

    minishell: {
      titulo_minishell: "Proyecto minishell",
      descripcion: "Versión simplificada de una shell (Bash)",
      titulo_descripcion: "Descripción",
      descripcion_42: "Minishell es un proyecto básico de shell en la escuela 42, que implementa una interfaz de línea de comandos con soporte para varias funcionalidades de shell.",
      objetivos: "Características",
      interfaz: "Comprender el funcionamiento de una shell:<br>&emsp; · Analizar cómo una shell interpreta comandos, gestiona procesos y interactúa con el sistema operativo.",
      lectura: "Implementar un intérprete de comandos:<br>&emsp; · Crear un programa que pueda leer, analizar y ejecutar comandos básicos como ls, cd, echo, etc.",
      proyecciones: "Gestionar procesos:<br>&emsp; · Aprender a crear, ejecutar y terminar procesos, así como a redirigir la entrada/salida estándar (stdin/stdout) y manejar pipes (|).",
      colores: "Familiarizarte con las llamadas al sistema:<br>&emsp; · Utilizar funciones de bajo nivel como fork, execve, wait, pipe, dup, etc. para interactuar con el kernel del sistema operativo.",
      controles: "Escribir código robusto y seguro:<br>&emsp; · Prestar atención a la gestión de errores, la prevención de fugas de memoria y la protección contra vulnerabilidades como inyecciones de comandos.",
      codigo: "Ver código",
      derechos: "© 2024 Tony Villegas Brea. Todos los derechos reservados.",
      volver: "Volver a la página principal",


    },

    cub3d: {
      titulo_cub3d: "Proyecto cub3D",
      descripcion: "Motor de raycasting para videojuegos",
      titulo_descripcion: "Descripción",
      descripcion_42: "El proyecto cub3d de la Escuela 42 es la implementación de un motor gráfico sencillo que utiliza la biblioteca gráfica miniLibX para renderizar un entorno en perspectiva 3D basado en un formato de archivo de configuración. El proyecto incluye el uso de técnicas de raycasting para simular la perspectiva en primera persona.",
      objetivos: "Objetivos",
      interfaz: "Visualización 3D:<br>&emsp; · Implementar un motor gráfico para visualizar un entorno en perspectiva 3D.",
      lectura: "Formateo de archivos de configuración:<br>&emsp; · Utilizar un archivo de configuración para definir la disposición del mapa, las texturas, los colores y otros elementos del entorno.",
      proyecciones: "Teclado:<br>&emsp; · Permitir al usuario navegar por el entorno utilizando las teclas del teclado.",
      colores: "Técnicas de Raycasting:<br>&emsp; · Aplicar técnicas de proyección de rayos para calcular la representación tridimensional de la escena.",
      controles: "Detección de paredes:<br>&emsp; · Detectar colisiones con paredes y mostrar la proyección correcta.",
      codigo: "Ver código",
      derechos: "© 2024 Tony Villegas Brea. Todos los derechos reservados.",
      volver: "Volver a la página principal",

    },

    habilidades: {
      titulo_habilidades: "Habilidades",
      descripcion_habilidades: "A continuación te muestro las tecnologías que manejo.",
      titulo_descripcion: "Habilidades",
      descripcion: "Aquí están algunas de las habilidades y tecnologías que domino:",
      lenguajes: "<strong>Lenguajes de Programación:</strong> JavaScript, Python, C",
      frameworks: "<strong>Frameworks:</strong> React, Node.js",
      bases: "<strong>Bases de Datos:</strong> MongoDB",
      herramientas: "<strong>Herramientas:</strong> Git, Visual Studio Code, Bootstrap",
      idiomas: "<strong>Idiomas:</strong> Castellano, Inglés",
      derechos: "© 2024 Tony Villegas Brea. Todos los derechos reservados.",
      volver: "Volver a la página principal",

    },

    evaluacion_empresas: {
      titulo_empresa: "Mi Empresa Ideal",
      descripcion_empresa: "Así es como imagino mi entorno de trabajo perfecto.",
      titulo_1: "Mi Empresa Ideal",
      descripcion_1: "Aquí describiré los aspectos que valoro en una empresa IT.",
      innovacion: "<strong>Innovación:</strong> Me gusta trabajar en proyectos que desafíen los límites de la tecnología.",
      ambiente: "<strong>Ambiente Colaborativo:</strong> Creo en la importancia del trabajo en equipo y la comunicación abierta.",
      oportunidades: "<strong>Oportunidades de Crecimiento:</strong> Valoro empresas que invierten en el desarrollo profesional de sus empleados.",
      impacto: "<strong>Impacto:</strong> Prefiero proyectos que tengan un impacto positivo en la sociedad y el medio ambiente.",
      derechos: "© 2024 Tony Villegas Brea. Todos los derechos reservados.",
      volver: "Volver a la página principal",


    },

    game: {
      titulo_juego: "Juego de la Serpiente",
      puntuacion: "Puntuación",
      record: "Récord",
      nuevo_record: "¡Nuevo récord!",
      save: "Guardar",

      derechos: "© 2024 Tony Villegas Brea. Todos los derechos reservados.",
      volver: "Volver a la página principal",
      

    }

  };
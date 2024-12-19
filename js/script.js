// Función para abrir la barra lateral
function openNav() {
    document.getElementById("sidebar").style.width = "250px";
}

// Función para cerrar la barra lateral
function closeNav() {
    document.getElementById("sidebar").style.width = "0";
}

// Selección del botón de la hamburguesa
const menuBtn = document.getElementById("menu-btn");

// Variable para rastrear si la barra lateral está abierta
let isSidebarOpen = false;

// Event listeners para abrir/cerrar la barra lateral
menuBtn.addEventListener("click", () => {
    if (isSidebarOpen) {
        closeNav();
        isSidebarOpen = false;
    } else {
        openNav();
        isSidebarOpen = true;
    }
});

// Detectar el desplazamiento de la ventana para efectos visuales en la hamburguesa
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    if (scrollY > 0) {
        menuBtn.classList.add("scrolled");
    } else {
        menuBtn.classList.remove("scrolled");
    }
});

// Lógica del botón "Volver arriba"
document.addEventListener("DOMContentLoaded", () => {
    const backToTopButton = document.getElementById("backToTop");

    if (backToTopButton) {
        // Mostrar u ocultar el botón según la posición del scroll
        window.addEventListener("scroll", () => {
            // Asegurarse de que el evento scroll detecte correctamente la posición
            backToTopButton.style.display = window.scrollY > 100 ? "block" : "none";
        });

        // Comportamiento suave al hacer clic en el botón
        backToTopButton.addEventListener("click", () => {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        });
    } else {
        console.warn("El botón 'Volver arriba' no está presente en el DOM.");
    }
});

// Detectar si el DOM está cargado para aplicar otras funciones
document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll(".fade-in");

    // Observador de intersección para animaciones fade-in
    const fadeInObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                    fadeInObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.2 }
    );

    fadeElements.forEach((element) => fadeInObserver.observe(element));

    // Efectos de "slide-in" en scroll
    const slideInElements = document.querySelectorAll(".slide-in");
    const scrollHandler = () => {
        slideInElements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < window.innerHeight - 50) {
                element.classList.add("show");
            }
        });
    };

    window.addEventListener("scroll", scrollHandler);
    scrollHandler();
});

//cambiar idioma

  let scriptTraduccion; // Variable global para almacenar el elemento <script>

  // Función para cambiar el idioma
  function cambiarIdioma(idioma) {
    // Eliminar el script de traducción anterior si existe
    if (scriptTraduccion) {
      document.head.removeChild(scriptTraduccion);
    }
  
    // Cargar el archivo de traducción
    scriptTraduccion = document.createElement('script');
    scriptTraduccion.src = `js/${idioma}.js`;
    scriptTraduccion.onload = function() {
      // Reemplazar los textos de la página
  
      // Verificar si el elemento existe antes de intentar acceder a él
      if (document.getElementById('inicio_boton')) {
        // boton hamburguesa
        document.getElementById('inicio_boton').textContent = traducciones.index.inicio_boton;
        document.getElementById('proyectos_boton').textContent = traducciones.index.proyectos_boton;
        document.getElementById('habilidades_boton').textContent = traducciones.index.habilidades_boton;
        document.getElementById('empresa_boton').textContent = traducciones.index.empresa_boton;
        document.getElementById('juego_boton').textContent = traducciones.index.juego_boton;

        
      }
  
      // index.hmtl
      if (document.getElementById('titulo')) {
        document.getElementById('titulo').textContent = traducciones.index.titulo; 
        document.getElementById('descripcion').textContent = traducciones.index.descripcion;
        document.getElementById('sobremi_titulo').textContent = traducciones.index.sobremi_titulo;
        document.getElementById('sobremi_texto').textContent = traducciones.index.sobremi_texto;
        document.getElementById('trayectoria_titulo').textContent = traducciones.index.trayectoria_titulo;
        document.getElementById('trayectoria_year1').textContent = traducciones.index.trayectoria_year1;
        document.getElementById('trayectoria_texto1').innerHTML = traducciones.index.trayectoria_texto1;
        document.getElementById('trayectoria_texto2').innerHTML = traducciones.index.trayectoria_texto2;
        document.getElementById('trayectoria_year3').textContent = traducciones.index.trayectoria_year3;
        document.getElementById('trayectoria_texto3').innerHTML = traducciones.index.trayectoria_texto3;
        document.getElementById('resumen_titulo').textContent = traducciones.index.resumen_titulo;
        document.getElementById('resumen_texto').textContent = traducciones.index.resumen_texto;
        document.getElementById('derechos').textContent = traducciones.index.derechos;
      }
  
      // proyectos.hmtl
      if (document.getElementById('titulo_proyectos')) {
        document.getElementById('titulo_proyectos').textContent = traducciones.proyectos.titulo_proyectos;
        document.getElementById('descripcion_proyectos').textContent = traducciones.proyectos.descripcion_proyectos;
        document.getElementById('titulo_42').textContent = traducciones.proyectos.titulo_42;
        document.getElementById('proyecto_fdf').textContent = traducciones.proyectos.proyecto_fdf;
        document.getElementById('proyecto_minishell').textContent = traducciones.proyectos.proyecto_minishell;
        document.getElementById('proyecto_cub3d').textContent = traducciones.proyectos.proyecto_cub3d;
        document.getElementById('titulo_destacados').textContent = traducciones.proyectos.titulo_destacados;
        document.getElementById('descripcion_titulo_descatados').textContent = traducciones.proyectos.descripcion_titulo_descatados;
        document.getElementById('derechos').textContent = traducciones.proyectos.derechos;
        document.getElementById('volver').textContent = traducciones.proyectos.volver;
        
        
      }

      //FdF.hmtl
      if (document.getElementById('titulo_fdf')) {
        document.getElementById('titulo_fdf').textContent = traducciones.FdF.titulo_fdf;
        document.getElementById('descripcion').textContent = traducciones.FdF.descripcion;
        document.getElementById('titulo_descripcion').textContent = traducciones.FdF.titulo_descripcion;
        document.getElementById('descripcion_42').textContent = traducciones.FdF.descripcion_42;
        document.getElementById('objetivos').textContent = traducciones.FdF.objetivos;
        document.getElementById('interfaz').innerHTML = traducciones.FdF.interfaz;
        document.getElementById('lectura').innerHTML = traducciones.FdF.lectura;
        document.getElementById('proyecciones').innerHTML = traducciones.FdF.proyecciones;
        document.getElementById('colores').innerHTML = traducciones.FdF.colores;
        document.getElementById('controles').innerHTML = traducciones.FdF.controles;
        document.getElementById('codigo').textContent = traducciones.FdF.codigo;
        document.getElementById('derechos').textContent = traducciones.FdF.derechos;
        document.getElementById('volver').textContent = traducciones.FdF.volver;
        
      }

      //minishell.html
      if (document.getElementById('titulo_minishell')) {
        document.getElementById('titulo_minishell').textContent = traducciones.minishell.titulo_minishell;
        document.getElementById('descripcion').textContent = traducciones.minishell.descripcion;
        document.getElementById('titulo_descripcion').textContent = traducciones.minishell.titulo_descripcion;
        document.getElementById('descripcion_42').textContent = traducciones.minishell.descripcion_42;
        document.getElementById('objetivos').textContent = traducciones.minishell.objetivos;
        document.getElementById('interfaz').innerHTML = traducciones.minishell.interfaz;
        document.getElementById('lectura').innerHTML = traducciones.minishell.lectura;
        document.getElementById('proyecciones').innerHTML = traducciones.minishell.proyecciones;
        document.getElementById('colores').innerHTML = traducciones.minishell.colores;
        document.getElementById('controles').innerHTML = traducciones.minishell.controles;
        document.getElementById('codigo').textContent = traducciones.minishell.codigo;
        document.getElementById('derechos').textContent = traducciones.minishell.derechos;
        document.getElementById('volver').textContent = traducciones.minishell.volver;
      }

      // cub3d.html
      if (document.getElementById('titulo_cub3d')) {
        document.getElementById('titulo_cub3d').textContent = traducciones.cub3d.titulo_cub3d;
        document.getElementById('descripcion').textContent = traducciones.cub3d.descripcion;
        document.getElementById('titulo_descripcion').textContent = traducciones.cub3d.titulo_descripcion;
        document.getElementById('descripcion_42').textContent = traducciones.cub3d.descripcion_42;
        document.getElementById('objetivos').textContent = traducciones.cub3d.objetivos;
        document.getElementById('interfaz').innerHTML = traducciones.cub3d.interfaz;
        document.getElementById('lectura').innerHTML = traducciones.cub3d.lectura;
        document.getElementById('proyecciones').innerHTML = traducciones.cub3d.proyecciones;
        document.getElementById('colores').innerHTML = traducciones.cub3d.colores;
        document.getElementById('controles').innerHTML = traducciones.cub3d.controles;
        document.getElementById('codigo').textContent = traducciones.cub3d.codigo;
        document.getElementById('derechos').textContent = traducciones.cub3d.derechos;
        document.getElementById('volver').textContent = traducciones.cub3d.volver;
      }


      // habilidades.html
      if (document.getElementById('titulo_habilidades')) {
        document.getElementById('titulo_habilidades').textContent = traducciones.habilidades.titulo_habilidades;
        document.getElementById('descripcion_habilidades').textContent = traducciones.habilidades.descripcion_habilidades;
        document.getElementById('titulo_descripcion').textContent = traducciones.habilidades.titulo_descripcion;
        document.getElementById('descripcion').textContent = traducciones.habilidades.descripcion;
        document.getElementById('lenguajes').innerHTML = traducciones.habilidades.lenguajes;
        document.getElementById('frameworks').innerHTML = traducciones.habilidades.frameworks;
        document.getElementById('bases').innerHTML = traducciones.habilidades.bases;
        document.getElementById('herramientas').innerHTML = traducciones.habilidades.herramientas;
        document.getElementById('idiomas').innerHTML = traducciones.habilidades.idiomas;
        document.getElementById('derechos').textContent = traducciones.habilidades.derechos;
        document.getElementById('volver').textContent = traducciones.habilidades.volver;
        
      }

      // evaluacion_empresas
      if (document.getElementById('titulo_empresa')) {
        document.getElementById('titulo_empresa').textContent = traducciones.evaluacion_empresas.titulo_empresa;
        document.getElementById('descripcion_empresa').textContent = traducciones.evaluacion_empresas.descripcion_empresa;
        document.getElementById('titulo_1').textContent = traducciones.evaluacion_empresas.titulo_1;
        document.getElementById('descripcion_1').textContent = traducciones.evaluacion_empresas.descripcion_1;
        document.getElementById('innovacion').innerHTML = traducciones.evaluacion_empresas.innovacion;
        document.getElementById('ambiente').innerHTML = traducciones.evaluacion_empresas.ambiente;
        document.getElementById('oportunidades').innerHTML = traducciones.evaluacion_empresas.oportunidades;
        document.getElementById('impacto').innerHTML = traducciones.evaluacion_empresas.impacto;
        document.getElementById('derechos').textContent = traducciones.evaluacion_empresas.derechos;
        document.getElementById('volver').textContent = traducciones.evaluacion_empresas.volver;


      }

      //game.html
      if (document.getElementById('titulo_juego')) {
        document.getElementById('titulo_juego').textContent = traducciones.game.titulo_juego;
        document.getElementById('puntuacion').textContent = traducciones.game.puntuacion;
        document.getElementById('record').textContent = traducciones.game.record;
        document.getElementById('nuevo_record').textContent = traducciones.game.nuevo_record;
        document.getElementById('save').textContent = traducciones.game.save;

        document.getElementById('derechos').textContent = traducciones.game.derechos;
        document.getElementById('volver').textContent = traducciones.game.volver;

      }
    };
  
    document.head.appendChild(scriptTraduccion);
  
    // Guardar la preferencia de idioma en localStorage
    localStorage.setItem('idioma', idioma);
  }

  function aplicarIdiomaGuardado() {
    const idiomaGuardado = localStorage.getItem('idioma');
    if (idiomaGuardado) {
        cambiarIdioma(idiomaGuardado); // Cambia automáticamente al idioma guardado
    } else {
        cambiarIdioma('ES'); // Idioma por defecto (español)
    }
}

// Llamar a la función al cargar la página
document.addEventListener("DOMContentLoaded", aplicarIdiomaGuardado);


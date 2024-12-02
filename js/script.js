/*document.addEventListener("DOMContentLoaded", () => {
    // Funciones de la barra lateral
    function openNav() {
        document.getElementById("sidebar").style.width = "250px";
        document.getElementById("contenido").classList.add("sidebar-open");
        document.getElementById("header").style.width = "calc(100% - 250px - 20px)";
    }

    function closeNav() {
        document.getElementById("sidebar").style.width = "0";
        document.getElementById("contenido").classList.remove("sidebar-open");
    }

    document.getElementById("menu-btn").onclick = openNav;
    document.querySelector(".closebtn").onclick = closeNav;

    // Funciones generales como fade-in, slide-in, etc.
    const fadeElements = document.querySelectorAll('.fade-in');
    const fadeInObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                fadeInObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    fadeElements.forEach(element => fadeInObserver.observe(element));

    const slideInElements = document.querySelectorAll('.slide-in');
    const scrollHandler = () => {
        slideInElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            if (elementTop < window.innerHeight - 50) {
                element.classList.add('show');
            }
        });
    };

    window.addEventListener('scroll', scrollHandler);
    scrollHandler();

    // Botón "Volver arriba"
    const backToTopButton = document.getElementById("backToTop");
    if (backToTopButton) {
        window.addEventListener("scroll", () => {
            backToTopButton.style.display = window.scrollY > 100 ? "block" : "none";
        });
        backToTopButton.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });
    }

    // Cambio de secciones activas en la barra lateral
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("#sidebar a");

    window.addEventListener("scroll", () => {
        let currentSection = "";
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 60) {
                currentSection = section.getAttribute("id");
            }
        });
        navLinks.forEach(link => {
            link.classList.toggle("active", link.getAttribute("href").includes(currentSection));
        });
    });

    // Barra de navegación fija y hamburguesa
    const nav = document.querySelector("nav");
    const menuIcon = document.querySelector(".menu-icon");
    const navLinksContainer = document.querySelector(".nav-links");

    // Hacer la barra fija al hacer scroll
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    });

    // Toggle del menú hamburguesa
    if (menuIcon && navLinksContainer) {
        menuIcon.addEventListener("click", () => {
            navLinksContainer.classList.toggle("active");
        });
    }

    // Cerrar el menú al hacer clic en un enlace
    if (navLinksContainer) {
        navLinksContainer.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
                navLinksContainer.classList.remove("active");
            });
        });
    }

    // Cargar las funciones específicas de cada página
    if (typeof loadProjects === "function") loadProjects();
    if (typeof loadGame === "function") loadGame();
});

// Función para hacer scroll al principio
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'  // Añadir un efecto suave al hacer scroll
    });
}

// Asignamos la función de desplazamiento al hacer click en el botón
if (backToTopButton) {
    backToTopButton.addEventListener('click', scrollToTop);
}

document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");

    // Asegúrate de que el botón esté visible en todo momento
    window.addEventListener("scroll", () => {
        menuBtn.style.top = `${window.scrollY + 10}px`; // Mantén su posición relativa al scroll
    });

    // Resto de tu lógica para abrir y cerrar la barra lateral
    menuBtn.addEventListener("click", () => {
        const sidebar = document.getElementById("sidebar");
        sidebar.style.width = sidebar.style.width === "250px" ? "0" : "250px";
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");

    if (menuBtn) {
        // Cambiar el color dinámicamente según la posición de scroll
        const handleScroll = () => {
            if (window.scrollY === 0) {
                menuBtn.classList.add("top");
                menuBtn.classList.remove("scrolled");
            } else {
                menuBtn.classList.add("scrolled");
                menuBtn.classList.remove("top");
            }
        };

        // Detectar el scroll inicial
        handleScroll();

        // Escuchar el evento de scroll
        window.addEventListener("scroll", handleScroll);
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll(".section-content");

    const handleScroll = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                section.classList.add("visible");
            }
        });
    };

    // Activar al cargar y al desplazarse
    handleScroll();
    window.addEventListener("scroll", handleScroll);
});
*/

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

// Detectar el desplazamiento de la ventana
window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;

    if (scrollY > 0) {
        menuBtn.classList.add("scrolled");
    } else {
        menuBtn.classList.remove("scrolled");
    }
});

// Prevenir que el botón cambie al volver al tope
menuBtn.addEventListener("transitionend", () => {
    if (window.scrollY === 0 && menuBtn.classList.contains("scrolled")) {
        menuBtn.classList.remove("scrolled");
    }
});


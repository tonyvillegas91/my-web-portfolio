const reposContainer = document.getElementById('repositorios');
const username = 'tonyvillegas91'; // Reemplaza con tu usuario de GitHub

// Lista de nombres de repositorios específicos que deseas mostrar
const specificRepos = ['42-cursus', 'rick-and-morty-human-identifier', 'Prueba-Tecnica-React-Native', 'Proyectos_en_C'];

fetch(`https://api.github.com/users/${username}/repos`)
    .then(response => response.json())
    .then(repos => {
        // Filtramos los repositorios para mostrar solo los especificados
        const filteredRepos = repos.filter(repo => specificRepos.includes(repo.name));

        filteredRepos.forEach(repo => {
            const repoElement = document.createElement('div');
            repoElement.classList.add('repo');

            repoElement.innerHTML = `
                <h3><a href="${repo.html_url}" target="_blank">${repo.name}</a></h3>
                <p>${repo.description || "Sin descripción"}</p>
                <p>⭐ ${repo.stargazers_count} | Forks: ${repo.forks_count}</p>
            `;
            reposContainer.appendChild(repoElement);
        });
    })
    .catch(error => {
        reposContainer.innerHTML = '<p>Error al cargar los proyectos de GitHub</p>';
        console.error('Error:', error);
    });
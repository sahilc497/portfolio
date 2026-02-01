document.addEventListener('DOMContentLoaded', () => {
    // Initial Projects Data
    const defaultProjects = [
        {
            title: "FlowGuard AI",
            description: "AI-powered real-time flow monitoring and anomaly detection system using machine learning for intelligent pattern recognition and reliability.",
            link: "https://github.com/sahilc497",
            demo: "#"
        },
        {
            title: "StudentNest",
            description: "Full-stack PG/Hostel finder web application with role-based authentication, PostgreSQL backend, and seamless booking system.",
            link: "https://github.com/sahilc497",
            demo: "#"
        },
        {
            title: "Movie Recommendation System",
            description: "Content-based recommendation engine using collaborative filtering and NLP techniques to suggest personalized movie recommendations.",
            link: "https://github.com/sahilc497",
            demo: "#"
        },
        {
            title: "Spam Classifier",
            description: "Machine learning model for email spam detection using NLP and ensemble methods with high accuracy and precision metrics.",
            link: "https://github.com/sahilc497",
            demo: "#"
        }
    ];

    // Load projects from localStorage or use defaults
    let projects = JSON.parse(localStorage.getItem('sahil_portfolio_projects')) || defaultProjects;

    const projectsGrid = document.getElementById('projects-grid');
    const modal = document.getElementById('project-modal');
    const addBtn = document.getElementById('add-project-btn');
    const closeBtn = document.querySelector('.close-modal');
    const form = document.getElementById('add-project-form');

    // Render Projects
    function renderProjects() {
        projectsGrid.innerHTML = '';
        projects.forEach((project, index) => {
            const card = document.createElement('div');
            card.className = 'project-card';

            card.innerHTML = `
                <div class="project-info">
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                </div>
                <div class="project-actions">
                    <a href="${project.link}" target="_blank" class="project-link">
                        <i class="bi bi-github"></i> GitHub
                    </a>
                    ${project.demo ? `<a href="${project.demo}" target="_blank" class="project-link demo-link">
                        <i class="bi bi-play-circle"></i> Try Demo
                    </a>` : ''}
                </div>
            `;
            projectsGrid.appendChild(card);
        });
    }

    // Initial render
    renderProjects();

    // Modal Logic
    addBtn.onclick = () => modal.style.display = 'block';
    closeBtn.onclick = () => modal.style.display = 'none';
    window.onclick = (e) => {
        if (e.target == modal) modal.style.display = 'none';
    }

    // Form Submission
    form.onsubmit = (e) => {
        e.preventDefault();

        const newProject = {
            title: document.getElementById('project-title').value,
            description: document.getElementById('project-description').value,
            link: document.getElementById('project-link').value,
            demo: document.getElementById('project-demo').value || null
        };

        projects.push(newProject);
        localStorage.setItem('sahil_portfolio_projects', JSON.stringify(projects));

        renderProjects();
        modal.style.display = 'none';
        form.reset();
    };

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});

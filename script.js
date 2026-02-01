document.addEventListener('DOMContentLoaded', () => {
    // Initial Projects Data
    const defaultProjects = [
        {
            title: "FlowGuard AI",
            description: "High-precision anomaly detection system for complex data flows. Focuses on ML-based pattern recognition and real-time reliability.",
            link: "https://github.com/sahilc497"
        },
        {
            title: "StudentNest",
            description: "A full-stack hostel/PG finder with role-based authentication and a robust PostgreSQL backend for seamless student housing.",
            link: "https://github.com/sahilc497"
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
                <a href="${project.link}" target="_blank" class="project-link">View Project</a>
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
            link: document.getElementById('project-link').value
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

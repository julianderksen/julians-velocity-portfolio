
// Navigation functionality
document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Only handle internal links (not CV link)
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetSection = document.getElementById(targetId);
                
                if (targetSection) {
                    const offsetTop = targetSection.offsetTop - 80; // Account for fixed nav
                    window.scrollTo({
                        top: offsetTop,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Update active navigation link based on scroll position
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('.section');
        const scrollPos = window.scrollY + 100;

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                navLinks.forEach(link => link.classList.remove('active'));
                if (correspondingLink) {
                    correspondingLink.classList.add('active');
                }
            }
        });
    });

    // Load portfolio projects
    loadPortfolio();

    // Handle contact form
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', handleContactForm);
});

// Portfolio functionality
async function loadPortfolio() {
    const portfolioGrid = document.getElementById('portfolio-grid');
    
    try {
        // Try to fetch GitHub repositories
        const response = await fetch('https://api.github.com/users/juliandereksen/repos');
        
        if (response.ok) {
            const repos = await response.json();
            const filteredRepos = repos
                .filter(repo => !repo.fork && repo.description)
                .slice(0, 6);
            
            displayProjects(filteredRepos, portfolioGrid);
        } else {
            throw new Error('GitHub API not available');
        }
    } catch (error) {
        // Fallback to mock projects if GitHub API fails
        console.log('Using fallback projects');
        displayFallbackProjects(portfolioGrid);
    }
}

function displayProjects(repos, container) {
    container.innerHTML = '';
    
    repos.forEach(repo => {
        const projectCard = createProjectCard({
            name: repo.name,
            description: repo.description,
            html_url: repo.html_url,
            homepage: repo.homepage,
            language: repo.language,
            topics: repo.topics || []
        });
        
        container.appendChild(projectCard);
    });
}

function displayFallbackProjects(container) {
    const fallbackProjects = [
        {
            name: "E-commerce Platform",
            description: "Een moderne e-commerce oplossing gebouwd met React en Node.js. Inclusief betalingsintegratie en admin dashboard.",
            html_url: "#",
            homepage: "#",
            language: "TypeScript",
            topics: ["react", "nodejs", "ecommerce", "stripe"]
        },
        {
            name: "Task Management App",
            description: "Een intuïtieve task management applicatie met real-time updates en team collaboration features.",
            html_url: "#",
            homepage: "#",
            language: "JavaScript",
            topics: ["react", "firebase", "realtime", "collaboration"]
        },
        {
            name: "Portfolio Website",
            description: "Een responsieve portfolio website gebouwd met moderne web technologieën en geoptimaliseerd voor performance.",
            html_url: "#",
            homepage: "#",
            language: "HTML",
            topics: ["html", "css", "javascript", "responsive"]
        },
        {
            name: "Weather Dashboard",
            description: "Een elegante weather dashboard met gedetailleerde voorspellingen en interactieve kaarten.",
            html_url: "#",
            homepage: "#",
            language: "Vue",
            topics: ["vue", "api", "weather", "charts"]
        }
    ];
    
    container.innerHTML = '';
    
    fallbackProjects.forEach(project => {
        const projectCard = createProjectCard(project);
        container.appendChild(projectCard);
    });
}

function createProjectCard(project) {
    const card = document.createElement('div');
    card.className = 'project-card fade-in-up';
    
    const languages = {
        'JavaScript': '#f7df1e',
        'TypeScript': '#3178c6',
        'Python': '#3776ab',
        'HTML': '#e34f26',
        'CSS': '#1572b6',
        'React': '#61dafb',
        'Vue': '#4fc08d',
        'Node.js': '#339933'
    };
    
    const bgColor = languages[project.language] || '#667eea';
    
    card.innerHTML = `
        <div class="project-image" style="background: linear-gradient(135deg, ${bgColor}40, ${bgColor}80)">
            ${project.name}
        </div>
        <div class="project-content">
            <h3 class="project-title">${project.name}</h3>
            <p class="project-description">${project.description}</p>
            <div class="project-tech">
                ${project.language ? `<span class="tech-tag">${project.language}</span>` : ''}
                ${project.topics.slice(0, 3).map(topic => `<span class="tech-tag">${topic}</span>`).join('')}
            </div>
            <div class="project-links">
                <a href="${project.html_url}" class="project-link" target="_blank" rel="noopener noreferrer">Code</a>
                ${project.homepage && project.homepage !== project.html_url ? 
                    `<a href="${project.homepage}" class="project-link" target="_blank" rel="noopener noreferrer">Live Demo</a>` : 
                    ''
                }
            </div>
        </div>
    `;
    
    return card;
}

// Contact form functionality
function handleContactForm(e) {
    e.preventDefault();
    
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    // Here you would typically send the form data to a server
    // For now, we'll just show a success message
    alert(`Bedankt ${name}! Je bericht is verzonden. Ik neem zo snel mogelijk contact met je op.`);
    
    // Reset the form
    e.target.reset();
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in-up');
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', function() {
    const elementsToAnimate = document.querySelectorAll('.project-card, .skill-item, .contact-item');
    elementsToAnimate.forEach(el => observer.observe(el));
});

// Smooth reveal animations on scroll
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.section');
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 150;
        
        if (elementTop < window.innerHeight - elementVisible) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

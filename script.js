 // Theme toggle functionality
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = themeToggle.querySelector('i');
    const body = document.body;

    // Check for saved theme preference or default to dark
    const savedTheme = localStorage.getItem('theme') || 'dark';
    body.setAttribute('data-theme', savedTheme);
    updateThemeIcon(savedTheme);

    themeToggle.addEventListener('click', () => {
      const currentTheme = body.getAttribute('data-theme');
      const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
      
      body.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });

    function updateThemeIcon(theme) {
      if (theme === 'dark') {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
      } else {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
      }
    }

    // Animate skill bars when visible
    // Animate skill bars when visible
    function animateSkills() {
      const fills = document.querySelectorAll('.skill-fill');
      fills.forEach(f => {
        const target = f.getAttribute('data-width') || '0%';
        const rect = f.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
          f.style.width = target;
        }
      });
    }

    window.addEventListener('scroll', animateSkills);
    window.addEventListener('load', animateSkills);
    window.addEventListener('resize', animateSkills);

    // Contact form submission
    document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const form = e.target;
  const formData = {
    name: form.name.value,
    email: form.email.value,
    subject: form.subject.value,
    message: form.message.value
  };

  fetch("https://script.google.com/macros/s/AKfycbz9V4vVxrc-w30pGNeRnc8FKQOZYqRSZaseeZB3QOUcZ3LsQOhKMQtvF2Jx3CPYA2arTw/exec", {
    method: "POST",
    mode: "no-cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData)
  }).then(() => {
    form.reset();
    document.getElementById("successMessage").style.display = "block";
    setTimeout(() => document.getElementById("successMessage").style.display = "none", 4000);
  });
});

    // Call initSkills when the skills section is in view
    const skillsSection = document.querySelector('.skills');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          initSkills();
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });

    if (skillsSection) {
      observer.observe(skillsSection);
    }


    //nav 

  document.querySelectorAll('#offcanvasNavbar .nav-link').forEach(link => {
    link.addEventListener('click', () => {
      const offcanvasElement = document.getElementById('offcanvasNavbar');
      const offcanvasInstance = bootstrap.Offcanvas.getInstance(offcanvasElement);

      if (offcanvasInstance) {
        offcanvasInstance.hide();
      }
    });
  });
  
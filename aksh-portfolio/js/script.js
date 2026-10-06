document.addEventListener("DOMContentLoaded", () => {
  const data = PORTFOLIO_DATA;
  const config = PORTFOLIO_CONFIG;

  // ---------- Basic content ----------
  document.getElementById("heroName").textContent = data.name;
  document.getElementById("heroRole").textContent = data.role;
  document.getElementById("heroDescription").textContent = data.heroDescription;
  document.getElementById("aboutText").textContent = data.about;
  document.getElementById("locationText").textContent = config.personal.location;
  document.getElementById("emailText").textContent = config.personal.email;
  document.getElementById("phoneText").textContent = config.personal.phone;
  document.getElementById("currentYear").textContent = new Date().getFullYear();

  // ---------- Links ----------
  const linkMap = {
    navGithub: config.personal.github,
    navLinkedin: config.personal.linkedin,
    heroGithub: config.personal.github,
    heroLinkedin: config.personal.linkedin,
    contactGithub: config.personal.github,
    contactLinkedin: config.personal.linkedin,
    footerGithub: config.personal.github,
    footerLinkedin: config.personal.linkedin
  };

  Object.entries(linkMap).forEach(([id, url]) => {
    const element = document.getElementById(id);
    if (element) element.href = url;
  });

  const emailLinks = ["heroEmail", "contactEmail", "footerEmail"];
  emailLinks.forEach((id) => {
    const element = document.getElementById(id);
    if (element) element.href = `mailto:${config.personal.email}`;
  });

  const phoneLink = document.getElementById("contactPhone");
  phoneLink.href = `tel:${config.personal.phone.replace(/\s+/g, "")}`;

  // ---------- About ----------
  document.getElementById("whatIDo").innerHTML = data.whatIDo.map(item => `
    <div class="col-md-6">
      <div class="what-item"><i class="bi bi-check-circle-fill"></i><span>${escapeHtml(item)}</span></div>
    </div>
  `).join("");

  document.getElementById("aboutCards").innerHTML = data.aboutCards.map(card => `
    <div class="col-md-4 col-lg-12">
      <div class="about-mini">
        <i class="bi ${escapeHtml(card.icon)}"></i>
        <h3>${escapeHtml(card.title)}</h3>
        <p>${escapeHtml(card.text)}</p>
      </div>
    </div>
  `).join("");

  // ---------- Skills ----------
  document.getElementById("skillsGrid").innerHTML = data.skills.map(skill => `
    <div class="col-md-6 col-lg-3">
      <div class="skill-card">
        <div class="skill-icon"><i class="bi ${escapeHtml(skill.icon)}"></i></div>
        <h3>${escapeHtml(skill.category)}</h3>
        <div>
          ${skill.items.map(item => `<span class="skill-tag">${escapeHtml(item)}</span>`).join("")}
        </div>
      </div>
    </div>
  `).join("");

  // ---------- Projects ----------
  document.getElementById("projectsGrid").innerHTML = data.projects.map(project => `
    <div class="col-md-6">
      <article class="project-card">
        <img src="${escapeAttribute(project.image)}" class="project-image" alt="${escapeAttribute(project.title)} project preview">
        <div class="project-body">
          <h3>${escapeHtml(project.title)}</h3>
          <p>${escapeHtml(project.description)}</p>
          <div class="mb-2">
            ${project.technologies.map(tech => `<span class="tech-tag">${escapeHtml(tech)}</span>`).join("")}
          </div>
          <ul class="feature-list">
            ${project.features.map(feature => `<li><i class="bi bi-check2"></i>${escapeHtml(feature)}</li>`).join("")}
          </ul>
          <div class="project-actions d-flex gap-2">
            <a href="${escapeAttribute(project.github)}" target="_blank" rel="noopener" class="btn btn-outline-custom">
              <i class="bi bi-github me-1"></i> GitHub
            </a>
            <a href="${escapeAttribute(project.demo)}" target="_blank" rel="noopener" class="btn btn-primary-custom">
              <i class="bi bi-box-arrow-up-right me-1"></i> Live Demo
            </a>
          </div>
        </div>
      </article>
    </div>
  `).join("");

  // ---------- Experience ----------
  document.getElementById("experienceTimeline").innerHTML = data.experience.map(item => `
    <div class="timeline-item">
      <div class="timeline-dot"></div>
      <div class="timeline-content">
        <div class="year">${escapeHtml(item.year)}</div>
        <h3 class="mt-2 mb-1">${escapeHtml(item.role)}</h3>
        <div class="text-light mb-3">${escapeHtml(item.company)}</div>
        <div class="mb-3">
          ${item.technologies.map(tech => `<span class="tech-tag">${escapeHtml(tech)}</span>`).join("")}
        </div>
        <p class="mb-0">${escapeHtml(item.description)}</p>
      </div>
    </div>
  `).join("");

  // ---------- Education ----------
  document.getElementById("educationGrid").innerHTML = data.education.map(item => `
    <div class="col-md-6 col-lg-4">
      <div class="education-card">
        <i class="bi ${escapeHtml(item.icon)}"></i>
        <h3>${escapeHtml(item.title)}</h3>
        <p>${escapeHtml(item.college)}</p>
        <p>${escapeHtml(item.year)}</p>
        <small class="text-secondary">${escapeHtml(item.note)}</small>
      </div>
    </div>
  `).join("");

  // ---------- Certificates / Achievements ----------
  document.getElementById("certificatesGrid").innerHTML = data.certificates.map(item => `
    <div class="col-md-6 col-lg-4">
      <div class="certificate-card">
        <div class="certificate-icon"><i class="bi bi-patch-check"></i></div>
        <div>
          <strong>${escapeHtml(item)}</strong>
          <small>Easy to edit in js/data.js</small>
        </div>
      </div>
    </div>
  `).join("");

  // ---------- Navbar / scroll behavior ----------
  const nav = document.getElementById("mainNav");
  const scrollTopBtn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    nav.classList.toggle("scrolled", window.scrollY > 20);
    scrollTopBtn.classList.toggle("show", window.scrollY > 450);
    updateActiveNav();
  });

  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // Close mobile navbar after clicking a navigation link.
  document.querySelectorAll("#navbarContent .nav-link").forEach(link => {
    link.addEventListener("click", () => {
      const menu = document.getElementById("navbarContent");
      if (menu.classList.contains("show") && window.bootstrap) {
        bootstrap.Collapse.getOrCreateInstance(menu).hide();
      }
    });
  });

  // ---------- Contact form ----------
  setupContactForm(config);

  // ---------- Small entrance animation ----------
  document.querySelectorAll(".section-heading, .glass-card, .skill-card, .project-card, .timeline-content, .education-card, .certificate-card")
    .forEach(element => element.classList.add("fade-up"));

  function updateActiveNav() {
    const sections = document.querySelectorAll("main section[id]");
    const scrollPosition = window.scrollY + 130;
    let current = "home";

    sections.forEach(section => {
      if (scrollPosition >= section.offsetTop) {
        current = section.id;
      }
    });

    document.querySelectorAll(".nav-link").forEach(link => {
      link.classList.toggle("active", link.getAttribute("href") === `#${current}`);
    });
  }
});

function setupContactForm(config) {
  const form = document.getElementById("contactForm");
  const button = document.getElementById("sendButton");
  const buttonText = document.getElementById("sendButtonText");
  const spinner = document.getElementById("sendSpinner");
  const status = document.getElementById("formStatus");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    event.stopPropagation();

    if (!form.checkValidity()) {
      form.classList.add("was-validated");
      return;
    }

    status.className = "alert d-none mt-3 mb-0";
    button.disabled = true;
    buttonText.textContent = "Sending...";
    spinner.classList.remove("d-none");

    try {
      if (!config.emailjs.enabled) {
        // Demo mode: no credentials are configured yet.
        await new Promise(resolve => setTimeout(resolve, 700));
        showStatus(
          "EmailJS is not configured yet. Add your Service ID, Template ID and Public Key in js/config.js.",
          "warning"
        );
        form.reset();
        form.classList.remove("was-validated");
        return;
      }

      if (!window.emailjs) {
        throw new Error("EmailJS SDK could not be loaded.");
      }

      emailjs.init({
        publicKey: config.emailjs.publicKey
      });

      await emailjs.sendForm(
        config.emailjs.serviceId,
        config.emailjs.templateId,
        form
      );

      showStatus("Message sent successfully! I'll get back to you soon.", "success");
      form.reset();
      form.classList.remove("was-validated");
    } catch (error) {
      console.error("EmailJS error:", error);
      showStatus("Something went wrong. Please try again.", "danger");
    } finally {
      button.disabled = false;
      buttonText.textContent = "Send Message";
      spinner.classList.add("d-none");
    }
  });

  function showStatus(message, type) {
    status.className = `alert alert-${type} mt-3 mb-0`;
    status.textContent = message;
  }
}

// Keep generated HTML safe when content is edited in data.js.
function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function escapeAttribute(value) {
  return escapeHtml(value);
}

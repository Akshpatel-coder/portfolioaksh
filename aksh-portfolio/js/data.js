/*
  All editable portfolio content is kept here.
  Change this file to update most of the website without touching HTML.
*/

const PORTFOLIO_DATA = {
  name: "Aksh Gadhethariya",
  role: "Computer Engineering Student & Web Developer",
  heroDescription:
    "I build modern, responsive and user-friendly web applications using JavaScript, Bootstrap and modern web technologies.",

  about:
    "I am a Computer Engineering student with a strong interest in web development and modern software technologies. I enjoy creating practical projects, solving problems and continuously learning new technologies.",

  whatIDo: [
    "Build responsive websites",
    "Develop modern web applications",
    "Create user-friendly interfaces",
    "Learn modern technologies",
    "Work on real-world projects"
  ],

  aboutCards: [
    { icon: "bi-mortarboard", title: "Education", text: "Computer Engineering student" },
    { icon: "bi-code-slash", title: "Web Development", text: "Frontend and practical web projects" },
    { icon: "bi-lightbulb", title: "Problem Solving", text: "Learning by building and solving" }
  ],

  skills: [
    {
      category: "Frontend",
      icon: "bi-window-stack",
      items: ["HTML", "CSS", "JavaScript", "Bootstrap", "Responsive Design"]
    },
    {
      category: "Backend / Database",
      icon: "bi-database",
      items: ["Node.js", "Express.js", "MongoDB", "MySQL"]
    },
    {
      category: "Programming",
      icon: "bi-terminal",
      items: ["C", "C++", "Java", "Python"]
    },
    {
      category: "Tools",
      icon: "bi-tools",
      items: ["Git", "GitHub", "VS Code", "Postman"]
    }
  ],

  projects: [
    {
      image: "assets/project1.svg",
      title: "Furniro – Furniture E-commerce Website",
      description:
        "A modern furniture e-commerce website where users can browse products, view product details, manage cart and wishlist, and use authentication features.",
      technologies: ["JavaScript", "HTML", "CSS", "Bootstrap"],
      features: ["Product listing", "Product details", "Shopping cart", "Wishlist", "Authentication", "Responsive design"],
      github: "https://github.com/your-github-username",
      demo: "#"
    },
    {
      image: "assets/project2.svg",
      title: "AI Resume Builder & Analyzer",
      description:
        "An AI-powered platform concept for creating professional resumes, analyzing resumes and matching resumes with job descriptions.",
      technologies: ["JavaScript", "HTML", "CSS", "AI API"],
      features: ["Resume builder", "Resume templates", "Resume analysis", "Job description analysis", "Resume matching", "AI suggestions"],
      github: "https://github.com/your-github-username",
      demo: "#"
    },
    {
      image: "assets/project3.svg",
      title: "Agriculture Website",
      description:
        "A farmer-focused agriculture website designed to provide agricultural products and useful information in one place.",
      technologies: ["HTML", "CSS", "JavaScript"],
      features: ["Agricultural products", "Product information", "Farmer-friendly interface", "Responsive design"],
      github: "https://github.com/your-github-username",
      demo: "#"
    },
    {
      image: "assets/project4.svg",
      title: "OTP Login System",
      description:
        "A secure login interface concept with OTP-based verification and a clean user experience.",
      technologies: ["HTML", "CSS", "JavaScript", "Email/SMS service"],
      features: ["Login form", "OTP verification", "Validation", "Responsive design"],
      github: "https://github.com/your-github-username",
      demo: "#"
    }
  ],

  experience: [
    {
      year: "2026",
      role: "Web Development Intern",
      company: "Ananta Technolab",
      technologies: ["React.js", "Next.js", "Tailwind CSS"],
      description:
        "Worked on practical web development tasks and real-world projects. Improved frontend development skills and learned modern development workflows."
    }
  ],

  education: [
    {
      icon: "bi-mortarboard",
      title: "Computer Engineering",
      college: "[Add College Name]",
      year: "[Add Year]",
      note: "Add your degree details here."
    },
    {
      icon: "bi-book",
      title: "Diploma",
      college: "[Add College / Institute Name]",
      year: "[Add Year]",
      note: "Add your diploma details here."
    },
    {
      icon: "bi-award",
      title: "10th Standard",
      college: "[Add School Name]",
      year: "[Add Year]",
      note: "Add your 10th standard details here."
    }
  ],

  certificates: [
    "Web Development Internship",
    "College Projects",
    "Hackathon Participation",
    "Technical Certifications",
    "Academic Achievements"
  ]
};

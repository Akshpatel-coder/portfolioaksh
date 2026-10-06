/*
  ============================================================
  PORTFOLIO CONFIGURATION
  ============================================================
  Replace ONLY the placeholder values below.

  EmailJS:
  1. Create an account at https://www.emailjs.com/
  2. Create an Email Service.
  3. Create an Email Template.
  4. Copy the Service ID, Template ID and Public Key here.

  IMPORTANT:
  EmailJS PUBLIC KEY is safe to use in frontend code.
  Never put a private/server API secret in this file.
*/

const PORTFOLIO_CONFIG = {
  personal: {
    email: "your.email@example.com",
    phone: "+91 XXXXXXXXXX",
    github: "https://github.com/your-github-username",
    linkedin: "https://www.linkedin.com/in/your-linkedin-username",
    location: "Ahmedabad, Gujarat, India"
  },

  emailjs: {
    enabled: false,
    serviceId: "EMAILJS_SERVICE_ID",
    templateId: "EMAILJS_TEMPLATE_ID",
    publicKey: "EMAILJS_PUBLIC_KEY"
  }
};

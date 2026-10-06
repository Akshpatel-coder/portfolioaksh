# Aksh Gadhethariya Portfolio

A responsive personal portfolio built with:

- HTML5
- Bootstrap 5
- Custom CSS
- Vanilla JavaScript
- Bootstrap Icons
- Optional EmailJS contact form

No React, Node.js backend, jQuery, PHP, Firebase or Tailwind is required.

## 1. Run the portfolio

Because this is a static website, you can open `index.html` directly in a browser.

For the best development experience, use VS Code with the Live Server extension:

1. Open this folder in VS Code.
2. Install the "Live Server" extension.
3. Right-click `index.html`.
4. Select "Open with Live Server".

You can also deploy the folder to GitHub Pages, Netlify, Vercel static hosting, etc.

## 2. Update your personal details

Open:

`js/config.js`

Change:

```js
email: "your.email@example.com",
phone: "+91 XXXXXXXXXX",
github: "https://github.com/your-github-username",
linkedin: "https://www.linkedin.com/in/your-linkedin-username",
location: "Ahmedabad, Gujarat, India"
```

## 3. Update portfolio content

Open:

`js/data.js`

This contains your name, role, about text, skills, projects, experience, education and achievements.

## 4. Add your profile photo

Replace:

`assets/profile.svg`

with your photo, for example:

`assets/profile.jpg`

Then change the image path in `index.html` from:

`assets/profile.svg`

to:

`assets/profile.jpg`

## 5. Add project images

The included SVG files are placeholders:

- assets/project1.svg
- assets/project2.svg
- assets/project3.svg
- assets/project4.svg

Replace them with your real screenshots/images and update the paths in `js/data.js`.

## 6. Add your resume

Put your actual resume here:

`resume.pdf`

The Resume buttons already point to `resume.pdf`.

## 7. Configure EmailJS

The contact form is already coded with `emailjs.sendForm()`.

### Step A - Create EmailJS account

Go to:

https://www.emailjs.com/

Create an account.

### Step B - Create an Email Service

Create a service connected to your email provider and copy its Service ID.

### Step C - Create an Email Template

Use these variables in your EmailJS template:

```text
{{name}}
{{email}}
{{subject}}
{{message}}
```

Example template:

Subject:
New Portfolio Contact Message

Body:

Name: {{name}}
Email: {{email}}
Subject: {{subject}}

Message:
{{message}}

Reply Email: {{email}}

### Step D - Put the values in js/config.js

Change:

```js
emailjs: {
  enabled: true,
  serviceId: "YOUR_SERVICE_ID",
  templateId: "YOUR_TEMPLATE_ID",
  publicKey: "YOUR_PUBLIC_KEY"
}
```

Only use the EmailJS Public Key in frontend code. Do not put private/server secrets in the website.

## 8. Change project links

Open:

`js/data.js`

For every project, replace:

```js
github: "https://github.com/your-github-username",
demo: "#"
```

with the actual GitHub repository and live demo URL.

## 9. Deploy

### GitHub Pages

1. Create a GitHub repository.
2. Upload all portfolio files.
3. Go to repository Settings.
4. Open Pages.
5. Select the branch containing the portfolio.
6. Save.
7. GitHub will provide the public website URL.

### Other hosting

You can upload the complete folder to any static hosting provider.

## Important

Bootstrap and Bootstrap Icons are loaded from CDN links in `index.html`, so an internet connection is needed for those CDN resources when viewing the site.

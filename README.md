# Portfolio

This is my personal portfolio, it has all my experience, frontend related projects, and skills. The website design is inspired by other developers portfolios, and frontend mentor portfolio challenge.

## Table of contents

- [Overview](#overview)
  - [Requirements](#requirements)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### Requirements

- Header have my logo, and social navigation. &check;
- Description about me. &check;
- My photo next to the description.
- Click button to move to contact me section &check;
- All my experience under the description section.
- All my skills under my experience section. &check;
- Portfolio section that have all my projects. &check;
- Each project have a screenshot from the website. &check;
- On mobile show the mobile version, and in desktop show desktop version. &check;
- Each project have the project name, used technologies, a button to navigate to the live site, and a button to navigate to the GitHub repository. &check;
- Contact me section that have a small box to send me a message in email. &check;
- Footer have my logo, social navigation, and rights text. &check;

### Screenshot

![Desktop version](./screenshots/desktop.png)
![Mobile version](./screenshots/mobile.png)

### Links

- Live Site URL: [Mateeb Alharbi](https://mateeb.surge.sh/)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- CSS modules
- Mobile-first workflow
- User-Centered Design
- [Figma](https://www.figma.com/) - Collaborative design tool.
- [React](https://react.dev/) - JS library.
- [Sass](https://sass-lang.com/) - preprocessor scripting language for css.
- [Material Symbols](https://fonts.google.com/) - Fonts.
- [Icon Finder](https://www.iconfinder.com/) - Icons.
- [Validator.js](https://www.npmjs.com/package/validator) - A library of string validators and sanitizers.
- [react-tsparticles](https://www.npmjs.com/package/react-tsparticles) - A library for particles in the background.
- [EmailJS](https://www.emailjs.com/) - Email service.
- [Vite](https://vitejs.dev/) - local development server.
- [Surge](https://surge.sh/) - Static web publishing for Front-End Developers.

### What I learned

Design:<br/>

- How to use Figma correctly.
- Design for all screen sizes.
- Design hover effects.
- Design validation status.
- Group design components.
- Template for project colors, font sizes, and font weights.

Code:<br/>
In this project I needed a email service, so I used EmailJS. It was so easy to config and use with any project, their dashboard is easy and clean. It gives you 200 email per month for free users.

Here is the config in the code:

First you need to import the library:

```js
import emailjs from "@emailjs/browser";
```

Then you add a function (sendForm) and fill it with your service essential codes, then you call it in any action you want:

```js
const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm("YOUR_CODE", "YOUR_TEMPLATECODE", form.current, "YOUR_CODE")
    .then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
};
```

### Useful resources

- [Udemy course by Maximilian Schwarzmüller](https://www.udemy.com/course/react-the-complete-guide-incl-redux/) - This helped me literally in evrey aspect in this challenge. All my react knowledge is from this course.
- [Stackoverflow](https://stackoverflow.com/) - Any question you have in your mind the answer will probably be here.
- [Kevin Powell](https://www.youtube.com/@KevinPowell) - This guy is a css master, he have videos for a lot of css problems and how to solve it the right way.

## Author

- LinkedIn - [Mateeb Alharbi](https://www.linkedin.com/in/mateeb-alharbi/)
